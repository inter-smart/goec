"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Pagination from "@/components/ui/paginations";
import Link from "next/link";
import { Text } from "@/components/utils/Text";
import { Heading } from "@/components/utils/Heading";

// Blog posts data
const allBlogPosts = [
  {
    id: 1,
    title: "Ensuring Safety While Charging Your EV",
    image: "/images/Blog_1.png",
    published_on: "21 Jan, 2025",
    readTime: "6 mins",
    slug: "ensuring-safety-while-charging-your-ev",
  },
  {
    id: 2,
    title: "Smart EV Charging Solutions for Businesses",
    image: "/images/Blog_1.png",
    published_on: "21 Jan, 2025",
    readTime: "10 mins",
    slug: "smart-ev-charging-solutions-for-businesses",
  },
  {
    id: 3,
    title: "Cost Analysis: Home vs Public EV Charging",
    image: "/images/Blog_1.png",
    published_on: "21 Jan, 2025",
    readTime: "10 mins",
    slug: "cost-analysis-home-vs-public-ev-charging",
  },
  {
    id: 4,
    title: "The Impact of Grid Infrastructure on EV Charging",
    image: "/images/Blog_1.png",
    published_on: "21 Jan, 2025",
    readTime: "6 mins",
    slug: "impact-of-grid-infrastructure-on-ev-charging",
  },
  {
    id: 5,
    title: "The Future of Fast Charging Technology",
    image: "/images/Blog_1.png",
    published_on: "21 Jan, 2025",
    readTime: "10 mins",
    slug: "future-of-fast-charging-technology",
  },
  {
    id: 6,
    title: "Debunking Myths About EV Charging",
    image: "/images/Blog_1.png",
    published_on: "21 Jan, 2025",
    readTime: "10 mins",
    slug: "debunking-myths-about-ev-charging",
  },
  {
    id: 7,
    title: "Exploring Different EV Charger Types",
    image: "/images/Blog_1.png",
    published_on: "21 Jan, 2025",
    readTime: "6 mins",
    slug: "exploring-different-ev-charger-types",
  },
  {
    id: 8,
    title: "Maximizing Your EV's Charging Efficiency",
    image: "/images/Blog_1.png",
    published_on: "21 Jan, 2025",
    readTime: "10 mins",
    slug: "maximizing-your-evs-charging-efficiency",
  },
  {
    id: 9,
    title: "Smart EV Charging Solutions for Businesses",
    image: "/images/Blog_1.png",
    published_on: "21 Jan, 2025",
    readTime: "10 mins",
    slug: "smart-ev-charging-solutions-for-businesses-2",
  },
  {
    id: 10,
    title: "Understanding EV Battery Technology",
    image: "/images/Blog_1.png",
    published_on: "22 Jan, 2025",
    readTime: "8 mins",
    slug: "understanding-ev-battery-technology",
  },
  {
    id: 11,
    title: "EV Charging Station Installation Guide",
    image: "/images/Blog_1.png",
    published_on: "23 Jan, 2025",
    readTime: "12 mins",
    slug: "ev-charging-station-installation-guide",
  },
  {
    id: 12,
    title: "The Environmental Impact of Electric Vehicles",
    image: "/images/Blog_1.png",
    published_on: "24 Jan, 2025",
    readTime: "7 mins",
    slug: "environmental-impact-of-electric-vehicles",
  },
];

const POSTS_PER_PAGE = 9;

export default function AllBlogsSection({ type = "blogs" }) {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  // Calculate pagination
  const totalPages = Math.ceil(allBlogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = allBlogPosts.slice(startIndex, endIndex);

  const handleBlogClick = (slug) => {
    router.push(`/blog/${slug}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  return (
    <section className="bg-white xl:mb-[40px] xl:mt-[60px]">
      <div className="container mx-auto">
        {/* Section Title */}
        <Heading as={"h2"} size={"heading2"} className="font-Medium text-black mb-6 sm:mb-8 lg:mb-[30px] xl:mb-[40px]">
          {type == "news" ? "All News" : "All Blogs"}
        </Heading>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px]">
          {currentPosts.map((blog) => (
            <article
              key={blog.id}
              // onClick={() => handleBlogClick(blog.slug)}
              className="group bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl shadow-md"
            >
              {/* Blog Image */}
              <div className="w-full h-auto aspect-[4/2] overflow-hidden relative z-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="384px"
                />
              </div>

              {/* Blog Content */}
              <div className="h-full p-[12px] xl:p-[24px] 2xl:p-[32px]">
                {/* Title */}
                <Heading as={"h4"} size={"h4"} className="font-medium text-black sm:mb-4 leading-tight line-clamp-2">
                  {blog.title}
                </Heading>
                {/* Meta Information and Read More */}
                <div className="flex  items-center justify-between text-[10px] lg:text-[14px]">
                  {/* Date and Read Time */}
                  <div className="flex items-center gap-1 font-light text-[#757575]">
                    <span className="whitespace-nowrap">{blog.published_on}</span>
                    <span>•</span>
                    <span className="whitespace-nowrap">{blog.readTime}</span>
                  </div>

                  {/* Read More Link */}
                  <Text
                    as={"text2"}
                    size={"text2"}
                    className="flex items-center justify-center gap-[8px] text-[#151515] group hover:text-[#0048BF] shadow-none font-medium"
                  >
                    <Link href="/">Read More</Link>
                    <Image src="/images/Arrow.png" alt="arrow" width={18} height={18} />
                  </Text>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px]">
          {currentPosts.map((item, key) => (
            <div key={key}>
              <BlogCard blog={item} type={"all_blogs"} />
            </div>
          ))}
        </div> */}

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </section>
  );
}
