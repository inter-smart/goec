export const dynamic = "force-dynamic";

import FindChargingHeroSection from "@/components/features/find-charging-station/FindChargingHeroSection";
import FindChargingResultSection from "@/components/features/find-charging-station/FindChargingResultSection";

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
  title: "Find Your Nearest EV <br /> Charging Station in Seconds",
  description: null,
};

async function getMetaData() {
  try {
    const { data } = await fetchFromAPI(`meta-tags/charging-stations`);
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
      `${process.env.NEXT_PUBLIC_SITE_URL}/charging-stations`;

    return {
      title: meta?.meta_title || "Charging Stations | GO EC",
      description:
        meta?.meta_description ||
        "Explore GO EC Charging Stations – India’s fastest-growing EV charging network for homes, businesses, and public locations.",
      keywords:
        meta?.meta_keywords ||
        "ev charging, charging stations, go ec, electric vehicle charging",

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
      title: "Charging Stations | GO EC",
      description:
        "Explore GO EC Charging Stations – India’s fastest-growing EV charging network.",
      keywords: "ev charging, charging stations, go ec",
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


export default async function Page({ searchParams }) {
  // Extract pagination and filter parameters
  const page = searchParams?.page || 1;
  const limit = searchParams?.limit || 7;
  const search = searchParams?.search || "";
  const location_id = searchParams?.location_id || "";
  const charger_type_id = searchParams?.charger_type_id || "";
  const power_id = searchParams?.power_id || "";
  const socket_type_id = searchParams?.socket_type_id || "";

  // Build query string
  const queryParams = new URLSearchParams();
  queryParams.set("page", page);
  queryParams.set("limit", limit);
  if (search) queryParams.set("search", search);
  if (location_id) queryParams.set("location_id", location_id);
  if (charger_type_id) queryParams.set("charger_type_id", charger_type_id);
  if (power_id) queryParams.set("power_id", power_id);
  if (socket_type_id) queryParams.set("socket_type_id", socket_type_id);

  const { data, error } = await fetchFromAPI(`charging-station?${queryParams.toString()}`);

  const { banner_section, search_section, stations_section } = data;

  // Build current filters object to pass to the form
  const currentFilters = {
    search,
    socket_type_id,
    charger_type_id,
    power_id,
  };
  const pagination = stations_section?.pagination || {
    total: 0,
    currentPage: 1,
    perPage: 7,
    totalPages: 1,
  };

  return (
    <>
      <FindChargingHeroSection banner_section={banner_section || header_data} />
      <FindChargingResultSection stations={stations_section} searchSection={search_section} pagination={pagination} currentFilters={currentFilters} />
      {/* <HeroWithCard /> */}
      {/* <ChargingStationList /> */}
    </>
  );
}
