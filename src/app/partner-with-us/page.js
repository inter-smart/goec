export const dynamic = "force-dynamic";

import AboutInfoSection from "@/components/features/about/AboutInfoSection";
import AboutMoreSection from "@/components/features/about/AboutMoreSection";
import AboutCompanySection from "@/components/features/about/AboutCompanySection";
import AboutTeamSection from "@/components/features/about/AboutTeamSection";
import AboutAssociateSection from "@/components/features/about/AboutAssociateSection";
import AboutRecognitionSection from "@/components/features/about/AboutRecognitionSection";
import Banner from "@/components/features/partner-us/Banner";
import ContactSection from "@/components/features/partner-us/ContactSection";

const heroData = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/partner-us-hero.png",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/partner-us-hero.png",
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
      link: "/become-a-partner",
    },
  ],
};

export default function Page() {
  return (
    <>
      <Banner data={heroData} />
      <AboutInfoSection />
      <AboutMoreSection />
      <AboutCompanySection />
      <AboutTeamSection />
      <AboutAssociateSection />
      <AboutRecognitionSection />
      <ContactSection />
    </>
  );
}
