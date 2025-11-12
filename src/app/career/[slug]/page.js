import JobSection from "@/components/features/career-old/jobSection";
import { fetchFromAPI } from "@/lib/api";

export default async function JobDetailsPage({ params }) {
  const { slug } = await params;

    const { data, error } = await fetchFromAPI(`career/${slug}`);


    console.log(data)
  const {career_details_section} = data 

  return (
    <>
      <JobSection slug={slug} career_details_section={career_details_section} />
    </>
  );
}
