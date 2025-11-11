import CareerHeroSection from "@/components/features/career/CareerHeroSection";
import CareerListSection from "@/components/features/career/CareerListSection";
import Error from "../error";
import { fetchFromAPI } from "@/lib/api";

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
    </>
  );
}
