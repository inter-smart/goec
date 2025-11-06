import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const generateMediaUrl = (url) => {
  return `${process.env.NEXT_PUBLIC_API_BASE_URL || ""}${url}`;
};

export function extractFirstParagraph(html) {
  const match = html.match(/<p[^>]*>.*?<\/p>/is);
  return match ? match[0] : null;
}
