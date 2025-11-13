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

export default function Home() {
  return (
    <>
      <Loading />
      <HeroSection />
      <AboutInfoSection />
      <AboutGrowthSection />
      <TripSection />
      <SolutionsSection />
      <AppInfoSection />
      <InvestSection />
      <PartnersSection />
      <LatestNewsSection />
      <LatestBlogSection />
    </>
  );
}
