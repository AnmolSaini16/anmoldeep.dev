import React from "react";
import { Metadata } from "next";

import { getAllPosts } from "@/lib/posts";
import AnimatedSection from "@/components/section/AnimatedSection";
import { BlogPost } from "@/components/BlogPost";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Sharing ideas and experiences on programming, life, and everything in between. Stay tuned for more!",
};

export default async function Blog() {
  const posts = getAllPosts();

  return (
    <AnimatedSection className="space-y-1.5">
      <h1 className="text-2xl font-bold">Blog</h1>

      <p className="text-muted-foreground">
        Sharing ideas and experiences on programming, life, and everything in
        between.
      </p>

      <ul className="flex flex-col gap-6 pt-8">
        {posts?.map((post, index) => (
          <AnimatedSection
            key={`${post.metadata.slug}-${index}`}
            delay={0.1 + index * 0.05}
            component="li"
          >
            <BlogPost post={post} />
          </AnimatedSection>
        ))}
      </ul>
    </AnimatedSection>
  );
}
