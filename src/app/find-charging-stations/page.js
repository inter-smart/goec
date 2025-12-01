import FindChargingHeroSection from "@/components/features/find-charging-station/FindChargingHeroSection";
import FindChargingResultSection from "@/components/features/find-charging-station/FindChargingResultSection";

const header_data = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/chargingStations-hero-1.jpg",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/chargingStations-hero-1.jpg",
      alt: "hero",
    },
  },
  title: "Find Your Nearest EV <br /> Charging Station in Seconds",
  description: null,
};

export default function Page() {
  return (
    <>
      <FindChargingHeroSection data={header_data} />
      <FindChargingResultSection />
    </>
  );
}
