import AboutGrowthSection from "@/components/features/home/AboutGrowthSection";
import AboutInfoSection from "@/components/features/home/AboutInfoSection";
import SolutionsSection from "@/components/features/home/SolutionsSection";
import HeroSection from "@/components/features/home/HeroSection";
import TripSection from "@/components/features/home/TripSection";
import AppInfoSection from "@/components/features/home/AppInfoSection";
import InvestSection from "@/components/features/home/InvestSection";
import PartnersSection from "@/components/features/home/PartnersSection";
import LatestNewsSection from "@/components/features/home/LatestNewsSection";
import LatestBlogSection from "@/components/features/home/LatestBlogSection";
import { fetchFromAPI } from "@/lib/api";
import InitialLoading from "./initial-loading";

export async function generateMetadata() {
  try {
    const { data, error } = await fetchFromAPI(`meta-tags/home`);

    // If API fails, return default metadata immediately
    if (error || !data) {
      console.error("Metadata API Error:", error);
      return {
        title: "Goec | EV Charging Solutions for Homes & Commercial Spaces",
        description:
          "Goec is a fast-growing EV charging station network offering reliable, smart, and eco-friendly charging solutions for electric vehicles across India.",
        keywords:
          "EV charging station, electric vehicle charging, Goec, EV charging India, fast charging stations",
      };
    }

    const meta = data;

    // Parse other_meta_tags if it's JSON
    let extras = {};
    if (meta?.other_meta_tags) {
      try {
        extras = JSON.parse(meta.other_meta_tags);
      } catch (e) {
        console.error("Error parsing other_meta_tags:", e);
        extras = {};
      }
    }

    const SITE_URL =
      process.env.NEXT_PUBLIC_SITE_URL || "https://goec-beta-dev.netlify.app";

    return {
      title: meta?.meta_title || "Goec | EV Charging Solutions",
      description: meta?.meta_description || "",
      keywords: meta?.meta_keywords || "",

      // OPEN GRAPH
      openGraph: {
        title:
          extras.og_title || meta?.meta_title || "Goec | EV Charging Solutions",
        description: extras.og_description || meta?.meta_description || "",
        images: extras.og_image
          ? [{ url: extras.og_image, width: 1200, height: 630 }]
          : [],
        type: "website",
        url: `${SITE_URL}/`,
      },

      // TWITTER
      twitter: {
        card: "summary_large_image",
        title:
          extras.twitter_title ||
          meta?.meta_title ||
          "Goec | EV Charging Solutions",
        description: extras.twitter_description || meta?.meta_description || "",
        images: extras.twitter_image ? [extras.twitter_image] : [],
      },

      // CANONICAL URL
      alternates: {
        canonical: extras.canonical_url || `${SITE_URL}/`,
      },
    };
  } catch (error) {
    console.error("Fatal error generating metadata:", error);
    // Always return valid metadata even on error
    return {
      title: "Goec | EV Charging Solutions for Homes & Commercial Spaces",
      description:
        "Goec is a fast-growing EV charging station network offering reliable, smart, and eco-friendly charging solutions for electric vehicles across India.",
      keywords: "EV charging station, electric vehicle charging, Goec",
    };
  }
}

export default async function Home() {
  const { data } = await fetchFromAPI("home");

  const {
    banner_section,
    milestone_section,
    company_growth_section,
    make_ride_section,
    explore_section,
    app_feature_section,
    blog_section,
    investment_section,
    associates_section,
    news_section,
  } = data;

  return (
    <>
      <InitialLoading />
      <HeroSection heroBanner={banner_section?.list || []} />

      <AboutInfoSection
        description={milestone_section?.description || ""}
        milestones={milestone_section?.list || []}
      />

      <AboutGrowthSection growthData={company_growth_section?.list || []} />

      <TripSection
        title={make_ride_section?.title || ""}
        highlightTitle={make_ride_section?.highlight_title || ""}
        description={make_ride_section?.description || ""}
        makeRideMedia={make_ride_section?.media || []}
      />

      <SolutionsSection
        title={explore_section?.title || ""}
        description={explore_section?.description || ""}
        solutions={explore_section?.list || []}
      />

      <AppInfoSection appFeatures={app_feature_section || []} />

      <InvestSection
        milestoneDescription={investment_section.milestone_description}
        investMedia={investment_section.media}
        investList={investment_section.list}
      />

      <PartnersSection
        title={associates_section?.title || ""}
        associates={associates_section?.list || []}
      />

      <LatestNewsSection
        title={news_section?.title || ""}
        news={news_section?.list || []}
      />

      <LatestBlogSection
        title={blog_section?.title || ""}
        blogs={blog_section?.list || []}
        type="home"
      />
    </>
  );
}
