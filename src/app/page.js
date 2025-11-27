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
    const {data, error} = await fetchFromAPI(`meta-tags/home`);
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
    news_section
  } = data;

   return (
    <>
      <Loading />
      <HeroSection 
        heroBanner={banner_section?.list || []}
      />
      
      <AboutInfoSection 
        description={milestone_section?.description || ''}
        milestones={milestone_section?.list || []}
      />
      
      <AboutGrowthSection 
        growthData={company_growth_section?.list || []}
      />
      
      <TripSection 
        title={make_ride_section?.title || ''}
        highlightTitle={make_ride_section?.highlight_title || ''}
        description={make_ride_section?.description || ''}
        makeRideMedia={make_ride_section?.media || []}
      />
      
      <SolutionsSection 
        title={explore_section?.title || ''}
        description={explore_section?.description || ''}
        solutions={explore_section?.list || []}
      />
      
      <AppInfoSection 
        appFeatures = {app_feature_section || []}
      />
      
      <InvestSection
       milestoneDescription ={investment_section.milestone_description}
       investMedia = {investment_section.media}
       investList = {investment_section.list}
      />
      
      <PartnersSection
        title={associates_section?.title || ''}
        associates={associates_section?.list || []}
      />
      
      <LatestNewsSection 
        title={news_section?.title || ''}
        news={news_section?.list || []}
      />
      


      
      <LatestBlogSection 
        title={blog_section?.title || ''}
        blogs={blog_section?.list || []}
        type="home"
      />
    </>
  );
}

