import HeroSection from "@/components/features/charging-stations/HeroSection";
import Policies from "@/components/features/privacy-policy/Policies";

const heroData = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/privacy-policy-bg.png",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/privacy-policy-bg.png",
      alt: "hero",
    },
  },
  title: "Privacy Policy",
  description: null,
};

export default function Page() {
  return (
    <>
      <HeroSection data={heroData} />
      <Policies />
    </>
  );
}
