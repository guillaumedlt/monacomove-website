import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { countries } from "@/lib/countries";

export function CountryGrid() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Guides par pays d&apos;origine.
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Des informations spécifiques selon votre nationalité.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
          {countries.map((country) => (
            <Link
              key={country.slug}
              href={`/moving-from/${country.slug}`}
              className="group flex flex-col items-center gap-2 rounded-2xl bg-white border border-border-default p-4 transition-all duration-200 hover:shadow-md hover:shadow-black/[0.04] hover:-translate-y-0.5"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{country.flag}</span>
              <span className="text-xs font-medium text-text-muted group-hover:text-text-primary transition-colors">
                {country.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/moving-from/france" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
            Voir tous les guides pays
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
