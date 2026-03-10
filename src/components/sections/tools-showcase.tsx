import Link from "next/link";
import { ArrowRight, Calculator, Wallet, CheckCircle, BarChart3 } from "lucide-react";

const tools = [
  {
    icon: Calculator,
    title: "Simulateur fiscal",
    description: "Comparez votre fiscalité actuelle avec Monaco. Résultats instantanés pour 5 pays.",
    href: "/outils/simulateur-fiscal",
    color: "bg-rose-50 text-rose-500",
    large: true,
  },
  {
    icon: Wallet,
    title: "Budget Builder",
    description: "Estimez votre coût de vie mensuel : loyer, quotidien, transports.",
    href: "/outils/budget-monaco",
    color: "bg-blue-50 text-blue-500",
    large: false,
  },
  {
    icon: CheckCircle,
    title: "Test d'éligibilité",
    description: "Vérifiez vos conditions de résidence en 2 minutes.",
    href: "/outils/test-eligibilite",
    color: "bg-emerald-50 text-emerald-500",
    large: false,
  },
  {
    icon: BarChart3,
    title: "Comparateur",
    description: "Monaco vs Suisse, Dubaï, Portugal, Singapour — comparez en détail.",
    href: "/outils/comparateur",
    color: "bg-purple-50 text-purple-500",
    large: false,
  },
];

export function ToolsShowcase() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Des outils puissants,
            <br />
            <span className="text-accent">totalement gratuits.</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg leading-relaxed">
            Simulez, comparez et planifiez votre installation en quelques clics.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map(({ icon: Icon, title, description, href, color, large }) => (
            <Link
              key={href}
              href={href}
              className={`group relative rounded-3xl bg-white p-8 shadow-sm border border-transparent hover:border-border-default hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 hover:-translate-y-1 ${
                large ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}>
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-text-primary">{title}</h3>
              <p className="mt-2 text-text-secondary leading-relaxed">{description}</p>

              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all">
                Essayer maintenant
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
