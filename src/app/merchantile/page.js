import MerchantileConnectSection from "@/components/features/merchantile/MerchantileConnectSection";
import MerchantileGallerySection from "@/components/features/merchantile/MerchantileGallerySection";
import MerchantileHeroSection from "@/components/features/merchantile/MerchantileHeroSection";
import MerchantileIndustrySection from "@/components/features/merchantile/MerchantileIndustrySection";
import MerchantileInfoSection from "@/components/features/merchantile/MerchantileInfoSection";
import MerchantileInvestSection from "@/components/features/merchantile/MerchantileInvestSection";

export default function Page() {
  return (
    <>
      <MerchantileHeroSection />
      <MerchantileInfoSection />
      <MerchantileIndustrySection />
      <MerchantileInvestSection />
      <MerchantileConnectSection />
      <MerchantileGallerySection />
    </>
  );
}
