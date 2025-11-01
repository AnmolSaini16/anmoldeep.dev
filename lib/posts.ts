import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

import { IPost } from "@/types";

const postsDir = path.join(process.cwd(), "content/blog");

export function getAllPosts(): IPost[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));

  const posts: IPost[] = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(postsDir, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
      metadata: {
        slug,
        title: data.title,
        description: data.description,
        published_at: data.published_at,
        cover_image: data.cover_image,
        reading_time: readingTime(content).text,
      },
      content,
    };
  });

  return posts.sort((a, b) => {
    const ad = new Date(a.metadata.published_at).getTime();
    const bd = new Date(b.metadata.published_at).getTime();
    return bd - ad;
  });
}

export const getPostBySlug = (slug: string): IPost | null => {
  const post = getAllPosts().find((post) => post.metadata.slug === slug);
  return post ?? null;
};
