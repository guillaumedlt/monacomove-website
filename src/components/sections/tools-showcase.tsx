import Link from "next/link";
import { ArrowUpRight, Calculator, Wallet, CheckCircle, BarChart3 } from "lucide-react";

const tools = [
  {
    icon: Calculator,
    title: "Simulateur fiscal",
    description: "Comparez votre fiscalité actuelle avec Monaco. Résultats instantanés, 5 pays supportés.",
    href: "/outils/simulateur-fiscal",
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    icon: Wallet,
    title: "Budget Builder",
    description: "Loyer, quotidien, transports — estimez votre coût de vie mensuel.",
    href: "/outils/budget-monaco",
    span: "",
    featured: false,
  },
  {
    icon: CheckCircle,
    title: "Test d'éligibilité",
    description: "Vérifiez vos conditions de résidence en 2 minutes.",
    href: "/outils/test-eligibilite",
    span: "",
    featured: false,
  },
  {
    icon: BarChart3,
    title: "Comparateur destinations",
    description: "Monaco vs Suisse, Dubaï, Portugal, Singapour — comparez tout.",
    href: "/outils/comparateur",
    span: "md:col-span-2",
    featured: false,
  },
];

export function ToolsShowcase() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-monaco-500">Outils gratuits</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Tout simuler avant de partir.
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            Des outils interactifs pour une vision claire de votre future vie à Monaco.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {tools.map(({ icon: Icon, title, description, href, span, featured }) => (
            <Link
              key={href}
              href={href}
              className={`group relative rounded-2xl border transition-all duration-300 ${span} ${
                featured
                  ? "bg-dark text-white border-dark-border p-10 hover:border-monaco-500/30 glow-red"
                  : "bg-white border-border-default p-7 hover:border-border-strong hover:shadow-lg hover:shadow-black/[0.03]"
              }`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                featured ? "bg-monaco-500/20" : "bg-surface-tertiary"
              }`}>
                <Icon className={`h-5 w-5 ${featured ? "text-monaco-400" : "text-text-muted"}`} />
              </div>

              <h3 className={`mt-5 text-lg font-semibold ${featured ? "text-white" : "text-text-primary"}`}>
                {title}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${featured ? "text-white/50" : "text-text-muted"}`}>
                {description}
              </p>

              {featured && (
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-monaco-400">
                  Lancer le simulateur
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              )}

              <ArrowUpRight
                className={`absolute top-6 right-6 h-4 w-4 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  featured ? "text-white/30" : "text-text-muted"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
