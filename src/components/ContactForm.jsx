import React, { useState } from "react";

const intakes = [
  "Child / family support",
  "Student / career help",
  "Early childhood development",
  "Partnership / donation enquiry"
];

export default function ContactForm({ subject = "Website enquiry" }) {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nPhone / WhatsApp: ${f.get("phone")}\nI am seeking support for: ${f.get("intake")}\n\n${f.get("message")}`;
    window.location.href = `mailto:info@dvdropincentre.org?subject=${encodeURIComponent(`${subject} — ${f.get("intake")}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = "mt-2 min-h-12 w-full rounded-xl border border-black/15 px-4 font-normal transition focus:border-[#1B5E20]";

  return (
    <form onSubmit={submit} className="rounded-3xl bg-white p-6 shadow-xl md:p-9">
      <label className="block text-sm font-bold">
        I am seeking support for
        <select required name="intake" defaultValue="" className={field}>
          <option value="" disabled>Please choose…</option>
          {intakes.map((i) => <option key={i} value={i}>{i}</option>)}
        </select>
      </label>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold">
          Your name
          <input required name="name" className={field} />
        </label>
        <label className="text-sm font-bold">
          WhatsApp / phone number
          <input name="phone" type="tel" className={field} />
        </label>
      </div>
      <label className="mt-5 block text-sm font-bold">
        Email address
        <input required name="email" type="email" className={field} />
      </label>
      <label className="mt-5 block text-sm font-bold">
        How can we help?
        <textarea required name="message" rows="5" className="mt-2 w-full rounded-xl border border-black/15 p-4 font-normal transition focus:border-[#1B5E20]" />
      </label>
      <button className="mt-6 min-h-12 rounded-full bg-[#1B5E20] px-7 font-bold text-white transition hover:bg-[#174d1b]">
        SEND ENQUIRY
      </button>
      {sent && (
        <p className="mt-4 rounded-xl bg-[#F1F7F1] p-4 text-sm font-bold leading-6 text-[#1B5E20]">
          Thank you — your email app is opening with your enquiry ready to send. You can also reach us
          on WhatsApp at 070 315 6459.
        </p>
      )}
    </form>
  );
}