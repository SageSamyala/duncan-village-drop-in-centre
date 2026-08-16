import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProgrammeCard({ item, index }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-black/5 bg-[#F7F7F3] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8">
      <div className="flex items-start justify-between">
        <span className="font-heading text-4xl text-[#1B5E20]/25">0{index + 1}</span>
        <ArrowUpRight className="text-[#6A1B9A]" aria-hidden="true" />
      </div>
      <p className="mt-8 text-xs font-bold uppercase tracking-wider text-[#6A1B9A]">FOR {item.age}</p>
      <h2 className="mt-3 font-heading text-2xl text-[#1B5E20]">{item.title}</h2>
      <p className="mt-4 flex-1 leading-7 text-black/65">{item.text}</p>
      <Link
        to="/contact"
        className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#E65100] hover:text-[#1B5E20]"
      >
        ENQUIRE ABOUT THIS PROGRAMME <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}