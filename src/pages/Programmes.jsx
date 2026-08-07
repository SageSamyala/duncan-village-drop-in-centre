import React from "react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import ProgrammeCard from "@/components/ProgrammeCard";
import { programmes } from "@/data/site";
export default function Programmes() { return <PageShell><PageHero eyebrow="OUR PROGRAMMES" title="Seven pathways to stronger futures." text="Connected programmes for children, young people, individuals, families and the wider community."/><section className="px-5 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">{programmes.map((item,i)=><ProgrammeCard key={item.title} item={item} index={i}/>)}</div></section></PageShell>; }