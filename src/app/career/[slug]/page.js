import CareerInfoSection from "@/components/features/career/CareerInfoSection";
import { fetchFromAPI } from "@/lib/api";

export default async function Page({ params }) {
  const { slug } = await params;

    const { data, error } = await fetchFromAPI(`career/${slug}`);
  const {career_details_section} = data 

  return (
    <>
      <CareerInfoSection slug={slug} data={career_details_section} />
    </>
  );
}
