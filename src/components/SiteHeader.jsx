import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Image } from "@/components/ui/image";
import { nav } from "@/data/site";
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
      <Link to="/" className="flex items-center gap-3" aria-label="Duncan Village Safe Park and Drop-in Centre home">
        <Image src="https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/fcca44e48_WhatsAppImage2025-06-20at112612.jpeg" alt="Hands of Hope logo" className="h-11 w-11 overflow-hidden rounded-full" fittingType="fill" focalPointX={0.5} focalPointY={0.35} />
        <span><b className="block font-heading text-sm text-[#1B5E20] sm:text-base">HANDS OF HOPE</b><small className="block text-[10px] font-bold tracking-[.16em] text-[#E65100]">CHILDREN ARE THE FUTURE</small></span>
      </Link>
      <nav className="hidden items-center gap-4 xl:flex" aria-label="Main navigation">{nav.map(([label, path]) => <NavLink key={path} to={path} className={({isActive}) => `text-[11px] font-bold tracking-wider transition ${isActive ? "text-[#E65100]" : "text-[#212121] hover:text-[#1B5E20]"}`}>{label}</NavLink>)}<Link to="/contact" className="support-pulse rounded-full bg-[#E65100] px-5 py-3 text-xs font-bold tracking-wider text-white">GET SUPPORT</Link></nav>
      <button className="rounded-lg p-3 xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t bg-white px-5 py-5 xl:hidden" aria-label="Mobile navigation">{nav.map(([label,path]) => <NavLink onClick={() => setOpen(false)} className="block border-b py-3 text-sm font-bold" key={path} to={path}>{label}</NavLink>)}<Link onClick={() => setOpen(false)} to="/contact" className="mt-4 block rounded-full bg-[#E65100] px-5 py-4 text-center text-sm font-bold text-white">GET SUPPORT</Link></nav>}
  </header>;
}