export const dynamic = "force-dynamic";

import BlogListSection from "@/components/features/blog/BlogListSection";
import { fetchFromAPI } from "@/lib/api";
import Error from "../error";




async function getMetaData() {
  try {
    const { data } = await fetchFromAPI(`meta-tags/news-listing`);
    const meta = data;

    // Parse additional meta tags from other_meta_tags field
    let otherMetaTags = {};
    if (meta?.other_meta_tags) {
      try {
        const parsed =
          typeof meta.other_meta_tags === "string"
            ? JSON.parse(meta.other_meta_tags)
            : meta.other_meta_tags;

        if (typeof parsed === "object" && !Array.isArray(parsed)) {
          otherMetaTags = parsed;
        }
      } catch (err) {
        console.error("Error parsing other_meta_tags:", err);
      }
    }

    // Build canonical URL
    const canonical = otherMetaTags.canonical_url || `${process.env.NEXT_PUBLIC_SITE_URL}/news-listing`;

    return {
      title: meta?.meta_title || "GO EC News",
      description: meta?.meta_description || "Latest news and updates from GO EC",
      keywords: meta?.meta_keywords || "GO EC, news, EV, updates",

      // OpenGraph
      openGraph: {
        title: otherMetaTags.og_title || meta?.meta_title,
        description: otherMetaTags.og_description || meta?.meta_description,
        images: otherMetaTags.og_image
          ? [{ url: otherMetaTags.og_image, width: 1200, height: 630 }]
          : [],
        type: "website",
        url: canonical,
      },

      // Twitter
      twitter: {
        card: "summary_large_image",
        title: otherMetaTags.twitter_title || meta?.meta_title,
        description: otherMetaTags.twitter_description || meta?.meta_description,
        images: otherMetaTags.twitter_image ? [otherMetaTags.twitter_image] : [],
      },

      // Canonical
      alternates: {
        canonical,
      },

      // Additional metadata
      other: otherMetaTags,

      error: null,
    };
  } catch (error) {
    return {
      title: "GO EC News",
      description: "Latest news and updates from GO EC",
      keywords: "GO EC, news, EV, updates",
      error: "Failed to fetch metadata",
    };
  }
}

export async function generateMetadata() {
  const { title, description, keywords, twitter, openGraph, alternates } = await getMetaData();
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
  const { data, error } = await fetchFromAPI("news");

  if (error) {
    return <Error path="/news" />;
  }

  const { featured_section, popular_news_section, all_news_section } = data;

  return (
    <>
      <BlogListSection
        variant="news"
        featured_section={featured_section}
        popular_blogs_section={popular_news_section}
        all_blogs_section={all_news_section}
      />
    </>
  );
}
