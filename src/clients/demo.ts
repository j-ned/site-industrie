import type { ClientConfig } from './types';

// Entreprise fictive pour la démo. Tous les chiffres sont à remplacer
// par ceux du prospect (site actuel, fiche Google, Pappers, LinkedIn).
const config: ClientConfig = {
  site: {
    url: 'https://demo-usinage.nedellec-julien.fr',
    title: 'Delaunay Précision | Usinage de précision à Élancourt (78)',
    description:
      'Tournage et fraisage CN 5 axes de pièces de précision pour l’aéronautique, le médical et l’énergie. Atelier certifié EN 9100 à Élancourt, Yvelines.',
    accent: 'oklch(0.62 0.17 45)',
    accentDark: 'oklch(0.74 0.15 50)',
  },
  company: {
    name: 'Delaunay Précision',
    shortName: 'Delaunay Précision',
    legalForm: 'SAS',
    siret: '000 000 000 00000',
    capital: '150 000 €',
    rcs: 'RCS Versailles 000 000 000',
    tva: 'FR00 000000000',
    director: 'Marc Delaunay',
    foundedYear: 1987,
    address: {
      street: '14 rue des Frères Lumière',
      postalCode: '78990',
      city: 'Élancourt',
      region: 'Île-de-France',
    },
    geo: { lat: 48.7839, lng: 1.9561 },
    phone: '01 30 00 00 00',
    email: 'contact@delaunay-precision.fr',
    hours: 'Du lundi au vendredi, 7 h 30 - 17 h',
    linkedin: 'https://www.linkedin.com/',
  },
  hero: {
    title: 'Vos pièces de précision, usinées au centième près.',
    subtitle:
      'Tournage et fraisage CN pour l’aéronautique et le médical, du prototype à la série, depuis 1987.',
    image: { src: '/images/hero.svg', alt: 'Tour CN en cours d’usinage dans l’atelier' },
  },
  figures: [
    { value: '1987', label: 'Atelier fondé à Élancourt' },
    { value: '21', label: 'Machines en production' },
    { value: '±0,005 mm', label: 'Tolérance courante en tournage' },
    { value: 'EN 9100', label: 'Certification aéronautique' },
  ],
  services: {
    title: 'Ce que nous usinons pour vous',
    intro: 'Des pièces unitaires aux séries de plusieurs milliers, sur plan ou modèle 3D.',
    items: [
      {
        icon: 'cylinder',
        name: 'Tournage CN',
        text: 'Pièces de révolution complexes, bi-broches et outils motorisés pour finir en une seule prise.',
        specs: 'Ø 2 à 320 mm',
      },
      {
        icon: 'cube',
        name: 'Fraisage 5 axes',
        text: 'Formes gauches, carters et pièces de structure usinés en continu sur 5 axes.',
        specs: 'Jusqu’à 800 × 600 × 500 mm',
      },
      {
        icon: 'arrows-in-line-horizontal',
        name: 'Décolletage',
        text: 'Petites pièces de grande série sur tours à poupée mobile, avec ravitailleur de barres.',
        specs: 'Ø 1 à 32 mm',
      },
      {
        icon: 'circle-half',
        name: 'Rectification',
        text: 'Rectification cylindrique et plane pour les portées et ajustements les plus serrés.',
        specs: 'Ra 0,2 µm',
      },
      {
        icon: 'flask',
        name: 'Prototypage rapide',
        text: 'Première pièce sous 5 jours ouvrés pour valider vos plans avant l’industrialisation.',
      },
    ],
  },
  machines: {
    title: 'Notre parc machines',
    intro: 'Un parc renouvelé en continu, entretenu en interne.',
    items: [
      { kind: 'Tour bi-broche', model: 'DMG Mori NLX 2500', capacity: 'Ø 366 mm, axe Y', count: 4 },
      { kind: 'Centre 5 axes', model: 'Hermle C 42 U', capacity: '800 × 800 × 550 mm', count: 3 },
      { kind: 'Tour à poupée mobile', model: 'Star SR-32J', capacity: 'Ø 32 mm', count: 6 },
      { kind: 'Centre 3 axes', model: 'Haas VF-4', capacity: '1270 × 508 × 635 mm', count: 5 },
      { kind: 'Rectifieuse', model: 'Studer S33', capacity: 'Entre-pointes 1000 mm', count: 2 },
      { kind: 'Machine à mesurer 3D', model: 'Zeiss Contura', capacity: '1000 × 1200 × 600 mm', count: 1 },
    ],
  },
  materials: [
    'Titane TA6V',
    'Inconel 718',
    'Inox 316L',
    'Inox 17-4PH',
    'Aluminium 7075',
    'Aluminium 2017',
    'Acier 42CrMo4',
    'PEEK',
    'Laiton',
    'Bronze',
  ],
  sectors: [
    { icon: 'airplane-tilt', name: 'Aéronautique' },
    { icon: 'heartbeat', name: 'Médical' },
    { icon: 'lightning', name: 'Énergie' },
    { icon: 'shield-check', name: 'Défense' },
    { icon: 'train', name: 'Ferroviaire' },
    { icon: 'gear-six', name: 'Machines spéciales' },
  ],
  quality: {
    title: 'La qualité ne se promet pas, elle se mesure.',
    text: 'Chaque lot part avec son rapport de contrôle. Nos procédures sont auditées chaque année et la traçabilité matière est assurée de la barre à la pièce livrée.',
    certifications: [
      { name: 'EN 9100:2018', detail: 'Aéronautique, spatial et défense' },
      { name: 'ISO 9001:2015', detail: 'Management de la qualité' },
    ],
    controls: [
      'Machine à mesurer tridimensionnelle',
      'Rapport de premier article (FAI)',
      'Rugosimètre et projecteur de profil',
      'Traçabilité matière par lot',
    ],
    image: { src: '/images/qualite.svg', alt: 'Contrôle d’une pièce sur machine à mesurer 3D' },
  },
  process: {
    title: 'Du plan à la livraison',
    steps: [
      { verb: 'Analyser', text: 'Étude de votre plan ou modèle 3D, avec nos remarques de fabricabilité.' },
      { verb: 'Chiffrer', text: 'Devis détaillé sous 48 h, délai et prix fermes.' },
      { verb: 'Usiner', text: 'Programmation FAO, réglage et production sur la machine adaptée.' },
      { verb: 'Contrôler', text: 'Mesure 3D, rapport de contrôle et certificat matière.' },
      { verb: 'Livrer', text: 'Emballage adapté et livraison à la date annoncée.' },
    ],
  },
  workshop: [
    { src: '/images/atelier.svg', alt: 'Vue générale de l’atelier de production' },
    { src: '/images/piece.svg', alt: 'Pièce en titane après usinage' },
    { src: '/images/reglage.svg', alt: 'Réglage des outils avant une série' },
  ],
  contact: {
    title: 'Envoyez-nous votre plan',
    text: 'Plan, quantité et matière : nous revenons vers vous avec un devis sous 48 h.',
    formAction: '',
  },
  hosting: { name: 'OVHcloud', address: '2 rue Kellermann, 59100 Roubaix, France' },
  credit: { label: 'Site réalisé par Julien Nédellec', url: 'https://nedellec-julien.fr' },
};

export default config;
