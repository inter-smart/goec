import BecomePartnerFormSection from "@/components/features/become-a-partner/BecomePartnerFormSection";
import FindChargingHeroSection from "@/components/features/find-charging-station/FindChargingHeroSection";
import { fetchFromAPI } from "@/lib/api";

const header_data = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/become-partner-banner.png",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/become-partner-banner.png",
      alt: "hero",
    },
  },
  title: "Become a part of <br /> EV Revolution",
  description: "Become a Partner",
};

export default async function Page() {

  const {data, error} = await fetchFromAPI("become-partner");



  console.log("data" , data)

  const {
    banner_section
  } = data

  return (
    <>
      <FindChargingHeroSection banner_section={banner_section} />
      <BecomePartnerFormSection />
    </>
  );
}