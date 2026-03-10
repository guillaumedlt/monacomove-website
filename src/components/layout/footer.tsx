import Link from "next/link";

const footerLinks = [
  {
    title: "S'installer",
    links: [
      { label: "Éligibilité", href: "/residence-monaco/eligibilite" },
      { label: "Démarches", href: "/residence-monaco/demarches" },
      { label: "Nationalité", href: "/residence-monaco/nationalite" },
      { label: "Depuis la France", href: "/moving-from/france" },
    ],
  },
  {
    title: "Fiscalité",
    links: [
      { label: "Simulateur fiscal", href: "/outils/simulateur-fiscal" },
      { label: "Guide fiscal", href: "/fiscalite-monaco" },
      { label: "ISB Sociétés", href: "/fiscalite-monaco/isb-societes" },
      { label: "Crypto", href: "/fiscalite-monaco/crypto" },
    ],
  },
  {
    title: "Immobilier",
    links: [
      { label: "Acheter", href: "/immobilier-monaco/acheter" },
      { label: "Louer", href: "/immobilier-monaco/louer" },
      { label: "Quartiers", href: "/immobilier-monaco/quartiers" },
      { label: "Coût de la vie", href: "/cout-de-la-vie" },
    ],
  },
  {
    title: "Travailler",
    links: [
      { label: "Emploi", href: "/travailler-monaco/emploi" },
      { label: "Créer une entreprise", href: "/travailler-monaco/creer-entreprise" },
      { label: "Investir", href: "/travailler-monaco/investir" },
      { label: "Family Office", href: "/travailler-monaco/family-office" },
    ],
  },
  {
    title: "Outils",
    links: [
      { label: "Simulateur fiscal", href: "/outils/simulateur-fiscal" },
      { label: "Budget Builder", href: "/outils/budget-monaco" },
      { label: "Test éligibilité", href: "/outils/test-eligibilite" },
      { label: "Comparateur", href: "/outils/comparateur" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Annuaire", href: "/annuaire" },
      { label: "Services", href: "/services-relocation" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border-default bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-6 lg:py-16">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-text-primary">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border-default py-6 text-sm text-text-muted md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-bold text-text-primary">MonacoMove</span>
            <span className="ml-1">— Votre guide pour Monaco</span>
          </div>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-text-primary transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-text-primary transition-colors">
              Confidentialité
            </Link>
            <Link href="/cgu" className="hover:text-text-primary transition-colors">
              CGU
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
