"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Pagination from "@/components/ui/paginations";

// Blog posts data
const allBlogPosts = [
  {
    id: 1,
    title: "Ensuring Safety While Charging Your EV",
    image: "/images/Blog_1.png",
    date: "21 Jan, 2025",
    readTime: "6 mins",
    slug: "ensuring-safety-while-charging-your-ev",
  },
  {
    id: 2,
    title: "Smart EV Charging Solutions for Businesses",
    image: "/images/Blog_1.png",
    date: "21 Jan, 2025",
    readTime: "10 mins",
    slug: "smart-ev-charging-solutions-for-businesses",
  },
  {
    id: 3,
    title: "Cost Analysis: Home vs Public EV Charging",
    image: "/images/Blog_1.png",
    date: "21 Jan, 2025",
    readTime: "10 mins",
    slug: "cost-analysis-home-vs-public-ev-charging",
  },
  {
    id: 4,
    title: "The Impact of Grid Infrastructure on EV Charging",
    image: "/images/Blog_1.png",
    date: "21 Jan, 2025",
    readTime: "6 mins",
    slug: "impact-of-grid-infrastructure-on-ev-charging",
  },
  {
    id: 5,
    title: "The Future of Fast Charging Technology",
    image: "/images/Blog_1.png",
    date: "21 Jan, 2025",
    readTime: "10 mins",
    slug: "future-of-fast-charging-technology",
  },
  {
    id: 6,
    title: "Debunking Myths About EV Charging",
    image: "/images/Blog_1.png",
    date: "21 Jan, 2025",
    readTime: "10 mins",
    slug: "debunking-myths-about-ev-charging",
  },
  {
    id: 7,
    title: "Exploring Different EV Charger Types",
    image: "/images/Blog_1.png",
    date: "21 Jan, 2025",
    readTime: "6 mins",
    slug: "exploring-different-ev-charger-types",
  },
  {
    id: 8,
    title: "Maximizing Your EV's Charging Efficiency",
    image: "/images/Blog_1.png",
    date: "21 Jan, 2025",
    readTime: "10 mins",
    slug: "maximizing-your-evs-charging-efficiency",
  },
  {
    id: 9,
    title: "Smart EV Charging Solutions for Businesses",
    image: "/images/Blog_1.png",
    date: "21 Jan, 2025",
    readTime: "10 mins",
    slug: "smart-ev-charging-solutions-for-businesses-2",
  },
  {
    id: 10,
    title: "Understanding EV Battery Technology",
    image: "/images/Blog_1.png",
    date: "22 Jan, 2025",
    readTime: "8 mins",
    slug: "understanding-ev-battery-technology",
  },
  {
    id: 11,
    title: "EV Charging Station Installation Guide",
    image: "/images/Blog_1.png",
    date: "23 Jan, 2025",
    readTime: "12 mins",
    slug: "ev-charging-station-installation-guide",
  },
  {
    id: 12,
    title: "The Environmental Impact of Electric Vehicles",
    image: "/images/Blog_1.png",
    date: "24 Jan, 2025",
    readTime: "7 mins",
    slug: "environmental-impact-of-electric-vehicles",
  },
];

const POSTS_PER_PAGE = 9;

export default function AllBlogsSection() {
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
    <section className="px-[24px] lg:px-[120px] bg-white mb-[40px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Title */}
        <h2 className=" text-2xl lg:text-[40px] font-Medium text-black mb-6 sm:mb-8 lg:mb-[40px]">
          All Blogs
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px]">
          {currentPosts.map((blog) => (
            <article
              key={blog.id}
              // onClick={() => handleBlogClick(blog.slug)}
              className="group bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl shadow-md"
            >
              {/* Blog Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="384px"
                />
              </div>

              {/* Blog Content */}
              <div className="p-[16px] sm:p-[24px] lg:p-[32px]">
                {/* Title */}
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] mb-[12px] lg:mb-[16px] font-medium text-black sm:mb-4 leading-tight line-clamp-2">
                  {blog.title}
                </h3>
                {/* Meta Information and Read More */}
                <div className="flex items-center justify-between text-[10px] lg:text-[14px]">
                  {/* Date and Read Time */}
                  <div className="flex items-center gap-1 font-light text-[#757575]">
                    <span className="whitespace-nowrap">{blog.date}</span>
                    <span>•</span>
                    <span className="whitespace-nowrap">{blog.readTime}</span>
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center gap-1 font-medium text-[#151515] whitespace-nowrap">
                    <span>Read now</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}
