import HeroSection from "@/components/features/charging-stations/HeroSection";
import ResultSection from "@/components/features/find-charging-stations/ResultSection";

import HeroWithCard from "@/components/common/HeroWithCard";
import ChargingStationList from "@/components/features/charging-stations-old/search/SearchResults";

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
      <HeroSection data={header_data} />
      <ResultSection />
      {/* <HeroWithCard /> */}
      {/* <ChargingStationList /> */}
    </>
  );
}
