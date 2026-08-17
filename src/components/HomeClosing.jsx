import React from "react";
import { Link } from "react-router-dom";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  [2001, "", "year established"],
  [96, "+", "girls enrolled in Powergirls"],
  [42, "+", "boys in the Young Gentlemen's Club"],
  [43, "+", "homes in Growing Together"]
];

export default function HomeClosing() {
  return (
    <>
      <section aria-labelledby="impact-heading" className="bg-[#212121] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-bold tracking-[.22em] text-[#FFB300]">OUR IMPACT</p>
          <h2 id="impact-heading" className="max-w-3xl font-heading text-4xl leading-tight md:text-5xl">
            Current enrolment across our programmes.
          </h2>
          <dl className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map(([n, suffix, t]) => (
              <div key={t}>
                <dt className="sr-only">{t}</dt>
                <dd>
                  <AnimatedCounter value={n} suffix={suffix} className="block font-heading text-5xl text-[#FFB300] md:text-6xl" />
                  <span className="mt-3 block text-sm leading-6 text-white/70">{t}</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-sm text-white/55">
            Figures reflect current programme enrolment as reported by our team.
          </p>
          <Link to="/impact" className="mt-6 inline-flex text-sm font-bold text-[#FFB300] hover:underline">
            SEE OUR FULL IMPACT →
          </Link>
        </div>
      </section>

      <section aria-labelledby="cta-heading" className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <div className="rounded-3xl bg-[#FFF4DD] p-8 md:p-10">
            <h2 id="cta-heading" className="font-heading text-3xl text-[#1B5E20]">Need support?</h2>
            <p className="mt-4 leading-7 text-black/65">
              Whether it is social and family support, education and career guidance, or a place for
              your child, our team will point you to the right person. Support is free of charge.
            </p>
            <Link to="/contact" className="mt-7 inline-flex min-h-14 items-center rounded-full bg-[#E65100] px-7 text-sm font-bold text-white transition hover:bg-[#c94700]">
              GET SUPPORT
            </Link>
          </div>
          <div className="rounded-3xl bg-[#F3EDF7] p-8 md:p-10">
            <h2 className="font-heading text-3xl text-[#6A1B9A]">Want to help?</h2>
            <p className="mt-4 leading-7 text-black/65">
              Donate to a registered NPO, volunteer your time and skills, or partner with us to
              strengthen a programme in Duncan Village.
            </p>
            <Link to="/get-involved" className="mt-7 inline-flex min-h-14 items-center rounded-full bg-[#6A1B9A] px-7 text-sm font-bold text-white transition hover:bg-[#571580]">
              SUPPORT OUR WORK
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}