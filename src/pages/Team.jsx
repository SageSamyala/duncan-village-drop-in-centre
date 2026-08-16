import React from "react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import OrgChart from "@/components/OrgChart";

export default function Team() {
  return (
    <PageShell>
      <Seo
        title="Our team"
        description="Meet the social workers, practitioners and support staff of Duncan Village Safe Park and Drop-in Centre in East London, South Africa."
        path="/team"
      />
      <PageHero
        eyebrow="OUR TEAM"
        title="People committed to community."
        text="Meet the leadership and team serving Duncan Village Safe Park and Drop-in Centre."
      />
      <OrgChart />
    </PageShell>
  );
}