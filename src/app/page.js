import { Suspense } from "react";
import dynamic from "next/dynamic";
import AboutInfoSection from "@/components/features/home/AboutInfoSection";
import HeroSection from "@/components/features/home/HeroSection";
import { fetchFromAPI } from "@/lib/api";
import InitialLoading from "../components/common/initial-loading";

// Lazy load below-the-fold sections with dynamic imports
const AboutGrowthSection = dynamic(
  () => import("@/components/features/home/AboutGrowthSection"),
  { ssr: true },
);

const SolutionsSection = dynamic(
  () => import("@/components/features/home/SolutionsSection"),
  { ssr: true },
);

const TripSection = dynamic(
  () => import("@/components/features/home/TripSection"),
  { ssr: true },
);

const AppInfoSection = dynamic(
  () => import("@/components/features/home/AppInfoSection"),
  { ssr: true },
);

const InvestSection = dynamic(
  () => import("@/components/features/home/InvestSection"),
  { ssr: true },
);

const PartnersSection = dynamic(
  () => import("@/components/features/home/PartnersSection"),
  { ssr: true },
);

const LatestNewsSection = dynamic(
  () => import("@/components/features/home/LatestNewsSection"),
  { ssr: true },
);

const LatestBlogSection = dynamic(
  () => import("@/components/features/home/LatestBlogSection"),
  { ssr: true },
);

// Fallback component for suspense boundaries
function SectionLoader() {
  return <div className="w-full h-32 animate-pulse bg-gray-100" />;
}

export async function generateMetadata() {
  try {
    const { data, error } = await fetchFromAPI(`meta-tags/home`);

    if (error || !data) {
      console.error("Metadata API Error:", error);
      return getDefaultMetadata();
    }

    const meta = data;
    let extras = {};

    if (meta?.other_meta_tags) {
      try {
        extras = JSON.parse(meta.other_meta_tags);
      } catch (e) {
        console.error("Error parsing other_meta_tags:", e);
      }
    }

    const SITE_URL =
      process.env.NEXT_PUBLIC_SITE_URL || "https://goec-beta-dev.netlify.app";

    return {
      title: meta?.meta_title || "Goec | EV Charging Solutions",
      description: meta?.meta_description || "",
      keywords: meta?.meta_keywords || "",
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
      twitter: {
        card: "summary_large_image",
        title:
          extras.twitter_title ||
          meta?.meta_title ||
          "Goec | EV Charging Solutions",
        description: extras.twitter_description || meta?.meta_description || "",
        images: extras.twitter_image ? [extras.twitter_image] : [],
      },
      alternates: {
        canonical: extras.canonical_url || `${SITE_URL}/`,
      },
    };
  } catch (error) {
    console.error("Fatal error generating metadata:", error);
    return getDefaultMetadata();
  }
}

function getDefaultMetadata() {
  return {
    title: "Goec | EV Charging Solutions for Homes & Commercial Spaces",
    description:
      "Goec is a fast-growing EV charging station network offering reliable, smart, and eco-friendly charging solutions for electric vehicles across India.",
    keywords: "EV charging station, electric vehicle charging, Goec",
  };
}

export default async function Home() {
  // Fetch data with error handling
  let data = {};

  try {
    const response = await fetchFromAPI("home");
    data = response.data || {};
  } catch (error) {
    console.error("Error fetching home data:", error);
    // Return empty structure to prevent crashes
    data = {
      banner_section: { list: [] },
      milestone_section: { description: "", list: [] },
      company_growth_section: { list: [] },
      make_ride_section: {
        title: "",
        highlight_title: "",
        description: "",
        media: [],
      },
      explore_section: { title: "", description: "", list: [] },
      app_feature_section: [],
      blog_section: { title: "", list: [] },
      investment_section: { milestone_description: "", media: {}, list: [] },
      associates_section: { title: "", list: [] },
      news_section: { title: "", list: [] },
    };
  }

  const {
    banner_section = {},
    milestone_section = {},
    company_growth_section = {},
    make_ride_section = {},
    explore_section = {},
    app_feature_section = [],
    blog_section = {},
    investment_section = {},
    associates_section = {},
    news_section = {},
  } = data;

  return (
    <>
      <InitialLoading />

      {/* Critical above-the-fold content - loaded immediately */}
      <HeroSection heroBanner={banner_section?.list || []} />

      <AboutInfoSection
        description={milestone_section?.description || ""}
        milestones={milestone_section?.list || []}
      />

      <Suspense fallback={<SectionLoader />}>
        <AboutGrowthSection growthData={company_growth_section?.list || []} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TripSection
          title={make_ride_section?.title || ""}
          highlightTitle={make_ride_section?.highlight_title || ""}
          description={make_ride_section?.description || ""}
          makeRideMedia={make_ride_section?.media || []}
        />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <SolutionsSection
          title={explore_section?.title || ""}
          description={explore_section?.description || ""}
          solutions={explore_section?.list || []}
        />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AppInfoSection appFeatures={app_feature_section || []} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <InvestSection
          milestoneDescription={investment_section?.milestone_description || ""}
          investMedia={investment_section?.media || {}}
          investList={investment_section?.list || []}
        />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <PartnersSection
          title={associates_section?.title || ""}
          associates={associates_section?.list || []}
        />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LatestNewsSection
          title={news_section?.title || ""}
          news={news_section?.list || []}
        />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LatestBlogSection
          title={blog_section?.title || ""}
          blogs={blog_section?.list || []}
          type="home"
        />
      </Suspense>
    </>
  );
}
