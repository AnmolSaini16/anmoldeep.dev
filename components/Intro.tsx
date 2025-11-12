"use client";

import { motion } from "framer-motion";

import profilePic from "@/public/profile.png";
import Avatar from "@/components/ui/Avatar";
import Link from "next/link";
import { socialLinks } from "@/content/site";
import AnimatedSection from "./section/AnimatedSection";

export default function Intro() {
  return (
    <AnimatedSection className="flex flex-col gap-3">
      <Avatar src={profilePic} alt="Anmoldeep Singh" size="md" sizes="80px" />

      <h1 className="mt-1 text-3xl font-semibold tracking-tight">
        Anmoldeep Singh
      </h1>

      <p className="text-muted-foreground leading-relaxed">
        I'm a software engineer with a passion for building web applications. I
        thrive on creating meaningful experiences through code and love bringing
        ideas to life!
      </p>

      <div className="flex flex-wrap items-center gap-3">
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.15 + index * 0.08,
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="bg-background hover:bg-secondary/50 text-muted-foreground hover:text-primary dark:bg-input/30 dark:border-input dark:hover:bg-input/50 inline-flex items-center gap-1.5 rounded-lg border p-1.5 text-sm font-medium shadow-xs transition-colors"
            >
              <link.icon className="text-primary size-3.5" />
              {link.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
