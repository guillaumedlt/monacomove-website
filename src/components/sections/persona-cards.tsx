import Link from "next/link";
import { ArrowRight } from "lucide-react";

const personas = [
  { emoji: "💼", label: "Entrepreneur", description: "Créer votre société SAM, SCS...", href: "/travailler-monaco/creer-entreprise" },
  { emoji: "☀️", label: "Retraité", description: "0% d'impôt sur les pensions", href: "/residence-monaco/eligibilite" },
  { emoji: "🏆", label: "Sportif", description: "Base d'entraînement F1, Tennis...", href: "/travailler-monaco/sportifs" },
  { emoji: "👨‍👩‍👧‍👦", label: "Famille", description: "Sécurité #1, écoles internationales", href: "/residence-monaco/demarches" },
  { emoji: "📈", label: "Investisseur", description: "Family office, gestion privée", href: "/travailler-monaco/investir" },
  { emoji: "💻", label: "Digital Nomad", description: "Visa télétravail, fibre 10Gb", href: "/travailler-monaco/digital-nomad" },
];

export function PersonaCards() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Un guide adapté
            <br />
            <span className="text-accent">à votre profil.</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Chaque parcours est unique, trouvez le vôtre.
          </p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map(({ emoji, label, description, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-4 rounded-2xl bg-white border border-border-default p-5 transition-all duration-200 hover:shadow-lg hover:shadow-black/[0.03] hover:-translate-y-0.5 hover:border-border-strong"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-surface text-2xl">
                {emoji}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-text-primary">{label}</h3>
                <p className="text-sm text-text-muted mt-0.5">{description}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-text-muted shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
