import InnerHero from "@/components/common/InnerHero";
import AboutInfoSection from "@/components/features/about/AboutInfoSection";
import AboutMoreSection from "@/components/features/about/AboutMoreSection";
import AboutCompanySection from "@/components/features/about/AboutCompanySection";
import AboutTeamSection from "@/components/features/about/AboutTeamSection";
import AboutAssociateSection from "@/components/features/about/AboutAssociateSection";
import AboutRecognitionSection from "@/components/features/about/AboutRecognitionSection";
import AboutBecomePartnerSection from "@/components/features/about/AboutBecomePartnerSection";
// import { fetchFromAPI } from "@/lib/api";
import Error from "../error";

export default async function AboutPage() {
  // const { data, error } = await fetchFromAPI("about");

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
        link: "/become-a-partner",
      },
    ],
  };

  // if (error) {
  //   return <Error path={"/about"} />;
  // }

  // const {
  //   banner_section,
  //   about_section,
  //   learn_more_section,
  //   mission_vision_section,
  //   our_values_section,
  //   our_journey_section,
  //   meet_team_section,
  //   our_associates_section,
  //   media_recognition_section,
  //   partner_section,
  // } = data;

  return (
    <>
      <InnerHero data={heroData} />
      <AboutInfoSection />
      <AboutMoreSection />
      <AboutCompanySection />
      <AboutTeamSection />
      <AboutAssociateSection />
      <AboutRecognitionSection />
      <AboutBecomePartnerSection />
    </>
  );
}
