import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* Soft gradient blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-accent/[0.06] via-accent/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-0 w-[300px] h-[300px] bg-gradient-to-br from-orange-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <Badge variant="accent" className="mb-6">
          <Sparkles className="h-3 w-3" />
          Plateforme #1 pour s&apos;installer a Monaco
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.08]">
          Préparez votre
          <br />
          <span className="bg-gradient-to-r from-accent to-rose-400 bg-clip-text text-transparent">
            vie à Monaco
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-lg text-text-secondary leading-relaxed">
          Simulateurs fiscaux, guides experts et accompagnement personnalisé.
          Tout ce qu&apos;il faut pour votre installation dans la Principauté.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/outils/simulateur-fiscal" size="lg">
            Simuler mes économies
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/outils/test-eligibilite" variant="secondary" size="lg">
            Tester mon éligibilité
          </Button>
        </div>

        {/* Floating stats cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { value: "0%", label: "Impôt sur le revenu", sub: "non-français" },
            { value: "36K", label: "Résidents", sub: "dans la Principauté" },
            { value: "2km²", label: "Superficie", sub: "le plus petit État" },
            { value: "#1", label: "Sécurité", sub: "au niveau mondial" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/60 backdrop-blur-sm border border-border-default p-5 text-center shadow-sm"
            >
              <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-text-secondary">{stat.label}</div>
              <div className="text-xs text-text-muted">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
