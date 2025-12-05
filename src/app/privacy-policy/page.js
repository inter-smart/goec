import FaqHeroSection from "@/components/features/faqs/FaqHeroSection";
import LegalInfoSection from "@/components/features/legal/LegalInfoSection";
import { fetchFromAPI } from "@/lib/api";
// import Error from "../error";






async function getMetaData() {
  try {
    const { data } = await fetchFromAPI(`meta-tags/privacy-policy`);
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
      `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`;

    return {
      title: meta?.meta_title || "Privacy Policy | GO EC",
      description:
        meta?.meta_description ||
        "Read the privacy policy of GO EC, outlining how we handle your data and protect your privacy.",
      keywords:
        meta?.meta_keywords || "GO EC, privacy policy, EV charging, data protection",

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
      title: "Privacy Policy | GO EC",
      description:
        "Read the privacy policy of GO EC, outlining how we handle your data and protect your privacy.",
      keywords: "GO EC, privacy policy, EV charging, data protection",
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

  const {data, error} = await fetchFromAPI("policy/privacy-policy")

    const {banner_section, content} = data

  return (
    <>
      <FaqHeroSection data={banner_section} />
      <LegalInfoSection variant={"privacy-policy"} data={content} />
    </>
  );
}
