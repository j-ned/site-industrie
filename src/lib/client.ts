import type { ClientConfig } from '../clients/types';

const clients = import.meta.glob<{ default: ClientConfig }>('../clients/*.ts', { eager: true });
const slug = import.meta.env.CLIENT ?? process.env.CLIENT ?? 'demo';
const entry = clients[`../clients/${slug}.ts`];

if (!entry) throw new Error(`Fiche client introuvable : src/clients/${slug}.ts`);

export const client: ClientConfig = entry.default;

export const asset = (path: string) =>
  /^https?:/.test(path) ? path : `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
