import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const personas = [
  {
    emoji: "💼",
    label: "Entrepreneur",
    stat: "SAM, SCS, SNC...",
    href: "/travailler-monaco/creer-entreprise",
  },
  {
    emoji: "🏖️",
    label: "Retraité",
    stat: "0% sur les pensions",
    href: "/residence-monaco/eligibilite",
  },
  {
    emoji: "🏆",
    label: "Sportif",
    stat: "F1, Tennis, Foot...",
    href: "/travailler-monaco/sportifs",
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    label: "Famille",
    stat: "#1 sécurité",
    href: "/residence-monaco/demarches",
  },
  {
    emoji: "📈",
    label: "Investisseur",
    stat: "Family offices",
    href: "/travailler-monaco/investir",
  },
  {
    emoji: "💻",
    label: "Digital Nomad",
    stat: "Visa télétravail",
    href: "/travailler-monaco/digital-nomad",
  },
];

export function PersonaCards() {
  return (
    <section className="bg-dark py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 noise opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-monaco-500/5 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-monaco-400">Votre profil</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
            Chaque parcours est unique.
          </h2>
          <p className="mt-4 text-lg text-white/40 leading-relaxed">
            Un accompagnement adapté à votre situation et vos objectifs.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map(({ emoji, label, stat, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] p-5 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/10"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{emoji}</span>
                <div>
                  <h3 className="font-semibold text-white">{label}</h3>
                  <p className="text-sm text-white/30">{stat}</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-white/20 transition-all group-hover:text-monaco-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
