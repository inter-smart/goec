import HeroSection from "@/components/features/charging-stations/HeroSection";
import Stations from "@/components/features/charging-stations/stations/index";

const heroData = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/hero-charging-stations.png",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/hero-charging-stations.png",
      alt: "hero",
    },
  },
  title: "Discover and shop our range of EV Chargers Chargers Chargers Chargers",
  description: null,
};

const data = {
  stations: {
    title: "Explore our chargers",
  },
};

export default function Page() {
  return (
    <>
      <HeroSection data={heroData} />
      <Stations data={data?.stations} />
    </>
  );
}
