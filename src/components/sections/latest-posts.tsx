import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
    excerpt: "Loyer, alimentation, transports... combien coûte réellement la vie dans la Principauté ?",
    category: "Immobilier",
    readTime: "6 min",
  },
  {
    slug: "creer-entreprise-monaco-etapes",
    title: "Créer une entreprise à Monaco : les étapes",
    excerpt: "De la SAM à la SCS, découvrez les formes juridiques pour entreprendre à Monaco.",
    category: "Business",
    readTime: "10 min",
  },
];

export function LatestPosts() {
  return (
    <section className="border-t border-border-default py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-monaco-500">Blog</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              Dernières publications.
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-monaco-500 hover:text-monaco-600 transition-colors"
          >
            Tous les articles
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 divide-y divide-border-default">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex items-center justify-between py-7 transition-colors first:pt-0"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium text-monaco-500 bg-monaco-50 px-2 py-0.5 rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-text-muted">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-monaco-600 transition-colors truncate">
                  {article.title}
                </h3>
                <p className="mt-1 text-sm text-text-muted hidden md:block">{article.excerpt}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-text-muted shrink-0 ml-6 transition-all group-hover:text-monaco-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
