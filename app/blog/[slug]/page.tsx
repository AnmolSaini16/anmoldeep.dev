import { notFound } from "next/navigation";
import { Metadata } from "next";

import PostSection from "@/components/section/PostSection";
import Mdx from "@/components/Markdown";
import { siteConfig } from "@/content/site";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  const { title, description, cover_image } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      ...siteConfig.openGraph,
      title,
      description,
      images: cover_image
        ? [{ url: cover_image as string, alt: title }]
        : undefined,
    },
  };
}

export default async function PostContentPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <PostSection post={post}>
      <Mdx content={post.content} />
    </PostSection>
  );
}
