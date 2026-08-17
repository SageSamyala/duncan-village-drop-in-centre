import React from "react";
import EmergencyBar from "@/components/EmergencyBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#212121]">
      <EmergencyBar />
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}