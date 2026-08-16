import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import SectionTitle from "@/components/SectionTitle";

const link = "mt-8 inline-flex min-h-14 items-center rounded-full bg-[#1B5E20] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#174d1b]";

const snapshot = [
  ["Early childhood development", "Children aged 1–5", "A safe, nurturing Safe Park Day Care Centre, registered with the Department of Education."],
  ["Youth development", "Ages 9–17", "Powergirls and the Young Gentlemen's Club build identity, confidence, leadership and academic growth."],
  ["Family & community support", "All ages", "Casework, education and career guidance, nutrition gardening and awareness programmes."]
];

export default function HomeSections() {
  return (
    <>
      <section aria-labelledby="who-heading" className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Image
            src="https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/62003a3c4_WhatsAppImage2026-08-04at14165230.jpg"
            alt="Children playing table tennis at the centre"
            className="h-[300px] w-full rounded-[2rem] md:h-[430px]"
          />
          <div>
            <SectionTitle
              id="who-heading"
              label="WHO WE ARE"
              title="Community-rooted care that opens pathways forward."
              text="We support children, youth, individuals and families through social support, education, group interventions, community development and awareness programmes — shaped by the realities of our community and grounded in dignity."
            />
            <Link className={link} to="/about">ABOUT OUR CENTRE</Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="prog-heading" className="bg-[#1B5E20] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            id="prog-heading"
            light
            label="OUR PROGRAMMES"
            title="Seven programmes. One connected community."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {snapshot.map(([title, who, text]) => (
              <article key={title} className="rounded-3xl bg-white p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-[#6A1B9A]">{who}</p>
                <h3 className="mt-3 font-heading text-2xl text-[#1B5E20]">{title}</h3>
                <p className="mt-3 leading-7 text-black/60">{text}</p>
              </article>
            ))}
          </div>
          <Link className="mt-8 inline-flex min-h-14 items-center rounded-full bg-[#FFB300] px-6 py-4 text-sm font-bold text-[#212121] transition hover:bg-[#e6a100]" to="/programmes">
            VIEW ALL SEVEN PROGRAMMES
          </Link>
        </div>
      </section>
    </>
  );
}