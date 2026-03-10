import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    slug: "fiscalite-monaco-guide-complet-2026",
    title: "Fiscalité à Monaco : le guide complet 2026",
    excerpt: "Tout savoir sur le système fiscal monégasque, de l'impôt sur le revenu à l'ISB.",
    category: "Fiscalité",
    readTime: "8 min",
  },
  {
    slug: "cout-vie-monaco-budget-realiste",
    title: "Coût de la vie à Monaco : budget réaliste",
    excerpt: "Loyer, alimentation, transports... combien coûte la vie dans la Principauté ?",
    category: "Immobilier",
    readTime: "6 min",
  },
  {
    slug: "creer-entreprise-monaco-etapes",
    title: "Créer une entreprise à Monaco : les étapes",
    excerpt: "Les formes juridiques et démarches pour entreprendre dans la Principauté.",
    category: "Business",
    readTime: "10 min",
  },
];

export function LatestPosts() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              Dernières publications.
            </h2>
            <p className="mt-3 text-text-secondary text-lg">Guides et actualités pour votre installation.</p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all shrink-0">
            Voir le blog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group rounded-3xl bg-white border border-border-default p-7 transition-all duration-200 hover:shadow-lg hover:shadow-black/[0.03] hover:-translate-y-1"
            >
              <div className="flex items-center gap-2">
                <Badge variant="accent">{article.category}</Badge>
                <span className="text-xs text-text-muted">{article.readTime}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-text-primary group-hover:text-accent transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
