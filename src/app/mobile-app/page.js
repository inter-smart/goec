import InnerHero from "@/components/common/InnerHero";
import AppDetailSection from "@/components/features/mobile-app/AppDetailSection";
import AppFeatureSection from "@/components/features/mobile-app/AppFeatureSection";
import HowChargeSection from "@/components/features/mobile-app/HowChargeSection";
import AppDownloadSection from "@/components/features/mobile-app/AppDownloadSection";
import { fetchFromAPI } from "@/lib/api";
import Error from "../error";



async function getMetaData() {
  try {
    const {data, error} = await fetchFromAPI(`meta-tags/app-page`);
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
  const { data, error } = await fetchFromAPI("app");

  if (error) {
    return <Error path="/mobile-app" />;
  }

  const {
    banner_section,
    about_section,
    feature_section,
    how_to_charge_section,
    start_ur_ev_section,
  } = data;

  return (
    <>
      <InnerHero
        data={banner_section}
        title={banner_section?.title}
        media={banner_section?.media}
         external_button={start_ur_ev_section}
      ></InnerHero>
      <AppDetailSection data={about_section} />
      <AppFeatureSection
        title={feature_section?.title}
        list={feature_section?.list}
      />
      <HowChargeSection
        title={how_to_charge_section?.title}
        list={how_to_charge_section?.list}
      />
      <AppDownloadSection appDownloadData={start_ur_ev_section} />
    </>
  );
}
