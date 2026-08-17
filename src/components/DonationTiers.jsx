import React, { useState } from "react";
import { FileCheck } from "lucide-react";

const tiers = [
  ["150", "Feeds a child nutritious meals for a month."],
  ["350", "Provides a school uniform and learning supplies."],
  ["750", "Funds a youth club member's after-school mentorship for a term."]
];

const REF = "mailto:ZimkhithaNweba@dvdropincentre.org";

/** Impact tiers with a custom amount, plus the Section 18A tax certificate note. */
export default function DonationTiers() {
  const [selected, setSelected] = useState("350");
  const [custom, setCustom] = useState("");
  const amount = selected === "custom" ? custom : selected;

  return (
    <section aria-labelledby="tiers-heading" className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-bold tracking-[.22em] text-[#6A1B9A]">YOUR GIFT IN CONTEXT</p>
        <h2 id="tiers-heading" className="font-heading text-4xl text-[#1B5E20] md:text-5xl">
          What your donation makes possible.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map(([amt, text]) => {
            const active = selected === amt;
            return (
              <button
                key={amt}
                type="button"
                onClick={() => setSelected(amt)}
                aria-pressed={active}
                className={`flex flex-col rounded-3xl p-7 text-left transition hover:-translate-y-1 hover:shadow-xl ${
                  active ? "bg-[#1B5E20] text-white" : "bg-[#F7F7F3] text-[#212121]"
                }`}
              >
                <b className="font-heading text-4xl">R{amt}</b>
                <span className={`mt-4 text-sm leading-6 ${active ? "text-white/75" : "text-black/60"}`}>{text}</span>
              </button>
            );
          })}
          <div
            className={`flex flex-col rounded-3xl p-7 transition ${
              selected === "custom" ? "bg-[#6A1B9A] text-white" : "bg-[#F3EDF7]"
            }`}
          >
            <label className="text-sm font-bold" htmlFor="custom-amount">Custom amount</label>
            <div className="mt-3 flex items-center gap-2">
              <span className="font-heading text-2xl">R</span>
              <input
                id="custom-amount"
                type="number"
                min="1"
                value={custom}
                onFocus={() => setSelected("custom")}
                onChange={(e) => { setSelected("custom"); setCustom(e.target.value); }}
                placeholder="0"
                className="min-h-12 w-full rounded-xl border border-black/10 px-3 text-[#212121]"
              />
            </div>
            <p className={`mt-4 text-xs leading-5 ${selected === "custom" ? "text-white/75" : "text-black/55"}`}>
              Every amount goes directly into programme work.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-3xl bg-[#FFF4DD] p-7">
          <p className="flex-1 text-sm leading-7 text-black/70">
            {amount
              ? <>You have selected <b className="text-[#1B5E20]">R{amount}</b>. Use the banking details below and enter your name as the payment reference, or email us to arrange a debit order.</>
              : <>Choose an amount above, then use the banking details below with your name as the payment reference.</>}
          </p>
          <a
            href="#donate"
            className="inline-flex min-h-14 items-center rounded-full bg-[#E65100] px-7 text-sm font-bold text-white transition hover:bg-[#c94700]"
          >
            SEE BANKING DETAILS
          </a>
        </div>

        <div className="mt-5 flex flex-col gap-5 rounded-3xl border-l-4 border-[#1B5E20] bg-[#F1F7F1] p-7 md:flex-row md:items-center">
          <FileCheck className="h-9 w-9 shrink-0 text-[#1B5E20]" aria-hidden="true" />
          <div className="flex-1">
            <h3 className="font-heading text-2xl text-[#1B5E20]">Section 18A tax deductible</h3>
            <p className="mt-2 text-sm leading-7 text-black/65">
              We are an approved Public Benefit Organisation (PBO Ref No. 930085949). South African
              taxpayers and businesses can request a Section 18A tax certificate for their donation
              and claim the deduction on assessment.
            </p>
          </div>
          <a
            href={`${REF}?subject=${encodeURIComponent("Section 18A tax certificate request")}`}
            className="inline-flex min-h-14 items-center rounded-full border-2 border-[#1B5E20] px-7 text-sm font-bold text-[#1B5E20] transition hover:bg-[#1B5E20] hover:text-white"
          >
            REQUEST TAX CERTIFICATE
          </a>
        </div>
      </div>
    </section>
  );
}