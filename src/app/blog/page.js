import AllBlogsSection from "@/components/features/blog/AllBlogsSection";
import BlogInsights from "@/components/features/blog/BlogInsights";

export default async function BlogPage() {
  return (
    <>
      <BlogInsights />
      <AllBlogsSection />
    </>
  );
}
