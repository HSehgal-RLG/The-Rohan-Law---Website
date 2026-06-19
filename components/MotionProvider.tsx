"use client";

import { MotionConfig } from "framer-motion";

/**
 * Globally honors the user's "reduce motion" OS setting — framer-motion will
 * skip transform/layout animations for those users while keeping content fully
 * accessible.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
