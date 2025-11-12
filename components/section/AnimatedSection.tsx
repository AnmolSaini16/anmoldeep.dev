"use client";

import React, { useMemo } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type AnimatedSectionProps = HTMLMotionProps<"section"> & {
  component?: React.ElementType;
  enable?: boolean;
  delay?: number;
  duration?: number;
};

export default function AnimatedSection({
  children,
  component,
  enable = true,
  delay = 0.1,
  duration = 0.5,
  ...props
}: AnimatedSectionProps) {
  const Component = component || "section";

  const MotionComponent = useMemo(() => motion(Component), [Component]);

  if (!enable) {
    return <Component {...props}>{children}</Component>;
  }

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
        type: "tween",
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
