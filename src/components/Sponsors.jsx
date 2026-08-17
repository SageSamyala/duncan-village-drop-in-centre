import React from "react";
import { Image } from "@/components/ui/image";

const sponsors = [
  {
    name: "Department of Basic Education",
    logo: "https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/d46850fab_WhatsAppImage2026-08-17at105344.jpeg",
    note: "Our Safe Park Day Care Centre is registered with the Department of Education."
  },
  {
    name: "Shoprite",
    logo: "https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/3a141d744_WhatsAppImage2026-08-17at105745.jpeg",
    note: "Sponsor of our Growing Together programme and Nutrition (bread and soup)."
  },
  {
    name: "Lunchbox Fund",
    logo: "https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/c32149d32_WhatsAppImage2025-07-10at033142.jpeg"
  },
  {
    name: "DBSA — Development Bank of Southern Africa",
    logo: "https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/57969e371_WhatsAppImage2025-07-10at033305.jpeg"
  },
  {
    name: "Kinderfonds MAMAS",
    logo: "https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/885a1fdd8_WhatsAppImage2025-07-10at033403.jpeg"
  },
  {
    name: "Star Bread",
    logo: "https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/12ab8a0cb_generated_image.png",
    note: "Star Bread donates bread to our centre."
  }
];

export default function Sponsors() {
  return (
    <section aria-labelledby="sponsors-heading" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-bold tracking-[.22em] text-[#6A1B9A]">OUR SPONSORS &amp; PARTNERS</p>
        <h2 id="sponsors-heading" className="font-heading text-4xl text-[#1B5E20]">
          Supported by people who believe in this community.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((s) => (
            <div key={s.name} className="flex flex-col rounded-2xl border border-black/10 bg-white p-6">
              <div className="flex h-28 items-center justify-center">
                <Image
                  src={s.logo}
                  alt={`${s.name} logo`}
                  fittingType="fit"
                  className="h-24 w-full"
                />
              </div>
              <p className="mt-4 text-center font-heading text-lg text-[#212121]">{s.name}</p>
              {s.note && <p className="mt-2 text-center text-sm leading-6 text-black/65">{s.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}