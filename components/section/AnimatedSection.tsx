"use client";

import React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

type AnimatedSectionProps = HTMLMotionProps<"section"> & {
  component?: React.ElementType;
  enable?: boolean;
  stagger?: number;
};

export default function AnimatedSection({
  children,
  component,
  enable = true,
  stagger = 0,
  ...props
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = component || "section";

  const MotionComponent = motion.create(Component);

  if (!enable || shouldReduceMotion) {
    return <Component {...props}>{children}</Component>;
  }

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1 * stagger,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
