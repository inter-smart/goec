"use client";

import BlogDetails from "@/components/features/blog/BlogDetais";
import LatestBlogSection from "@/components/features/home/LatestBlogSection";

const data = [
  {
    title:
      "India is quickly becoming a key investment hub, attracting entrepreneurs to launch their ventures. In line with Vision 2030, the country is prioritising electric vehicle (EV) infrastructure.",
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

export default function BlogPage() {
  return (
    <div className="min-h-screen mt-[80px] md:mt-[100px] lg:mt-[152px] bg-white">
      {/* Main Content */}
      {/* Breadcrumb */}

      <BlogDetails
        title={data[0].title}
        description={data[0].description}
        date={data[0].date}
        image={data[0].media.media_path}
        details={data[0].details}
      />

      <div className="mx-5 md:mx-20 lg:mx-[40px] border-b border-gray-300">
        <LatestBlogSection
          title="Similar Blogs"
          blogs={data}
          type="similar_blogs"
        />
      </div>
    </div>
  );
}
