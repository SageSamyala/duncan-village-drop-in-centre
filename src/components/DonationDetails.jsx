import React, { useState } from "react";
import { Copy, Check, ShieldCheck } from "lucide-react";

const rows = [
  ["Bank", "FNB / RMB"],
  ["Account name", "Duncan Village Drop In Centre NPO"],
  ["Account type", "Gold Business Account"],
  ["Branch code", "250109"]
];

/** Banking details for donations, with copy-to-clipboard and verification guidance. */
export default function DonationDetails() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText("62742547071");
    setCopied(true);
  };
  return (
    <div className="rounded-[2rem] bg-[#1B5E20] p-8 text-white md:p-10">
      <p className="text-xs font-bold tracking-[.2em] text-[#FFB300]">DONATION DETAILS</p>
      <h3 className="mt-3 font-heading text-3xl md:text-4xl">Donate directly</h3>
      <p className="mt-4 leading-7 text-white/75">
        Every rand goes into programme delivery in Duncan Village. We are a registered NPO and PBO.
      </p>
      <dl className="mt-8 space-y-5 text-sm">
        <div>
          <dt className="text-white/55">Account number</dt>
          <dd className="mt-1 flex flex-wrap items-center gap-3 font-heading text-3xl">
            62742547071
            <button
              onClick={copy}
              aria-label="Copy account number"
              className="rounded-lg bg-white/10 p-2 transition hover:bg-white/20"
            >
              {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            </button>
          </dd>
          {copied && <p className="mt-2 text-xs text-[#FFB300]">Account number copied.</p>}
        </div>
        {rows.map(([a, b]) => (
          <div key={a} className="border-t border-white/15 pt-4">
            <dt className="text-white/55">{a}</dt>
            <dd className="mt-1 text-lg font-bold">{b}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-7 text-sm leading-6 text-white/75">
        Please use your name or organisation name as the payment reference so we can issue a receipt.
      </p>
      <p className="mt-5 flex gap-3 rounded-2xl bg-white/10 p-5 text-sm leading-6">
        <ShieldCheck className="h-5 w-5 shrink-0 text-[#FFB300]" aria-hidden="true" />
        <span>
          For your safety, please verify these banking details with our Financial Manager before
          making a substantial donation. We will never ask you to pay into a personal account.
        </span>
      </p>
    </div>
  );
}