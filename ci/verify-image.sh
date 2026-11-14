#!/usr/bin/env bash
# Garanties de l'image du site, jugées sur les réponses HTTP du conteneur : en-têtes de sécurité,
# caches, compression, 404 des fichiers absents, utilisateur non root.
# Usage : ci/verify-image.sh <image>
set -euo pipefail
image=${1:?image attendue}
name="site-industrie-verify-$$"
tmp=$(mktemp -d)

cleanup() {
  docker rm -f "$name" >/dev/null 2>&1 || true
  rm -rf "$tmp"
}
trap cleanup EXIT
fail() { echo "ÉCHEC : $1" >&2; exit 1; }

docker run -d --name "$name" -p 127.0.0.1::8080 "$image" >/dev/null
base="http://127.0.0.1:$(docker port "$name" 8080/tcp | head -1 | sed 's/.*://')"
for _ in $(seq 1 30); do curl -fsS -o /dev/null "$base/" 2>/dev/null && break; sleep 1; done

# status <chemin> ; header <chemin> <en-tête> (valeur sans retour chariot)
status() { curl -s -o /dev/null -w '%{http_code}' "$base$1"; }
header() { curl -s -o /dev/null -D - "$base$1" | tr -d '\r' | awk -F': ' -v h="$2" 'tolower($1) == tolower(h) { print $2 }'; }
expect() { test "$2" = "$3" || fail "$1 : « $2 », attendu « $3 »"; }

IMMUTABLE='public, max-age=31536000, immutable'
SITE='https://site-industrie.nedellec-julien.fr'

# Pages servies sans redirection, toujours revalidées, avec l'adresse canonique du sous-domaine.
for page in / /mentions-legales /mentions-legales/; do
  expect "statut de $page" "$(status "$page")" 200
  expect "cache de $page" "$(header "$page" Cache-Control)" no-cache
done
curl -s "$base/" -o "$tmp/index.html"
curl -s "$base/mentions-legales/" -o "$tmp/mentions.html"
grep -q "<link rel=\"canonical\" href=\"$SITE/\"" "$tmp/index.html" || fail "adresse canonique de / absente ou différente"
grep -q "<link rel=\"canonical\" href=\"$SITE/mentions-legales/\"" "$tmp/mentions.html" \
  || fail "/mentions-legales/ ne sert pas sa propre page"

# En-têtes de sécurité, y compris sur une erreur. Version de nginx jamais exposée.
for path in / /mentions-legales/ /absent.js /_astro/absent.css; do
  csp=$(header "$path" Content-Security-Policy)
  case "$csp" in
    *"default-src 'self';"*"form-action 'self' mailto:;"*"frame-ancestors 'none'"*) ;;
    *) fail "CSP absente ou incomplète sur $path" ;;
  esac
  case "$csp" in *"script-src 'self';"*) ;; *) fail "script-src élargi sur $path" ;; esac
  expect "X-Frame-Options de $path" "$(header "$path" X-Frame-Options)" DENY
  expect "X-Content-Type-Options de $path" "$(header "$path" X-Content-Type-Options)" nosniff
  expect "HSTS de $path" "$(header "$path" Strict-Transport-Security)" 'max-age=31536000; includeSubDomains'
done
test -z "$(header / Server | grep -E '[0-9]')" || fail "la version de nginx est exposée"

# Chaque asset à empreinte référencé par les pages existe, immuable. HTML compressé.
assets=$(cat "$tmp/index.html" "$tmp/mentions.html" | grep -oE '/_astro/[A-Za-z0-9._-]+' | sort -u)
test -n "$assets" || fail "aucun asset /_astro/ dans les pages"
for asset in $assets; do
  expect "statut de $asset" "$(status "$asset")" 200
  expect "cache de $asset" "$(header "$asset" Cache-Control)" "$IMMUTABLE"
done
expect "compression de /" \
  "$(curl -s -o /dev/null -D - -H 'Accept-Encoding: gzip' "$base/" | tr -d '\r' | awk -F': ' 'tolower($1) == "content-encoding" { print $2 }')" gzip

# Images de la page et fichiers de public/ : servis et revalidés.
images=$(grep -oE '/images/[A-Za-z0-9._/-]+' "$tmp/index.html" | sort -u)
test -n "$images" || fail "aucune image /images/ dans la page"
for file in /favicon.svg $images; do
  expect "statut de $file" "$(status "$file")" 200
  expect "cache de $file" "$(header "$file" Cache-Control)" no-cache
done

# Fichier absent : 404 non mis en cache, jamais la page à la place.
for missing in /absent.js /_astro/absent.css /images/absent.jpg /devis; do
  expect "statut de $missing" "$(status "$missing")" 404
  expect "cache de $missing" "$(header "$missing" Cache-Control)" no-cache
done

test "$(docker exec "$name" id -u)" != 0 || fail "le conteneur tourne en root"

echo "image web vérifiée"
