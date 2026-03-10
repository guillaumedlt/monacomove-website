interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "MonacoMove",
        url: "https://monacomove.com",
        logo: "https://monacomove.com/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          email: "contact@monacomove.com",
          contactType: "customer service",
        },
        sameAs: [],
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "MonacoMove",
        url: "https://monacomove.com",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://monacomove.com/recherche?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}
