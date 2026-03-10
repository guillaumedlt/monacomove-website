import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-monaco-500 to-monaco-700 px-8 py-16 text-center md:px-16 md:py-20">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
          </div>

          <div className="relative">
            <h2 className="text-h2 text-white md:text-h1">
              Prêt à faire le grand pas ?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-body-lg text-white/80">
              Testez votre éligibilité en 2 minutes et recevez un plan d&apos;action personnalisé.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                href="/outils/test-eligibilite"
                variant="secondary"
                size="lg"
                className="border-white/20 bg-white text-monaco-600 hover:bg-white/90 hover:text-monaco-700"
              >
                Tester mon éligibilité
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="mailto:contact@monacomove.com"
                variant="ghost"
                size="lg"
                className="text-white/90 hover:bg-white/10 hover:text-white"
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
