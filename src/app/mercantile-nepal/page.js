import LifeAtGoEC from "@/components/features/career/LifeAtGoEC";
import InvestBrocureSection from "@/components/features/investment/InvestBrocureSection";
import AboutMercantile from "@/components/features/mercantile-nepal/AboutMercantile";
import FooterCard from "@/components/features/mercantile-nepal/FooterCard";
import GallerySection from "@/components/features/mercantile-nepal/GallerySection";
import HeroSection from "@/components/features/mercantile-nepal/HeroSection";
import IndustySection from "@/components/features/mercantile-nepal/IndustySection";
import InvestmentSection from "@/components/features/mercantile-nepal/InvestmentSection";

export default async function MerchantileNepalPage() {
  return (
    <div>
      <HeroSection />
      <AboutMercantile />
      <IndustySection />
      <InvestmentSection />
      <FooterCard />
      <LifeAtGoEC />
    </div>
  );
}
