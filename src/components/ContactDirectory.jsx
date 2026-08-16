import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const rows = [
  ["Social & family support", "Casework, counselling, food parcels, SASSA and Home Affairs assistance", "Sinesipho Jakavula", "068 592 8094", "SinesiphoJakavula@dvdropincentre.org"],
  ["Education & career support", "Homework help, tertiary and TVET applications, NSFAS, job seeking", "Sinesipho Jakavula", "068 592 8094", "SinesiphoJakavula@dvdropincentre.org"],
  ["Early childhood development", "Safe Park Day Care enrolment and ECD enquiries", "Somila Mdlalana", "070 315 6459", "SomilaMdlalana@dvdropincentre.org"],
  ["Volunteering & partnerships", "Offering your time, skills or organisational collaboration", "Somila Mdlalana", "070 315 6459", "SomilaMdlalana@dvdropincentre.org"],
  ["Donations & finance", "Banking confirmations, receipts and donor queries", "Zimkhitha Nweba", "081 421 2265", "ZimkhithaNweba@dvdropincentre.org"]
];

/** Who to contact, by purpose. */
export default function ContactDirectory() {
  return (
    <section aria-labelledby="directory-heading" className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 id="directory-heading" className="font-heading text-4xl text-[#1B5E20]">Who to contact</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-black/65">
          Reach the right person directly. We aim to respond to enquiries within two working days.
          If your situation is urgent, please phone rather than email.
        </p>
        <ul className="mt-10 divide-y divide-black/10 border-y border-black/10">
          {rows.map(([purpose, detail, person, phone, email]) => (
            <li key={purpose + person} className="grid gap-3 py-7 md:grid-cols-[1.1fr_1fr] md:gap-8">
              <div>
                <h3 className="font-heading text-2xl text-[#1B5E20]">{purpose}</h3>
                <p className="mt-2 leading-7 text-black/60">{detail}</p>
              </div>
              <div className="md:text-right">
                <p className="font-bold">{person}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-sm font-bold text-[#1B5E20] md:justify-end">
                  <a className="inline-flex items-center gap-2 hover:text-[#6A1B9A]" href={`tel:${phone.replace(/ /g, "")}`}>
                    <Phone className="h-4 w-4" aria-hidden="true" />{phone}
                  </a>
                  <a className="inline-flex items-center gap-2 break-all hover:text-[#6A1B9A]" href={`mailto:${email}`}>
                    <Mail className="h-4 w-4" aria-hidden="true" />{email}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm leading-7 text-black/60">
          Wanting to give instead? <Link className="font-bold text-[#6A1B9A] underline" to="/get-involved">See our donation and volunteering details</Link>.
        </p>
      </div>
    </section>
  );
}