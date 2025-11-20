"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import profilePic from "@/public/profile.png";
import Avatar from "@/components/ui/Avatar";
import { socialLinks } from "@/content/site";
import AnimatedSection from "./section/AnimatedSection";

export default function Intro() {
  return (
    <AnimatedSection className="flex flex-col gap-6">
      <div className="space-y-4">
        <Avatar src={profilePic} alt="Anmoldeep Singh" size="md" sizes="80px" />

        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Hey, I'm Anmoldeep Singh
        </h1>
      </div>

      <div className="space-y-4">
        <p className="leading-relaxed">
          I’m a Software Engineer with {new Date().getFullYear() - 2022}+ years
          of experience. I am known for my passion for building applications and
          bringing ideas to life through code.
        </p>

        <p className="leading-relaxed">
          I’m currently working as a Senior Software Engineer at{" "}
          <Link
            href="https://optym.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-primary/50 hover:decoration-primary font-medium underline underline-offset-4 transition-colors"
          >
            Optym
          </Link>{" "}
          based in Bengaluru, India.
        </p>
      </div>

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
              className="bg-card hover:bg-secondary/50 text-muted-foreground hover:text-primary inline-flex items-center gap-1.5 rounded-lg border p-1.5 text-sm font-medium shadow-xs transition-colors"
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
