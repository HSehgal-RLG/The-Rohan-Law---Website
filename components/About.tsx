"use client";

import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ui/animate";

const stats = [
  { value: "30+", label: "Years of Practice" },
  { value: "50,000+", label: "Transactions Closed" },
  { value: "5", label: "Core Practice Areas" },
];

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <SlideInLeft>
            <FadeUp delay={0}>
              <p className="text-maroon text-xs uppercase tracking-widest font-sans mb-4">
                About the Firm
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy leading-tight mb-8">
                Thirty Years of Trusted Counsel
              </h2>
            </FadeUp>
            <div className="space-y-5 text-navy/70 font-sans leading-relaxed text-[0.97rem]">
              <FadeUp delay={0.2}>
                <p>
                  The Rohan Law Group is a transactional law practice with its
                  principal offices conveniently located just off Wolf Road in
                  Colonie, New York — a short distance from Albany International
                  Airport — with satellite offices in Saratoga Springs and Glens
                  Falls. The firm&apos;s founding member, Brian P. Rohan, Esq.,
                  brings substantial experience across the firm&apos;s core
                  practice areas and is supported by associate candidate Huzaifah
                  Sehgal (bar admission pending) and a staff of highly skilled
                  legal professionals, all utilizing the latest in technology and
                  computerized services. It is this successful marriage of talent
                  and innovation that enables The Rohan Law Group to deliver
                  exceptional results for its institutional, business, and
                  individual clients.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p>
                  At The Rohan Law Group, we are defined by our commitment to
                  integrity, responsiveness, and excellence. Brian and his team
                  approach every matter with rigorous attention to detail and an
                  unwavering focus on cost-effective outcomes. We take pride in
                  our reputation for open client communication — listening
                  carefully, responding promptly, and cultivating the long-term
                  relationships that are the hallmark of a trusted legal advisor.
                  It is this availability and responsiveness that distinguishes
                  The Rohan Law Group from other high-quality firms.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <p>
                  We have built a well-deserved reputation for zealously
                  protecting our clients&apos; interests. Our team approach —
                  sharing perspective, experience, and knowledge — allows us to
                  safeguard resources, preserve relationships, and achieve goals
                  with superior efficiency and personal service. As our clients
                  navigate an increasingly dynamic marketplace, The Rohan Law
                  Group stands ready to meet the challenges ahead, guided by a
                  bold vision, a superior work ethic, and an extensive legal
                  résumé. We demonstrate our commitment to excellence and
                  professionalism in all that we do.
                </p>
              </FadeUp>
            </div>
          </SlideInLeft>

          {/* Right — stats */}
          <SlideInRight className="flex flex-col gap-6 lg:pt-16">
            <StaggerContainer stagger={0.12}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="bg-navy rounded-lg p-8 text-center mb-6 last:mb-0">
                    <p className="font-serif text-5xl text-white mb-2">
                      {stat.value}
                    </p>
                    <p className="text-white/60 text-xs uppercase tracking-widest font-sans">
                      {stat.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
