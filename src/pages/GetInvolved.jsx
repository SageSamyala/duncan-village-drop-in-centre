import React from "react";
import { Banknote, HandHeart, Handshake, Package } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import DonationDetails from "@/components/DonationDetails";
import VolunteerForm from "@/components/VolunteerForm";
import Sponsors from "@/components/Sponsors";

const ways = [
  [Banknote, "Donate", "Give once or monthly to a registered NPO and PBO. Banking details are below.", "#donate"],
  [HandHeart, "Volunteer", "Offer your time and skills to a programme that matches your experience.", "#volunteer"],
  [Handshake, "Partner with us", "Collaborate as a school, business, funder or fellow organisation.", "/contact"],
  [Package, "Support a programme", "Contribute practical items a specific programme needs, from ECD supplies to garden inputs.", "/contact"]
];

export default function GetInvolved() {
  return (
    <PageShell>
      <Seo
        title="Get involved"
        description="Donate, volunteer, partner with us or support a programme at Duncan Village Safe Park and Drop-in Centre. Verified banking details and a volunteer sign-up form."
        path="/get-involved"
      />
      <PageHero
        eyebrow="GET INVOLVED"
        title="Put your support where hope grows."
        text="Four clear ways to strengthen our work with children, families and the wider Duncan Village community."
      />

      <section aria-labelledby="ways-heading" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 id="ways-heading" className="font-heading text-4xl text-[#1B5E20]">Ways to support us</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ways.map(([Icon, title, text, href]) => (
              <a
                key={title}
                href={href}
                className="flex flex-col rounded-3xl bg-[#F7F7F3] p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon className="h-8 w-8 text-[#6A1B9A]" aria-hidden="true" />
                <h3 className="mt-6 font-heading text-2xl text-[#1B5E20]">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-black/60">{text}</p>
                <span className="mt-5 text-xs font-bold tracking-wider text-[#E65100]">CONTINUE →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" aria-labelledby="donate-heading" className="scroll-mt-24 bg-[#F7F7F3] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[.22em] text-[#6A1B9A]">DONATE</p>
            <h2 id="donate-heading" className="font-heading text-4xl leading-tight text-[#1B5E20] md:text-5xl">
              A transparent, verifiable way to give.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/65">
              We are registered as an NPO (196-023) and a PBO (930085949), and we are VAT registered.
              Contact our Financial Manager for a donation confirmation, a receipt or additional
              information about how funds are used.
            </p>
            <dl className="mt-9 grid gap-4 sm:grid-cols-2">
              {[["NPO No.", "196-023"], ["PBO Ref No.", "930085949"], ["CIPC Reg No.", "2018/071881/08"], ["VAT registered", "Yes"]].map(([a, b]) => (
                <div key={a} className="rounded-2xl bg-white p-5">
                  <dt className="text-xs font-bold text-[#6A1B9A]">{a}</dt>
                  <dd className="mt-2 font-heading text-lg">{b}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-7 text-black/60">
              Donation queries: <a className="font-bold text-[#1B5E20] underline" href="mailto:ZimkhithaNweba@dvdropincentre.org">ZimkhithaNweba@dvdropincentre.org</a> · <a className="font-bold text-[#1B5E20] underline" href="tel:0814212265">081 421 2265</a>
            </p>
          </div>
          <DonationDetails />
        </div>
      </section>

      <section id="volunteer" aria-labelledby="volunteer-heading" className="scroll-mt-24 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[.22em] text-[#6A1B9A]">VOLUNTEER WITH US</p>
            <h2 id="volunteer-heading" className="mt-3 font-heading text-4xl text-[#1B5E20] md:text-5xl">
              Ready to give your time?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-black/65">
              Share your details and tell us where you would like to help. Our team will get in touch
              within two working days to find the right fit for your skills and availability.
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-6 text-black/65">
              {["No experience required for general support roles", "Programme-specific roles are matched by skill and availability", "All volunteers working with children are screened"].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6A1B9A]" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <VolunteerForm />
        </div>
      </section>

      <Sponsors />
    </PageShell>
  );
}