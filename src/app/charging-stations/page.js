export const dynamic = "force-dynamic";

import HeroSection from "@/components/features/charging-stations/HeroSection";
import StationListSection from "@/components/features/charging-stations/StationListSection";
import { fetchFromAPI } from "@/lib/api";

const header_data = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/chargingStations-hero-1.jpg",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/chargingStations-hero-1.jpg",
      alt: "hero",
    },
  },
  title: "Discover and shop <br /> our range of EV Chargers",
  description: null,
};


async function getMetaData() {
  try {
    const { data } = await fetchFromAPI(`meta-tags/chargers`);
    const meta = data;

    console.log(data)

    // Parse additional meta tags if any
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
    const canonical =`${process.env.NEXT_PUBLIC_SITE_URL}/charging-stations`;

    return {
      title: meta?.meta_title || "GO EC Chargers",
      description: meta?.meta_description || "Explore GO EC EV chargers and charging solutions.",
      keywords: meta?.meta_keywords || "EV, charging, GO EC, chargers",

      // OpenGraph
      openGraph: {
        title: otherMetaTags.og_title || meta?.meta_title || "GO EC Chargers",
        description: otherMetaTags.og_description || meta?.meta_description,
        images: otherMetaTags.og_image
          ? [
              {
                url: otherMetaTags.og_image,
                width: 1200,
                height: 630,
                alt: otherMetaTags.og_image_alt || meta?.meta_title,
              },
            ]
          : [],
        type: otherMetaTags.og_type || "website",
        url: canonical,
        siteName: otherMetaTags.site_name || "GO EC",
        locale: otherMetaTags.og_locale || "en_US",
      },

      // Twitter
      twitter: {
        card: otherMetaTags.twitter_card || "summary_large_image",
        title: otherMetaTags.twitter_title || meta?.meta_title,
        description: otherMetaTags.twitter_description || meta?.meta_description,
        images: otherMetaTags.twitter_image ? [otherMetaTags.twitter_image] : [],
        creator: otherMetaTags.twitter_creator || "@goec_official",
        site: otherMetaTags.twitter_site || "@goec_official",
      },

      // Canonical URL
      alternates: {
        canonical,
      },

      // Additional metadata from JSON
      other: otherMetaTags,

      error: null,
    };
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    return {
      title: "GO EC Chargers",
      description: "Explore GO EC EV chargers and charging solutions.",
      keywords: "EV, charging, GO EC, chargers",
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
  const { data, error } = await fetchFromAPI("chargers");

  const { banner_section, chargers_section } = data;

  return (
    <>
      <HeroSection data={banner_section} />
      <StationListSection data={chargers_section} />
    </>
  );
}
