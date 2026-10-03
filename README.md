# Site industrie : modèle Astro pour sous-traitants mécaniques

Modèle de site vitrine pour ateliers d'usinage, de décolletage et de mécanique de précision.
Une seule page plus les mentions légales, aucun JavaScript côté client, mode sombre automatique, données structurées `LocalBusiness`.

Tout le contenu d'un client tient dans **un seul fichier** : `src/clients/<slug>.ts`.

## Faire une maquette prospect en 1 h

| Temps | Étape |
|---|---|
| 10 min | Collecter : site actuel, fiche Google, Pappers (SIRET, dirigeant, date de création), LinkedIn, liste des machines si elle est publiée |
| 2 min | `pnpm nouveau martin-usinage` |
| 25 min | Remplir `src/clients/martin-usinage.ts` : textes, chiffres, machines, certifications |
| 10 min | Photos dans `public/images/martin-usinage/` (photos du site actuel ou de la fiche Google, en JPG) |
| 3 min | Accent : reprendre la couleur du logo du prospect dans `site.accent` |
| 10 min | `CLIENT=martin-usinage pnpm dev`, relire, corriger |

## Commandes

```bash
pnpm install
pnpm nouveau <slug>               # crée une fiche à partir de la démo
CLIENT=<slug> pnpm dev            # aperçu sur http://localhost:4321
CLIENT=<slug> pnpm build          # site statique dans dist/
```

Sans `CLIENT`, c'est la fiche `demo` (entreprise fictive) qui est construite.
La fiche `demo` porte `demo: { offerUrl }` : bandeau « Site de démonstration », `noindex` et pas de sitemap. `pnpm nouveau` retire ce champ, une fiche client ne doit jamais l'avoir.

## Règles pour la fiche

- **Que des chiffres vrais.** Une maquette avec une fausse certification EN 9100 décrédibilise tout. En cas de doute, retirer la ligne.
- 5 savoir-faire, c'est la disposition prévue par la grille (1 grande cellule photo, 1 cellule accent, 3 cellules).
- 3 à 4 chiffres clés, 6 machines, 6 secteurs, 4 contrôles qualité.
- Titre du hero : 2 lignes maximum. Sous-titre : 20 mots maximum.
- Icônes : noms Phosphor (https://phosphoricons.com). Une icône inconnue fait échouer le build, avec son nom dans le message.

## Formulaire de devis

- `contact.formAction` vide : le formulaire ouvre la messagerie du visiteur (suffisant pour une maquette).
- En production : créer un formulaire Formspree ou Web3Forms, coller l'URL dans `formAction` et la clé éventuelle dans `hiddenFields`. Le champ « plan ou modèle 3D » apparaît alors.

## Mise en ligne d'une maquette

Le build est statique (`dist/`). Deux options :

- **Sous-domaine sur ton VPS (Dokploy)** : `martin-usinage.nedellec-julien.fr`, servi par un conteneur nginx.
- **Sous-dossier** : `BASE_PATH=/martin-usinage/ CLIENT=martin-usinage pnpm build`.

Pour une maquette, laisse `site.url` sur ton sous-domaine. À la livraison, remplace-le par le vrai domaine du client.

## À adapter avant la livraison

- `public/favicon.svg` : reprendre le logo du client
- Mentions légales : vérifier SIRET, RCS, capital et hébergeur
- `credit` : à garder (lien vers ton site) si le client est d'accord
# site-industrie
