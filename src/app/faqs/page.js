import FaqHeroSection from "@/components/features/faqs/FaqHeroSection";
import FaqInfoSection from "@/components/features/faqs/FaqInfoSection";
import { fetchFromAPI } from "@/lib/api";


async function getMetaData() {
  try {
    const { data, error } = await fetchFromAPI(`meta-tags/faq`);
    const meta = data;

    // Parse extra meta tags stored as JSON in TEXT column
    let extra = {};
    try {
      extra = meta?.other_meta_tags ? JSON.parse(meta.other_meta_tags) : {};
    } catch {
      extra = {};
    }

    return {
      title: meta?.meta_title || "",
      description: meta?.meta_description || "",
      keywords: meta?.meta_keywords || "",

      openGraph: {
        title: extra?.og_title || meta?.meta_title,
        description: extra?.og_description || meta?.meta_description,
        images: extra?.og_image
          ? [{ url: extra.og_image, width: 1200, height: 630 }]
          : [],
        type: "website",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/faqs`,
      },

      twitter: {
        card: "summary_large_image",
        title: extra?.twitter_title || meta?.meta_title,
        description: extra?.twitter_description || meta?.meta_description,
        images: extra?.twitter_image ? [extra.twitter_image] : [],
      },

      alternates: {
        canonical:
          extra?.canonical_url ||
          `${process.env.NEXT_PUBLIC_SITE_URL}/faqs`,
      },

      error: null,
    };
  } catch (error) {
    return {
      title: "FAQ",
      description: "Frequently Asked Questions",
      keywords: "faqs, help, questions",
      error: "Failed to fetch metadata",
    };
  }
}

export async function generateMetadata() {
  const meta = await getMetaData();
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    twitter: meta.twitter,
    openGraph: meta.openGraph,
    alternates: meta.alternates,
  };
}




export default async function Page() {
  const { data } = await fetchFromAPI("faqs");

  const { banner_section, categories, faqs } = data;

  return (
    <>
      <FaqHeroSection data={banner_section} />
      <FaqInfoSection categories={categories} faq_items={faqs} />
    </>
  );
}
