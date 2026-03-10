import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Placeholder articles — sera remplacé par du contenu MDX
const articles = [
  {
    slug: "fiscalite-monaco-guide-complet-2026",
    title: "Fiscalité à Monaco : le guide complet 2026",
    excerpt:
      "Tout ce que vous devez savoir sur le système fiscal monégasque, de l'impôt sur le revenu à l'ISB.",
    category: "Fiscalité",
    date: "10 mars 2026",
  },
  {
    slug: "cout-vie-monaco-budget-realiste",
    title: "Coût de la vie à Monaco : budget réaliste",
    excerpt:
      "Loyer, alimentation, transports... combien coûte réellement la vie dans la Principauté ?",
    category: "Immobilier",
    date: "5 mars 2026",
  },
  {
    slug: "creer-entreprise-monaco-etapes",
    title: "Créer une entreprise à Monaco : les étapes clés",
    excerpt:
      "De la SAM à la SCS, découvrez les formes juridiques et les démarches pour entreprendre à Monaco.",
    category: "Travailler",
    date: "1 mars 2026",
  },
];

export function LatestPosts() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-h2 text-text-primary">Derniers articles</h2>
            <p className="mt-2 text-text-secondary">
              Actualités et guides pour votre installation.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden items-center gap-1 text-sm font-medium text-monaco-500 hover:text-monaco-600 transition-colors sm:flex"
          >
            Voir le blog
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group rounded-xl border border-border-default bg-white p-6 transition-all duration-200 hover:border-border-strong hover:-translate-y-0.5"
            >
              <Badge variant="red">{article.category}</Badge>
              <h3 className="mt-4 text-lg font-semibold text-text-primary group-hover:text-monaco-600 transition-colors">
                {article.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {article.excerpt}
              </p>
              <p className="mt-4 text-xs text-text-muted">{article.date}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-monaco-500"
          >
            Voir le blog
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
