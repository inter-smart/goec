import InnerHero from "@/components/common/InnerHero";
import BusinessModalSection from "@/components/features/investment/BusinessModalSection";
import InvestmentInfoSection from "@/components/features/investment/InvestmentInfoSection";
import MarketSizeSection from "@/components/features/investment/MarketSizeSection";

export default function Page() {
  return (
    <>
      <InnerHero />
      <InvestmentInfoSection />
      <MarketSizeSection />
      <BusinessModalSection />
      <section className="w-full ">
        <div>dfdv</div>
      </section>
    </>
  );
}
