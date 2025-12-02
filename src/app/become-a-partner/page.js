export const dynamic = "force-dynamic";

import BecomePartnerFormSection from "@/components/features/become-a-partner/BecomePartnerFormSection";
import FindChargingHeroSection from "@/components/features/find-charging-station/FindChargingHeroSection";
import { fetchFromAPI } from "@/lib/api";

const header_data = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/become-partner-banner.png",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/become-partner-banner.png",
      alt: "hero",
    },
  },
  title: "Become a part of <br /> EV Revolution",
  description: "Become a Partner",
};

async function getMetaData() {
  try {
    const { data } = await fetchFromAPI(`meta-tags/become-a-partner`);
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
      `${process.env.NEXT_PUBLIC_SITE_URL}/become-a-partner`;

    return {
      title: meta?.meta_title || "Become a Partner | GO EC",
      description:
        meta?.meta_description ||
        "Join GO EC as a partner and become part of India’s leading EV charging network.",
      keywords:
        meta?.meta_keywords ||
        "go ec partner, ev charging partner, business partnership, ev network",

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
      title: "Become a Partner | GO EC",
      description:
        "Join GO EC as a partner and become part of India’s leading EV charging network.",
      keywords: "go ec partner, ev charging partner, business partnership",
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

  const {data, error} = await fetchFromAPI("become-partner");

  const {
    banner_section
  } = data

  return (
    <>
      <FindChargingHeroSection banner_section={banner_section} />
      <BecomePartnerFormSection />
    </>
  );
}