import React from "react";

const years = [
  ["2024", "19"],
  ["2025", "23"],
  ["2026", "26"]
];

export default function StudentSupport() {
  return (
    <section aria-labelledby="student-support-heading" className="bg-[#F3EDF7] px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-xs font-bold tracking-[.22em] text-[#6A1B9A]">STUDENT SUPPORT</p>
          <h2 id="student-support-heading" className="font-heading text-4xl leading-tight text-[#1B5E20] md:text-5xl">
            From Duncan Village to university and TVET colleges.
          </h2>
          <p className="mt-6 text-lg leading-8 text-black/70">
            Students from our programmes have been successfully enrolled at universities and TVET
            colleges, each receiving a stipend of R1 500 for 3 months — courtesy of Kinderfonds
            MAMAS.
          </p>
        </div>
        <dl className="grid grid-cols-3 gap-4">
          {years.map(([year, count]) => (
            <div key={year} className="rounded-3xl bg-white p-6 text-center">
              <dt className="text-xs font-bold tracking-wider text-[#6A1B9A]">{year}</dt>
              <dd>
                <b className="mt-3 block font-heading text-5xl text-[#1B5E20] md:text-6xl">{count}</b>
                <span className="mt-3 block text-sm font-bold leading-5 text-black/60">students enrolled</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}