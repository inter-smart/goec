import Error from "@/app/error";
import BlogDetailSection from "@/components/features/blog/BlogDetailSection";
import SimilarBlogSection from "@/components/features/blog/SimilarBlogSection";
import { fetchFromAPI } from "@/lib/api";



export default async function Page({ params }) {
  const { slug } = params;

  const { data, error } = await fetchFromAPI(`news/${slug}`);

  if (error) {
    return <Error path={`news/${slug}`} />;
  }
  const { news_details_section, similar_section, get_in_touch_section } = data;

  return (
    <>
      <BlogDetailSection variant="news" data={news_details_section} />
      <SimilarBlogSection
        similar_section={similar_section}
        footer_section={get_in_touch_section}
        variant="news"
      />
    </>
  );
}
