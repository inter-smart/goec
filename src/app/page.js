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

export default async function Home() {

    const { data, error } = await fetchFromAPI("home");

    
    if (error) {
    return <div>Something went wrong</div>;
  }


    const {
    banner_section,
    milestone_section,
    company_growth_section,
    make_ride_section,
    explore_section,
    app_feature_section,
    blog_section,
    investment_section,
    partners_section,
    news_section
  } = data;





   return (
    <>
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
        title={partners_section?.title || ''}
        partners={partners_section?.list || []}
      />
      
      <LatestNewsSection 
        title={news_section?.title || ''}
        news={news_section?.list || []}
      />
      
      <LatestBlogSection 
        title={blog_section?.title || ''}
        blogs={blog_section?.list || []}
      />
    </>
  );
}