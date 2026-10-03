// Structure d'une fiche client. Tout le contenu du site vient d'ici :
// pour une nouvelle maquette, copier demo.ts et ne toucher qu'à ce fichier.

/** Nom d'icône Phosphor (https://phosphoricons.com), ex. "gear-six" */
export type IconName = string;

export interface Image {
  src: string; // chemin dans public/ (ex. /images/atelier.jpg) ou URL
  alt: string;
}

export interface ClientConfig {
  site: {
    url: string; // URL finale, sert au canonical et au sitemap
    title: string; // <title> de l'accueil (60 caractères max)
    description: string; // meta description (155 caractères max)
    /** Couleur d'accent unique du site, en oklch ou hex */
    accent: string;
    /** Version de l'accent pour le mode sombre (plus claire) */
    accentDark: string;
  };
  company: {
    name: string;
    shortName: string; // affiché dans la barre de navigation
    legalForm: string; // SAS, SARL...
    siret: string;
    capital?: string;
    rcs?: string;
    tva?: string;
    director: string; // directeur de publication
    foundedYear: number;
    address: { street: string; postalCode: string; city: string; region: string };
    geo?: { lat: number; lng: number };
    phone: string;
    email: string;
    hours: string;
    linkedin?: string;
  };
  hero: {
    title: string; // 2 lignes max
    subtitle: string; // 20 mots max
    image: Image;
  };
  /** 3 à 4 chiffres clés, vrais uniquement */
  figures: { value: string; label: string }[];
  services: {
    title: string;
    intro: string;
    items: { icon: IconName; name: string; text: string; specs?: string }[];
  };
  machines: {
    title: string;
    intro: string;
    items: { kind: string; model: string; capacity: string; count?: number }[];
  };
  materials: string[];
  sectors: { icon: IconName; name: string }[];
  quality: {
    title: string;
    text: string;
    certifications: { name: string; detail: string }[];
    controls: string[];
    image: Image;
  };
  process: { title: string; steps: { verb: string; text: string }[] };
  workshop: Image[]; // galerie de 3 photos d'atelier
  contact: {
    title: string;
    text: string;
    /** Endpoint du formulaire (Formspree, Web3Forms...). Vide = envoi par mailto */
    formAction?: string;
    hiddenFields?: Record<string, string>;
  };
  hosting: { name: string; address: string };
  credit?: { label: string; url: string };
  /**
   * Site de démonstration (entreprise fictive) : affiche un bandeau,
   * retire le site des moteurs de recherche et ne génère pas de sitemap.
   * À ne jamais renseigner pour un vrai client.
   */
  demo?: { offerUrl: string };
}
