"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate";

const team = [
  {
    name: "Brian P. Rohan, Esq.",
    title: "Managing Partner",
    email: "BRohan@RohanLaw.com",
    photo: "/brian-rohan.jpeg",
    bio: "Brian founded the firm in 1994 and leads its business and real estate transactional practice. He brings three decades of experience to every client engagement.",
    fullBio: {
      paragraphs: [
        "Brian has been practicing law in the Capital Region for over thirty-five (35) years. At this time, the principal practice areas of Mr. Rohan's law firm are as follows: Residential & Commercial Real Estate (Representation of Buyers, Sellers and Lenders) & Title Services; Business/Corporate Representation; and Estate Planning & Administration.",
        "In light of the fact that Brian also has \"extensive\" prior work experience handling civil/commercial litigation and personal/business bankruptcy matters, among other legal practice areas, the end result is that he can and does bring an extremely unique \"skill set\" to each and every transaction that he handles. The vast wealth of knowledge and keen legal insight which Brian brings to the table, for client discussion as well as related document review/drafting purposes, frequently proves to be \"invaluable\" to his clients.",
        "Brian prides himself on being extremely professional and courteous in all of his dealings, whether it be with clients, colleagues, or other business partners/professionals. Brian treats each and every client file as if it is the most important file on his desk at that moment. A more competent, focused, hard working and, perhaps, most importantly from a client's perspective, \"RESPONSIVE\" (the importance of maintaining open lines of communication cannot be overstated) legal advisor you will not find.",
        "Brian also demands exceptional service from his \"TEAM\" at The Rohan Law Group, P.C. — give them the opportunity to serve you... you will be glad that you did! We all co-exist in a \"REFERRAL\"-based professional environment, so why not trust your business to the VERY BEST!!",
      ],
      counties: "Serving Albany, Columbia, Fulton, Greene, Montgomery, Rensselaer, Saratoga, Schenectady, Schoharie, Warren & Washington Counties.",
      specialties: "Residential & Commercial Real Estate & Title Services; Business/Corporate; Estate Planning & Administration; and Traffic Matters.",
    },
  },
  {
    name: "Huzaifah Sehgal",
    title: "Research Associate / Law Clerk",
    email: "HSehgal@RohanLaw.com",
    photo: null,
    bio: "Huzaifah supports the firm's legal research and analysis, with a focus on technology law, data privacy frameworks, and AI governance developments.",
    fullBio: null,
  },
  {
    name: "Virginia (Ginny) Lamb",
    title: "Real Estate Paralegal & Closing Coordinator",
    email: "VLamb@RohanLaw.com",
    photo: null,
    bio: "Ginny manages the firm's real estate closing pipeline with exceptional attention to detail, ensuring smooth transactions from contract to close.",
    fullBio: null,
  },
  {
    name: "Sylvia Berman",
    title: "Paralegal",
    email: "SBerman@RohanLaw.com",
    photo: "/staff-sylvia.jpg",
    bio: "Sylvia provides essential support across the firm's transactional practice, assisting with document preparation, due diligence, and client coordination.",
    fullBio: null,
  },
  {
    name: "Tetiana Romanenko",
    title: "Office Manager",
    email: "TRomanenko@RohanLaw.com",
    photo: "/staff-tetiana.jpg",
    bio: "Tetiana keeps the firm running smoothly, managing day-to-day office operations and ensuring every client interaction is met with professionalism and care.",
    fullBio: null,
  },
];

function PersonSilhouette() {
  return (
    <svg
      viewBox="0 0 80 100"
      className="w-16 h-20 text-gray-300"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="40" cy="30" r="20" />
      <path d="M10 95 C10 68 70 68 70 95 Z" />
    </svg>
  );
}

type TeamMember = typeof team[number];

function BrianModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="bg-navy px-7 py-6 flex items-center gap-5 rounded-t-xl">
          <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-maroon-light">
            {member.photo && (
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover object-top"
              />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-white text-xl leading-snug">{member.name}</h3>
            <p className="text-maroon-light text-xs uppercase tracking-wide font-sans mt-1">{member.title}</p>
            <a
              href={`mailto:${member.email}`}
              className="text-white/60 hover:text-white text-xs font-sans mt-1 inline-flex items-center gap-1.5 transition-colors"
            >
              <Mail size={11} />
              {member.email}
            </a>
          </div>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white transition-colors flex-shrink-0 self-start"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal body */}
        <div className="px-7 py-6 space-y-4">
          {member.fullBio?.paragraphs.map((para, i) => (
            <p key={i} className="text-navy/75 font-sans text-[0.95rem] leading-relaxed">
              {para}
            </p>
          ))}

          {member.fullBio?.counties && (
            <>
              <Separator className="my-4 bg-gray-100" />
              <div className="flex items-start gap-2 text-navy/60 font-sans text-xs leading-relaxed">
                <MapPin size={13} className="text-maroon flex-shrink-0 mt-0.5" />
                <p>{member.fullBio.counties}</p>
              </div>
            </>
          )}

          {member.fullBio?.specialties && (
            <div className="bg-cream rounded-lg p-4 mt-2">
              <p className="text-maroon text-[0.65rem] uppercase tracking-widest font-sans mb-1">Specialties</p>
              <p className="text-navy/70 font-sans text-xs leading-relaxed">{member.fullBio.specialties}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeUp>
            <p className="text-maroon text-xs uppercase tracking-widest font-sans mb-4">
              Our Team
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy leading-tight mb-4">
              Meet the People Behind Your Counsel
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-navy/60 font-sans text-sm leading-relaxed">
              A small, dedicated team of legal professionals committed to
              delivering thoughtful, partner-level service.
            </p>
          </FadeUp>
        </div>

        {/* Team grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => {
            const isClickable = !!member.fullBio;
            return (
              <StaggerItem key={member.name}>
              <Card
                onClick={() => isClickable && setSelected(member)}
                className={`border border-gray-100 shadow-none hover:shadow-md transition-shadow duration-200 rounded-lg overflow-hidden p-0 h-full ${isClickable ? "cursor-pointer" : ""}`}
              >
                {/* Photo */}
                <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center overflow-hidden relative">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <PersonSilhouette />
                  )}
                  {isClickable && (
                    <div className="absolute inset-0 bg-navy/0 hover:bg-navy/20 transition-colors duration-200 flex items-end justify-center pb-3 opacity-0 hover:opacity-100">
                      <span className="text-white text-[0.65rem] uppercase tracking-widest font-sans bg-maroon px-3 py-1">
                        View Profile
                      </span>
                    </div>
                  )}
                </div>

                <CardContent className="p-5">
                  <h3 className="font-serif text-navy text-base font-semibold leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-maroon text-xs uppercase tracking-wide font-sans mt-1">
                    {member.title}
                  </p>
                  <Separator className="my-3 bg-gray-100" />
                  <p className="text-navy/60 text-sm font-sans leading-relaxed mb-3">
                    {member.bio}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-maroon hover:text-maroon-dark text-xs font-sans transition-colors"
                  >
                    <Mail size={12} aria-hidden="true" />
                    {member.email}
                  </a>
                </CardContent>
              </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

      {/* Profile modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <BrianModal member={selected} onClose={() => setSelected(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
