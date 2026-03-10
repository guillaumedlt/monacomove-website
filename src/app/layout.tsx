import type { Metadata } from "next";
import { inter, jetbrainsMono } from "@/styles/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://monacomove.com"),
  title: {
    default: "MonacoMove — Votre guide pour s'installer à Monaco",
    template: "%s | MonacoMove",
  },
  description:
    "Plateforme complète pour préparer votre installation à Monaco : simulateur fiscal, budget builder, test d'éligibilité, guides experts et accompagnement personnalisé.",
  keywords: [
    "s'installer à Monaco",
    "résidence Monaco",
    "fiscalité Monaco",
    "déménager à Monaco",
    "impôt Monaco",
    "immobilier Monaco",
    "créer entreprise Monaco",
    "éligibilité résidence Monaco",
  ],
  authors: [{ name: "MonacoMove" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://monacomove.com",
    siteName: "MonacoMove",
    title: "MonacoMove — Votre guide pour s'installer à Monaco",
    description:
      "Outils interactifs gratuits et guides experts pour préparer votre installation dans la Principauté de Monaco.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonacoMove — Votre guide pour s'installer à Monaco",
    description:
      "Outils interactifs gratuits et guides experts pour préparer votre installation dans la Principauté de Monaco.",
  },
  alternates: {
    canonical: "https://monacomove.com",
    languages: {
      "fr-FR": "https://monacomove.com",
      "en-US": "https://monacomove.com/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
