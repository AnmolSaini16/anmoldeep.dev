import Image from "next/image";

import { formatDate } from "@/lib/utils";
import { IPost } from "@/types";
import { Icons } from "../Icons";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  post: IPost;
} & React.ComponentPropsWithoutRef<"section">;

const PostSection = ({ children, post, ...props }: Props) => {
  const { title, published_at, cover_image, reading_time } = post.metadata;

  return (
    <section {...props}>
      <article className="flex flex-col gap-8">
        {cover_image && (
          <div className="bg-muted relative hidden aspect-[16/9] overflow-hidden rounded-lg border shadow-md sm:block">
            <Image
              src={cover_image}
              alt={title}
              className="object-cover"
              sizes="(min-width: 1024px) 900px, (min-width: 768px) 700px, 100vw"
              priority
              fill
            />
          </div>
        )}

        <header className="space-y-4">
          <h1 className="text-primary text-3xl font-extrabold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <div className="text-muted-foreground flex flex-wrap items-center gap-2.5 text-sm">
            <div className="flex items-center gap-1.5">
              <Icons.calendar className="size-3.5" />
              <time dateTime={published_at}>
                {formatDate(published_at, {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </time>
            </div>

            <span className="bg-muted-foreground size-1 rounded-full" />

            <div className="flex items-center gap-1.5">
              <Icons.clock className="size-3.5" />
              <span>{reading_time}</span>
            </div>
          </div>
        </header>

        <div className="bg-muted-foreground/40 h-0.5 w-20" />

        {children}
      </article>

      <div className="bg-border mx-auto mt-12 mb-6 h-px" />

      <Link
        href="/blog"
        className="text-muted-foreground hover:text-primary hover:bg-secondary hover:dark:bg-secondary/50 mx-auto flex w-fit items-center gap-1.5 rounded-lg p-2 text-sm font-medium transition-colors"
        aria-label="Back to all Blogs"
      >
        <Icons.back className="size-3.5" />
        Back to Blogs
      </Link>
    </section>
  );
};

export default PostSection;
