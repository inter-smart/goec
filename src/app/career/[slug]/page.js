import JobSection from "@/components/features/career-old/jobSection";

export default async function Page({ params }) {
  const { slug } = await params;

  return (
    <>
      <CareerInfoSection />
      <JobSection slug={slug} />
    </>
  );
}
