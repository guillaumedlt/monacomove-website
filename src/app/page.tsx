import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { ToolsShowcase } from "@/components/sections/tools-showcase";
import { PersonaCards } from "@/components/sections/persona-cards";
import { CountryGrid } from "@/components/sections/country-grid";
import { LatestPosts } from "@/components/sections/latest-posts";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ToolsShowcase />
      <PersonaCards />
      <CountryGrid />
      <LatestPosts />
      <CtaBanner />
    </>
  );
}
