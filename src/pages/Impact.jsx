import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";

const stats = [
  ["96", "girls enrolled in the Powergirls Programme", "bg-[#1B5E20] text-white", "text-white/70"],
  ["42", "boys enrolled in the Young Gentlemen's Club", "bg-[#FFB300]", "text-black/70"],
  ["46", "children enrolled in ECD – Safe Park", "bg-[#6A1B9A] text-white", "text-white/70"],
  ["43", "homes supported through Growing Together", "bg-[#F1F7F1]", "text-black/70"]
];

const future = [
  ["Programme updates", "Term-by-term reporting from each of our seven programmes."],
  ["Community stories", "First-hand accounts, shared only with the consent of the people involved."],
  ["Events", "Awareness campaigns, school outreach and community gatherings."],
  ["Annual reporting", "Financial and programme reporting for donors and partners."]
];

export default function Impact() {
  return (
    <PageShell>
      <Seo
        title="Our impact"
        description="Verified programme enrolment figures for Duncan Village Safe Park and Drop-in Centre, including Powergirls, the Young Gentlemen's Club, ECD Safe Park and Growing Together."
        path="/impact"
      />
      <PageHero
        eyebrow="OUR IMPACT"
        title="Verified numbers. Real lives."
        text="We publish only figures reported by our own programme team. Where we do not yet have verified data, we say so rather than fill the gap."
      />

      <section aria-labelledby="numbers-heading" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 id="numbers-heading" className="font-heading text-4xl text-[#1B5E20]">Where we are right now</h2>
          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
            <Image
              src="https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/c1b379191_WhatsAppImage2026-08-04at14165217.jpg"
              alt="Children enjoying a meal together at the centre"
              className="min-h-[320px] w-full rounded-[2rem] lg:min-h-[520px]"
            />
            <div className="flex flex-col gap-4">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {stats.map(([n, t, tone, body]) => (
                  <div key={t} className={`flex flex-col justify-between rounded-3xl p-6 ${tone}`}>
                    <dt className="sr-only">{t}</dt>
                    <dd>
                      <b className="block font-heading text-5xl md:text-6xl">{n}</b>
                      <span className={`mt-6 block text-sm font-bold leading-6 ${body}`}>{t}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="rounded-2xl border-l-4 border-[#6A1B9A] bg-[#F3EDF7] p-5">
                <p className="text-sm font-bold leading-6 text-[#1B5E20]">
                  Our ECD Safe Park Day Care Centre is registered with the Department of Education.
                </p>
              </div>
              <p className="text-sm leading-6 text-black/55">
                Source: current programme enrolment as reported by our programme team. Figures are
                reviewed and updated as enrolment changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="accountability-heading" className="bg-[#1B5E20] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[.22em] text-[#FFB300]">ACCOUNTABILITY</p>
            <h2 id="accountability-heading" className="font-heading text-4xl leading-tight text-white md:text-5xl">
              How we report on our work.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/75">
              We are a registered NPO and PBO, and we are accountable to the families we serve as
              much as to our donors. We do not publish invented testimonials, case studies or
              projected outcomes. Donors and partners can request programme and financial
              information directly from our Financial Manager.
            </p>
            <Link to="/contact" className="mt-8 inline-flex min-h-14 items-center rounded-full bg-[#FFB300] px-7 text-sm font-bold text-[#212121] transition hover:bg-[#e6a100]">
              REQUEST INFORMATION
            </Link>
          </div>
          <dl className="grid gap-4 rounded-[2rem] bg-white/5 p-6 md:p-8">
            {[["NPO No.", "196-023"], ["PBO Ref No.", "930085949"], ["CIPC Reg No.", "2018/071881/08"], ["VAT registered", "Yes"]].map(([a, b]) => (
              <div key={a} className="flex flex-wrap items-baseline justify-between gap-3 border-b border-white/15 pb-4 last:border-0 last:pb-0">
                <dt className="text-sm text-white/60">{a}</dt>
                <dd className="font-heading text-xl text-white">{b}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="stories-heading" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-bold tracking-[.22em] text-[#6A1B9A]">COMING SOON</p>
          <h2 id="stories-heading" className="max-w-3xl font-heading text-4xl leading-tight text-[#1B5E20] md:text-5xl">
            Space for stories we can stand behind.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-black/65">
            These sections are prepared for real content as it becomes available. Nothing here is
            filled with placeholder outcomes.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {future.map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-dashed border-[#1B5E20]/25 p-7">
                <h3 className="font-heading text-xl text-[#1B5E20]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">{text}</p>
                <p className="mt-5 text-xs font-bold tracking-wider text-[#6A1B9A]">IN PREPARATION</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}