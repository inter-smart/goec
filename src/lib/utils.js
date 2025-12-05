import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const generateMediaUrl = (path) => {
  // Handle null, undefined, or empty string
  if (!path || typeof path !== 'string') {
    return '';
  }

  // Trim whitespace
  const trimmedPath = path.trim();

  if (!trimmedPath) {
    return '';
  }

  // Check if path is already a complete URL (starts with http:// or https://)
  if (trimmedPath.startsWith('http://') || trimmedPath.startsWith('https://')) {
    return trimmedPath;
  }

  // Check if path is a protocol-relative URL (starts with //)
  if (trimmedPath.startsWith('//')) {
    return trimmedPath;
  }

  // Get base URL from environment
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';

  if (!baseUrl) {
    return trimmedPath;
  }

  // Normalize slashes to prevent double slashes or missing slashes
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const normalizedPath = trimmedPath.startsWith('/') ? trimmedPath : `/${trimmedPath}`;

  return `${normalizedBaseUrl}${normalizedPath}`;
};

export function extractFirstParagraph(html) {
  const match = html.match(/<p[^>]*>.*?<\/p>/is);
  return match ? match[0] : null;
}


export const parseDescriptionToListItems = (htmlString, className) => {
  if (!htmlString) return [];

  // ✅ Replace HTML entities like &amp; &nbsp;
  let decoded = htmlString.replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");

  let items = [];

  // ✅ Safe browser check
  if (typeof document !== "undefined") {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = decoded.trim();

    // ✅ Case 1: UL/LI format
    const liTags = tempDiv.querySelectorAll("li");
    if (liTags.length > 0) {
      items = Array.from(liTags).map((li) => li.innerHTML.trim());
    } else {
      // ✅ Case 2: <p> with <br>
      const html = decoded.replace(/<\/?p>/g, "").trim();
      items = html
        .split(/<br\s*\/?>|\n/gi)
        .map((s) => s.replace(/<\/?strong>/g, "").trim())
        .filter(Boolean);
    }
  } else {
    // ✅ Server-side fallback (regex only)
    const liMatches = decoded.match(/<li[^>]*>(.*?)<\/li>/gs);
    if (liMatches?.length) {
      items = liMatches.map((li) => li.replace(/<\/?li[^>]*>/g, "").trim());
    } else {
      const html = decoded.replace(/<\/?p>/g, "").trim();
      items = html
        .split(/<br\s*\/?>|\n/gi)
        .map((s) => s.replace(/<\/?strong>/g, "").trim())
        .filter(Boolean);
    }
  }
  return items.map((item, i) => <li key={i} className={className} style={{ marginBottom: "10px" }} dangerouslySetInnerHTML={{ __html: item }} />);
};


