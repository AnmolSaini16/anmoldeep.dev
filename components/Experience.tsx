import Link from "next/link";
import { StaticImageData } from "next/image";

import AnimatedSection from "./section/AnimatedSection";
import Avatar from "./ui/Avatar";
import { workplaces } from "@/content/site";

export default function Experience() {
  return (
    <AnimatedSection className="flex flex-col gap-6" delay={0.25}>
      <div className="space-y-3">
        <h2 className="text-xl leading-none font-semibold tracking-tight sm:text-2xl">
          Experience
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          I specialize in the web, with expertise in JavaScript, TypeScript,
          React, Next.js, Node.js, Databases, HTML, CSS, and UI/UX. Here are
          some of the places I've worked:
        </p>
      </div>

      <ul className="space-y-8">
        {workplaces.map((item, index) => (
          <AnimatedSection
            key={`workplace-${index}`}
            delay={0.1 + index * 0.1}
            component="li"
          >
            <WorkPlace isLast={index === workplaces.length - 1} {...item} />
          </AnimatedSection>
        ))}
      </ul>
    </AnimatedSection>
  );
}

const WorkPlace = ({
  title,
  company,
  time,
  imageSrc,
  link,
  description,
  isLast,
  location,
}: {
  title: string;
  company: string;
  time: string;
  imageSrc: StaticImageData;
  link: string;
  description: string;
  isLast: boolean;
  location: string;
}) => {
  return (
    <div className="relative flex flex-col justify-start sm:pl-16">
      <div className="absolute top-0 -bottom-10 left-0 hidden flex-col items-center sm:flex">
        <div className="bg-card z-10 flex items-center justify-center rounded-full border p-2 shadow-xs">
          <Avatar src={imageSrc} alt={company} sizes="24px" size="xs" />
        </div>

        {!isLast && <div className="bg-border w-px flex-1" />}
      </div>

      <div className="grow">
        <div>
          <h3 className="text-primary mb-1 text-base leading-tight font-semibold tracking-tight">
            {title}
          </h3>

          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-primary/50 hover:decoration-primary text-sm font-medium underline underline-offset-4 transition-colors"
          >
            {company}
          </Link>

          <div className="text-muted-foreground mt-1 flex items-center gap-2 text-sm">
            <p>{location}</p>
            <span className="bg-muted-foreground size-1 rounded-full" />
            <time>{time}</time>
          </div>
        </div>

        <p className="mt-2 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
