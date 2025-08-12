import AboutGrowthSection from "@/components/features/home/AboutGrowthSection";
import AboutInfoSection from "@/components/features/home/AboutInfoSection";
import SolutionsSection from "@/components/features/home/SolutionsSection";
import HeroSection from "@/components/features/home/HeroSection";
import TripSection from "@/components/features/home/TripSection";
import AppInfoSection from "@/components/features/home/AppInfoSection";

export default function Home() {
  return (
    <>
      {/* <HeroSection />
      <AboutInfoSection />
      <AboutGrowthSection /> */}
      <TripSection />
      <SolutionsSection />
      <AppInfoSection />
    </>
  );
}
