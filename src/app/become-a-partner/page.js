import BecomePartnerFormSection from "@/components/features/become-a-partner/BecomePartnerFormSection";
import FindChargingHeroSection from "@/components/features/find-charging-station/FindChargingHeroSection";

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

export default function Page() {
  return (
    <>
      <FindChargingHeroSection data={header_data} />
      <BecomePartnerFormSection />
    </>
  );
}
