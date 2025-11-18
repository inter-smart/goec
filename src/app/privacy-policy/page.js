import FaqHeroSection from "@/components/features/faq/FaqHeroSection";
import LegalInfoSection from "@/components/features/legal/LegalInfoSection";
import { fetchFromAPI } from "@/lib/api";
// import Error from "../error";






async function getMetaData() {
  try {
    const {data, error} = await fetchFromAPI(`meta-tags/privacy-policy`);
    const meta = data;

    console.log(meta)
      return {
        title: meta?.meta_title,
        description: meta?.meta_description,
        keywords: meta?.meta_keywords,
        // Enhanced SEO fields
        openGraph: {
          title: meta?.og_title || meta?.meta_title,
          description: meta?.og_description || meta?.meta_description,
          images: meta?.og_image ? [{ url: meta.og_image, width: 1200, height: 630 }] : [],
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

  const {data, error} = await fetchFromAPI("policy/privacy-policy")

    const {banner_section, content} = data

  return (
    <>
      <FaqHeroSection data={banner_section} />
      <LegalInfoSection variant={"privacy-policy"} data={content} />
    </>
  );
}
