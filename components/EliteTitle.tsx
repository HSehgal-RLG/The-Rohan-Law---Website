"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Shield } from "lucide-react";
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ui/animate";

const titleTeam = [
  {
    name: "Claudia Bertasso",
    title: "Title Administrator",
    email: "CBertasso@EliteTitleAndAbstract.com",
    bio: "Claudia oversees the firm's title operations, managing title searches, commitments, and insurance policies to ensure every transaction closes on a clear and insurable title.",
    photo: "/staff-claudia.jpg",
  },
  {
    name: "Chelsea Warren",
    title: "Title Assistant",
    email: "CWarren@EliteTitleAndAbstract.com",
    bio: "Chelsea supports the title team with order coordination, document processing, and client communications, keeping every file moving efficiently from open to close.",
    photo: "/staff-chelsea.jpg",
  },
];


export default function EliteTitle() {
  return (
    <section id="title" className="bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-16">
          {/* Left — identity */}
          <SlideInLeft>
            <FadeUp>
              <p className="text-maroon-light text-xs uppercase tracking-widest font-sans mb-4">
                An Affiliated Entity
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
                Elite Title &amp; Abstract LLC
              </h2>
            </FadeUp>
            <div className="space-y-4 text-white/65 font-sans text-sm leading-relaxed">
              <FadeUp delay={0.2}>
                <p>
                  Elite Title &amp; Abstract LLC is an affiliated title company
                  working in close coordination with The Rohan Law Group, P.C.
                  to provide comprehensive title and abstract services for
                  residential and commercial real estate transactions throughout
                  New York State.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p>
                  Our title professionals conduct thorough title searches,
                  identify and resolve title defects, issue title commitments,
                  and coordinate title insurance through leading national
                  underwriters — ensuring that buyers, lenders, and all parties
                  to a transaction can close with full confidence in the
                  integrity of the title.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <p>
                  By offering in-house title services alongside our real estate
                  legal practice, we deliver a streamlined, fully coordinated
                  closing experience that saves time and eliminates the friction
                  of working with multiple unaffiliated vendors.
                </p>
              </FadeUp>
            </div>
          </SlideInLeft>

          {/* Right — service highlights */}
          <SlideInRight className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pt-10">
            <StaggerContainer className="contents">
              {[
                "Title Searches & Examinations",
                "Title Insurance (Owner & Lender)",
                "Title Commitments & Clearance",
                "Abstract Preparation",
                "Lien & Judgment Searches",
                "Closing Coordination",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3 bg-white/5 rounded-lg px-4 py-3">
                    <Shield
                      size={14}
                      className="text-maroon-light flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-white/75 font-sans text-xs leading-relaxed">
                      {item}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideInRight>
        </div>

        {/* Divider */}
        <FadeUp>
          <div className="border-t border-white/10 mb-14" />
        </FadeUp>

        {/* Team sub-header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <FadeUp>
            <p className="text-maroon-light text-xs uppercase tracking-widest font-sans mb-3">
              Title Team
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h3 className="font-serif text-2xl sm:text-3xl text-white leading-snug">
              The Professionals Behind Every Clear Title
            </h3>
          </FadeUp>
        </div>

        {/* Title team cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {titleTeam.map((member) => (
            <StaggerItem key={member.name}>
              <Card className="border border-white/10 bg-white/5 shadow-none hover:bg-white/10 transition-colors duration-200 rounded-lg overflow-hidden p-0 h-full">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <CardContent className="p-5">
                  <h4 className="font-serif text-white text-base font-semibold leading-snug">
                    {member.name}
                  </h4>
                  <p className="text-maroon-light text-xs uppercase tracking-wide font-sans mt-1">
                    {member.title}
                  </p>
                  <Separator className="my-3 bg-white/10" />
                  <p className="text-white/65 text-sm font-sans leading-relaxed mb-3">
                    {member.bio}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 text-maroon-light hover:text-white text-xs font-sans transition-colors"
                  >
                    <Mail size={12} aria-hidden="true" />
                    {member.email}
                  </a>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
