import React from "react";
import { Image } from "@/components/ui/image";

const B = "https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/";

const md = { name: "Somila Mdlalana", role: "Managing Director / Social Worker", photo: B + "175ea9df1_WhatsAppImage2025-06-20at133004.jpg" };
const reports = [
  {
    name: "Sinesipho Jakavula", role: "Programs Manager / Social Worker", photo: B + "377ee0881_WhatsAppImage2025-06-20at122909.jpg",
    team: [
      ["Apelele Jonga", "Social Worker", B + "788e86cc1_WhatsAppImage2025-06-24at111331.jpg"],
      ["Nonzaliseko Maqungo", "Social Auxiliary Worker", B + "3ec8d28ea_WhatsAppImage2025-06-20at122244.jpg"],
      ["Nokuthula Yose", "Social Auxiliary Worker / ECD Practitioner", B + "d2eded699_WhatsAppImage2025-06-20at124936.jpeg"],
      ["Boniswa Tshemese", "Social Auxiliary Worker / ECD Practitioner", B + "6b94180ba_WhatsAppImage2025-06-20at125116.jpg"],
      ["Nomathamsanqa Ketani", "Childcare Worker / ECD Practitioner", B + "a9dc80c86_WhatsAppImage2025-06-20at133424.jpg"],
      ["Vuyelwa Mahlahla", "Childcare Worker", B + "a961f0631_WhatsAppImage2025-06-20at133605.jpg"],
      ["Nondumiso Soga", "ECD Practitioner", B + "c9a106643_WhatsAppImage2025-06-20at132214.jpeg"],
      ["Zibele Patso", "Caretaker / Security", B + "ee1844413_WhatsAppImage2025-06-24at110908.jpeg"],
    ],
  },
  {
    name: "Zimkhitha Nweba", role: "Financial Manager", photo: B + "b47461789_WhatsAppImage2025-09-16at094045.jpg",
    team: [
      ["Lungiswa Siganga", "Administrator", B + "a0863f4b8_WhatsAppImage2025-06-20at125808.jpg"],
      ["Nontsikelelo Tshantshi", "Childcare Worker / ECD Practitioner", B + "a12db974e_WhatsAppImage2025-06-21at090935.jpg"],
    ],
  },
];
const additional = [
  { label: "Gardeners", names: ["Mbulelo Mbambisa", "Orlando Somdaka"] },
  { label: "Child & Youth Care Students", names: ["Tandile Kula", "Veronica Tumana"] },
];

function Portrait({ src, name }) {
  return (
    <div className="mx-auto h-20 w-20 overflow-hidden rounded-full ring-4 ring-[#FFB300]">
      <Image src={src} alt={name} className="h-full w-full" />
    </div>
  );
}

export default function OrgChart() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-bold tracking-[.22em] text-[#E65100]">ORGANISATIONAL STRUCTURE</p>
        <h2 className="font-heading text-4xl leading-tight text-[#1B5E20] md:text-5xl">Our organogram</h2>

        {/* Top level */}
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-xs rounded-2xl border border-[#1B5E20] bg-white p-6 text-center shadow-md">
            <Portrait src={md.photo} name={md.name} />
            <h3 className="mt-4 font-heading text-xl text-[#1B5E20]">{md.name}</h3>
            <p className="mt-1 text-[11px] font-bold tracking-wider text-[#E65100]">{md.role}</p>
          </div>
        </div>

        {/* Connector */}
        <div className="mx-auto h-10 w-px bg-[#1B5E20]/30" />

        {/* Second level */}
        <div className="grid gap-6 md:grid-cols-2">
          {reports.map((mgr) => (
            <div key={mgr.name} className="rounded-3xl bg-[#F1F7F1] p-6 md:p-8">
              <div className="rounded-2xl bg-[#1B5E20] px-6 py-6 text-center text-white">
                <Portrait src={mgr.photo} name={mgr.name} />
                <h3 className="mt-4 font-heading text-xl">{mgr.name}</h3>
                <p className="mt-1 text-[11px] font-bold tracking-wider text-[#FFB300]">{mgr.role}</p>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {mgr.team.map(([n, r, p]) => (
                  <li key={n} className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-3">
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[#FFB300]">
                      <Image src={p} alt={n} className="h-full w-full" />
                    </div>
                    <div>
                      <p className="text-sm font-bold leading-tight text-[#212121]">{n}</p>
                      <p className="text-[11px] leading-tight text-black/55">{r}</p>
                    </div>
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