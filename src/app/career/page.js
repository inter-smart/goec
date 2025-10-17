import FooterCard from "@/components/common/FooterCard";
import Hero from "@/components/common/Hero";
import Benifits from "@/components/features/career/Benifits";
import CareersPage from "@/components/features/career/CurrentOpenings";
import TestimonialSection from "@/components/features/career/Testimonials";
import ScrollerSection from "@/components/common/ScrollerSection";

const LifeImages = {
  title: "LIfe At GO EC",
  list: [
    {
      src: "/images/life_image_1.png", // replace with your image path
      alt: "Team photo 1",
    },
    {
      src: "/images/life_image_2.png", // replace with your image path
      alt: "Team photo 2",
    },
    {
      src: "/images/life_image_3.png", // replace with your image path
      alt: "Team photo 1",
    },
    {
      src: "/images/life_image_4.png", // replace with your image path
      alt: "Team photo 2",
    },
    {
      src: "/images/life_image_5.png", // replace with your image path
      alt: "Team photo 1",
    },
    {
      src: "/images/life_image_1.png", // replace with your image path
      alt: "Team photo 2",
    },
  ],
};

export default async function CareerPage() {
  return (
    <div>
      <Hero />
      <CareersPage />
      <Benifits />
      <ScrollerSection title={LifeImages.title} list={LifeImages.list} page="career" />
      <TestimonialSection />
      <FooterCard />
    </div>
  );
}
