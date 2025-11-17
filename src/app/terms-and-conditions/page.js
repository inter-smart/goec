import FaqHeroSection from "@/components/features/faq/FaqHeroSection";
import LegalInfoSection from "@/components/features/legal/LegalInfoSection";
import { fetchFromAPI } from "@/lib/api";


export default async function Page() {


    const {data, error} = await fetchFromAPI("policy/terms-and-conditions")
  
  
  
      const {banner_section, content} = data
  
  return (
    <>
      <FaqHeroSection data={banner_section} />
      <LegalInfoSection data={content} />
    </>
  );
}
