import Link from "next/link";
import { StaticImageData } from "next/image";

import AnimatedSection from "@/components/section/AnimatedSection";
import Avatar from "@/components/ui/Avatar";
import { workplaces } from "@/content/site";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About me and my work",
};

export default function About() {
  return (
    <AnimatedSection className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">About</h1>

      <div className="space-y-4">
        <AnimatedSection component="p" stagger={1} className="leading-relaxed">
          I’m a Software Engineer based in Bengaluru, India, with a strong
          passion for building high-quality applications. I love turning ideas
          into real products that make a meaningful impact.
        </AnimatedSection>

        <AnimatedSection component="p" stagger={2} className="leading-relaxed">
          I specialize in building web applications, with expertise in
          JavaScript, TypeScript, React, Next.js, Node.js, Databases, HTML, CSS,
          UI/UX design, and PWA. My focus is on building reliable, scalable, and
          performant experiences on the web.
        </AnimatedSection>

        <AnimatedSection component="p" stagger={3} className="leading-relaxed">
          I’m mostly self-taught and driven by curiosity. I love to learn new
          things and share my knowledge and experiences through my writings.
          Apart from work, I enjoy spending time at the gym, swimming, reading,
          and writing.
        </AnimatedSection>

        <AnimatedSection
          component="p"
          stagger={3.5}
          className="leading-relaxed"
        >
          Here are some of the places I’ve worked:
        </AnimatedSection>
      </div>

      <AnimatedSection component="div" stagger={4}>
        <Card>
          <CardContent className="p-0">
            <ul className="divide-border divide-y">
              {workplaces.map((item, index) => (
                <li key={`workplace-${index}`}>
                  <WorkPlace {...item} />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </AnimatedSection>
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
  location,
}: {
  title: string;
  company: string;
  time: string;
  imageSrc: StaticImageData;
  link: string;
  description: string;
  location: string;
}) => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex items-center gap-4">
        <Avatar src={imageSrc} alt={company} sizes="40px" size="sm" />
        <div>
          <h3 className="pb-1 text-base leading-none font-semibold tracking-tight">
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
        </div>
      </div>

      <p className="text-sm leading-relaxed">{description}</p>

      <div className="text-muted-foreground flex items-center gap-2 text-sm">
        <span>{location}</span>
        <span className="bg-muted-foreground size-1 rounded-full" />
        <time>{time}</time>
      </div>
    </div>
  );
};
