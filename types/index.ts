export type IPost = {
  metadata: {
    slug: string;
    title: string;
    published_at: string;
    reading_time: string;
    description?: string;
    cover_image?: string;
  };
  content: string; // Markdown content
};
