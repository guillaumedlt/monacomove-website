import { FileText, Shield, Clock, Globe } from "lucide-react";

const signals = [
  {
    icon: FileText,
    title: "Calculs mis à jour 2026",
    description: "Taux, loyers et coûts vérifiés régulièrement.",
  },
  {
    icon: Shield,
    title: "Données confidentielles",
    description: "Aucune donnée personnelle stockée.",
  },
  {
    icon: Clock,
    title: "Résultats en 2 minutes",
    description: "Simulez votre situation en quelques clics.",
  },
  {
    icon: Globe,
    title: "5 pays comparés",
    description: "France, UK, Allemagne, Italie, USA.",
  },
];

export function TrustSignals() {
  return (
    <section className="py-12 md:py-16 border-b border-border-default">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {signals.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <Icon className="h-5 w-5 text-monaco-500" strokeWidth={1.5} />
              <h3 className="mt-3 text-sm font-semibold text-text-primary">
                {title}
              </h3>
              <p className="mt-1 text-sm text-text-muted leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
