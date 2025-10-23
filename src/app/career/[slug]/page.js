import JobSection from "@/components/features/job-details/jobSection";

export default async function JobDetailsPage({ params }) {
  const { slug } = await params;

  return (
    <>
      <JobSection slug={slug} />
    </>
  );
}
