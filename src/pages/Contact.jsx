import React from "react";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import ContactDirectory from "@/components/ContactDirectory";
import ContactForm from "@/components/ContactForm";

const pathways = [
  ["Social & family support", "Counselling, casework, food parcels, documentation, SASSA and Home Affairs assistance, crisis response."],
  ["Education & career support", "Homework and academic support, university and TVET applications, NSFAS, job seeking."],
  ["Early childhood development", "Enrolment and enquiries for our ECD Safe Park Day Care Centre, registered with the Department of Education."]
];

export default function Contact() {
  return (
    <PageShell>
      <Seo
        title="Contact & get support"
        description="Get free support from Duncan Village Safe Park and Drop-in Centre. Find who to contact for social and family support, education and career help, ECD, volunteering and donations."
        path="/contact"
      />
      <PageHero
        eyebrow="CONTACT & GET SUPPORT"
        title="Reach us, and we will point you the right way."
        text="Support at our centre is free of charge. Choose the pathway that matches your needs, contact the right person directly, or send us an enquiry."
      />

      <section aria-labelledby="pathways-heading" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 id="pathways-heading" className="font-heading text-4xl text-[#1B5E20]">Support pathways</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pathways.map(([title, text], i) => (
              <article key={title} className="rounded-3xl bg-[#F1F7F1] p-7 md:p-8">
                <span className="font-heading text-4xl text-[#6A1B9A]">0{i + 1}</span>
                <h3 className="mt-8 font-heading text-2xl text-[#1B5E20]">{title}</h3>
                <p className="mt-3 leading-7 text-black/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#F7F7F3]">
        <ContactDirectory />
      </div>

      <section aria-labelledby="visit-heading" className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <h2 id="visit-heading" className="font-heading text-4xl text-[#1B5E20]">Visit or call us</h2>
            <div className="mt-8 rounded-[2rem] bg-[#1B5E20] p-8 text-white">
              <MapPin className="text-[#FFB300]" aria-hidden="true" />
              <p className="mt-5 text-lg leading-8">
                Cnr Ford & Matanzima Street<br />Duncan Village<br />East London, South Africa
              </p>
              <a className="mt-6 flex items-center gap-3 font-bold hover:text-[#FFB300]" href="mailto:info@dvdropincentre.org">
                <Mail aria-hidden="true" />info@dvdropincentre.org
              </a>
              <a className="mt-3 flex items-center gap-3 font-bold hover:text-[#FFB300]" href="tel:0703156459">
                <Phone aria-hidden="true" />070 315 6459
              </a>
              <p className="mt-7 flex gap-3 border-t border-white/15 pt-6 text-sm leading-6 text-white/75">
                <Clock className="h-5 w-5 shrink-0 text-[#FFB300]" aria-hidden="true" />
                <span>
                  Weekdays during office hours. We aim to reply to emails within two working days —
                  if your situation is urgent, please phone us.
                </span>
              </p>
            </div>
            <iframe
              title="Map showing Duncan Village Safe Park and Drop-in Centre"
              className="mt-6 h-[320px] w-full rounded-[2rem] border-0"
              loading="lazy"
              src="https://www.google.com/maps?q=Cnr%20Ford%20%26%20Matanzima%20Street%2C%20Duncan%20Village%2C%20East%20London%2C%20South%20Africa&output=embed"
            />
          </div>
          <div>
            <h2 className="font-heading text-4xl text-[#1B5E20]">Send an enquiry</h2>
            <p className="mt-4 leading-8 text-black/65">
              Tell us how we can help and we will route your message to the right team member.
            </p>
            <div className="mt-8">
              <ContactForm subject="Contact & support enquiry" />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}