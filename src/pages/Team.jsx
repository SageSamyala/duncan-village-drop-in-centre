import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import OrgChart from "@/components/OrgChart";

export default function Team() {
  return (
    <PageShell>
      <Seo
        title="Our team"
        description="Meet the founder, leadership and staff of Duncan Village Safe Park and Drop-in Centre in East London, South Africa."
        path="/team"
      />
      <PageHero
        eyebrow="OUR TEAM"
        title="People committed to community."
        text="Meet the founder, leadership and team serving Duncan Village Safe Park and Drop-in Centre."
      />

      <section aria-labelledby="origins-heading" className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 id="origins-heading" className="font-heading text-4xl leading-tight text-[#1B5E20] md:text-5xl">
              Our origins.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/70">
              What began in 2001 as a safe place for the children of Duncan Village has grown into a
              registered non-profit offering early childhood development, youth programmes, social
              casework and community support — all free of charge.
            </p>
            <p className="mt-5 text-lg leading-8 text-black/70">
              Today a team of social workers, auxiliary workers, ECD practitioners, childcare workers
              and support staff carry that same conviction forward, close to home.
            </p>
            <Link to="/programmes" className="mt-8 inline-flex min-h-14 items-center rounded-full bg-[#1B5E20] px-7 text-sm font-bold text-white transition hover:bg-[#174d1b]">
              SEE OUR PROGRAMMES
            </Link>
          </div>
          <Image
            src="https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/c823abbba_WhatsAppImage2025-06-20at1006581.jpg"
            alt="ECD children playing a circle game with a practitioner in the centre's yard"
            className="h-[320px] w-full rounded-[2rem] md:h-[460px]"
          />
        </div>
      </section>

      <section aria-labelledby="team-founder-heading" className="bg-[#F3EDF7] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[auto_1fr] md:items-center">
          <div className="h-36 w-36 shrink-0 overflow-hidden rounded-full ring-4 ring-[#6A1B9A]/30 md:h-48 md:w-48">
            <Image
              src="https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/16ae8b211_WhatsAppImage2025-06-20at132136.jpg"
              alt="Mrs. Nomzamo Maqungu, founder of Duncan Village Safe Park and Drop-in Centre"
              className="h-full w-full"
            />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[.22em] text-[#6A1B9A]">OUR FOUNDER</p>
            <h2 id="team-founder-heading" className="mt-3 font-heading text-3xl text-[#1B5E20] md:text-4xl">
              Mrs. Nomzamo Maqungu
            </h2>
            <p className="mt-5 text-lg leading-8 text-black/70">
              Our centre was founded in 2001 by veteran social worker Mrs. Nomzamo Maqungu, who saw
              what a safe, dependable space could mean for the children of Duncan Village. That
              conviction — that children are the future — still guides how our team works today.
            </p>
          </div>
        </div>
      </section>

      <OrgChart />
    </PageShell>
  );
}