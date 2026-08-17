import React, { useState } from "react";
import { AlertCircle, X } from "lucide-react";

const lines = [
  ["Childline", "116", "tel:116"],
  ["GBV Command Centre", "0800 428 428", "tel:0800428428"],
  ["Centre direct", "070 315 6459", "tel:0703156459"]
];

/** Discreet, dismissible crisis line bar above the site header. */
export default function EmergencyBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="bg-[#212121] text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-2 text-[11px] lg:px-8">
        <span className="flex items-center gap-2 font-bold tracking-wider text-[#FFB300]">
          <AlertCircle className="h-4 w-4" aria-hidden="true" />
          NEED URGENT EMERGENCY HELP?
        </span>
        {lines.map(([label, number, href]) => (
          <span key={label} className="text-white/70">
            {label}:{" "}
            <a className="font-bold text-white underline decoration-white/30 hover:decoration-white" href={href}>
              {number}
            </a>
          </span>
        ))}
        <button
          onClick={() => setOpen(false)}
          className="ml-auto rounded p-1 text-white/60 transition hover:text-white"
          aria-label="Hide emergency contact bar"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}