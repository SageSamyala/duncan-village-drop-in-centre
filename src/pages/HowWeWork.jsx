import React from "react";
import { Link } from "react-router-dom";
import { UserRound, Users, Sprout } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";

const approaches = [
  {
    icon: UserRound,
    label: "APPROACH 01",
    title: "Casework",
    who: "Individuals and families",
    text: "Individualised support for people facing crisis, hardship or complex circumstances. We walk alongside each person, from first assessment to follow-up.",
    items: ["Counselling and psychosocial assessments", "Home visits and case management", "Crisis and disaster response", "Food parcels and school support", "SASSA, Home Affairs and documentation assistance", "Referrals to CMR, DSD and SAPS", "RUMS support for refugees, undocumented, migrated and stateless clients"],
    tone: "bg-[#1B5E20] text-white",
    accent: "text-[#FFB300]",
    dot: "bg-[#FFB300]",
    divider: "border-white/20",
    body: "text-white/75"
  },
  {
    icon: Users,
    label: "APPROACH 02",
    title: "Group work",
    who: "Children, youth and parents",
    text: "Structured groups where shared experience builds confidence, interpersonal skills and leadership. Change happens faster when nobody does it alone.",
    items: ["Powergirls Programme (girls 9–16)", "Young Gentlemen's Club (boys 9–17)", "Parenting support groups", "Life-skills groups", "Reading groups"],
    tone: "bg-[#F3EDF7]",
    accent: "text-[#6A1B9A]",
    dot: "bg-[#6A1B9A]",
    divider: "border-black/10",
    body: "text-black/65"
  },
  {
    icon: Sprout,
    label: "APPROACH 03",
    title: "Community work",
    who: "The wider Duncan Village community",
    text: "Working with the community rather than for it — mobilising people, schools and partners around shared priorities and long-term self-reliance.",
    items: ["Awareness campaigns, including Foetal Alcohol Syndrome", "Stakeholder collaboration", "School partnerships", "Community mobilisation", "Food gardening through Growing Together"],
    tone: "bg-[#F7F7F3]",
    accent: "text-[#E65100]",
    dot: "bg-[#E65100]",
    divider: "border-black/10",
    body: "text-black/65"
  }
];

export default function HowWeWork() {
  return (
    <PageShell>
      <Seo
        title="How we work"
        description="Casework, group work and community work: the three connected intervention approaches we use to support children, families and the wider Duncan Village community."
        path="/how-we-work"
      />
      <PageHero
        eyebrow="HOW WE WORK"
        title="From individual support to community strength."
        text="Three connected intervention approaches help us respond with care, consistency and purpose."
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {approaches.map(({ icon: Icon, label, title, who, text, items, tone, accent, dot, divider, body }) => (
            <article key={title} className={`flex flex-col rounded-[2rem] p-8 md:p-10 ${tone}`}>
              <Icon className={`h-10 w-10 ${accent}`} aria-hidden="true" />
              <p className={`mt-6 text-xs font-bold tracking-[.2em] ${accent}`}>{label}</p>
              <h2 className="mt-3 font-heading text-3xl">{title}</h2>
              <p className={`mt-2 text-sm font-bold ${accent}`}>For: {who}</p>
              <p className={`mt-5 leading-8 ${body}`}>{text}</p>
              <ul className={`mt-7 space-y-3 border-t pt-7 text-sm leading-6 ${body} ${divider}`}>
                {items.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-wrap gap-3">
          <Link to="/contact" className="inline-flex min-h-14 items-center rounded-full bg-[#E65100] px-7 text-sm font-bold text-white transition hover:bg-[#c94700]">
            GET SUPPORT
          </Link>
          <Link to="/programmes" className="inline-flex min-h-14 items-center rounded-full border-2 border-[#1B5E20]/25 px-7 text-sm font-bold text-[#1B5E20] transition hover:border-[#1B5E20]">
            EXPLORE PROGRAMMES
          </Link>
        </div>
      </section>
    </PageShell>
  );
}