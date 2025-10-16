import NewsDetailBanner from "@/components/features/news/NewsDetailBanner";
import NewsDetails from "@/components/features/news/NewsDetails";
import Title from "@/components/features/news/NewsDetailTitleSection";
import SimiliarNews from "@/components/features/news/SimiliarNews";

export default async function Page({ params }) {
  const data = {
    banner: {
      background_media: {
        desktop: {
          path: "/images/news-detail-banner.png",
          alt: "hero",
        },
      },
      title: "India's EV Industry Sees Remarkable Growth: Our Insights",
      category: "News",
      published_at: "Dec 29,2025",
      time: "4 min read",
    },
    news: {
      title:
        "India is quickly becoming a key investment hub, attracting entrepreneurs to launch their ventures. In line with Vision 2030, the country is prioritising electric vehicle (EV) infrastructure.",
      desc: "Embark on a journey of discovery as we navigate the intricacies of entrepreneurship. From the initial spark of an idea to the establishment and growth of your business, Entrepreneurial Insights provides a compass for emerging entrepreneurs, offering valuable perspectives to help you chart a successful c",
    },
    content: "",
  };

  const slug = (await params?.slug) || "News";

  return (
    <>
      <Title slug={slug} title={data?.news?.title} description={data?.news?.desc} date={data?.banner?.published_at} />
      <NewsDetailBanner banner={data?.banner} />
      <section className="container mt-[30px] mb-[30px]">
        <NewsDetails />
        <NewsDetails />
        <NewsDetails />
      </section>
      <SimiliarNews />
    </>
  );
}
