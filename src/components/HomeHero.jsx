import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";

/** Above-the-fold hero: who we help, what we do, and the two clearest next actions. */
export default function HomeHero() {
  return (
    <section className="grid bg-[#F1F7F1] lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.05fr_1fr]">
      <div className="flex items-center px-5 py-14 md:py-20 lg:px-[max(2rem,calc((100vw-80rem)/2))] lg:pr-14">
        <div>
          <p className="mb-5 text-xs font-bold tracking-[.22em] text-[#6A1B9A]">
            DUNCAN VILLAGE, EAST LONDON · SINCE 2001
          </p>
          <h1 className="font-heading text-4xl leading-[1.05] text-[#1B5E20] sm:text-5xl md:text-6xl">
            Care, safety and opportunity for children and families in Duncan Village.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-black/70">
            We are a registered non-profit offering early childhood development, youth programmes,
            social casework and community support — free of charge, close to home.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/contact"
              className="support-pulse inline-flex min-h-14 items-center justify-center rounded-full bg-[#E65100] px-7 text-sm font-bold tracking-wide text-white transition hover:bg-[#c94700]"
            >
              I NEED SUPPORT
            </Link>
            <Link
              to="/get-involved"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#1B5E20] px-7 text-sm font-bold tracking-wide text-white transition hover:bg-[#174d1b]"
            >
              SUPPORT OUR WORK
            </Link>
            <Link
              to="/programmes"
              className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-[#1B5E20]/25 px-7 text-sm font-bold tracking-wide text-[#1B5E20] transition hover:border-[#1B5E20]"
            >
              EXPLORE PROGRAMMES
            </Link>
          </div>
        </div>
      </div>
      <div className="relative min-h-[360px] md:min-h-[460px] lg:min-h-full">
        <Image
          src="https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/be2ad761c_WhatsAppImage2026-08-04at142759.jpg"
          alt="A Duncan Village Safe Park and Drop-in Centre team member speaking to learners at a school outreach"
          className="absolute inset-0 h-full w-full"
          focalPointX={0.5}
          focalPointY={0.35}
        />
        <p className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#FFB300] p-5 font-heading text-xl text-[#212121] sm:right-auto sm:text-2xl">
          Children are the future.
        </p>
      </div>
    </section>
  );
}