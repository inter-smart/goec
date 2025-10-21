import HeroSection from "@/components/features/charging-stations/HeroSection";
import Faqs from "@/components/features/faqs/Faqs";
const heroData = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/faq-bg.png",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/faq-bg.png",
      alt: "hero",
    },
  },
  title: "Frequently Asked Questions",
  description: null,
};

export default function Page() {
  return (
    <>
      <HeroSection data={heroData} />
      <Faqs />
    </>
  );
}
