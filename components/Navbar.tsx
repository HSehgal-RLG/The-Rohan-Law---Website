"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Legal Services", href: "#services" },
  { label: "Title Services", href: "#title" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="flex-shrink-0 flex items-center -ml-3"
            onClick={() => setIsOpen(false)}
            aria-label="The Rohan Law Group — Home"
          >
            <Image
              src="/logo-white.png"
              alt="The Rohan Law Group"
              width={180}
              height={68}
              className="h-11 lg:h-[3.75rem] w-auto"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-white/80 hover:text-white text-xs uppercase tracking-widest transition-colors duration-150 font-sans"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 bg-maroon hover:bg-maroon-dark text-white text-xs uppercase tracking-widest px-5 py-2.5 transition-colors duration-150 font-sans"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 -mr-2 rounded focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 px-2 text-white/80 hover:text-white text-sm uppercase tracking-widest border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 py-3 text-center bg-maroon hover:bg-maroon-dark text-white text-sm uppercase tracking-widest transition-colors"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
