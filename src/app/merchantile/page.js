import MerchantileConnectSection from "@/components/features/merchantile/MerchantileConnectSection";
import MerchantileGallerySection from "@/components/features/merchantile/MerchantileGallerySection";
import MerchantileHeroSection from "@/components/features/merchantile/MerchantileHeroSection";
import MerchantileIndustrySection from "@/components/features/merchantile/MerchantileIndustrySection";
import MerchantileInfoSection from "@/components/features/merchantile/MerchantileInfoSection";
import MerchantileInvestSection from "@/components/features/merchantile/MerchantileInvestSection";
import { fetchFromAPI } from "@/lib/api";

export default async function Page() {
  
  const {data, error} = await fetchFromAPI("merchantile-nepal")

  const {
    banner_section,
    about_section,
    graph_section,
    our_values,
    bottom_card,
    gallery,
    investments
  } = data

  return (
    <>
      <MerchantileHeroSection data={banner_section} />
      <MerchantileInfoSection data={about_section} />
      <MerchantileIndustrySection data={graph_section} our_values={our_values} />
      <MerchantileInvestSection data={investments} />
      <MerchantileConnectSection data={bottom_card} />
      <MerchantileGallerySection data={gallery} />
    </>
  );
}
