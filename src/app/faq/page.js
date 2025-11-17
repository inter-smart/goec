import FaqHeroSection from "@/components/features/faq/FaqHeroSection";
import FaqInfoSection from "@/components/features/faq/FaqInfoSection";
import { fetchFromAPI } from "@/lib/api";


export default async function Page() {
  const { data } = await fetchFromAPI("faqs");

  const { banner_section, categories, faqs } = data;

  console.log(banner_section)

  return (
    <>
      <FaqHeroSection data={banner_section} />
      <FaqInfoSection categories={categories} faq_items={faqs} />
    </>
  );
}
