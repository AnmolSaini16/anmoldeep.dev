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
    <AnimatedSection>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold sm:text-3xl">Blog</h1>
        <p className="text-muted-foreground leading-relaxed">
          Sharing ideas and experiences on programming, life, and everything in
          between. Stay tuned for more!
        </p>
      </div>

      <ul className="mt-6 flex flex-col gap-4">
        {posts?.map((post, index) => (
          <AnimatedSection
            key={`${post.metadata.slug}-${index}`}
            delay={0.1 + index * 0.08}
            component="li"
          >
            <BlogPost post={post} />
          </AnimatedSection>
        ))}
      </ul>
    </AnimatedSection>
  );
}
