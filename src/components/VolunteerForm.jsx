import React, { useState } from "react";
export default function VolunteerForm() {
  const [sent, setSent] = useState(false);
  const submit = e => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nArea of interest: ${f.get("interest")}`;
    window.location.href = `mailto:info@dvdropincentre.org?subject=${encodeURIComponent("Volunteer sign-up")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return <form onSubmit={submit} className="rounded-3xl bg-white p-6 shadow-xl md:p-9">
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-bold">Your name<input required name="name" className="mt-2 min-h-12 w-full rounded-xl border px-4 font-normal"/></label>
      <label className="text-sm font-bold">Email address<input required name="email" type="email" className="mt-2 min-h-12 w-full rounded-xl border px-4 font-normal"/></label>
    </div>
    <label className="mt-5 block text-sm font-bold">Area of interest
      <select required name="interest" defaultValue="" className="mt-2 min-h-12 w-full rounded-xl border bg-white px-4 font-normal">
        <option value="" disabled>Select an area of interest</option>
        <option>ECD – Safe Park Day Care Centre</option>
        <option>Powergirls Programme</option>
        <option>Young Gentlemen's Club</option>
        <option>Student & Career Support</option>
        <option>Casework & Family Support</option>
        <option>Growing Together (Gardening & Nutrition)</option>
        <option>Foetal Alcohol Syndrome Awareness</option>
        <option>Administration & General Support</option>
      </select>
    </label>
    <button className="mt-5 min-h-12 rounded-full bg-[#1B5E20] px-7 font-bold text-white transition hover:bg-[#174d1b]">SIGN UP TO VOLUNTEER</button>
    {sent && <p className="mt-4 text-sm text-[#1B5E20]">Your email app is opening with your details ready to send.</p>}
  </form>;
}