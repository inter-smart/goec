"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";

// Blog data
const blogs = [
  {
    id: 1,
    title: "Understanding the Basics of EV Charging",
    description:
      "Uncover the art of strategic planning & decision-making in the business world.",
    media_path: "/images/Blog_1.png",
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
    media_path: "/images/Blog_1.png",
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
    media_path: "/images/Blog_1.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "16 Sep, 2025",
    slug: "home-ev-charger-installation-guide",
  },
];

const featuredBlog = {
  id: 0,
  title: "Here are some important things you should know about EV chargers,...",
  description:
    "Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strate...",
  author: "Mary Freund",
  auth_media_path: "/images/Blog_1.png",
  date: "21 January, 2025",
  readTime: "10 mins read",
  media_Path: "/images/Blog_1.png",
  category: "Blog",
  slug: "important-things-about-ev-chargers",
};

export default function BlogInsights() {
  const [activeTab, setActiveTab] = useState("blogs");
  const router = useRouter();

  const handleBlogClick = (slug) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <section className="mt-[100px] lg:mt-[109px] bg-white">
      <div className="mx-auto container">
        {/* Header */}
        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center mb-[24px] lg:py-[6px] lg:mb-[43px]">
          <Heading as={"h1"} size={"heading1"} className="semibold max-sm:mb-[12px] text-[030303]">
            Insights
          </Heading>

          <div className="flex gap-[13px] lg:gap-[18px] justify-center items-center">
            <ActionButton
              className={`px-[35px] py-[6px] lg:px-[47px] lg:py-[8px] rounded-[35px] lg:text-[15px] font-medium`}
              size={"md"}
              variant={"blue"}
              asChild
            >
              <Link href="/blog">Blogs</Link>
            </ActionButton>
            <ActionButton
              className={`px-[35px] py-[6px] lg:px-[47px] lg:py-[8px] rounded-[35px] lg:text-[15px]  transition-all text-black border border-[#F0F0F0] duration-300 font-medium`}
              size={"md"}
              variant={"default"}
              asChild
            >
              <Link href="/news">News</Link>
            </ActionButton>
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row mx-auto w-full gap-[12px] lg:gap-[18px] 2xl:gap-[24px] justify-between items-start lg:items-center lg:mb-[43px]">
          {/* Featured Blog - Takes 2 columns */}
          <div className="w-full h0">
            <div
              onClick={() => handleBlogClick(featuredBlog.slug)}
              className="rounded-[12px] 2xl:rounded-[24px] overflow-hidden w-full h-auto cursor-pointer transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              <div className="relative w-full h-auto">
                <Image
                  src={featuredBlog.media_Path}
                  alt={featuredBlog.title}
                  width={640}
                  height={328}
                  className="w-full h-full object-cover rounded-[12px] 2xl:rounded-[24px]"
                  priority
                />
              </div>

              <div className="p-[12px] lg:p-[23px] md:p-[32px]">
                <div className="font-semibold lg:mb-[12px] xl:mb-[16px] text-black">
                  {featuredBlog.title}
                </div>
                <Text as={"p"} size={"text2"} className="text-[#373737] lg:mb-[18px] xl:mb-[24px] line-clamp-2">
                  {featuredBlog.description}
                </Text>

                <div className="flex flex-row justify-between items-center sm:items-center gap-4">
                  <div className="flex items-center gap-[8px]">
                    <div className="relative w-[36px] h-[36px] rounded-full overflow-hidden">
                      <Image
                        src={featuredBlog.auth_media_path}
                        alt={featuredBlog.author}
                        width={36}
                        height={36}
                        className="w-full h-full rounded-full object-cover"
                        quality={100}
                      />
                    </div>
                    <span className="font-medium text-[12px] lg:text-[16px] text-[#030303]">
                      {featuredBlog.author}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] lg:text-[14px] text-[#757575]">
                    <span>{featuredBlog.date}</span>
                    <span>•</span>
                    <span>{featuredBlog.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Blogs Sidebar */}
          <div className="w-full mb-[24px]">
            <h2 className="text-[13px] lg:text-[18px] 3xl:text-[32px] font-medium mt-[10px] lg:mt-[0] mb-[11px] lg:mb-[15px] 3xl:mb-[24px] text-black">
              Popular Blogs
            </h2>

            <div className="flex flex-col gap-[32px]">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                    onClick={() => handleBlogClick(blog.slug)}
                  className="flex gap-[12px] lg:gap-[18px] xl:gap-[20px] 2xl:gap-[24px] rounded-[12px] lg:rounded-[24px] shadow-sm overflow-hidden cursor-pointer transition-transform duration-300 hover:translate-x-1 hover:shadow-md"
                >
                  {/* Image */}
                  <div className="relative aspect-[1/1] rounded-[12px] lg:rounded-[24px] overflow-hidden">
                    <Image
                      src={blog.media_path}
                      alt={blog.title}
                      width={120}
                      height={120}
                      className="object-cover w-full h-full"
                      quality={100}
                      priority
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between p-[8px] lg:p-[11px]">
                    <div>
                      <h3 className="text-[11px] md-text-[13px] lg:text-[15px] xl:text-[20px] 3xl:text-[27px] mb-[5px] text-black font-semibold line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-[8px] md:text-[10px] lg:text-[12px] text-gray-600 mb-[9px] leading-tight line-clamp-2">
                        {blog.description}
                      </p>
                    </div>

                    <div className="flex justify-between items-center text-[6px] md:text-[8px] lg:text-[10px] text-gray-500">
                      <span>
                        {blog.category} • {blog.readTime}
                      </span>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Alternative: If you want to use Server Components with client interactivity
// Create a separate client component for the tabs:

// components/TabButtons.tsx
export function TabButtons() {
  const [activeTab, setActiveTab] = useState("blogs");

  return (
    <div className="flex gap-4">
      <button
        onClick={() => setActiveTab("blogs")}
        className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
          activeTab === "blogs"
            ? "bg-blue-600 text-white shadow-lg"
            : "bg-transparent text-black hover:bg-blue-600 hover:text-white"
        }`}
      >
        Blogs
      </button>
      <button
        onClick={() => setActiveTab("news")}
        className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
          activeTab === "news"
            ? "bg-blue-600 text-white shadow-lg"
            : "bg-transparent text-black hover:bg-blue-600 hover:text-white"
        }`}
      >
        News
      </button>
    </div>
  );
}
