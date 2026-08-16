import React from "react";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import ProgrammeCard from "@/components/ProgrammeCard";
import { programmes } from "@/data/site";

export default function Programmes() {
  return (
    <PageShell>
      <Seo
        title="Our programmes"
        description="Seven free programmes for children, youth, individuals and families in Duncan Village: ECD Safe Park, Powergirls, Young Gentlemen's Club, student and career support, casework, Growing Together and FAS awareness."
        path="/programmes"
      />
      <PageHero
        eyebrow="OUR PROGRAMMES"
        title="Seven pathways to stronger futures."
        text="Connected programmes for children, young people, individuals, families and the wider community. All of our programmes are offered free of charge."
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map((item, i) => (
            <ProgrammeCard key={item.title} item={item} index={i} />
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-7xl rounded-[2rem] bg-[#F1F7F1] p-8 md:p-10">
          <h2 className="font-heading text-3xl text-[#1B5E20]">Not sure which programme fits?</h2>
          <p className="mt-4 max-w-2xl leading-8 text-black/65">
            Tell us a little about your situation and our team will guide you to the right programme
            or service — or refer you to a partner organisation if we are not the best fit.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex min-h-14 items-center rounded-full bg-[#E65100] px-7 text-sm font-bold text-white transition hover:bg-[#c94700]">
              GET SUPPORT
            </Link>
            <Link to="/how-we-work" className="inline-flex min-h-14 items-center rounded-full border-2 border-[#1B5E20]/25 px-7 text-sm font-bold text-[#1B5E20] transition hover:border-[#1B5E20]">
              HOW WE WORK
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}