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
    const {data, error} = await fetchFromAPI(`meta-tags/become-a-partner`);
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

  const {data, error} = await fetchFromAPI("become-partner");



  console.log("data" , data)

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