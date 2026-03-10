"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  numericValue?: number;
}

const stats: Stat[] = [
  { value: "0%", label: "Impôt sur le revenu", prefix: "", suffix: "%", numericValue: 0 },
  { value: "39 000", label: "Résidents", numericValue: 39000 },
  { value: "170+", label: "Nationalités", suffix: "+", numericValue: 170 },
  { value: "#1", label: "Sécurité mondiale", prefix: "#", numericValue: 1 },
];

function AnimatedNumber({ stat }: { stat: Stat }) {
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
    if (!visible || stat.numericValue === undefined) return;
    const target = stat.numericValue;
    const duration = 1500;
    const steps = 60;
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

  const formatted = stat.numericValue === 39000
    ? count.toLocaleString("fr-FR")
    : count.toString();

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-3xl font-bold text-text-primary md:text-4xl">
        {stat.prefix}
        {visible ? formatted : "0"}
        {stat.suffix}
      </div>
      <div className="mt-2 text-sm text-text-muted">{stat.label}</div>
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedNumber key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
