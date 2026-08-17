import React from "react";
import { MessageCircle } from "lucide-react";

const HREF =
  "https://wa.me/27703156459?text=Hello%20Duncan%20Village%20Drop-in%20Centre,%20I%20would%20like%20to%20enquire%20about...";

/** Floating WhatsApp quick action with a hover/focus tooltip. */
export default function WhatsAppButton() {
  return (
    <a
      href={HREF}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition hover:scale-105 hover:bg-[#1eb857]"
      aria-label="Chat with our team on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" aria-hidden="true" />
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-[#212121] px-3 py-2 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
        Chat with our team on WhatsApp
      </span>
    </a>
  );
}