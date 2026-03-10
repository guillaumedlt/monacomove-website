import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { countries } from "@/lib/countries";

export function CountryGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-monaco-500">Guides par pays</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              Depuis votre pays d&apos;origine.
            </h2>
          </div>
          <Link
            href="/moving-from/france"
            className="inline-flex items-center gap-2 text-sm font-medium text-monaco-500 hover:text-monaco-600 transition-colors shrink-0"
          >
            Tous les guides
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
          {countries.map((country) => (
            <Link
              key={country.slug}
              href={`/moving-from/${country.slug}`}
              className="group flex flex-col items-center gap-2.5 rounded-xl border border-border-default bg-white p-4 transition-all duration-200 hover:border-border-strong hover:shadow-md hover:shadow-black/[0.02] hover:-translate-y-0.5"
            >
              <span className="text-3xl">{country.flag}</span>
              <span className="text-xs font-medium text-text-muted group-hover:text-text-primary transition-colors">
                {country.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
