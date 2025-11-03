import JobSection from "@/components/features/career/jobSection";
import { fetchFromAPI } from "@/lib/api";

export default async function JobDetailsPage({ params }) {
  const { slug } = await params;

    const { data, error } = await fetchFromAPI(`career/${slug}`);


  if (error || !data) {
    return (
      <div className="text-center py-20">
        <h2 className="text-red-600 text-xl font-semibold">
          Failed to load career data.
        </h2>
      </div>
    );
  }



  const {career_detail_section} = data 

  return (
    <>
      <JobSection slug={slug} career_detail_section={career_detail_section} />
    </>
  );
}
