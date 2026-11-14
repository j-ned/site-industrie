# Image du site (nginx, fichiers statiques produits par Astro). Contexte de build : la racine du dépôt.
#   docker build -t site-industrie-web .
# Construit la fiche `demo` (CLIENT absent) ; aucune variable au démarrage.
FROM node:24-slim AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
# Même pnpm que le champ `packageManager`.
RUN npm install --global "$(node -p "require('./package.json').packageManager")" \
 && pnpm install --frozen-lockfile
COPY astro.config.mjs ./
COPY public public
COPY src src
RUN pnpm build

FROM nginxinc/nginx-unprivileged:stable-alpine
COPY nginx/security-headers.conf /etc/nginx/site-industrie/security-headers.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD ["wget", "-q", "-O", "/dev/null", "http://127.0.0.1:8080/"]
