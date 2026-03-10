import Link from "next/link";
import { Briefcase, Sun, Trophy, Users, TrendingUp, Laptop } from "lucide-react";

const personas = [
  {
    icon: Briefcase,
    label: "Entrepreneur",
    description: "Créer ou transférer votre entreprise",
    href: "/travailler-monaco/creer-entreprise",
    gradient: "from-orange-50 to-red-50",
  },
  {
    icon: Sun,
    label: "Retraité",
    description: "Profiter de votre retraite au soleil",
    href: "/residence-monaco/eligibilite",
    gradient: "from-amber-50 to-yellow-50",
  },
  {
    icon: Trophy,
    label: "Sportif",
    description: "Installer votre base d'entraînement",
    href: "/travailler-monaco/sportifs",
    gradient: "from-blue-50 to-cyan-50",
  },
  {
    icon: Users,
    label: "Famille",
    description: "Un cadre de vie sûr pour vos enfants",
    href: "/residence-monaco/demarches",
    gradient: "from-green-50 to-emerald-50",
  },
  {
    icon: TrendingUp,
    label: "Investisseur",
    description: "Opportunités et family offices",
    href: "/travailler-monaco/investir",
    gradient: "from-purple-50 to-violet-50",
  },
  {
    icon: Laptop,
    label: "Digital Nomad",
    description: "Travailler depuis la Principauté",
    href: "/travailler-monaco/digital-nomad",
    gradient: "from-pink-50 to-rose-50",
  },
];

export function PersonaCards() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2 text-text-primary">
            Votre profil, <span className="text-monaco-500">votre guide</span>
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Trouvez les informations adaptées à votre situation.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {personas.map(({ icon: Icon, label, description, href, gradient }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-4 rounded-lg border border-border-default bg-white p-6 transition-all duration-200 hover:border-border-strong hover:-translate-y-0.5"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${gradient}`}
              >
                <Icon className="h-5 w-5 text-text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">{label}</h3>
                <p className="mt-1 text-sm text-text-muted">{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
