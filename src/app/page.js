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
import Error from "./error";
import Loading from "./loading";

async function getMetaData() {
  try {
    const { data, error } = await fetchFromAPI(`meta-tags/home`);
    const meta = data;

    // Parse other_meta_tags if it's JSON (optional)
    let extras = {};
    if (meta?.other_meta_tags) {
      try {
        extras = JSON.parse(meta.other_meta_tags);
      } catch (e) {
        extras = {};
      }
    }

    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

    return {
      title: meta?.meta_title || "Home",
      description: meta?.meta_description || "",
      keywords: meta?.meta_keywords || "",

      // OPEN GRAPH
      openGraph: {
        title: extras.og_title || meta?.meta_title,
        description: extras.og_description || meta?.meta_description,
        images: extras.og_image
          ? [{ url: extras.og_image, width: 1200, height: 630 }]
          : [],
        type: "website",
        url: `${SITE_URL}/`,
      },

      // TWITTER
      twitter: {
        card: "summary_large_image",
        title: extras.twitter_title || meta?.meta_title,
        description: extras.twitter_description || meta?.meta_description,
        images: extras.twitter_image ? [extras.twitter_image] : [],
      },

      // CANONICAL URL
      alternates: {
        canonical: extras.canonical_url || `${SITE_URL}/`,
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


export default async function Home() {
  const { data, error } = await fetchFromAPI("home");

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
      <Loading />
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
