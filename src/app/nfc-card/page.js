export const dynamic = "force-dynamic";

import InnerHero from "@/components/common/InnerHero";
import AppDetailSection from "@/components/features/mobile-app/AppDetailSection";
import HowChargeSection from "@/components/features/mobile-app/HowChargeSection";
import AppDownloadSection from "@/components/features/nfc-card/AppDownloadSection";
import KeyBenefitSection from "@/components/features/nfc-card/KeyBenefitSection";
import { fetchFromAPI } from "@/lib/api";
import Error from "../error";


async function getMetaData() {
  try {
    const { data } = await fetchFromAPI(`meta-tags/go-ec-smart-card`);
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
      `${process.env.NEXT_PUBLIC_SITE_URL}/nfc-card`;

    return {
      title: meta?.meta_title || "GO EC Smart Card",
      description:
        meta?.meta_description ||
        "Learn about the GO EC Smart Card – Your gateway to smart EV charging solutions across India.",
      keywords:
        meta?.meta_keywords ||
        "go ec smart card, ev charging card, smart EV solutions",

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
      title: "GO EC Smart Card",
      description:
        "Learn about the GO EC Smart Card – Your gateway to smart EV charging solutions across India.",
      keywords: "go ec smart card, ev charging card, smart EV solutions",
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
  const { data, error } = await fetchFromAPI("nfc-card");

  if (error) {
    return <Error path={"/nfc-card"} />;
  }

  const { banner_section, description, key_values, steps, bottom_card } = data || {};

  return (
    <>
      <InnerHero title={banner_section?.title} button={banner_section?.button} media={banner_section.media}/>

      <AppDetailSection description={description} />
      <KeyBenefitSection title={key_values?.title} values={key_values?.list} />
      <HowChargeSection title={steps?.title} description={steps?.description} list={steps?.list} variant={"nfc-card"} />
      <AppDownloadSection title={bottom_card?.description} button={bottom_card?.button} media={bottom_card?.media} />
    </>
  );
}
