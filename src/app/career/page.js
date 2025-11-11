import ConnectSection from "@/components/features/blog/ConnectSection";
import CareerHeroSection from "@/components/features/career/CareerHeroSection";
import CareerLifeSection from "@/components/features/career/CareerLifeSection";
import CareerListSection from "@/components/features/career/CareerListSection";
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
export default function Page() {
  return (
    <>
      <CareerHeroSection />
      <CareerListSection />
      <CareerValueSection />
      <CareerLifeSection />
      <CareerTestimonialSection />
      <ConnectSection data={local_data?.enquiry_data} />
    </>
  );
}
