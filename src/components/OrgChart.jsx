import React from "react";
import { Image } from "@/components/ui/image";

const md = { name: "Somila Mdlalala", role: "Managing Director / Social Worker" };
const reports = [
  {
    name: "Sinesipho Jakavula", role: "Programs Manager / Social Worker",
    team: [
      ["Apelele Jonga", "Social Worker"],
      ["Nonzaliseko Maqungo", "Social Auxiliary Worker"],
      ["Nokuthula Yose", "Social Auxiliary Worker / ECD Practitioner"],
      ["Boniswa Tshemese", "Social Auxiliary Worker / ECD Practitioner"],
      ["Nomathamsanqa Ketani", "Childcare Worker / ECD Practitioner"],
      ["Vuyelwa Mahlahla", "Childcare Worker"],
      ["Nondumiso Soga", "ECD Practitioner"],
      ["Zibele Patso", "Caretaker / Security"],
    ],
  },
  {
    name: "Zimkhitha Nweba", role: "Financial Manager",
    team: [
      ["Lungiswa Siganga", "Administrator"],
      ["Nontsikelelo Tshantshi", "Childcare Worker / ECD Practitioner"],
    ],
  },
];
const additional = [
  { label: "Gardeners", names: ["Mbulele Mbambisa", "Orlando Somdaka"] },
  { label: "Child & Youth Care Students", names: ["Tandile Kula", "Veronica Tumana"] },
];

export default function OrgChart() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-bold tracking-[.22em] text-[#E65100]">ORGANISATIONAL STRUCTURE</p>
        <h2 className="font-heading text-4xl leading-tight text-[#1B5E20] md:text-5xl">Our organogram</h2>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/10">
          <Image
            src="https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/4ff1b554d_IMG-20260806-WA0014.jpg"
            alt="Duncan Village Drop-in Centre organisational structure organogram"
            className="h-auto w-full"
            fittingType="fit"
          />
        </div>

        {/* Top level */}
        <div className="mt-14 flex justify-center">
          <div className="rounded-2xl border border-[#1B5E20] bg-white px-8 py-6 text-center shadow-md md:px-12">
            <h3 className="font-heading text-2xl text-[#1B5E20]">{md.name}</h3>
            <p className="mt-1 text-xs font-bold tracking-wider text-[#E65100]">{md.role}</p>
          </div>
        </div>

        {/* Connector */}
        <div className="mx-auto h-10 w-px bg-[#1B5E20]/30" />

        {/* Second level */}
        <div className="grid gap-6 md:grid-cols-2">
          {reports.map((mgr) => (
            <div key={mgr.name} className="rounded-3xl bg-[#F1F7F1] p-6 md:p-8">
              <div className="rounded-2xl bg-[#1B5E20] px-6 py-5 text-center text-white">
                <h3 className="font-heading text-xl">{mgr.name}</h3>
                <p className="mt-1 text-[11px] font-bold tracking-wider text-[#FFB300]">{mgr.role}</p>
              </div>
              <ul className="mt-6 space-y-3">
                {mgr.team.map(([n, r]) => (
                  <li key={n} className="rounded-xl border border-black/5 bg-white p-4">
                    <p className="font-bold text-[#212121]">{n}</p>
                    <p className="text-xs text-black/55">{r}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional staff */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {additional.map((grp) => (
            <div key={grp.label} className="rounded-2xl border-l-4 border-[#FFB300] bg-[#FFF4DD] p-6">
              <p className="text-xs font-bold tracking-wider text-[#E65100]">{grp.label}</p>
              <p className="mt-2 font-heading text-lg text-[#1B5E20]">{grp.names.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}