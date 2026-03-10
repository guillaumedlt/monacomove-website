import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calculator, Wallet, CheckCircle, BarChart3 } from "lucide-react";

const quickLinks = [
  { icon: Calculator, label: "Simulateur fiscal", href: "/outils/simulateur-fiscal" },
  { icon: Wallet, label: "Budget", href: "/outils/budget-monaco" },
  { icon: CheckCircle, label: "Éligibilité", href: "/outils/test-eligibilite" },
  { icon: BarChart3, label: "Guides", href: "/guides" },
];

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(229,23,63,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(229,23,63,0.02),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-display text-text-primary">
            S&apos;installer à Monaco
            <br />
            <span className="text-monaco-500">en toute confiance.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-body-lg text-text-secondary">
            La plateforme la plus complète pour préparer votre installation
            dans la Principauté. Outils gratuits, guides experts, accompagnement personnalisé.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/outils/test-eligibilite" size="lg">
              Tester mon éligibilité
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/guides" variant="secondary" size="lg">
              Explorer les guides
            </Button>
          </div>
        </div>

        {/* Quick links */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-20">
          {quickLinks.map(({ icon: Icon, label, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border-default bg-white p-5 text-center transition-all duration-200 hover:border-monaco-200 hover:bg-monaco-50/50 hover:-translate-y-0.5"
            >
              <Icon className="h-5 w-5 text-text-muted group-hover:text-monaco-500 transition-colors" />
              <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
