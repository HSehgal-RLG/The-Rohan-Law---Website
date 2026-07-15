"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoLightbox({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8 bg-navy-dark/85 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Firm introduction video"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Close video"
          >
            <X size={26} />
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src="/rohan-law-video.mp4"
              poster="/video-poster.jpg"
              controls
              autoPlay
              playsInline
              className="w-full rounded-lg shadow-2xl aspect-video bg-navy"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
