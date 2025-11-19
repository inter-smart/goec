import InnerHero from "@/components/common/InnerHero";
import BusinessModalSection from "@/components/features/investment/BusinessModalSection";
import InvestBrocureSection from "@/components/features/investment/InvestBrocureSection";
import InvestmentInfoSection from "@/components/features/investment/InvestmentInfoSection";
import InvestNowSection from "@/components/features/investment/InvestNowSection";
import InvestorSaySection from "@/components/features/investment/InvestorSaySection";
import MarketSizeSection from "@/components/features/investment/MarketSizeSection";
import { fetchFromAPI } from "@/lib/api";

const heroData = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/hero-investment-bg-1.jpg",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/hero-investment-bg-1.jpg",
      alt: "hero",
    },
  },
  media: {
    type: "image",
    path: "/images/hero-investment-1.svg",
    alt: "hero",
  },
  title: "Invest in India's Fast-Growing Electric Vehicle Infrastructure",
  description: null,
  button: [
    {
      type: "modal",
      label: "Download Brochure",
      link: "/",
    },
    {
      type: "primary",
      label: "Get a free consulation",
      link: "/become-a-partner",
    },
  ],
};

async function getMetaData() {
  try {
    const {data, error} = await fetchFromAPI(`meta-tags/invest-in-go-ec`);
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
  const { data, error } = await fetchFromAPI("invest-in-go-ec");

  const { banner_section, about_section, growth_section, explore_section, why_invest_section, testimonial_section, invest_in_goec_section } =
    data || {};

  return (
    <>
      <InnerHero data={heroData} button={heroData.button} title={banner_section?.title} media={banner_section?.media} varient="investment" />

      <InvestmentInfoSection description={about_section?.description} media={about_section?.media} />

      <MarketSizeSection title={growth_section?.title} summary={growth_section?.summary} description={growth_section?.description} media={growth_section?.media} chart={growth_section?.chart} />

      <BusinessModalSection title={explore_section?.title} list={explore_section?.list} />

      <InvestNowSection
        title={why_invest_section?.title}
        description={why_invest_section?.description}
        media={why_invest_section?.media}
        milestones={why_invest_section?.milestone_list}
        features={why_invest_section?.feature_list}
      />

      <InvestorSaySection title={testimonial_section?.title} testimonials={testimonial_section?.list} />

      <InvestBrocureSection title={invest_in_goec_section?.title} media={invest_in_goec_section?.media} />
    </>
  );
}
