export type IPost = {
  metadata: {
    slug: string;
    title: string;
    description: string;
    published_at: string;
    reading_time: string;
    cover_image?: string;
  };
  content: string; // Markdown content
};
