import Link from "next/link";

import { IPost } from "@/types";
import { formatDate } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "./ui/card";

export const BlogPost = ({ post }: { post: IPost }) => (
  <Link
    href={`/blog/${post.metadata.slug}`}
    aria-label={`Read ${post.metadata.title}`}
  >
    <Card className="hover:bg-secondary/80 dark:hover:bg-secondary/50 transition-all">
      <CardHeader>
        <CardTitle>{post.metadata.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {post.metadata.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <time
          dateTime={post.metadata.published_at}
          className="text-muted-foreground text-sm"
        >
          {formatDate(post.metadata.published_at, {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </time>
      </CardFooter>
    </Card>
  </Link>
);
