import Link from "next/link";

import { getAllPosts } from "@/lib/posts";
import { BlogPost } from "./BlogPost";
import AnimatedSection from "./section/AnimatedSection";
import { Icons } from "./Icons";

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <AnimatedSection stagger={4} className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
        Recent Blogs
      </h2>
      <ul className="flex flex-col gap-4">
        {posts.map((post, index) => (
          <li key={`${post.metadata.slug}-${index}`}>
            <BlogPost post={post} />
          </li>
        ))}
      </ul>
      <Link
        href="/blog"
        aria-label="View all blog posts"
        className="text-muted-foreground hover:text-primary hover:bg-secondary hover:dark:bg-secondary/50 mx-auto -mt-2 flex w-fit items-center gap-1.5 rounded-lg p-2 text-sm font-medium transition-colors"
      >
        View all posts
        <Icons.arrowRight className="size-3.5" />
      </Link>
    </AnimatedSection>
  );
}
