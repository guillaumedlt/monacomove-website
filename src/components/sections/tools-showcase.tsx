import Link from "next/link";
import { ArrowRight, Calculator, Wallet, CheckCircle } from "lucide-react";

const tools = [
  {
    icon: Calculator,
    title: "Simulateur fiscal",
    description:
      "Estimez votre économie d'impôt en comparant votre fiscalité actuelle avec Monaco.",
    href: "/outils/simulateur-fiscal",
  },
  {
    icon: Wallet,
    title: "Budget Builder",
    description:
      "Calculez votre budget mensuel à Monaco : loyer, alimentation, transports, loisirs.",
    href: "/outils/budget-monaco",
  },
  {
    icon: CheckCircle,
    title: "Test d'éligibilité",
    description:
      "Vérifiez en 2 minutes si vous remplissez les conditions pour devenir résident.",
    href: "/outils/test-eligibilite",
  },
];

export function ToolsShowcase() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2 text-text-primary">
            Vos outils, <span className="text-monaco-500">gratuits</span>
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Des outils interactifs pour préparer votre projet d&apos;installation en toute sérénité.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {tools.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-lg border border-border-default bg-white p-8 transition-all duration-200 hover:border-monaco-200 hover:-translate-y-0.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-monaco-50 text-monaco-500 transition-colors group-hover:bg-monaco-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {description}
              </p>
              <div className="mt-5 flex items-center gap-1 text-sm font-medium text-monaco-500">
                Essayer
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
