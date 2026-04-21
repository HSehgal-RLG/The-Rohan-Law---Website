"use client";

import { useState } from "react";
import { Phone, MapPin } from "lucide-react";
import { FadeUp, SlideInLeft, SlideInRight } from "@/components/ui/animate";

const MAX_WORDS = 50;

function countWords(text: string) {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
}

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [inquiry, setInquiry] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const wordCount = countWords(inquiry);

  function handleInquiryChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const val = e.target.value;
    const words = val.trim() === "" ? [] : val.trim().split(/\s+/);
    if (words.length <= MAX_WORDS) {
      setInquiry(val);
    } else {
      setInquiry(words.slice(0, MAX_WORDS).join(" "));
    }
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const els = form.elements as HTMLFormControlsCollection & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      subject: HTMLInputElement;
      message: HTMLTextAreaElement;
    };
    try {
      const res = await fetch("https://formspree.io/f/xwvarqpw", {
        method: "POST",
        body: JSON.stringify({
          name: els.name.value,
          email: els.email.value,
          subject: els.subject.value,
          message: els.message.value,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setInquiry("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Left — contact info */}
          <SlideInLeft>
            <FadeUp>
              <p className="text-maroon text-xs uppercase tracking-widest font-sans mb-4">
                Contact Us
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy leading-tight mb-6">
                We&apos;d Like to Hear From You
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-navy/70 font-sans text-sm leading-relaxed mb-8">
                Reach out to discuss your legal needs. We respond promptly to all
                inquiries and offer initial consultations for new clients.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              {/* Phone */}
              <a
                href="tel:+15184380010"
                className="inline-flex items-center gap-3 text-navy hover:text-maroon transition-colors group mb-6"
              >
                <div className="bg-maroon/10 rounded-full p-2.5 group-hover:bg-maroon/20 transition-colors">
                  <Phone size={16} className="text-maroon" aria-hidden="true" />
                </div>
                <span className="font-sans font-semibold text-base">
                  (518) 438-0010
                </span>
              </a>
            </FadeUp>

            {/* Offices */}
            <div className="flex flex-col gap-3 mt-2">
              <FadeUp delay={0.3}>
                <a
                  href="https://maps.google.com/?q=18+Computer+Drive+West+Suite+100+Colonie+New+York+12205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="bg-navy/5 rounded-full p-2.5 flex-shrink-0 mt-0.5 group-hover:bg-navy/10 transition-colors">
                    <MapPin size={16} className="text-navy/50 group-hover:text-maroon transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-navy/40 font-sans text-[0.65rem] uppercase tracking-widest mb-0.5">Principal Office</p>
                    <address className="not-italic text-navy/60 group-hover:text-maroon font-sans text-sm leading-relaxed transition-colors">
                      18 Computer Drive West, Suite 100
                      <br />
                      Colonie, New York 12205
                    </address>
                    <div className="mt-0.5 space-y-0" onClick={e => e.stopPropagation()}>
                      <a href="tel:+15184380010" className="block text-navy/50 hover:text-maroon font-sans text-xs transition-colors">Tel: (518) 438-0010</a>
                      <p className="text-navy/40 font-sans text-xs">Fax: (518) 438-0030</p>
                    </div>
                  </div>
                </a>
              </FadeUp>

              <FadeUp delay={0.4}>
                <a
                  href="https://maps.google.com/?q=125+High+Rock+Avenue+Saratoga+Springs+New+York+12866"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="bg-navy/5 rounded-full p-2.5 flex-shrink-0 mt-0.5 group-hover:bg-navy/10 transition-colors">
                    <MapPin size={16} className="text-navy/50 group-hover:text-maroon transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-navy/40 font-sans text-[0.65rem] uppercase tracking-widest mb-0.5">Satellite Office · By Appointment Only</p>
                    <address className="not-italic text-navy/60 group-hover:text-maroon font-sans text-sm leading-relaxed transition-colors">
                      125 High Rock Avenue
                      <br />
                      Saratoga Springs, New York 12866
                    </address>
                    <div className="mt-0.5 space-y-0" onClick={e => e.stopPropagation()}>
                      <a href="tel:+15183064318" className="block text-navy/50 hover:text-maroon font-sans text-xs transition-colors">Tel: (518) 306-4318</a>
                      <p className="text-navy/40 font-sans text-xs">Fax: (518) 306-4518</p>
                    </div>
                  </div>
                </a>
              </FadeUp>

              <FadeUp delay={0.5}>
                <a
                  href="https://maps.google.com/?q=333+Glen+Street+Glens+Falls+New+York+12801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="bg-navy/5 rounded-full p-2.5 flex-shrink-0 mt-0.5 group-hover:bg-navy/10 transition-colors">
                    <MapPin size={16} className="text-navy/50 group-hover:text-maroon transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-navy/40 font-sans text-[0.65rem] uppercase tracking-widest mb-0.5">Satellite Office · By Appointment Only</p>
                    <address className="not-italic text-navy/60 group-hover:text-maroon font-sans text-sm leading-relaxed transition-colors">
                      333 Glen Street
                      <br />
                      Glens Falls, New York 12801
                    </address>
                    <div className="mt-0.5 space-y-0" onClick={e => e.stopPropagation()}>
                      <a href="tel:+15183383833" className="block text-navy/50 hover:text-maroon font-sans text-xs transition-colors">Tel: (518) 338-3833</a>
                      <p className="text-navy/40 font-sans text-xs">Fax: (518) 338-3983</p>
                    </div>
                  </div>
                </a>
              </FadeUp>
            </div>
          </SlideInLeft>

          {/* Right — form */}
          <SlideInRight>
            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
              {status === "success" ? (
                <div className="py-10 text-center">
                  <p className="font-serif text-navy text-xl mb-2">Message Received</p>
                  <p className="text-navy/60 font-sans text-sm leading-relaxed">
                    Thank you for reaching out. A member of our team will be in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-navy uppercase tracking-wide mb-1.5 font-sans">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Smith"
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-navy text-sm font-sans bg-white focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon/50 transition-all placeholder:text-navy/30"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-navy uppercase tracking-wide mb-1.5 font-sans">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-navy text-sm font-sans bg-white focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon/50 transition-all placeholder:text-navy/30"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-navy uppercase tracking-wide mb-1.5 font-sans">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Business matter, real estate question…"
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-navy text-sm font-sans bg-white focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon/50 transition-all placeholder:text-navy/30"
                    />
                  </div>

                  <div>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <label htmlFor="message" className="block text-xs font-medium text-navy uppercase tracking-wide font-sans">
                        Nature of Your Inquiry
                      </label>
                      <span className={`text-[0.65rem] font-sans tabular-nums ${wordCount >= MAX_WORDS ? "text-maroon font-semibold" : "text-navy/35"}`}>
                        {wordCount} / {MAX_WORDS} words
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={inquiry}
                      onChange={handleInquiryChange}
                      placeholder="Please briefly outline the nature of your matter and why you are seeking a consultation. Do not include any confidential, sensitive, or privileged information at this stage."
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-navy text-sm font-sans bg-white focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon/50 transition-all placeholder:text-navy/30 resize-none"
                      required
                    />
                    <p className="mt-2 text-navy/45 font-sans text-[0.68rem] leading-relaxed">
                      Please limit your response to 50 words or fewer. Do not disclose any confidential or privileged information — this form is not a secure attorney-client communication.
                    </p>
                  </div>

                  {status === "error" && (
                    <p className="text-maroon font-sans text-xs text-center">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-maroon hover:bg-maroon-dark disabled:opacity-60 text-white py-3 text-xs uppercase tracking-widest transition-colors duration-200 font-sans"
                  >
                    {status === "submitting" ? "Sending…" : "Send Message"}
                  </button>

                  <p className="text-center text-navy/40 font-sans text-[0.68rem] leading-relaxed">
                    Submitting this form does not create an attorney-client relationship. Any information submitted prior to our engagement is not privileged or confidential.
                  </p>
                </form>
              )}
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
