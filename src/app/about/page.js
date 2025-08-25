import InnerHero from "@/components/common/InnerHero";
import AboutInfoSection from "@/components/features/about/AboutInfoSection";

const heroData = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/hero-about-bg-1.jpg",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/hero-about-bg-1.jpg",
      alt: "hero",
    },
  },
  media: {
    type: "image",
    path: "/images/about-hero-1.svg",
    alt: "hero",
  },
  title: "We Power Up your Journey with Lightning Charging Nationwide",
  description: null,
  button: [
    {
      type: "secondary",
      label: "Become a partner ",
      link: "/",
    },
  ],
};

export default function Page() {
  return (
    <>
      <InnerHero data={heroData} />
      <AboutInfoSection />
    </>
  );
}
