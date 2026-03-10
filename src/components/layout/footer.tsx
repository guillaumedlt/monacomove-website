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
    <footer className="bg-surface border-t border-border-default">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-3 lg:grid-cols-5 lg:py-20">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold text-text-primary">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-text-muted hover:text-text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border-default py-8 md:flex-row">
          <Link href="/" className="text-lg font-bold tracking-tight text-text-primary">
            Monaco<span className="text-accent">Move</span>
          </Link>
          <div className="flex gap-6 text-sm text-text-muted">
            <Link href="/mentions-legales" className="hover:text-text-primary transition-colors">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-text-primary transition-colors">Confidentialité</Link>
            <Link href="/cgu" className="hover:text-text-primary transition-colors">CGU</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
