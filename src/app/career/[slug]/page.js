import JobSection from "@/components/features/career-old/jobSection";
import CareerInfoSection from "@/components/features/career/CareerInfoSection";

export default async function Page({ params }) {
  const { slug } = await params;

  // const job = careerData.openings.find((item) => item.id === slug);

  // if (!job) return <div>Job not found.</div>;

  return (
    <>
      <CareerInfoSection slug={slug} />
      <JobSection slug={slug} />
    </>
  );
}
