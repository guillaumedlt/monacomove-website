import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="relative rounded-[2rem] bg-gradient-to-br from-accent via-rose-500 to-rose-400 p-12 md:p-20 text-center overflow-hidden">
          {/* Soft glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Prêt à faire le
              <br />
              grand pas ?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-white/70 leading-relaxed">
              Testez votre éligibilité en 2 minutes et recevez votre plan d&apos;action personnalisé.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                href="/outils/test-eligibilite"
                variant="secondary"
                size="lg"
                className="bg-white text-accent hover:bg-white/90 shadow-xl shadow-black/10"
              >
                Commencer gratuitement
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="mailto:contact@monacomove.com"
                variant="ghost"
                size="lg"
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                contact@monacomove.com
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
