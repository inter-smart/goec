import InnerHero from "@/components/common/InnerHero";
import AboutInfoSection from "@/components/features/about/AboutInfoSection";
import AboutMoreSection from "@/components/features/about/AboutMoreSection";
import AboutCompanySection from "@/components/features/about/AboutCompanySection";
import AboutTeamSection from "@/components/features/about/AboutTeamSection";
import AboutAssociateSection from "@/components/features/about/AboutAssociateSection";
import AboutRecognitionSection from "@/components/features/about/AboutRecognitionSection";
import AboutBecomePartnerSection from "@/components/features/about/AboutBecomePartnerSection";
import { fetchFromAPI } from "@/lib/api";
import Error from "../error";

export default async function AboutPage() {
  const { data, error } = await fetchFromAPI("about");

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



  if (error) {
    return <Error path={"/about"} />
  }

  const {
    banner_section,
    about_section,
    learn_more_section,
    mission_vision_section,
    our_values_section,
    our_journey_section,
    meet_team_section,
    our_associates_section,
    media_recognition_section,
    partner_section,
  } = data;

  return (
    <>
      {/* Hero Section */}
      <InnerHero
      data={heroData}
        title={banner_section?.title || ""}
        media={banner_section?.media || {}}
      />

      {/* About Info */}
      <AboutInfoSection
        description={about_section?.description || ""}
        media={about_section?.media || {}}
      />

      {/* Learn More */}
      <AboutMoreSection
        aboutMore = {learn_more_section}
        partners={mission_vision_section || {}}
        mission={mission_vision_section?.mission || {}}
        vision={mission_vision_section?.vision || {}}
        partnersList={mission_vision_section?.partners_list || []}
        leadingTheGame={mission_vision_section?.leading_the_game || {}}
        

      />

      {/* Mission, Vision, Partners, Leading the Game */}
      <AboutCompanySection
        ourValues = {our_values_section}
        ourJourney = {our_journey_section}
        />

      {/* Meet Team */}
      <AboutTeamSection
        title={meet_team_section?.title || ""}
        description={meet_team_section?.description || ""}
        media={meet_team_section?.media || {}}
      />

      {/* Associates */}
      <AboutAssociateSection
        title={our_associates_section?.title || ""}
        description={our_associates_section?.description || ""}
        list={our_associates_section?.list || []}
      />

      {/* Media Recognition */}
      <AboutRecognitionSection
        title={media_recognition_section?.title || ""}
        description={media_recognition_section?.description || ""}
        list={media_recognition_section?.list || []}
      />

      {/* Become a Partner */}
      <AboutBecomePartnerSection
        title={partner_section?.title || ""}
        description={partner_section?.description || ""}
      />
    </>
  );
}


