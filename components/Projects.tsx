import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { projects } from "@/content/site";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Icons } from "./Icons";
import AnimatedSection from "./section/AnimatedSection";

export default function Projects() {
  return (
    <AnimatedSection className="flex flex-col gap-4" delay={0.45}>
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
        Pinned Projects
      </h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <AnimatedSection key={project.title} component="li">
            <Project {...project} />
          </AnimatedSection>
        ))}
      </ul>
      <Link
        href="https://github.com/AnmolSaini16"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View more projects on my GitHub"
        className="text-muted-foreground hover:text-primary hover:bg-secondary hover:dark:bg-secondary/50 mx-auto flex w-fit items-center gap-1 rounded-lg p-2 text-sm font-medium transition-colors"
      >
        View all projects
        <Icons.arrowUpRight className="size-3.5" />
      </Link>
    </AnimatedSection>
  );
}

const Project = ({
  title,
  description,
  imageSrc,
  github,
  demo,
}: {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  github: string;
  demo?: string;
}) => (
  <Card className="size-full overflow-hidden">
    <CardContent className="px-0 pb-0">
      <div className="bg-muted relative aspect-video overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover"
          quality={95}
          fill
          sizes="(min-width: 1024px) 300px, (min-width: 768px) 400px, 100vw"
        />
      </div>
    </CardContent>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription className="line-clamp-2">{description}</CardDescription>
    </CardHeader>
    <CardFooter>
      <Link
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} source code`}
        className="hover:bg-secondary inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
      >
        <Icons.github className="size-4" />
      </Link>

      {demo && (
        <Link
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} live demo`}
          className="hover:bg-secondary ml-1 inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
        >
          <Icons.link className="size-4" />
        </Link>
      )}
    </CardFooter>
  </Card>
);
