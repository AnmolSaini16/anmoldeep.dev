import Link from "next/link";

import { IPost } from "@/types";
import { formatDate } from "@/lib/utils";

export const BlogPost = ({ post }: { post: IPost }) => (
  <Link
    href={`/blog/${post.metadata.slug}`}
    aria-label={`Read ${post.metadata.title}`}
    className="group"
  >
    <div className="group-hover:border-primary/40 flex flex-col items-center justify-between border-b py-2 transition-all sm:flex-row sm:items-center sm:justify-between">
      <span className="text-muted-foreground group-hover:text-primary mb-1 min-w-[50px] text-left text-sm transition-colors sm:mb-0">
        {formatDate(post.metadata.published_at)}
      </span>

      <span className="text-primary flex-1 pl-0 text-base sm:pl-6">
        {post.metadata.title}
      </span>
    </div>
  </Link>
);
