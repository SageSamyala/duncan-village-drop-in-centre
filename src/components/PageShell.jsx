import React from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#212121]">
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}