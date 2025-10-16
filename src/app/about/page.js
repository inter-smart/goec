import InnerHero from "@/components/common/InnerHero";
import AboutInfoSection from "@/components/features/about/AboutInfoSection";
import AboutMoreSection from "@/components/features/about/AboutMoreSection";
import AboutCompanySection from "@/components/features/about/AboutCompanySection";
import AboutTeamSection from "@/components/features/about/AboutTeamSection";
import AboutAssociateSection from "@/components/features/about/AboutAssociateSection";
import AboutRecognitionSection from "@/components/features/about/AboutRecognitionSection";
import AboutBecomePartnerSection from "@/components/features/about/AboutBecomePartnerSection";

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
      {/* <AboutInfoSection />
      <AboutMoreSection />
      <AboutCompanySection />
      <AboutTeamSection />
      <AboutAssociateSection />
      <AboutRecognitionSection />
      <AboutBecomePartnerSection /> */}
    </>
  );
}
