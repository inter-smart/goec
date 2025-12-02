import MerchantileConnectSection from "@/components/features/merchantile/MerchantileConnectSection";
import MerchantileGallerySection from "@/components/features/merchantile/MerchantileGallerySection";
import MerchantileHeroSection from "@/components/features/merchantile/MerchantileHeroSection";
import MerchantileIndustrySection from "@/components/features/merchantile/MerchantileIndustrySection";
import MerchantileInfoSection from "@/components/features/merchantile/MerchantileInfoSection";
import MerchantileInvestSection from "@/components/features/merchantile/MerchantileInvestSection";
import { fetchFromAPI } from "@/lib/api";


async function getMetaData() {
  try {
    const { data } = await fetchFromAPI(`meta-tags/merchantile`);
    const meta = data;

    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

    // Parse additional meta tags
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

    // Build Canonical URL
    const canonical =
      meta?.canonical_url ||
      `${SITE_URL}/merchantile`;

    return {
      title: meta?.meta_title || "GO EC Merchantile",
      description:
        meta?.meta_description ||
        "Discover GO EC Merchantile – Smart and scalable EV charging solutions for businesses and commercial properties.",
      keywords:
        meta?.meta_keywords ||
        "go ec merchantile, business ev charging, commercial ev charging, workplace ev charging",

      // OpenGraph
      openGraph: {
        title: otherMetaTags.og_title || meta?.meta_title,
        description: otherMetaTags.og_description || meta?.meta_description,
        images: otherMetaTags.og_image
          ? [
              {
                url: otherMetaTags.og_image,
                width: 1200,
                height: 630,
              },
            ]
          : [],
        type: "website",
        url: canonical,
      },

      // Twitter
      twitter: {
        card: "summary_large_image",
        title: otherMetaTags.twitter_title || meta?.meta_title,
        description:
          otherMetaTags.twitter_description || meta?.meta_description,
        images: otherMetaTags.twitter_image
          ? [otherMetaTags.twitter_image]
          : [],
      },

      // Canonical
      alternates: {
        canonical,
      },

      // Additional metadata from JSON
      other: otherMetaTags,

      error: null,
    };
  } catch (error) {
    return {
      title: "GO EC Merchantile",
      description:
        "Smart and scalable EV charging solutions for businesses and commercial properties.",
      keywords: "go ec merchantile, business ev charging",
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
  
  const {data, error} = await fetchFromAPI("merchantile-nepal")

  const {
    banner_section,
    about_section,
    graph_section,
    our_values,
    bottom_card,
    gallery,
    investments
  } = data

  return (
    <>
      <MerchantileHeroSection data={banner_section} />
      <MerchantileInfoSection data={about_section} />
      <MerchantileIndustrySection data={graph_section} our_values={our_values} />
      <MerchantileInvestSection data={investments} />
      <MerchantileConnectSection data={bottom_card} />
      <MerchantileGallerySection data={gallery} />
    </>
  );
}
