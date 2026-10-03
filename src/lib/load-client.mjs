// Sélectionne la fiche client à construire : CLIENT=delaunay pnpm build
// Chaque fiche vit dans src/clients/<slug>.ts
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

export async function loadClient() {
  const slug = process.env.CLIENT ?? 'demo';
  const path = resolve(import.meta.dirname, '../clients', `${slug}.ts`);
  const mod = await import(pathToFileURL(path).href).catch(() => {
    throw new Error(`Fiche client introuvable : src/clients/${slug}.ts`);
  });
  return mod.default;
}
