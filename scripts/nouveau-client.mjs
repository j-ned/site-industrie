// Usage : pnpm nouveau <slug>   ex. pnpm nouveau martin-usinage
// Crée src/clients/<slug>.ts à partir de la démo et public/images/<slug>/
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const slug = process.argv[2];
if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error('Usage : pnpm nouveau <slug>  (minuscules, chiffres et tirets)');
  process.exit(1);
}

const root = resolve(import.meta.dirname, '..');
const target = resolve(root, 'src/clients', `${slug}.ts`);
if (existsSync(target)) {
  console.error(`src/clients/${slug}.ts existe déjà`);
  process.exit(1);
}

const demo = readFileSync(resolve(root, 'src/clients/demo.ts'), 'utf8');
const content = demo
  .replaceAll('/images/', `/images/${slug}/`)
  .replace('https://site-industrie.', `https://${slug}.`)
  // Un vrai client n'est jamais un site de démonstration (bandeau + noindex)
  .replace(/^\s*demo: \{.*\},\n/m, '');
writeFileSync(target, content);

const imgDir = resolve(root, 'public/images', slug);
mkdirSync(imgDir, { recursive: true });
for (const name of ['hero', 'qualite', 'atelier', 'piece', 'reglage']) {
  copyFileSync(resolve(root, 'public/images', `${name}.svg`), resolve(imgDir, `${name}.svg`));
}

console.log(`Fiche créée : src/clients/${slug}.ts
Photos : public/images/${slug}/ (remplacer les .svg par des .jpg et mettre à jour les chemins)
Aperçu : CLIENT=${slug} pnpm dev`);
