import React from "react";
import { Image } from "@/components/ui/image";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { team } from "@/data/site";

export default function Team() {
  return (
    <PageShell>
      <Seo
        title="Our team"
        description="Meet the social workers, practitioners and support staff of Duncan Village Safe Park and Drop-in Centre in East London, South Africa."
        path="/team"
      />
      <PageHero
        eyebrow="OUR TEAM"
        title="People committed to community."
        text="Meet the leadership and team serving Duncan Village Safe Park and Drop-in Centre."
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-3xl text-[#1B5E20]">Leadership</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.slice(0, 4).map(([n, r, p]) => (
              <article className="overflow-hidden rounded-3xl bg-[#1B5E20] text-white" key={n}>
                <div className="h-56 w-full overflow-hidden">
                  <Image src={p} alt={n} className="h-full w-full" focalPointX={0.5} focalPointY={0.3} />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl">{n}</h3>
                  <p className="mt-2 text-sm font-bold text-white/65">{r}</p>
                </div>
              </article>
            ))}
          </div>
          <h2 className="mt-16 font-heading text-3xl text-[#1B5E20]">Our team</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.slice(4).map(([n, r, p]) => (
              <article className="flex items-center gap-4 rounded-2xl border border-black/10 p-5" key={n}>
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-[#6A1B9A]/40">
                  <Image src={p} alt={n} className="h-full w-full" focalPointX={0.5} focalPointY={0.3} />
                </div>
                <div>
                  <h3 className="font-heading text-lg">{n}</h3>
                  <p className="text-xs leading-tight text-black/55">{r}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}