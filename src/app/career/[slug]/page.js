import JobSection from "@/components/features/career/jobSection";

export default async function JobDetailsPage({ params }) {
  const { slug } = await params;

  return (
    <>
      <JobSection slug={slug} />
    </>
  );
}
