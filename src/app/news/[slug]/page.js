import Error from "@/app/error";
import BlogDetailSection from "@/components/features/blog/BlogDetailSection";
import SimilarBlogSection from "@/components/features/blog/SimilarBlogSection";
import { fetchFromAPI } from "@/lib/api";

async function getMetaData(slug) {
  try {
    const { data, error } = await fetchFromAPI(`meta-tags/${slug}`);
    const meta = data;

    return {
      title: meta?.meta_title,
      description: meta?.meta_description,
      keywords: meta?.meta_keywords,
      // Enhanced SEO fields
      openGraph: {
        title: meta?.og_title || meta?.meta_title,
        description: meta?.og_description || meta?.meta_description,
        images: meta?.og_image
          ? [{ url: meta.og_image, width: 1200, height: 630 }]
          : [],
        type: "website",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/home`,
      },
      twitter: {
        card: "summary_large_image",
        title: meta?.twitter_title || meta?.meta_title,
        description: meta?.twitter_description || meta?.meta_description,
        images: meta?.twitter_image ? [meta.twitter_image] : [],
      },
      alternates: {
        canonical: meta?.canonical_url || `${process.env.NEXT_PUBLIC_SITE_URL}`,
      },
      error: null,
    };
  } catch (error) {
    return {
      title: "Home",
      description: "Welcome to our Home Page",
      keywords: "home, welcome",
      error: "Failed to fetch metadata",
    };
  }
}

export async function generateMetadata({ params }) {
  const resolvedParamms = await params;
  const { slug } = resolvedParamms;
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
