"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ListVideo } from "lucide-react";

/**
 * Click-to-load YouTube playlist player.
 *
 * The iframe is only mounted once the visitor presses play, so the page never
 * pays for YouTube's player bundle on load. Playback runs through
 * youtube-nocookie.com so nothing is set until the visitor opts in.
 */
export default function YouTubePlaylist({
  playlistId,
  title,
  cover,
  configured,
}: {
  playlistId: string;
  title: string;
  cover?: string;
  configured: boolean;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-navy-dark shadow-2xl ring-1 ring-navy/15">
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}&autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => configured && setActive(true)}
          disabled={!configured}
          aria-label={configured ? `Play the ${title} playlist` : `${title} — coming soon`}
          className={`group absolute inset-0 h-full w-full ${
            configured ? "cursor-pointer" : "cursor-default"
          }`}
        >
          {cover ? (
            <Image
              src={cover}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={`object-cover transition-transform duration-500 ${
                configured ? "group-hover:scale-[1.03]" : ""
              }`}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-dark" />
          )}

          <div
            className={`absolute inset-0 bg-navy-dark/45 transition-colors duration-300 ${
              configured ? "group-hover:bg-navy-dark/25" : ""
            }`}
          />

          <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            {configured ? (
              <>
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-maroon shadow-xl transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                  <Play className="ml-1 text-white" size={28} fill="currentColor" />
                </span>
                <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/85 font-sans">
                  <ListVideo size={14} />
                  {title} Playlist
                </span>
              </>
            ) : (
              <span className="flex items-center gap-2 px-4 text-center text-xs uppercase tracking-widest text-white/70 font-sans">
                <ListVideo size={14} />
                {title} — Coming Soon
              </span>
            )}
          </span>
        </button>
      )}
    </div>
  );
}
