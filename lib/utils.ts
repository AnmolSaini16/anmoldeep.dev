import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (
  date: string,
  options?: Intl.DateTimeFormatOptions,
) =>
  new Date(date).toLocaleString(
    "en-US",
    options ?? { month: "2-digit", year: "2-digit" },
  );

export const sanitizeHtml = (html: string) => {
  return html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};
