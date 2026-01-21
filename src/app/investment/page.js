export const dynamic = "force-dynamic";

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
    const { data, error } = await fetchFromAPI(`meta-tags/invest-in-go-ec`);
    const meta = data;

    // Extract additional meta tags (JSON stored in TEXT)
    let additional = {};
    try {
      additional = meta?.other_meta_tags
        ? JSON.parse(meta.other_meta_tags)
        : {};
    } catch (e) {
      additional = {};
    }

    return {
      title: meta?.meta_title || "",
      description: meta?.meta_description || "",
      keywords: meta?.meta_keywords || "",

      openGraph: {
        title: additional?.og_title || meta?.meta_title,
        description: additional?.og_description || meta?.meta_description,
        images: additional?.og_image
          ? [{ url: additional.og_image, width: 1200, height: 630 }]
          : [],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/invest-in-go-ec`,
        type: "website",
      },

      twitter: {
        card: "summary_large_image",
        title: additional?.twitter_title || meta?.meta_title,
        description: additional?.twitter_description || meta?.meta_description,
        images: additional?.twitter_image ? [additional.twitter_image] : [],
      },

      alternates: {
        canonical:
          additional?.canonical_url ||
          `${process.env.NEXT_PUBLIC_SITE_URL}/invest-in-go-ec`,
      },

      error: null,
    };
  } catch (error) {
    return {
      title: "Invest in GO EC",
      description: "Investment opportunity at GO EC",
      keywords: "goec, invest, ev",
      error: "Failed to fetch metadata",
    };
  }
}

export async function generateMetadata() {
  const meta = await getMetaData();
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    twitter: meta.twitter,
    openGraph: meta.openGraph,
    alternates: meta.alternates,
  };
}

export default async function Page() {
  const { data, error } = await fetchFromAPI("invest-in-go-ec");

  const {
    banner_section,
    about_section,
    growth_section,
    explore_section,
    why_invest_section,
    testimonial_section,
    invest_in_goec_section,
  } = data || {};

  return (
    <>
      <InnerHero
        data={heroData}
        button={heroData.button}
        title={banner_section?.title}
        media={banner_section?.media}
        varient="investment"
        backgroundMedia="/images/hero-investment-bg-1.jpg"
      />

      <InvestmentInfoSection
        description={about_section?.description}
        media={about_section?.media}
      />

      <MarketSizeSection
        title={growth_section?.title}
        summary={growth_section?.summary}
        description={growth_section?.description}
        media={growth_section?.media}
        chart={growth_section?.chart}
      />

      {explore_section?.list.length > 0 && (
        <BusinessModalSection
          title={explore_section?.title}
          list={explore_section?.list}
        />
      )}
      
      <InvestNowSection
        title={why_invest_section?.title}
        description={why_invest_section?.description}
        media={why_invest_section?.media}
        milestones={why_invest_section?.milestone_list}
        features={why_invest_section?.feature_list}
      />

      <InvestorSaySection
        title={testimonial_section?.title}
        testimonials={testimonial_section?.list}
      />

      <InvestBrocureSection
        title={invest_in_goec_section?.title}
        media={invest_in_goec_section?.media}
      />
    </>
  );
}
