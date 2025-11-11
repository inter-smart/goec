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
  // ✅ Fetch data from backend
  const { data, error } = await fetchFromAPI("career");

  if (error || !data) {
    return (
      <div className="text-center py-20">
        <h2 className="text-red-600 text-xl font-semibold">
          Failed to load career data.
        </h2>
      </div>
    );
  }

  // ✅ Destructure all sections for clarity
  const {
    banner_section,
    current_opening_section,
    innovative_section,
    life_section,
    testimonials_section,
    footer_section,
  } = data;

  return (
    <div>
      {/* Banner Section */}
      <CareerHeroSection banner_section={banner_section} />

      <CareersPage
        current_opening={current_opening_section}
        jobs={current_opening_section?.jobs}
        job_categories={current_opening_section?.job_categories}
        desktop_media_path={banner_section?.media?.desktop?.media_path}
        mobile_media_path={banner_section?.media?.mobile?.media_path}
        alt={banner_section?.media?.alt}
      />

      <Benifits innovative_section={innovative_section} />

      <ScrollerSection
        title={life_section?.title}
        list={life_section?.list}
        page="career"
      />

      <TestimonialSection title={testimonials_section?.title} list={testimonials_section?.list} />

      <FooterCard title={footer_section?.title} description={footer_section?.description} /> 
    </div>
  );
}
