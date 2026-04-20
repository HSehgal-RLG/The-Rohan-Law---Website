"use client";

import { MapPin, ExternalLink } from "lucide-react";
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ui/animate";

const offices = [
  {
    label: "Principal Office",
    name: "The Rohan Law Group",
    address: "18 Computer Drive West, Suite 100",
    city: "Colonie, New York 12205",
    mapsUrl:
      "https://maps.google.com/?q=18+Computer+Drive+West+Suite+100+Colonie+New+York+12205",
    embedUrl:
      "https://maps.google.com/maps?q=18+Computer+Drive+West,+Suite+100,+Colonie,+NY+12205&output=embed&z=15",
  },
  {
    label: "Satellite Office",
    name: "Saratoga Springs",
    address: "125 High Rock Avenue",
    city: "Saratoga Springs, New York 12866",
    phone: "(518) 306-4318",
    phoneHref: "tel:+15183064318",
    fax: "(518) 306-4518",
    note: "By Appointment Only",
    mapsUrl: "https://maps.google.com/?q=125+High+Rock+Avenue+Saratoga+Springs+New+York+12866",
    embedUrl:
      "https://maps.google.com/maps?q=125+High+Rock+Avenue,+Saratoga+Springs,+NY+12866&output=embed&z=15",
  },
  {
    label: "Satellite Office",
    name: "Glens Falls",
    address: "333 Glen Street",
    city: "Glens Falls, New York 12801",
    phone: "(518) 338-3833",
    phoneHref: "tel:+15183383833",
    fax: "(518) 338-3983",
    note: "By Appointment Only",
    mapsUrl: "https://maps.google.com/?q=333+Glen+Street+Glens+Falls+New+York+12801",
    embedUrl:
      "https://maps.google.com/maps?q=333+Glen+Street,+Glens+Falls,+NY+12801&output=embed&z=15",
  },
];

export default function Location() {
  return (
    <section id="location" className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        {/* Section header */}
        <div className="mb-14">
          <FadeUp>
            <p className="text-maroon text-xs uppercase tracking-widest font-sans mb-4">
              Find Us
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy leading-tight mb-4">
              Our Offices
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-navy/70 font-sans text-sm leading-relaxed max-w-2xl">
              The Rohan Law Group serves clients throughout the Capital Region
              and across New York State from its principal office in Colonie and
              satellite locations in Saratoga Springs and Glens Falls.
            </p>
          </FadeUp>
        </div>

        {/* Principal office — full-width with map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
          <SlideInLeft>
            <span className="inline-block text-[0.65rem] uppercase tracking-widest font-sans text-white bg-maroon px-2.5 py-1 mb-4">
              Principal Office
            </span>
            <div className="border-l-2 border-maroon pl-5 mb-5">
              <p className="font-serif text-navy text-base font-semibold mb-1">
                The Rohan Law Group
              </p>
              <address className="not-italic text-navy/70 font-sans text-sm leading-relaxed mb-2">
                18 Computer Drive West, Suite 100
                <br />
                Colonie, New York 12205
              </address>
              <div className="space-y-0.5">
                <a href="tel:+15184380010" className="block text-navy/60 hover:text-maroon font-sans text-sm transition-colors">Tel: (518) 438-0010</a>
                <p className="text-navy/50 font-sans text-sm">Fax: (518) 438-0030</p>
              </div>
            </div>
            <a
              href={offices[0].mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-maroon hover:text-maroon-dark font-sans text-sm font-medium underline underline-offset-4 transition-colors"
            >
              <MapPin size={15} aria-hidden="true" />
              Open in Google Maps
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </SlideInLeft>

          <SlideInRight>
            <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 h-64 md:h-80">
              <iframe
                src={offices[0].embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Rohan Law Group — Principal Office"
              />
            </div>
          </SlideInRight>
        </div>

        {/* Satellite offices */}
        <FadeUp>
          <div className="border-t border-gray-200 pt-12">
            <p className="text-maroon text-xs uppercase tracking-widest font-sans mb-8">
              Satellite Offices
            </p>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offices.slice(1).map((office) => (
                <StaggerItem key={office.name}>
                  <div className="flex flex-col gap-4">
                    <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 h-52">
                      <iframe
                        src={office.embedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`The Rohan Law Group — ${office.name}`}
                      />
                    </div>
                    <div className="border-l-2 border-navy/20 pl-4">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="font-serif text-navy text-base font-semibold">
                          {office.name}
                        </p>
                        {office.note && (
                          <span className="text-[0.6rem] uppercase tracking-widest font-sans text-white bg-navy/40 px-2 py-0.5">
                            {office.note}
                          </span>
                        )}
                      </div>
                      <address className="not-italic text-navy/60 font-sans text-sm leading-relaxed mb-1">
                        {office.address}
                        <br />
                        {office.city}
                      </address>
                      <div className="space-y-0.5 mb-3">
                        <a
                          href={office.phoneHref}
                          className="block text-navy/60 hover:text-maroon font-sans text-sm transition-colors"
                        >
                          Tel: {office.phone}
                        </a>
                        <p className="text-navy/50 font-sans text-sm">Fax: {office.fax}</p>
                      </div>
                      <a
                        href={office.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-maroon hover:text-maroon-dark font-sans text-sm font-medium underline underline-offset-4 transition-colors"
                      >
                        <MapPin size={14} aria-hidden="true" />
                        Open in Google Maps
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
