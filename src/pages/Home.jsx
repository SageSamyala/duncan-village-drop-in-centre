import React from "react";
import PageShell from "@/components/PageShell";
import Seo from "@/components/Seo";
import HomeHero from "@/components/HomeHero";
import TrustMarkers from "@/components/TrustMarkers";
import HomeSections from "@/components/HomeSections";
import HomeHelp from "@/components/HomeHelp";
import HomeClosing from "@/components/HomeClosing";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <PageShell>
      <Seo
        title="Care and opportunity in Duncan Village"
        description="A registered non-profit in Duncan Village, East London offering early childhood development, youth programmes, social casework and community support — free of charge."
        path="/"
      />
      <HomeHero />
      <TrustMarkers />
      <HomeSections />
      <HomeHelp />
      <Sponsors />
      <HomeClosing />
    </PageShell>
  );
}