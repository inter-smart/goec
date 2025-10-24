import BlogListSection from "@/components/features/blog/BlogListSection";
import AllBlogsSection from "@/components/features/blog/AllBlogsSection";
import BlogInsights from "@/components/features/blog/BlogInsights";

const blogs = [
  {
    id: 1,
    title: "Understanding the Basics of EV Charging",
    description:
      "Uncover the art of strategic planning & decision-making in the business world.",
    image: "/images/Blog_1.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "16 Sep, 2025",
    slug: "understanding-basics-ev-charging",
  },
  {
    id: 2,
    title: "Public EV Charging Etiquette",
    description:
      "Uncover the art of strategic planning & decision-making in the business world.",
    image: "/images/Blog_1.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "16 Sep, 2025",
    slug: "public-ev-charging-etiquette",
  },
  {
    id: 3,
    title: "Home EV Charger Installation Guide",
    description:
      "Uncover the art of strategic planning & decision-making in the business world.",
    image: "/images/Blog_1.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "16 Sep, 2025",
    slug: "home-ev-charger-installation-guide",
  },
];

const featured = {
  id: 0,
  title: "Here are some important things you should know about EV chargers,...",
  description:
    "Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strate...",
  author: "Mary Freund",
  authorImage: "/images/Blog_1.png",
  date: "21 January, 2025",
  readTime: "10 mins read",
  image: "/images/Blog_1.png",
  category: "Blog",
  slug: "important-things-about-ev-chargers",
};

export default function Page() {
  return (
    <>
      <BlogListSection />
      <BlogInsights type={"blogs"} featured={featured} items={blogs} />
      <AllBlogsSection />
    </>
  );
}
