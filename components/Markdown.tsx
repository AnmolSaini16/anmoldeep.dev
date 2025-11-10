import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
import rehypePrettyCode from "rehype-pretty-code";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  let href = props.href ?? "";

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={cn("underline-offset-4", props.className)}
    />
  );
}

function RoundedImage(props: React.ComponentProps<typeof Image>) {
  return (
    <Image
      {...props}
      className={cn(
        "bg-muted rounded-lg border object-cover shadow-md",
        props.className,
      )}
    />
  );
}

const components: MDXComponents = {
  a: CustomLink,
  Image: RoundedImage,
};

export default function Markdown({ content }: { content: string }) {
  return (
    <div className="prose dark:prose-invert min-w-full">
      <MDXRemote
        source={content}
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: "material-theme-darker",
                },
              ],
            ],
          },
        }}
      />
    </div>
  );
}
