export interface NavItem {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href: string;
  items: NavItem[];
}

export const navigation: NavGroup[] = [
  {
    label: "S'installer",
    href: "/residence-monaco",
    items: [
      { label: "Éligibilité", href: "/residence-monaco/eligibilite" },
      { label: "Démarches", href: "/residence-monaco/demarches" },
      { label: "Documents requis", href: "/residence-monaco/documents-requis" },
      { label: "Carte de résident", href: "/residence-monaco/carte-resident" },
      { label: "Nationalité", href: "/residence-monaco/nationalite" },
      { label: "Depuis votre pays", href: "/moving-from/france" },
    ],
  },
  {
    label: "Fiscalité",
    href: "/fiscalite-monaco",
    items: [
      { label: "Impôt sur le revenu", href: "/fiscalite-monaco/impot-revenu" },
      { label: "ISB Sociétés", href: "/fiscalite-monaco/isb-societes" },
      { label: "Succession & Donation", href: "/fiscalite-monaco/succession-donation" },
      { label: "TVA Monaco", href: "/fiscalite-monaco/tva-monaco" },
      { label: "Crypto-monnaies", href: "/fiscalite-monaco/crypto" },
      { label: "Calendrier fiscal", href: "/fiscalite-monaco/calendrier-fiscal" },
    ],
  },
  {
    label: "Immobilier",
    href: "/immobilier-monaco",
    items: [
      { label: "Acheter", href: "/immobilier-monaco/acheter" },
      { label: "Louer", href: "/immobilier-monaco/louer" },
      { label: "Quartiers", href: "/immobilier-monaco/quartiers" },
      { label: "Mareterra", href: "/immobilier-monaco/mareterra" },
      { label: "Prix du marché", href: "/immobilier-monaco/prix-marche" },
      { label: "Coût de la vie", href: "/cout-de-la-vie" },
    ],
  },
  {
    label: "Travailler",
    href: "/travailler-monaco",
    items: [
      { label: "Emploi", href: "/travailler-monaco/emploi" },
      { label: "Créer une entreprise", href: "/travailler-monaco/creer-entreprise" },
      { label: "Investir", href: "/travailler-monaco/investir" },
      { label: "Family Office", href: "/travailler-monaco/family-office" },
      { label: "Digital Nomad", href: "/travailler-monaco/digital-nomad" },
      { label: "Sportifs", href: "/travailler-monaco/sportifs" },
    ],
  },
  {
    label: "Outils",
    href: "/outils",
    items: [
      { label: "Simulateur fiscal", href: "/outils/simulateur-fiscal" },
      { label: "Budget Builder", href: "/outils/budget-monaco" },
      { label: "Test d'éligibilité", href: "/outils/test-eligibilite" },
      { label: "Comparateur", href: "/outils/comparateur" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    items: [],
  },
];
