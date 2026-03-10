import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-dark relative overflow-hidden">
      <div className="absolute inset-0 noise opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-monaco-500/10 rounded-full blur-[128px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Prêt à faire le
            <br />
            <span className="text-gradient">grand pas</span> ?
          </h2>
          <p className="mt-6 text-lg text-white/40 leading-relaxed max-w-md mx-auto">
            Testez votre éligibilité en 2 minutes et recevez votre plan d&apos;action personnalisé.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/outils/test-eligibilite" variant="dark" size="lg">
              Commencer maintenant
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="mailto:contact@monacomove.com"
              variant="ghost"
              size="lg"
              className="text-white/50 hover:text-white hover:bg-white/5"
            >
              contact@monacomove.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
