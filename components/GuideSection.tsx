"use client";

import { ArrowUpRight } from "lucide-react";
import {
  ExpandLine,
  FadeUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animate";
import YouTubePlaylist from "@/components/YouTubePlaylist";
import { isConfigured, playlistUrl, type Guide } from "@/lib/guides";

export default function GuideSection({
  guide,
  bg = "cream",
  reverse = false,
}: {
  guide: Guide;
  bg?: "cream" | "white";
  /** Puts the player on the left so consecutive guide sections don't mirror. */
  reverse?: boolean;
}) {
  const configured = isConfigured(guide.playlistId);

  const Copy = reverse ? SlideInRight : SlideInLeft;
  const Player = reverse ? SlideInLeft : SlideInRight;

  return (
    <section id={guide.id} className={bg === "cream" ? "bg-cream" : "bg-white"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Copy */}
          <Copy className={reverse ? "lg:order-2" : "lg:order-1"}>
            <FadeUp>
              <p className="text-maroon text-xs uppercase tracking-widest font-sans mb-4">
                {guide.eyebrow}
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy leading-tight mb-5">
                {guide.title}
              </h2>
            </FadeUp>
            <ExpandLine delay={0.2} className="h-0.5 w-16 bg-maroon mb-6" />
            <FadeUp delay={0.2}>
              <p className="text-navy/70 font-sans text-sm leading-relaxed mb-8">
                {guide.intro}
              </p>
            </FadeUp>

            <StaggerContainer className="space-y-3">
              {guide.points.map((heading) => (
                <StaggerItem key={heading}>
                  <div className="border-l-2 border-maroon bg-navy/[0.03] py-3 px-4">
                    <span className="font-serif text-lg sm:text-xl text-navy leading-snug">
                      {heading}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {configured && (
              <FadeUp delay={0.3}>
                <a
                  href={playlistUrl(guide.playlistId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-white text-xs uppercase tracking-widest px-6 py-3 transition-colors duration-150 font-sans"
                >
                  Watch the {guide.playlistTitle} Playlist
                  <ArrowUpRight size={15} />
                </a>
              </FadeUp>
            )}
          </Copy>

          {/* Player */}
          <Player delay={0.15} className={reverse ? "lg:order-1" : "lg:order-2"}>
            <div className="lg:sticky lg:top-28">
              <YouTubePlaylist
                playlistId={guide.playlistId}
                title={guide.playlistTitle}
                cover={guide.cover}
                configured={configured}
              />
              <p className="mt-4 text-center text-navy/50 font-sans text-xs leading-relaxed">
                {configured
                  ? "Plays here — the video player only loads when you press play."
                  : "This playlist will appear here once it is published."}
              </p>
            </div>
          </Player>
        </div>
      </div>
    </section>
  );
}
