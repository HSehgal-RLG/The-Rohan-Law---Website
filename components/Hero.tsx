"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

function HeroItem({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpeg"
          alt=""
          fill
          className="object-cover object-[center_47%]"
          priority
          quality={90}
        />
        {/* Layered overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(17,29,51,0.88) 0%, rgba(27,42,74,0.78) 45%, rgba(107,18,34,0.72) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(10,15,30,0.55) 100%)",
          }}
        />
      </div>

      {/* Decorative top rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease }}
        style={{ originX: 0.5 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon-light/40 to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-24">
        <HeroItem delay={0.15}>
          <p
            className="text-white/90 text-sm uppercase font-sans mb-8 drop-shadow-md"
            style={{ letterSpacing: "0.2em" }}
          >
            Albany, New York &nbsp;·&nbsp; Established 1994
          </p>
        </HeroItem>

        <HeroItem delay={0.3}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            Counsel You Can
            <br />
            <span className="italic">Rely On.</span>
          </h1>
        </HeroItem>

        <HeroItem delay={0.45}>
          <div className="w-16 h-px bg-maroon-light mx-auto mb-8" />
        </HeroItem>

        <HeroItem delay={0.55}>
          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
            Three decades of trusted counsel in real estate, estate planning,
            corporate law, and traffic matters throughout New York.
          </p>
        </HeroItem>

        <HeroItem delay={0.7}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-maroon hover:bg-maroon-dark text-white px-8 py-3 text-xs uppercase tracking-widest transition-colors duration-200 font-sans"
            >
              Schedule a Consultation
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center border border-white/40 hover:border-white text-white hover:bg-white/10 px-8 py-3 text-xs uppercase tracking-widest transition-all duration-200 font-sans"
            >
              Learn More
            </a>
          </div>
        </HeroItem>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce"
      >
        <ChevronDown size={28} aria-hidden="true" />
      </motion.div>
    </section>
  );
}
