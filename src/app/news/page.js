import AllBlogsSection from "@/components/features/blog/AllBlogsSection";
import BlogInsights from "@/components/features/blog/BlogInsights";
import AllNews from "@/components/features/news/AllNews";
import InsightsSection from "@/components/features/news/InsightsSection";

const news = [
  {
    id: 1,
    title: "Top 5 Myths About Electric Vehicles",
    description: "Uncover the art of strategic planning & decision-making in the business world.",
    image: "/images/news-10.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "21 Jan, 2025",
    slug: "top-5-myths-about-electric-vehicles",
  },
  {
    id: 2,
    title: "The Future of Urban E-Mobility",
    description: "Uncover the art of strategic planning & decision-making in the business world.",
    image: "/images/news-6.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "21 Jan, 2025",
    slug: "future-of-urban-e-mobility",
  },
  {
    id: 3,
    title: "Debunking EV Charging Misconceptions",
    description: "Uncover the art of strategic planning & decision-making in the business world.",
    image: "/images/news-7.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "21 Jan, 2025",
    slug: "debunking-ev-charging-misconceptions",
  },
];

const newsBlog = {
  id: 0,
  title: "Things you should to know about the EV Chargers",
  description:
    "Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy for EV charging infrastructure and sustainability.",
  date: "21 January, 2025",
  readTime: "10 mins read",
  image: "/images/news-insights-1.png",
  category: "Blog",
  slug: "things-to-know-about-ev-chargers",
};

export default function Page() {
  return (
    <>
      <BlogInsights type={"news"} items={news} featured={newsBlog} />
      {/* <InsightsSection /> */}
      <AllBlogsSection type={"news"} />
    </>
  );
}
