import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { X, Mail, Phone } from "lucide-react";
import { nav } from "@/data/site";

/** Full-screen mobile navigation panel: locks page scroll, closes on Escape and on route change. */
export default function MobileNav({ open, onClose }) {
  const { pathname } = useLocation();

  useEffect(() => {
    onClose();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden" role="dialog" aria-modal="true" aria-label="Site navigation">
      <div className="flex items-center justify-between border-b px-5 py-4">
        <span className="font-heading text-base leading-tight text-[#1B5E20]">
          Duncan Village Safe Park<br />and Drop-in Centre
        </span>
        <button onClick={onClose} aria-label="Close navigation" className="rounded-lg p-3 text-[#1B5E20]">
          <X />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-5 py-2" aria-label="Mobile navigation">
        {nav.map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            onClick={onClose}
            className={({ isActive }) =>
              `flex min-h-14 items-center border-b border-black/5 text-sm font-bold tracking-wider ${isActive ? "text-[#6A1B9A]" : "text-[#212121]"}`
            }
          >
            {label}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
          onClick={onClose}
          className={({ isActive }) =>
            `flex min-h-14 items-center border-b border-black/5 text-sm font-bold tracking-wider ${isActive ? "text-[#6A1B9A]" : "text-[#212121]"}`
          }
        >
          CONTACT & GET SUPPORT
        </NavLink>
      </nav>

      <div className="border-t bg-[#F1F7F1] px-5 py-5">
        <Link
          onClick={onClose}
          to="/contact"
          className="flex min-h-14 items-center justify-center rounded-full bg-[#E65100] text-sm font-bold text-white"
        >
          I NEED SUPPORT
        </Link>
        <Link
          onClick={onClose}
          to="/get-involved"
          className="mt-3 flex min-h-14 items-center justify-center rounded-full bg-[#1B5E20] text-sm font-bold text-white"
        >
          SUPPORT OUR WORK
        </Link>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-[#1B5E20]">
          <a className="flex items-center gap-2" href="tel:0703156459"><Phone className="h-4 w-4" aria-hidden="true" />070 315 6459</a>
          <a className="flex items-center gap-2" href="mailto:info@dvdropincentre.org"><Mail className="h-4 w-4" aria-hidden="true" />info@dvdropincentre.org</a>
        </div>
      </div>
    </div>
  );
}