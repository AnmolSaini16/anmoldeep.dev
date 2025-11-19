import Image, { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

export default function Avatar({
  src,
  alt,
  sizes = "40px",
  size = "sm",
}: {
  src: string | StaticImageData;
  alt: string;
  sizes: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}) {
  return (
    <div
      className={cn(
        "bg-secondary relative inline-flex items-center justify-center overflow-hidden rounded-full align-middle select-none",
        size === "xs" && "h-6 w-6 min-w-6",
        size === "sm" && "h-10 w-10 min-w-10",
        size === "md" && "h-20 w-20 min-w-20",
        size === "lg" && "h-28 w-28 min-w-28",
        size === "xl" && "h-32 w-32 min-w-32",
      )}
    >
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        fill
        className="object-cover object-center"
      />
    </div>
  );
}
