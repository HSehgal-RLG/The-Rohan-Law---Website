"use client";

import { ExpandLine, FadeUp } from "@/components/ui/animate";

export default function VideoSection() {
  return (
    <section id="video" className="bg-navy">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <FadeUp>
            <p className="text-maroon-light text-xs uppercase tracking-widest font-sans mb-4">
              See Our Firm
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
              A Word From Brian P. Rohan
            </h2>
          </FadeUp>
          <ExpandLine delay={0.2} originX={0.5} className="h-0.5 w-16 bg-maroon-light mx-auto mb-5" />
          <FadeUp delay={0.3}>
            <p className="text-white/65 font-sans text-sm leading-relaxed">
              Take a minute to meet the firm and hear how we approach every
              client matter.
            </p>
          </FadeUp>
        </div>

        {/* Player */}
        <FadeUp delay={0.2}>
          <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 max-w-4xl mx-auto">
            <video
              src="/rohan-law-video.mp4"
              poster="/video-poster.jpg"
              controls
              preload="none"
              playsInline
              className="w-full aspect-video bg-navy-dark"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
