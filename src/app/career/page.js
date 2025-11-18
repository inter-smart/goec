import ConnectSection from "@/components/features/blog/ConnectSection";
import CareerHeroSection from "@/components/features/career/CareerHeroSection";
import CareerLifeSection from "@/components/features/career/CareerLifeSection";
import CareerListSection from "@/components/features/career/CareerListSection";
import Error from "../error";
import { fetchFromAPI } from "@/lib/api";
import CareerTestimonialSection from "@/components/features/career/CareerTestimonialSection";
import CareerValueSection from "@/components/features/career/CareerValueSection";

const local_data = {
  enquiry_data: {
    title: "Explore opportunities in GO EC ",
    description:
      "<p>Elevate your career with strategic planning and decision-making skills! Join us at Entrepreneurial Insights to discover how a solid strategy can transform your business approach.</p>",
    button: {
      link: "/career",
      label: "View openings",
    },
  },
};
export default async function Page() {
  const { data, error } = await fetchFromAPI("career");

  if (error) {
    return <Error path="/career" />;
  }

  const {
    banner_section,
    current_opening_section,
    innovative_section,
    life_section,
    testimonials_section,
    footer_section
  } = data;

  return (
    <>
      <CareerHeroSection data={banner_section} />
      <CareerListSection data={current_opening_section} />
      <CareerValueSection data={innovative_section} />
      <CareerLifeSection data={life_section} />
      <CareerTestimonialSection data={testimonials_section} />
      <ConnectSection footer_section={footer_section} page ="career"/>
    </>
  );
}
