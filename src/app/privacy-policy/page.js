import FaqHeroSection from "@/components/features/faq/FaqHeroSection";
import LegalInfoSection from "@/components/features/legal/LegalInfoSection";
import { fetchFromAPI } from "@/lib/api";
// import Error from "../error";


export default async function Page() {

  const {data, error} = await fetchFromAPI("policy/privacy-policy")

    const {banner_section, content} = data

  return (
    <>
      <FaqHeroSection data={banner_section} />
      <LegalInfoSection variant={"privacy-policy"} data={content} />
    </>
  );
}
