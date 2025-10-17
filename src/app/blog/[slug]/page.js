import BlogDetails from "@/components/features/blog/BlogDetais";
import LatestBlogSection from "@/components/features/home/LatestBlogSection";
import FooterCard from "@/components/common/FooterCard";

const data = [
  {
    title:
      "India is quickly becoming a key investment hub, attracting entrepreneurs to launch their ventures. In line with Vision 2030, the country is prioritising electric vehicle (EV) infrastructure.",
    slug: "The Advantages of Having an EV Charging Station in 2025",
    description:
      "Embark on a journey of discovery as we navigate the intricacies of entrepreneurship. From the initial spark of an idea to the establishment and growth of your business, Entrepreneurial Insights provides a compass for emerging entrepreneurs, offering valuable perspectives to help you chart a successful c",
    published_on: "2025-09-19T10:52:45.000Z",
    media: {
      media_path: "uploads/blog/1758516388631-254300881.webp",
      media_alt: "thumbnail_alt",
    },
    date: "21 Jan, 2025",
    readTime: "6 mins",
    slug: "ensuring-safety-while-charging-your-ev",
    details:
      "<p>Uncover the art of strategic planning and decision-making in the business world. <strong>Entrepreneurial Insights</strong> breaks down the importance of having a well-thought-out strategy,</p>",
  },
  {
    title: "The Advantages of Having an EV Charging Station in 2025",
    slug: "The Advantages of Having an EV Charging Station in 2025",
    description:
      "Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy,",
    published_on: "2025-09-19T10:52:45.000Z",
    media: {
      media_path: "uploads/blog/1758516388631-254300881.webp",
      media_alt: "thumbnail_alt",
    },
    date: "21 Jan, 2025",
    readTime: "6 mins",
    slug: "ensuring-safety-while-charging-your-ev",
    details:
      "<p>Uncover the art of strategic planning and decision-making in the business world. <strong>Entrepreneurial Insights</strong> breaks down the importance of having a well-thought-out strategy,</p>",
  },
  {
    title: "The Advantages of Having an EV Charging Station in 2025",
    slug: "The Advantages of Having an EV Charging Station in 2025",
    description:
      "Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy,",
    published_on: "2025-09-19T10:52:45.000Z",
    media: {
      media_path: "uploads/blog/1758516388631-254300881.webp",
      media_alt: "thumbnail_alt",
    },
    date: "21 Jan, 2025",
    readTime: "6 mins",
    slug: "ensuring-safety-while-charging-your-ev",
    details:
      "<p>Uncover the art of strategic planning and decision-making in the business world. <strong>Entrepreneurial Insights</strong> breaks down the importance of having a well-thought-out strategy,</p>",
  },
];

export default async function BlogPage({params}) {

  const {slug} = await params
  return (
    <div className="min-h-screen mt-[80px] md:mt-[100px] lg:mt-[150px] xl:[136px] bg-white">
      {/* Main Content */}
      {/* Breadcrumb */}

      <BlogDetails
        title={data[0].title}
        description={data[0].description}
        date={data[0].date}
        image={data[0].media.media_path}
        details={data[0].details}
        slug={slug}
      />

      <div className="mx-5 md:mx-20 lg:mx-[10px]">
        <LatestBlogSection
          title="Similar Blogs"
          blogs={data}
          type="similar_blogs"
        />
      </div>
      
      <FooterCard />

    </div>
  );
}
