"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = 0;
    // Just animate the display to 0 from a "loading" state
    const timer = setTimeout(() => setCount(target), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-dark overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 noise opacity-30 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-monaco-500/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-monaco-400/8 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
        {/* Top tag */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-8 bg-monaco-500" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-monaco-400">
            Plateforme de relocation
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Left — big number */}
          <div className="lg:col-span-5">
            <div className="relative">
              <span className="block font-mono text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold leading-none tracking-tighter text-white/[0.07]">
                {count}%
              </span>
              <div className="absolute bottom-4 left-0">
                <span className="text-sm font-medium text-dark-muted">Impôt sur le revenu</span>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-monaco-500" />
                  <span className="text-xs text-dark-muted/60">pour les résidents non-français</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — headline + CTAs */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-white">
              Votre nouvelle vie
              <br />
              <span className="text-gradient">à Monaco</span> commence ici.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/50">
              Simulateurs, guides experts et accompagnement personnalisé pour préparer
              votre installation dans la Principauté.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/outils/simulateur-fiscal" variant="dark" size="lg">
                Simuler mes économies
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/outils/test-eligibilite"
                variant="ghost"
                size="lg"
                className="text-white/70 hover:text-white hover:bg-white/5 border border-white/10"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Tester mon éligibilité
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom stats row */}
        <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "36K", label: "Résidents" },
            { value: "2km²", label: "La plus haute densité" },
            { value: "#1", label: "Sécurité mondiale" },
            { value: "170+", label: "Nationalités" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
