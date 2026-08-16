import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import OrgChart from "@/components/OrgChart";

const registration = [
  ["NPO No.", "196-023"],
  ["PBO Ref No.", "930085949"],
  ["CIPC Reg No.", "2018/071881/08"],
  ["VAT registered", "Yes"],
  ["ECD Safe Park", "Registered with the Department of Education"],
  ["Established", "2001, in Duncan Village"]
];

export default function About() {
  return (
    <PageShell>
      <Seo
        title="About us"
        description="Founded in 2001 by social worker Mrs. Nomzamo Maqungu, Duncan Village Safe Park and Drop-in Centre is a registered NPO serving children, youth, individuals and families in East London."
        path="/about"
      />
      <PageHero
        eyebrow="ABOUT US"
        title="Rooted in Duncan Village. Growing hope since 2001."
        text="A community-rooted organisation supporting children, youth, individuals and families with care, education and collective action."
      />

      <section aria-labelledby="story-heading" className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 id="story-heading" className="font-heading text-4xl leading-tight text-[#1B5E20] md:text-5xl">
              Care, education and collective action.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/70">
              Duncan Village Safe Park and Drop-in Centre supports people through social support,
              education, group interventions, community development and awareness programmes. Our
              work is shaped by community realities and grounded in dignity.
            </p>
            <p className="mt-5 text-lg leading-8 text-black/70">
              What began as a safe place for children has grown into seven connected programmes,
              reaching from early childhood development through to youth mentorship, family casework
              and household food gardening — all offered free of charge.
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

      <section aria-labelledby="founder-heading" className="bg-[#F3EDF7] px-5 py-20 lg:px-8">
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
            <h2 id="founder-heading" className="mt-3 font-heading text-3xl text-[#1B5E20] md:text-4xl">
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

      <section aria-labelledby="reg-heading" className="bg-[#F1F7F1] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-bold tracking-[.22em] text-[#6A1B9A]">TRANSPARENCY</p>
          <h2 id="reg-heading" className="font-heading text-4xl text-[#1B5E20]">Registration details</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-black/65">
            We are a fully registered non-profit organisation and public benefit organisation.
          </p>
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {registration.map(([a, b]) => (
              <div className="rounded-2xl bg-white p-6" key={a}>
                <dt className="text-xs font-bold tracking-wider text-[#6A1B9A]">{a}</dt>
                <dd className="mt-2 font-heading text-xl leading-7">{b}</dd>
              </div>
            ))}
          </dl>
          <Link to="/team" className="mt-10 inline-flex text-sm font-bold text-[#E65100] hover:text-[#1B5E20]">
            MEET OUR FULL TEAM →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}