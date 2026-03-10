import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 lg:pt-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center lg:min-h-[70vh]">
          {/* Left column */}
          <div className="flex flex-col items-start">
            <span className="text-[11px] uppercase tracking-[0.15em] font-medium text-text-muted">
              Plateforme de relocation
            </span>

            {/* Monaco flag visual */}
            <div className="mt-8 mb-10">
              <div className="w-48 h-24 rounded-sm overflow-hidden shadow-sm">
                <div className="w-full h-1/2 bg-monaco-500" />
                <div className="w-full h-1/2 bg-white border border-border-default border-t-0" />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 w-full max-w-sm">
              <Button href="/outils/simulateur-fiscal" size="lg" className="w-full justify-between">
                Simuler mes économies fiscales
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/outils/test-eligibilite" variant="secondary" size="lg" className="w-full justify-between">
                Tester mon éligibilité
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right column — large headline */}
          <div className="lg:pl-8">
            <h1 className="text-[2.5rem] leading-[1.12] font-semibold tracking-tight text-text-primary md:text-[3.25rem] lg:text-[3.5rem]">
              Votre vie à Monaco, simulée avant d&apos;y arriver. Les outils interactifs que personne d&apos;autre ne propose.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
