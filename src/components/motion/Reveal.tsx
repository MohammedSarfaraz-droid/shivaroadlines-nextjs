"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.45,
  yOffset = 14,
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : yOffset,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once, margin: "-40px" }}
      transition={{
        duration: shouldReduceMotion ? 0.15 : duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0] as const,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
