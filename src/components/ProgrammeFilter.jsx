import React, { useState } from "react";
import ProgrammeCard from "@/components/ProgrammeCard";
import { programmes } from "@/data/site";

const categories = ["All", "Early Childhood", "Youth & Teens", "Family & Social Care", "Community & Food Security"];

/** Programme grid with category filter tabs. */
export default function ProgrammeFilter() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? programmes : programmes.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter programmes by category">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={`min-h-12 rounded-full px-6 text-xs font-bold uppercase tracking-wider transition ${
              active === c
                ? "bg-[#1B5E20] text-white"
                : "border-2 border-[#1B5E20]/20 text-[#1B5E20] hover:border-[#1B5E20]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((item, i) => (
          <ProgrammeCard key={item.title} item={item} index={programmes.indexOf(item)} />
        ))}
      </div>
    </div>
  );
}