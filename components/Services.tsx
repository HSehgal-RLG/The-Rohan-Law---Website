"use client";

import { useState } from "react";
import { Briefcase, Building2, FileText, BookOpen, Car, X, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate";

const services = [
  {
    icon: Building2,
    title: "Real Estate",
    subtitle: "Residential · Commercial · Land Use · Title",
    summary:
      "Over 30 years of deep experience in residential and commercial real estate transactions, land use, zoning, title, and foreclosure matters throughout New York State.",
    badge: "Core Practice",
  },
  {
    icon: FileText,
    title: "Estate Planning",
    subtitle: "Wills · Trusts · Powers of Attorney",
    summary:
      "Comprehensive, personalized estate plans that protect your legacy, honor your wishes, and provide clarity and security for your loved ones.",
    badge: "Core Practice",
  },
  {
    icon: BookOpen,
    title: "Estate Administration",
    subtitle: "Probate · Asset Distribution · Trustee Support",
    summary:
      "Compassionate, efficient guidance for executors, administrators, and beneficiaries through the probate and estate administration process.",
    badge: "Core Practice",
  },
  {
    icon: Briefcase,
    title: "Corporate Law & Business Formation",
    subtitle: "Entity Formation · M&A · Ongoing Counsel",
    summary:
      "Full-lifecycle legal support for businesses — from initial formation and deal-making to ongoing counsel, succession planning, and growth strategy.",
    badge: "Core Practice",
  },
  {
    icon: Car,
    title: "Vehicle & Traffic Matters",
    subtitle: "Tickets · Suspensions · Court Representation",
    summary:
      "Skilled representation for traffic violations, license suspensions, and infractions — protecting your driving record and your rights throughout New York.",
    badge: "Core Practice",
  },
];

// ─── Modal content components ──────────────────────────────────────────────

function RealEstateContent() {
  const [tab, setTab] = useState(0);
  const tabs = ["Residential", "Commercial", "Land Use & Zoning", "Title & Foreclosure"];

  return (
    <div>
      <p className="text-navy/70 font-sans text-sm leading-relaxed mb-6">
        Real estate transactions are rarely simple — they&apos;re high-stakes, time-sensitive, and layered with legal complexity. At The Rohan Law Group, clients benefit from over 30 years of deep experience navigating this terrain, from straightforward home purchases to sophisticated, multimillion-dollar commercial developments. The firm has built a distinguished record representing buyers, sellers, developers, lenders, investors, municipalities, and major financial institutions across New York State, successfully guiding thousands of transactions from initial contract execution through final closing.
      </p>
      <p className="text-navy/70 font-sans text-sm leading-relaxed mb-8">
        What truly sets the Rohan Law Group apart is its unwavering commitment to being more than a document preparer. The firm&apos;s attorneys serve as trusted advisors at every turn — combining sharp legal precision with responsive, personalized service and genuine attention to each client&apos;s unique goals.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-100 pb-4">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            className={`px-4 py-2 text-xs uppercase tracking-widest font-sans transition-colors ${
              tab === i
                ? "bg-navy text-white"
                : "text-navy/60 hover:text-navy border border-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab 0 — Residential */}
      {tab === 0 && (
        <div className="space-y-4">
          <p className="text-navy/70 font-sans text-sm leading-relaxed">
            For individuals and families, the firm provides comprehensive guidance through every phase of buying or selling a home. The Rohan Law Group understands that for most people, a home purchase is the single most important financial decision of their lives, and the firm treats it accordingly.
          </p>
          <ul className="space-y-3">
            {[
              ["Contract Review & Attorney Approval", "Every contract is thoroughly reviewed to ensure it is legally sound, with revisions and amendments made as needed to protect the client's interests before approval is given."],
              ["Contract Negotiation", "The firm's attorneys negotiate on behalf of clients to secure fair, favorable terms and conditions tailored to their specific situation."],
              ["Offer Acceptance Guidance", "Clients receive clear, practical counsel on understanding and responding to purchase offers, ensuring their rights and obligations are fully understood before moving forward."],
              ["Contingency Management", "From home inspections to mortgage financing, the firm works proactively to help clients satisfy contractual contingencies and keep transactions on track."],
              ["Closing Date Coordination", "The attorneys work collaboratively with all parties involved to select and properly prepare for an appropriate and workable closing date."],
              ["Title Insurance Guidance", "Clients receive plain-language explanations of title insurance — when lenders require it, when obtaining a separate owner's policy is advisable, and how it protects long-term interests."],
              ["Occupancy Agreements", "When a closing date and a move-in or move-out date don't align, the firm drafts clear occupancy agreements to manage the transition smoothly for all parties."],
              ["Property Condition Disclosure", "Sellers are guided through the preparation of a complete, legally compliant Property Condition Disclosure Statement, minimizing future liability."],
              ["\"As-Is\" Transactions", "Thorough guidance on the distinct legal considerations of as-is sales, helping clients — whether buyer or seller — fully understand their risks and responsibilities."],
              ["Private Mortgages & Seller Financing", "The firm structures and reviews private mortgage agreements and seller-financed arrangements to protect all parties' investments."],
              ["Breach of Contract", "Should disputes arise, clients have experienced legal counsel ready to evaluate all available options and chart the best path forward."],
              ["Real Estate Agent Representation", "The firm can assist buyers in establishing a dedicated buyer's agent relationship, ensuring their interests are independently represented."],
            ].map(([heading, desc]) => (
              <li key={heading} className="flex items-start gap-3">
                <ChevronRight size={14} className="text-maroon flex-shrink-0 mt-1" />
                <span className="text-navy/70 font-sans text-sm leading-relaxed">
                  <span className="font-semibold text-navy">{heading} — </span>{desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tab 1 — Commercial */}
      {tab === 1 && (
        <div className="space-y-4">
          <p className="text-navy/70 font-sans text-sm leading-relaxed">
            On the commercial side, the Rohan Law Group brings substantial depth, sophistication, and a proven track record to every engagement. The firm has represented major hotel developers, institutional lenders, national retailers, healthcare providers, manufacturers, and municipal entities in transactions of all sizes and complexity.
          </p>
          <ul className="space-y-3">
            {[
              ["Acquisitions & Sales", "Full legal support for the purchase and sale of commercial properties of all types, including office buildings, retail centers, mixed-use developments, hotels, apartment complexes, and industrial facilities."],
              ["Commercial Leasing", "Representation of both landlords and tenants in the negotiation and drafting of commercial leases, including direct leases, subleases, ground leases, leaseback arrangements, and lease terminations."],
              ["Development & Construction", "Extensive experience representing developers in construction loan financing, drafting and negotiating construction contracts, and guiding projects from acquisition through completion."],
              ["Financing & Private Lending", "Deep expertise in residential and commercial mortgage lending, including complex financing structures involving the IDA, HUD, SBA, the New York Job Development Authority, and low-income housing tax credit programs."],
              ["Retail, Office & Mixed-Use Properties", "Counsel on streamlined site acquisitions, lease negotiations, and complex transactional structures."],
              ["Eminent Domain & Condemnation", "Representation of property owners and affected parties navigating government takings and condemnation proceedings."],
              ["Commercial Tax Disputes & Abatements", "Counsel on maximizing benefits of real property tax abatements, PILOT agreements, sales tax exemptions, and other governmental incentive programs."],
              ["Affordable Housing Transactions", "Significant experience representing developers and lenders in affordable housing financing, including transactions involving the NY State Housing Trust Fund Corporation, DHCR, and HUD."],
              ["Real Estate Syndications", "Representation of developers in the formation and sale of real estate investment syndications."],
              ["Foreclosures", "Representation of institutional lenders, banks, and insurance companies in major commercial foreclosures involving shopping centers, hotels, apartment complexes, condominiums, and residential properties."],
            ].map(([heading, desc]) => (
              <li key={heading} className="flex items-start gap-3">
                <ChevronRight size={14} className="text-maroon flex-shrink-0 mt-1" />
                <span className="text-navy/70 font-sans text-sm leading-relaxed">
                  <span className="font-semibold text-navy">{heading} — </span>{desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tab 2 — Land Use & Zoning */}
      {tab === 2 && (
        <div className="space-y-4">
          <p className="text-navy/70 font-sans text-sm leading-relaxed">
            Real estate today demands more than transactional skill — it requires a thorough understanding of the regulatory landscape. The Rohan Law Group provides experienced counsel in all aspects of land use, zoning, and environmental law.
          </p>
          <ul className="space-y-3">
            {[
              ["Zoning Approvals, Planning & Permitting", "Representation of developers and municipalities through local agency processes, zoning board hearings, and appellate practice on all issues of zoning law."],
              ["Land Use Disputes", "Legal support for clients facing challenges involving zoning ordinances, variance requests, and contested land use decisions."],
              ["Environmental Compliance", "Experienced review of environmental assessments, NYSDEC and NEPA regulatory matters, and environmental remediation of commercial sites."],
              ["Conservation Easements", "Guidance on the creation and enforcement of conservation easements and related land protection agreements."],
              ["Historic Preservation & Tax Incentive Projects", "Counsel on projects involving historic preservation designations and the federal and state tax incentive programs that accompany them."],
              ["Planned Communities & Multifamily Developments", "Legal support for the development and governance of planned communities, condominiums, and multifamily housing projects."],
            ].map(([heading, desc]) => (
              <li key={heading} className="flex items-start gap-3">
                <ChevronRight size={14} className="text-maroon flex-shrink-0 mt-1" />
                <span className="text-navy/70 font-sans text-sm leading-relaxed">
                  <span className="font-semibold text-navy">{heading} — </span>{desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tab 3 — Title & Foreclosure */}
      {tab === 3 && (
        <div className="space-y-4">
          <ul className="space-y-3">
            {[
              ["Title Examination & Certification", "The firm's attorneys are licensed by the New York State Department of Financial Services as title agents and bring extensive experience in all phases of title examination, certification, and related proceedings and litigation. The firm also represents a major title company in title claim matters."],
              ["Tax Certiorari", "Representation of both taxpayers and municipalities in tax assessment challenges for a broad range of property types, including large apartment complexes, warehouses, manufacturing facilities, and residential homesteads."],
              ["Homeowner Associations & Condominiums", "Substantial experience in condominium law, including participation in the formation and conversion of numerous residential and commercial condominiums and the establishment and governance of homeowner associations."],
            ].map(([heading, desc]) => (
              <li key={heading} className="flex items-start gap-3">
                <ChevronRight size={14} className="text-maroon flex-shrink-0 mt-1" />
                <span className="text-navy/70 font-sans text-sm leading-relaxed">
                  <span className="font-semibold text-navy">{heading} — </span>{desc}
                </span>
              </li>
            ))}
          </ul>
          <div className="bg-cream rounded-lg p-5 mt-4">
            <p className="text-navy/70 font-sans text-sm leading-relaxed italic">
              &ldquo;At the Rohan Law Group, every real estate matter — whether it involves a modest residential sale or a large-scale commercial development — represents something meaningful to the client. The firm&apos;s goal is not simply to complete transactions, but to ensure that each client walks away fully informed, well-protected, and confident in the outcome.&rdquo;
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function EstatePlanningContent() {
  return (
    <div className="space-y-5">
      <p className="text-navy/70 font-sans text-sm leading-relaxed">
        Planning for the future is one of the most important steps you can take to protect your loved ones and preserve the legacy you have worked a lifetime to build. At The Rohan Law Group, our attorneys provide thoughtful, knowledgeable, and highly personalized guidance in all areas of trust and estate planning — approaching every matter with dedication, attention to detail, and a focus on achieving the best possible outcome for our clients and their families.
      </p>
      <p className="text-navy/70 font-sans text-sm leading-relaxed">
        Estate planning is not only about preparing documents — it is about ensuring that your wishes are honored, your assets are protected, and your family is supported during difficult and emotional times. Our firm works closely with individuals and families throughout New York to develop comprehensive plans that reflect their personal, financial, and family goals.
      </p>
      <h4 className="font-serif text-navy text-lg font-semibold mt-6 mb-3">Our Services Include</h4>
      <ul className="space-y-2">
        {[
          "Wills and Trusts",
          "Advanced Directives (Power of Attorney, Health Care Proxy, Living Wills)",
          "Powers of Attorney",
          "Guardianships",
          "Special Needs Planning",
          "Charitable Planning",
          "Business and Family Succession Planning",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <ChevronRight size={14} className="text-maroon flex-shrink-0 mt-1" />
            <span className="text-navy/70 font-sans text-sm">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-navy/70 font-sans text-sm leading-relaxed mt-4">
        We also assist with advanced planning strategies, including trusts designed to protect assets for future generations, support family members with special needs, or help address potential tax considerations.
      </p>
      <div className="bg-cream rounded-lg p-5 mt-2">
        <p className="text-maroon text-[0.65rem] uppercase tracking-widest font-sans mb-2">Our Commitment</p>
        <p className="text-navy/70 font-sans text-sm leading-relaxed">
          Estate planning can feel overwhelming. Our attorneys take the time to clearly explain your options, answer your questions, and help you make informed decisions. At The Rohan Law Group, we pride ourselves on building long-term relationships — dedicated to protecting your interests and those of your loved ones.
        </p>
      </div>
    </div>
  );
}

function EstateAdminContent() {
  return (
    <div className="space-y-5">
      <p className="text-navy/70 font-sans text-sm leading-relaxed">
        When a loved one passes away, families are often faced with a number of legal and financial responsibilities during an already difficult time. The estate administration process may involve locating and probating a will, gathering and valuing assets, paying debts and taxes, accounting to beneficiaries, and distributing property according to the decedent&apos;s wishes or New York law.
      </p>
      <p className="text-navy/70 font-sans text-sm leading-relaxed">
        The attorneys at The Rohan Law Group provide knowledgeable guidance to executors, trustees, and administrators throughout this process. Our team works diligently to ensure that estates are administered efficiently, accurately, and with the utmost respect for the individual whose legacy is being honored.
      </p>
      <h4 className="font-serif text-navy text-lg font-semibold mt-4 mb-3">What Estate Administration Involves</h4>
      <ul className="space-y-2">
        {[
          "Locating and probating the decedent's will",
          "Gathering, inventorying, and appraising estate assets",
          "Notifying creditors and paying outstanding debts",
          "Filing and paying applicable estate and income taxes",
          "Accounting to beneficiaries and the court",
          "Distributing assets to heirs according to the will or New York law",
          "Handling both testate (with a will) and intestate (without a will) estates",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <ChevronRight size={14} className="text-maroon flex-shrink-0 mt-1" />
            <span className="text-navy/70 font-sans text-sm">{item}</span>
          </li>
        ))}
      </ul>
      <div className="bg-cream rounded-lg p-5 mt-2">
        <p className="text-maroon text-[0.65rem] uppercase tracking-widest font-sans mb-2">Trusted Guidance When It Matters Most</p>
        <p className="text-navy/70 font-sans text-sm leading-relaxed">
          Our attorneys provide compassionate, professional support to families navigating one of the most challenging processes they will face — ensuring estates are administered with efficiency, accuracy, and the deepest respect for your loved one&apos;s legacy.
        </p>
      </div>
    </div>
  );
}

function CorporateContent() {
  return (
    <div className="space-y-5">
      <p className="text-navy/70 font-sans text-sm leading-relaxed">
        The Rohan Law Group provides comprehensive legal support to businesses at every stage of their lifecycle — from initial formation through growth, transition, and eventual sale. Our Albany-based attorneys work with startups, small businesses, and mid-market companies alike, tailoring their approach to each client&apos;s specific goals and industry.
      </p>
      <ul className="space-y-4 mt-4">
        {[
          ["Entity Formation & Structure", "The firm helps entrepreneurs and established companies choose and build the right legal structure — whether a corporation, partnership, or LLC — with an eye toward long-term growth, investment readiness, and liability protection."],
          ["Transactions & Deal Support", "The attorneys handle a broad range of business transactions, including mergers and acquisitions, financing arrangements, and partnership formations. Their work covers contract negotiation and drafting, due diligence, and regulatory compliance — ensuring deals close efficiently and clients walk away with agreements that genuinely protect their interests."],
          ["Ongoing Business Counsel", "Beyond transactions, the firm serves as an ongoing legal resource for matters such as employment agreements, shareholder and buy-sell agreements, commercial leases, and property acquisitions — functioning as an extension of a client's management team rather than outside counsel brought in only for crises."],
          ["Business Succession Planning", "For owners thinking about the future of their business, the firm brings together corporate, estate planning, and tax expertise to develop thoughtful succession strategies — addressing ownership transition, financial security, family dynamics, and the long-term health of the business itself."],
        ].map(([heading, desc]) => (
          <li key={heading} className="flex items-start gap-3">
            <ChevronRight size={14} className="text-maroon flex-shrink-0 mt-1" />
            <span className="text-navy/70 font-sans text-sm leading-relaxed">
              <span className="font-semibold text-navy">{heading} — </span>{desc}
            </span>
          </li>
        ))}
      </ul>
      <div className="bg-cream rounded-lg p-5 mt-2">
        <p className="text-navy/70 font-sans text-sm leading-relaxed italic">
          The through-line across all of these services is a relationship-driven approach: The Rohan Law Group positions itself as a long-term partner invested in the success of the businesses — and people — it serves.
        </p>
      </div>
    </div>
  );
}

function TrafficContent() {
  return (
    <div className="space-y-5">
      <p className="text-navy/70 font-sans text-sm leading-relaxed">
        A traffic violation in New York is more than just an inconvenience — it can trigger fines, court costs, assessment fees, insurance hikes, and even the suspension of your driving privileges. Some violations carry criminal consequences, meaning a conviction could result in a permanent record or, in serious cases, jail time.
      </p>
      <p className="text-navy/70 font-sans text-sm leading-relaxed">
        New York&apos;s point system ranges from 2 to 11 points per violation, but even point-free tickets can carry steep penalties. That&apos;s why having skilled legal representation matters.
      </p>
      <h4 className="font-serif text-navy text-lg font-semibold mt-4 mb-3">How The Rohan Law Group Can Help</h4>
      <p className="text-navy/70 font-sans text-sm leading-relaxed">
        The Rohan Law Group brings years of experience handling Vehicle and Traffic matters across local town, city, and village courts throughout New York. In many cases, an attorney can appear on your behalf — meaning you may never have to set foot in a courtroom. Where courts permit plea bargaining, the firm works to negotiate with prosecutors to reduce or dismiss charges and achieve the best possible outcome for each client.
      </p>
      <h4 className="font-serif text-navy text-lg font-semibold mt-4 mb-3">Services Include</h4>
      <ul className="space-y-2">
        {[
          "Speeding Tickets",
          "Reckless Driving",
          "Cell Phone Tickets",
          "Aggravated Unlicensed Operation (AUO)",
          "Driving Without a License",
          "Driving on a Suspended License",
          "Unregistered Motor Vehicle",
          "Leaving the Scene of a Property Damage Accident",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <ChevronRight size={14} className="text-maroon flex-shrink-0 mt-1" />
            <span className="text-navy/70 font-sans text-sm">{item}</span>
          </li>
        ))}
      </ul>
      <div className="bg-cream rounded-lg p-5 mt-2">
        <p className="text-navy/70 font-sans text-sm leading-relaxed font-medium">
          Don&apos;t face the courts alone — The Rohan Law Group has the training and experience to protect your driving record and your rights.
        </p>
      </div>
    </div>
  );
}

// ─── Modal ─────────────────────────────────────────────────────────────────

function ServiceModal({ title, onClose }: { title: string; onClose: () => void }) {
  const headings: Record<string, string> = {
    "Real Estate": "Real Estate Legal Services",
    "Estate Planning": "Estate Planning",
    "Estate Administration": "Estate Administration & Probate",
    "Corporate Law & Business Formation": "Corporate Law, Commercial Transactions & Business Formation",
    "Vehicle & Traffic Matters": "Vehicle & Traffic Matters",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy px-7 py-5 rounded-t-xl flex items-center justify-between flex-shrink-0">
          <div>
            <p className="text-maroon-light text-[0.65rem] uppercase tracking-widest font-sans mb-1">
              Practice Area
            </p>
            <h3 className="font-serif text-white text-xl leading-snug">
              {headings[title] ?? title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white transition-colors ml-4 flex-shrink-0"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-7 py-6 flex-1">
          {title === "Real Estate" && <RealEstateContent />}
          {title === "Estate Planning" && <EstatePlanningContent />}
          {title === "Estate Administration" && <EstateAdminContent />}
          {title === "Corporate Law & Business Formation" && <CorporateContent />}
          {title === "Vehicle & Traffic Matters" && <TrafficContent />}
        </div>

        {/* Footer CTA */}
        <div className="px-7 py-4 border-t border-gray-100 flex-shrink-0 flex items-center justify-between">
          <p className="text-navy/40 font-sans text-xs">The Rohan Law Group, P.C.</p>
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-white text-xs uppercase tracking-widest px-5 py-2.5 transition-colors font-sans"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Main section ───────────────────────────────────────────────────────────

export default function Services() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="services" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeUp>
            <p className="text-maroon text-xs uppercase tracking-widest font-sans mb-4">
              What We Do
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy leading-tight mb-4">
              Our Practice Areas
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-navy/60 font-sans text-base leading-relaxed">
              Click any practice area to explore our full scope of services.
            </p>
          </FadeUp>
        </div>

        {/* Cards grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
              <Card
                onClick={() => setSelected(service.title)}
                className="border border-gray-100 shadow-none hover:shadow-lg transition-all duration-200 rounded-lg p-0 cursor-pointer group h-full"
              >
                <CardContent className="p-7 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="bg-navy/5 rounded-full p-3 flex-shrink-0 group-hover:bg-navy/10 transition-colors">
                      <Icon size={28} className="text-navy" aria-hidden="true" />
                    </div>
                    <Badge className="bg-maroon text-white hover:bg-maroon-dark text-[0.65rem] uppercase tracking-wide rounded-none px-2.5 py-1 h-auto flex-shrink-0">
                      {service.badge}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-serif text-navy text-xl font-semibold leading-snug mb-1">
                      {service.title}
                    </h3>
                    <p className="text-maroon text-xs uppercase tracking-wide font-sans">
                      {service.subtitle}
                    </p>
                  </div>
                  <p className="text-navy/65 font-sans text-base leading-relaxed">
                    {service.summary}
                  </p>
                  <div className="flex items-center gap-1.5 text-maroon text-xs uppercase tracking-widest font-sans mt-1 group-hover:gap-2.5 transition-all">
                    <span>Learn More</span>
                    <ChevronRight size={14} aria-hidden="true" />
                  </div>
                </CardContent>
              </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div key="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <ServiceModal title={selected} onClose={() => setSelected(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
