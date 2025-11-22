import Link from "next/link";

import { socialLinks } from "@/content/site";
import AnimatedSection from "./section/AnimatedSection";

export default function Intro() {
  return (
    <AnimatedSection className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Anmoldeep Singh
      </h1>

      <div className="space-y-4">
        <AnimatedSection component="p" stagger={1} className="leading-relaxed">
          I'm a Software Engineer with {new Date().getFullYear() - 2022}+ years
          of experience. I am known for my passion for building applications and
          bringing ideas to life through code.
        </AnimatedSection>

        <AnimatedSection component="p" stagger={2} className="leading-relaxed">
          Currently working as a Senior Software Engineer at{" "}
          <Link
            href="https://optym.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-primary/50 hover:decoration-primary font-medium underline underline-offset-4 transition-colors"
          >
            Optym
          </Link>{" "}
          based in Bengaluru, India.
        </AnimatedSection>
      </div>

      <AnimatedSection
        component="div"
        stagger={3}
        className="flex flex-wrap items-center gap-3"
      >
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="bg-card hover:bg-secondary/80 dark:hover:bg-secondary/50 text-muted-foreground hover:text-primary inline-flex items-center gap-1.5 rounded-lg border p-1.5 text-sm font-medium shadow-xs transition-colors"
          >
            <link.icon className="text-primary size-3.5" />
            {link.label}
          </Link>
        ))}
      </AnimatedSection>
    </AnimatedSection>
  );
}
