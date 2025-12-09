export const dynamic = "force-dynamic";

import BlogListSection from "@/components/features/blog/BlogListSection";
import { fetchFromAPI, MEDIA_URL } from "@/lib/api";

async function getMetaData() {
  try {
    const { data } = await fetchFromAPI(`meta-tags/blog-listing`);
    const meta = data;

    // Parse additional meta tags from other_meta_tags JSON
    let otherMetaTags = {};
    if (meta?.other_meta_tags) {
      try {
        const parsed =
          typeof meta.other_meta_tags === "string"
            ? JSON.parse(meta.other_meta_tags)
            : meta.other_meta_tags;

        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          otherMetaTags = parsed;
        }
      } catch (err) {
        console.error("Error parsing other_meta_tags:", err);
      }
    }

    // Build canonical URL
    const canonical =
      otherMetaTags?.canonical_url ||
      `${process.env.NEXT_PUBLIC_SITE_URL}/blog`;

    return {
      title: meta?.meta_title || "Blog Listing | GO EC",
      description:
        meta?.meta_description ||
        "Read the latest news, updates, and articles about GO EC and the EV charging ecosystem.",
      keywords:
        meta?.meta_keywords ||
        "go ec blog, ev news, electric vehicle charging, EV updates",

      // OpenGraph
      openGraph: {
        title: otherMetaTags?.og_title || meta?.meta_title,
        description: otherMetaTags?.og_description || meta?.meta_description,
        images: otherMetaTags?.og_image
          ? [{ url: otherMetaTags.og_image, width: 1200, height: 630 }]
          : [],
        type: "website",
        url: canonical,
      },

      // Twitter
      twitter: {
        card: "summary_large_image",
        title: otherMetaTags?.twitter_title || meta?.meta_title,
        description:
          otherMetaTags?.twitter_description || meta?.meta_description,
        images: otherMetaTags?.twitter_image
          ? [otherMetaTags.twitter_image]
          : [],
      },

      // Canonical
      alternates: {
        canonical,
      },

      // Merge any additional meta tags from admin
      other: otherMetaTags,

      error: null,
    };
  } catch (error) {
    return {
      title: "Blog Listing | GO EC",
      description:
        "Read the latest news, updates, and articles about GO EC and the EV charging ecosystem.",
      keywords: "go ec blog, ev news, electric vehicle charging",
      error: "Failed to fetch metadata",
    };
  }
}

export async function generateMetadata() {
  const { title, description, keywords, twitter, openGraph, alternates } =
    await getMetaData();

  return {
    title,
    description,
    keywords,
    twitter,
    openGraph,
    alternates,
  };
}

export default async function Page() {
  const { data, error } = await fetchFromAPI("blog");

  const { featured_section, popular_blogs_section, all_blogs_section } = data;

  return (
    <>
      <BlogListSection
        variant="blog"
        featured_section={featured_section}
        popular_blogs_section={popular_blogs_section}
        all_blogs_section={all_blogs_section}
      />
    </>
  );
}
