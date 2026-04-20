import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Legal Services", href: "#services" },
  { label: "Title Services", href: "#title" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Col 1 — identity */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo-white.png"
                alt="The Rohan Law Group"
                width={160}
                height={60}
                className="h-[88px] w-auto"
              />
            </div>
            <p className="text-white/50 text-xs font-sans leading-relaxed max-w-xs">
              Transactional legal counsel for businesses, entrepreneurs, and
              property owners throughout New York. Established 1994.
            </p>
          </div>

          {/* Col 2 — navigation */}
          <div>
            <p className="text-white/30 text-[0.65rem] uppercase tracking-widest font-sans mb-5">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-xs font-sans transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — contact */}
          <div>
            <p className="text-white/30 text-[0.65rem] uppercase tracking-widest font-sans mb-5">
              Contact
            </p>
            <address className="not-italic text-white/60 font-sans text-xs leading-relaxed space-y-4">
              <div>
                <p className="text-white/30 text-[0.6rem] uppercase tracking-widest mb-1">Principal Office</p>
                <a
                  href="https://maps.google.com/?q=18+Computer+Drive+West+Suite+100+Colonie+New+York+12205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <p>18 Computer Drive West, Suite 100</p>
                  <p>Colonie, New York 12205</p>
                </a>
                <a href="tel:+15184380010" className="block hover:text-white transition-colors mt-1">Tel: (518) 438-0010</a>
                <p className="text-white/40">Fax: (518) 438-0030</p>
              </div>
              <div>
                <p className="text-white/30 text-[0.6rem] uppercase tracking-widest mb-1">Satellite Offices</p>
                <a
                  href="https://maps.google.com/?q=125+High+Rock+Avenue+Saratoga+Springs+New+York+12866"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  <p>125 High Rock Avenue</p>
                  <p>Saratoga Springs, New York 12866</p>
                  <p className="text-white/30 text-[0.6rem] uppercase tracking-widest mt-0.5">By Appointment Only</p>
                </a>
                <a href="tel:+15183064318" className="block hover:text-white transition-colors mt-0.5">Tel: (518) 306-4318</a>
                <p className="text-white/40">Fax: (518) 306-4518</p>
                <a
                  href="https://maps.google.com/?q=333+Glen+Street+Glens+Falls+New+York+12801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors mt-3"
                >
                  <p>333 Glen Street</p>
                  <p>Glens Falls, New York 12801</p>
                  <p className="text-white/30 text-[0.6rem] uppercase tracking-widest mt-0.5">By Appointment Only</p>
                </a>
                <a href="tel:+15183383833" className="block hover:text-white transition-colors mt-0.5">Tel: (518) 338-3833</a>
                <p className="text-white/40">Fax: (518) 338-3983</p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-[0.65rem] font-sans">
            &copy; {year} The Rohan Law Group. All rights reserved.
          </p>
          <p className="text-white/20 text-[0.65rem] font-sans">
            Albany, New York
          </p>
        </div>
      </div>
    </footer>
  );
}
