"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  label: string;
  sublabel?: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
}

const stats: Stat[] = [
  { label: "Impôt sur le revenu", sublabel: "Non-français", numericValue: 0, suffix: "%" },
  { label: "Résidents", numericValue: 36, suffix: "K" },
  { label: "Superficie", numericValue: 2, suffix: "km²" },
  { label: "Sécurité mondiale", numericValue: 1, prefix: "#" },
];

function AnimatedStat({ stat }: { stat: Stat }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const target = stat.numericValue;
    if (target === 0) {
      setCount(0);
      return;
    }
    const duration = 1200;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [visible, stat.numericValue]);

  return (
    <div ref={ref} className="py-8 lg:py-10">
      <div className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
        {stat.prefix}
        {visible ? count : 0}
        {stat.suffix}
      </div>
      <div className="mt-1.5 text-sm text-text-secondary">{stat.label}</div>
      {stat.sublabel && (
        <div className="text-xs text-text-muted">{stat.sublabel}</div>
      )}
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="border-y border-border-default bg-white mt-16 lg:mt-0">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border-default">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 first:pl-0 last:pr-0 md:px-8">
              <AnimatedStat stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
