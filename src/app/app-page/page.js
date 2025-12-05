export const dynamic = "force-dynamic";

import InnerHero from "@/components/common/InnerHero";
import AppDetailSection from "@/components/features/app-page/AppDetailSection";
import AppFeatureSection from "@/components/features/app-page/AppFeatureSection";
import HowChargeSection from "@/components/features/app-page/HowChargeSection";
import AppDownloadSection from "@/components/features/app-page/AppDownloadSection";
import { fetchFromAPI } from "@/lib/api";
import Error from "../error";

async function getMetaData() {
  try {
    const { data } = await fetchFromAPI(`meta-tags/app-page`);
    const meta = data;

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
      `${process.env.NEXT_PUBLIC_SITE_URL}/app-page`;

    return {
      title: meta?.meta_title || "GO EC",
      description: meta?.meta_description || "GO EC – EV Charging Solutions",
      keywords: meta?.meta_keywords || "ev, charging, go ec",

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
      title: "GO EC",
      description: "Welcome to GO EC",
      keywords: "ev, charging",
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
  const { data, error } = await fetchFromAPI("app");

  if (error) {
    return <Error path="/app-page" />;
  }

  const { banner_section, about_section, feature_section, how_to_charge_section, start_ur_ev_section } = data;

  return (
    <>
      <InnerHero
        data={banner_section}
        title={banner_section?.title}
        media={banner_section?.media}
        button={banner_section?.button}
      />
      <AppDetailSection data={about_section} />
      <AppFeatureSection title={feature_section?.title} list={feature_section?.list} />
      <HowChargeSection title={how_to_charge_section?.title} list={how_to_charge_section?.list} />
      <AppDownloadSection appDownloadData={start_ur_ev_section} />
    </>
  );
}
