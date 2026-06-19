"use client";

import { ExpandLine, FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate";

const testimonials = [
  {
    quote:
      "He made me feel like I was the only one he was working with even though I know he was swamped with clients. He is a true professional with a heart of gold. I highly recommend Brian — and you will too.",
    name: "Ashlee Church",
    role: "Licensed Salesperson",
    company: "Prudential Manor Homes",
  },
  {
    quote:
      "Even though there were multiple hiccups and difficult personalities involved in the transaction, Brian was able to apply his extensive experience and bring the parties to the closing table and achieve the results I was looking for.",
    name: "Eric Simonds",
    role: "Associate Broker",
    company: "CBRE – Albany",
  },
  {
    quote:
      "The service he provides is professional and courteous. Communication throughout the transaction is second to none — a timely response in every instance.",
    name: "Marie Bettini, CBR, CRB, GRI",
    role: "Principal Broker",
    company: "Albany Realty Group",
  },
  {
    quote:
      "A transaction is so much smoother when the attorney responds to emails and phone calls — and with Brian, this is not a problem. He is knowledgeable about his profession and can be relied upon to get the job done.",
    name: "Karen Jones",
    role: "Real Estate Agent",
    company: "Capital Region",
  },
  {
    quote:
      "Brian and his staff are quick and responsive to all of our needs, day or night. We love working with him and also recommend our clients use him as their personal attorney. He is the best at what he does.",
    name: "Amy Parker",
    role: "Mortgage Professional",
    company: "Adirondack Home Mortgage",
  },
  {
    quote:
      "I've always found him to be accessible, timely, and on top of things. Even at 11 pm — yeah, he works crazy hours. Keep up the good work!",
    name: "Rich Smith",
    role: "Owner",
    company: "Garnet Realty",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeUp>
            <p className="text-maroon text-xs uppercase tracking-widest font-sans mb-4">
              Client Testimonials
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy leading-tight mb-4">
              What Our Clients Say
            </h2>
          </FadeUp>
          <ExpandLine delay={0.2} originX={0.5} className="h-0.5 w-16 bg-maroon mx-auto mb-5" />
          <FadeUp delay={0.3}>
            <p className="text-navy/60 font-sans text-sm leading-relaxed">
              The following testimonials were provided voluntarily by clients and
              professional colleagues who have worked directly with Brian P. Rohan, Esq.
            </p>
          </FadeUp>
        </div>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <div className="flex flex-col h-full bg-cream rounded-xl p-7 border border-gray-100">
                {/* Decorative quote mark */}
                <span
                  className="font-serif text-6xl leading-none text-maroon/20 select-none mb-2"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Quote */}
                <p className="font-sans text-navy/70 text-sm leading-relaxed flex-1">
                  {t.quote}
                </p>

                {/* Attribution */}
                <div className="mt-6 pt-5 border-t border-gray-200">
                  <p className="font-serif text-navy text-[0.95rem] font-semibold leading-snug">
                    {t.name}
                  </p>
                  <p className="font-sans text-maroon text-[0.7rem] uppercase tracking-wide mt-0.5">
                    {t.role}
                  </p>
                  <p className="font-sans text-navy/45 text-[0.7rem] mt-0.5">
                    {t.company}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Source note */}
        <FadeUp delay={0.3}>
          <p className="text-center text-navy/35 font-sans text-[0.68rem] mt-10">
            Testimonials sourced from LinkedIn recommendations. Individual results may vary.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
