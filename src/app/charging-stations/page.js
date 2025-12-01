import HeroSection from "@/components/features/charging-stations/HeroSection";
import StationListSection from "@/components/features/charging-stations/StationListSection";

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
  title: "Discover and shop <br /> our range of EV Chargers",
  description: null,
};

export default function Page() {
  return (
    <>
      <HeroSection data={header_data} />
      <StationListSection />
    </>
  );
}
