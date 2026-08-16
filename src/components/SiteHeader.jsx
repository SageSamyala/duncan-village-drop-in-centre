import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Image } from "@/components/ui/image";
import { nav } from "@/data/site";

const LOGO = "https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/fcca44e48_WhatsAppImage2025-06-20at112612.jpeg";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-[#1B5E20] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Duncan Village Safe Park and Drop-in Centre home">
          <Image
            src={LOGO}
            alt="Duncan Village Safe Park and Drop-in Centre logo"
            className="h-11 w-11 shrink-0 overflow-hidden rounded-full"
            focalPointX={0.5}
            focalPointY={0.35}
          />
          <span className="max-w-[11rem] sm:max-w-[13rem]">
            <b className="block font-heading text-xs leading-tight text-[#1B5E20] sm:text-sm md:text-base">
              Duncan Village Safe Park<br />and Drop-in Centre
            </b>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Main navigation">
          {nav.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-[11px] font-bold tracking-wider transition ${isActive ? "text-[#6A1B9A]" : "text-[#212121] hover:text-[#1B5E20]"}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/get-involved"
            className="rounded-full border-2 border-[#1B5E20] px-4 py-2.5 text-[11px] font-bold tracking-wider text-[#1B5E20] transition hover:bg-[#1B5E20] hover:text-white"
          >
            DONATE
          </Link>
          <Link
            to="/contact"
            className="support-pulse rounded-full bg-[#E65100] px-5 py-3 text-[11px] font-bold tracking-wider text-white transition hover:bg-[#c94700]"
          >
            GET SUPPORT
          </Link>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <Link
            to="/contact"
            className="rounded-full bg-[#E65100] px-4 py-3 text-[11px] font-bold tracking-wider text-white"
          >
            GET SUPPORT
          </Link>
          <button
            className="rounded-lg p-3 text-[#1B5E20]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t bg-white px-5 py-5 xl:hidden" aria-label="Mobile navigation">
          {nav.map(([label, path]) => (
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) => `block border-b py-4 text-sm font-bold ${isActive ? "text-[#6A1B9A]" : "text-[#212121]"}`}
              key={path}
              to={path}
            >
              {label}
            </NavLink>
          ))}
          <Link
            onClick={() => setOpen(false)}
            to="/contact"
            className="mt-5 block rounded-full bg-[#E65100] px-5 py-4 text-center text-sm font-bold text-white"
          >
            GET SUPPORT
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/get-involved"
            className="mt-3 block rounded-full bg-[#1B5E20] px-5 py-4 text-center text-sm font-bold text-white"
          >
            SUPPORT OUR WORK
          </Link>
        </nav>
      )}
    </header>
  );
}