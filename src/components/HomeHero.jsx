import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";

/** Above-the-fold hero: who we help, what we do, and the two clearest next actions. */
export default function HomeHero() {
  return (
    <section className="bg-[#F1F7F1]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:px-8 lg:py-16">
        <div>
          <p className="mb-4 text-xs font-bold tracking-[.22em] text-[#6A1B9A]">
            DUNCAN VILLAGE, EAST LONDON · SINCE 2001
          </p>
          <h1 className="font-heading text-3xl leading-[1.1] text-[#1B5E20] sm:text-4xl lg:text-5xl">
            Care, safety and opportunity for children and families in Duncan Village.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-black/70 lg:text-lg lg:leading-8">
            We are a registered non-profit offering early childhood development, youth programmes,
            social casework and community support — free of charge, close to home.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

        <figure className="m-0 overflow-hidden rounded-[2rem] bg-white shadow-lg">
          <Image
            src="https://media.base44.com/images/public/6a75f1f68617f8a7b5abfa7c/c823abbba_WhatsAppImage2025-06-20at1006581.jpg"
            alt="Children playing games together in the centre's colourful courtyard while practitioners watch over them"
            className="block h-[260px] w-full sm:h-[320px] lg:h-[400px]"
            focalPointX={0.5}
            focalPointY={0.45}
          />
          <figcaption className="bg-[#FFB300] px-6 py-5 font-heading text-lg text-[#212121] sm:text-xl">
            Children are the future.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}