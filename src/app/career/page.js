import FooterCard from "@/components/common/FooterCard";
import Hero from "@/components/common/Hero";
import AboutCompanySection from "@/components/features/about/AboutCompanySection";
import Benifits from "@/components/features/career/Benifits";
import CareersPage from "@/components/features/career/CurrentOpenings";
import LifeAtGoEC from "@/components/features/career/LifeAtGoEC";
import TestimonialSection from "@/components/features/career/Testimonials";

export default async function CareerPage() {
  return (
    <div>
      <Hero />
      <CareersPage />
      <Benifits />
      <LifeAtGoEC />
      <TestimonialSection />
      <FooterCard />
    </div>
  );
}
