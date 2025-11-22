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
    <AnimatedSection className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Blog</h1>

      <AnimatedSection component="p" stagger={1} className="leading-relaxed">
        Sharing ideas and experiences on programming, life, and everything in
        between. Stay tuned for more!
      </AnimatedSection>

      <AnimatedSection
        component="ul"
        stagger={2}
        className="flex flex-col gap-4"
      >
        {posts?.map((post, index) => (
          <li key={`${post.metadata.slug}-${index}`}>
            <BlogPost post={post} />
          </li>
        ))}
      </AnimatedSection>
    </AnimatedSection>
  );
}
