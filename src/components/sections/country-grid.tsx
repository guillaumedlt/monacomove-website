import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { countries } from "@/lib/countries";

export function CountryGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2 text-text-primary">
            Depuis <span className="text-monaco-500">votre pays</span>
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Des guides spécifiques pour chaque pays d&apos;origine.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:mt-16">
          {countries.map((country) => (
            <Link
              key={country.slug}
              href={`/moving-from/${country.slug}`}
              className="flex flex-col items-center gap-2 rounded-lg border border-border-default bg-white p-4 text-center transition-all duration-200 hover:border-border-strong hover:-translate-y-0.5"
            >
              <span className="text-2xl">{country.flag}</span>
              <span className="text-xs font-medium text-text-secondary">
                {country.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/moving-from/france"
            className="inline-flex items-center gap-1 text-sm font-medium text-monaco-500 hover:text-monaco-600 transition-colors"
          >
            Voir tous les guides pays
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
