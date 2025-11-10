import HeroSection from "@/components/features/charging-stations/HeroSection";
import StationListSection from "@/components/features/charging-stations/StationListSection";
import { fetchFromAPI } from "@/lib/api";

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

export default async function Page() {

  const {data, error} = await fetchFromAPI("chargers")

  const {
    banner_section,
    chargers_section,
  } = data

  return (
    <>
      <HeroSection data={banner_section} />
      <StationListSection data={chargers_section} />
    </>
  );
}
