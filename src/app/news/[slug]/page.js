import Error from "@/app/error";
import BlogDetailSection from "@/components/features/blog/BlogDetailSection";
import SimilarBlogSection from "@/components/features/blog/SimilarBlogSection";
import { fetchFromAPI } from "@/lib/api";

async function getMetaData(slug) {
  try {
    const { data } = await fetchFromAPI(`meta-tags/${slug}`);
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

    // Canonical URL for the page
    const canonical =
      otherMetaTags?.canonical_url ||
      `${process.env.NEXT_PUBLIC_SITE_URL}/news/${slug}`;

    return {
      title: meta?.meta_title || "GO EC",
      description: meta?.meta_description || "GO EC – EV Charging Solutions",
      keywords:
        meta?.meta_keywords || "go ec, ev charging, electric vehicle charging",

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
      title: "GO EC",
      description: "Welcome to GO EC",
      keywords: "go ec, ev charging",
      error: "Failed to fetch metadata",
    };
  }
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const { title, description, keywords, twitter, openGraph, alternates } =
    await getMetaData(slug);

  return {
    title,
    description,
    keywords,
    twitter,
    openGraph,
    alternates,
  };
}


export default async function Page({ params }) {
  const { slug } = params;

  const { data, error } = await fetchFromAPI(`news/${slug}`);

  if (error) {
    return <Error path={`news/${slug}`} />;
  }
  const { news_details_section, similar_section, get_in_touch_section } = data;
  const isSimiliarNewsExist = similar_section?.list.length > 0;

  return (
    <>
      <BlogDetailSection variant="news" data={news_details_section} />

      {isSimiliarNewsExist && (
        <SimilarBlogSection
          similar_section={similar_section}
          footer_section={get_in_touch_section}
          variant="news"
        />
      )}
    </>
  );
}
