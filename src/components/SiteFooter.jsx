import React from "react";
import { Link } from "react-router-dom";
import { HeartHandshake, Mail, MapPin } from "lucide-react";
export default function SiteFooter() {
  return <footer className="bg-[#212121] text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
    <div><HeartHandshake className="mb-4 h-10 w-10 text-[#FFB300]"/><h2 className="font-heading text-2xl">Hands of Hope</h2><p className="mt-3 text-sm leading-7 text-white/70">Supporting people. Strengthening families. Building communities.</p></div>
    <div><h3 className="mb-4 font-bold text-[#FFB300]">VISIT & CONNECT</h3><p className="flex gap-3 text-sm leading-6 text-white/70"><MapPin className="shrink-0"/>Cnr Ford & Matanzima Street<br/>Duncan Village, East London<br/>South Africa</p><a className="mt-4 flex gap-3 text-sm text-white/70 hover:text-white" href="mailto:info@dvdropincentre.org"><Mail/>info@dvdropincentre.org</a></div>
    <div><h3 className="mb-4 font-bold text-[#FFB300]">ORGANISATION</h3><p className="text-sm leading-7 text-white/70">NPO No: 196-023<br/>PBO Ref No: 930085949<br/>CIPC Reg No: 2018/071881/08<br/>VAT Registered: Yes</p><div className="mt-4 flex gap-4 text-sm"><Link to="/about">About</Link><Link to="/team">Our Team</Link><Link to="/contact">Contact</Link></div></div>
  </div><div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">© {new Date().getFullYear()} Duncan Village Drop-in Centre. Children are the future.</div></footer>;
}