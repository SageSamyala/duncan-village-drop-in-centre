import React from "react";
import { ShieldCheck, CalendarCheck, GraduationCap, MapPin } from "lucide-react";

const markers = [
  [ShieldCheck, "Registered NPO", "NPO No. 196-023 · PBO Ref. 930085949"],
  [CalendarCheck, "Serving since 2001", "Founded by a veteran social worker"],
  [GraduationCap, "ECD registered", "Registered with the Department of Education"],
  [MapPin, "Rooted in Duncan Village", "Cnr Ford & Matanzima Street, East London"]
];

/** Credibility strip: verified registration and provenance markers. */
export default function TrustMarkers() {
  return (
    <section aria-labelledby="trust-heading" className="border-y border-black/5 bg-white px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 id="trust-heading" className="mb-8 text-xs font-bold tracking-[.22em] text-[#6A1B9A]">
          A REGISTERED, ACCOUNTABLE ORGANISATION
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {markers.map(([Icon, title, text]) => (
            <li key={title} className="flex gap-4">
              <Icon className="mt-1 h-6 w-6 shrink-0 text-[#1B5E20]" aria-hidden="true" />
              <div>
                <h3 className="font-heading text-lg text-[#1B5E20]">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-black/60">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}