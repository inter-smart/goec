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
    const {data, error} = await fetchFromAPI(`meta-tags/go-ec-smart-card`);
    const meta = data;

    
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
