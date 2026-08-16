import React from "react";
export default function SectionTitle({ id, label, title, text, light = false }) {
  return (
    <div className="max-w-3xl">
      <p className={`mb-3 text-xs font-bold tracking-[.22em] ${light ? "text-[#FFB300]" : "text-[#6A1B9A]"}`}>{label}</p>
      <h2 id={id} className={`font-heading text-4xl leading-tight md:text-5xl ${light ? "text-white" : "text-[#1B5E20]"}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg leading-8 ${light ? "text-white/75" : "text-black/65"}`}>{text}</p>}
    </div>
  );
}