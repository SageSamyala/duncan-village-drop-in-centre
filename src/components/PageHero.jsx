import React from "react";
export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="relative overflow-hidden bg-[#F1F7F1] px-5 py-16 lg:px-8 lg:py-24">
      <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[48px] border-[#FFB300]/20" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full border-[36px] border-[#6A1B9A]/15" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-bold tracking-[.22em] text-[#6A1B9A]">{eyebrow}</p>
        <h1 className="max-w-4xl font-heading text-4xl leading-[1.05] text-[#1B5E20] sm:text-5xl md:text-6xl">{title}</h1>
        {text && <p className="mt-6 max-w-3xl text-lg leading-8 text-black/70">{text}</p>}
      </div>
    </section>
  );
}