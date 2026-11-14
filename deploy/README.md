# Déploiement de la démo sur le serveur (Dokploy) et bascule depuis Vercel

L'image construit la fiche `demo` (entreprise fictive), entièrement statique : ni base de données,
ni variable d'environnement. La pile de production est `compose.yaml`, un seul service nginx
(`site-industrie-web`). Dokploy ne construit rien ; il tire l'image publiée sur GHCR par la CI. Le
trafic arrive par le tunnel Cloudflare, puis le Traefik de Dokploy.

Tant que l'étape « Bascule » n'est pas faite, Vercel reste la production.

## Mise en place (une fois)

1. **Paquet GHCR** : après la première CI sur `master`, vérifier que le paquet `site-industrie-web`
   est public (ou lisible par le registre `ghcr.io` déclaré dans Dokploy).
2. **Dokploy** : un service de type **Compose** dont la source est le dépôt : fournisseur **Git**,
   URL `https://github.com/j-ned/site-industrie.git`, branche `master`, Compose Path
   `./deploy/compose.yaml`. **Auto Deploy désactivé** : c'est la CI qui déclenche.
3. **Domains** : service `site-industrie-web`, port `8080`, HTTP, pour
   `site-industrie.nedellec-julien.fr`.
4. **Premier déploiement** à la main (bouton Deploy), puis vérifier depuis le serveur :
   `curl -sI -H 'Host: site-industrie.nedellec-julien.fr' http://127.0.0.1/` doit répondre `200`.
5. **Secrets du dépôt** : `DOKPLOY_URL`, `DOKPLOY_API_KEY`, `CF_ACCESS_CLIENT_ID`,
   `CF_ACCESS_CLIENT_SECRET` (les mêmes valeurs que pour le Vieux Comptoir), et
   `DOKPLOY_COMPOSE_ID`, **propre à ce service** (dernier segment de son URL dans Dokploy). Variable
   `DEPLOY_HEALTH_URL` : `https://site-industrie.nedellec-julien.fr/`.

**Ordre important** : la bascule DNS (ci-dessous) se fait **après** un déploiement réussi et
vérifié à l'étape 4. Basculer avant fait répondre au site le 404 de Traefik.

## Bascule

1. Cloudflare → zone `nedellec-julien.fr` → DNS : supprimer le CNAME `site-industrie` vers
   `vercel-dns`.
2. Zero Trust → tunnel du serveur → _Public Hostnames_ : ajouter
   `site-industrie.nedellec-julien.fr` vers le Traefik de Dokploy.
3. Vérifier : `curl -sI https://site-industrie.nedellec-julien.fr/` montre `server: cloudflare`, les
   deux pages et les photos s'affichent, la console du navigateur est sans erreur CSP, le bouton du
   formulaire de devis ouvre la messagerie.
4. Vercel : retirer le domaine du projet et déconnecter le dépôt.

Un redéploiement coupe le site quelques secondes (Dokploy recrée le conteneur) : acceptable pour une
démo.

## Retour arrière

Retirer le _Public Hostname_ du tunnel, recréer le CNAME vers Vercel (nuage gris) et rattacher le
domaine au projet Vercel.

## Retour à une version

Dans Environment, fixer `WEB_IMAGE=ghcr.io/j-ned/site-industrie-web:sha-<commit>`, puis Deploy.

## Maquettes de prospects

L'image ne sert que la fiche `demo`. Une maquette (`CLIENT=<slug>`) demande sa propre image et son
propre service, ce qui n'est pas encore outillé.

## CSP et formulaire de devis

`form-action` autorise `'self'` et `mailto:` (formulaire de la démo). Une fiche qui renseigne
`contact.formAction` (Formspree, Web3Forms) doit ajouter cette origine à `form-action` dans
`nginx/security-headers.conf`, sinon le navigateur bloque l'envoi.
