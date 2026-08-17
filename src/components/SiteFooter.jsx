import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { Image } from "@/components/ui/image";
import { nav } from "@/data/site";

const LOGO = "https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/fcca44e48_WhatsAppImage2025-06-20at112612.jpeg";

export default function SiteFooter() {
  return (
    <footer className="bg-[#212121] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Image
            src={LOGO}
            alt="Duncan Village Safe Park and Drop-in Centre logo"
            className="mb-5 h-14 w-14 overflow-hidden rounded-full"
            focalPointX={0.5}
            focalPointY={0.35}
          />
          <h2 className="font-heading text-xl leading-tight">Duncan Village Safe Park<br />and Drop-in Centre</h2>
          <p className="mt-4 text-sm leading-7 text-white/70">
            Supporting people. Strengthening families. Building communities. Serving Duncan Village
            since 2001.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-bold tracking-[.18em] text-[#FFB300]">VISIT & CONNECT</h3>
          <p className="flex gap-3 text-sm leading-6 text-white/70">
            <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>Cnr Ford & Matanzima Street<br />Duncan Village, East London<br />South Africa</span>
          </p>
          <a className="mt-4 flex items-center gap-3 text-sm text-white/70 transition hover:text-white" href="mailto:info@dvdropincentre.org">
            <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />info@dvdropincentre.org
          </a>
          <a className="mt-3 flex items-center gap-3 text-sm text-white/70 transition hover:text-white" href="tel:0703156459">
            <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />070 315 6459
          </a>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="mb-5 text-xs font-bold tracking-[.18em] text-[#FFB300]">EXPLORE</h3>
          <ul className="space-y-3 text-sm text-white/70">
            {nav.map(([label, path]) => (
              <li key={path}>
                <Link className="transition hover:text-white" to={path}>{label}</Link>
              </li>
            ))}
            <li><Link className="transition hover:text-white" to="/contact">CONTACT & GET SUPPORT</Link></li>
          </ul>
        </nav>

        <div>
          <h3 className="mb-5 text-xs font-bold tracking-[.18em] text-[#FFB300]">ORGANISATION</h3>
          <dl className="space-y-3 text-sm text-white/70">
            {[["NPO No.", "196-023"], ["PBO Ref No.", "930085949"], ["CIPC Reg No.", "2018/071881/08"], ["VAT No.", "4230324750"]].map(([a, b]) => (
              <div key={a}>
                <dt className="text-white/45">{a}</dt>
                <dd className="font-bold text-white/80">{b}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs font-bold leading-5 text-[#FFB300]">Section 18A tax deductible donations</p>
          <Link
            to="/get-involved"
            className="mt-6 inline-flex min-h-12 items-center rounded-full bg-[#FFB300] px-6 text-xs font-bold tracking-wider text-[#212121] transition hover:bg-[#e6a100]"
          >
            SUPPORT OUR WORK
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs leading-6 text-white/50">
        © {new Date().getFullYear()} Duncan Village Safe Park and Drop-in Centre. Children are the future.
      </div>
    </footer>
  );
}