import InnerHero from "@/components/common/InnerHero";
import BusinessModalSection from "@/components/features/investment/BusinessModalSection";
import InvestBrocureSection from "@/components/features/investment/InvestBrocureSection";
import InvestmentInfoSection from "@/components/features/investment/InvestmentInfoSection";
import InvestNowSection from "@/components/features/investment/InvestNowSection";
import InvestorSaySection from "@/components/features/investment/InvestorSaySection";
import MarketSizeSection from "@/components/features/investment/MarketSizeSection";

export default function Page() {
  return (
    <>
      <InnerHero />
      <InvestmentInfoSection />
      <MarketSizeSection />
      <BusinessModalSection />
      <InvestNowSection />
      <InvestorSaySection />
      <InvestBrocureSection />
    </>
  );
}
