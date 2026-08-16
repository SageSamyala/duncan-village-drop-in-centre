import React from "react";
import { Link } from "react-router-dom";
import { HeartHandshake, Users, Sprout, ArrowRight } from "lucide-react";

const ways = [
  [HeartHandshake, "One-to-one casework", "Counselling, assessments, home visits, crisis response, food parcels and referrals for individuals and families.", "/how-we-work"],
  [Users, "Group work", "Powergirls, Young Gentlemen's Club, life-skills and reading groups that build confidence and leadership together.", "/programmes"],
  [Sprout, "Community work", "Awareness campaigns, school partnerships, food gardening and community mobilisation.", "/how-we-work"]
];

/** "How we help" — the three ways support reaches people. */
export default function HomeHelp() {
  return (
    <section aria-labelledby="help-heading" className="bg-[#F7F7F3] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-bold tracking-[.22em] text-[#6A1B9A]">HOW WE HELP</p>
        <h2 id="help-heading" className="max-w-3xl font-heading text-4xl leading-tight text-[#1B5E20] md:text-5xl">
          Support shaped around real lives.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ways.map(([Icon, title, text, to]) => (
            <article key={title} className="flex flex-col rounded-3xl bg-white p-8">
              <Icon className="h-9 w-9 text-[#6A1B9A]" aria-hidden="true" />
              <h3 className="mt-6 font-heading text-2xl text-[#1B5E20]">{title}</h3>
              <p className="mt-3 flex-1 leading-7 text-black/60">{text}</p>
              <Link to={to} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#E65100] hover:text-[#1B5E20]">
                LEARN MORE <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}