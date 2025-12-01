import InnerHero from "@/components/common/InnerHero";
import BusinessModalSection from "@/components/features/investment/BusinessModalSection";
import InvestBrocureSection from "@/components/features/investment/InvestBrocureSection";
import InvestmentInfoSection from "@/components/features/investment/InvestmentInfoSection";
import InvestNowSection from "@/components/features/investment/InvestNowSection";
import InvestorSaySection from "@/components/features/investment/InvestorSaySection";
import MarketSizeSection from "@/components/features/investment/MarketSizeSection";

const heroData = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/hero-investment-bg-1.jpg",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/hero-investment-bg-1.jpg",
      alt: "hero",
    },
  },
  media: {
    type: "image",
    path: "/images/hero-investment-1.svg",
    alt: "hero",
  },
  title: "Invest in India's Fast-Growing Electric Vehicle Infrastructure",
  description: null,
  button: [
    {
      type: "modal",
      label: "Download Brochure",
      link: "/",
    },
    {
      type: "primary",
      label: "Get a free consulation",
      link: "/",
    },
  ],
};

export default function Page() {
  return (
    <>
      <InnerHero data={heroData} varient="investment" />
      <InvestmentInfoSection />
      <MarketSizeSection />
      <BusinessModalSection />
      <InvestNowSection />
      <InvestorSaySection />
      <InvestBrocureSection />
    </>
  );
}
