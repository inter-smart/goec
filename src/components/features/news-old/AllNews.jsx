"use client";

import Pagination from "@/components/ui/paginations";
import Image from "next/image";

const news = [
  {
    id: 1,
    title: "The Environmental Impact of Electric Cars",
    image: "/images/news-10.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "21 Jan, 2025",
    slug: "top-5-myths-about-electric-vehicles",
  },
  {
    id: 2,
    title: "How to Maximize Your EV Battery Life",
    image: "/images/news-11.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "21 Jan, 2025",
    slug: "future-of-urban-e-mobility",
  },
  {
    id: 3,
    title: "Smart EV Charging for Apartment Buildings",
    image: "/images/news-12.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "21 Jan, 2025",
    slug: "debunking-ev-charging-misconceptions",
  },
  {
    id: 4,
    title: "The Environmental Impact of Electric Car",
    image: "/images/news-10.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "21 Jan, 2025",
    slug: "top-5-myths-about-electric-vehicles",
  },
  {
    id: 5,
    title: "How to Maximize Your EV Battery Life",
    image: "/images/news-11.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "21 Jan, 2025",
    slug: "future-of-urban-e-mobility",
  },
  {
    id: 6,
    title: "Smart EV Charging for Apartment Buildings",
    image: "/images/news-12.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "21 Jan, 2025",
    slug: "debunking-ev-charging-misconceptions",
  },
  {
    id: 7,
    title: "The Environmental Impact of Electric Cars",
    image: "/images/news-10.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "21 Jan, 2025",
    slug: "top-5-myths-about-electric-vehicles",
  },
  {
    id: 8,
    title: "How to Maximize Your EV Battery Life",
    image: "/images/news-11.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "21 Jan, 2025",
    slug: "future-of-urban-e-mobility",
  },
  {
    id: 9,
    title: "Smart EV Charging for Apartment Buildings",
    image: "/images/news-12.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "21 Jan, 2025",
    slug: "debunking-ev-charging-misconceptions",
  },
];

export default function AllNews() {
  return (
    <section className="mt-[56px] mb-[56px]">
      <div className="mb-[28px]">
        <h2 className="text-[20px] lg:text-[36px] font-medium mb-[16px] text-start text-black leading-snug">All News</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {news.map((news) => (
          <div className="rounded-[24px] overflow-hidden w-full shadow-sm" key={news.id}>
            <div className="relative w-full h-[150px]">
              <Image src={news.image} alt={news.title} fill className="object-cover rounded-t-[24px]" priority />
            </div>
            <div className="m-[22px]">
              <p className="h-[40px] text-[10px] lg:text-[16px] text-gray-600 font-medium mb-2 leading-tight line-clamp-2">{news.title}</p>
              <div className="mt-[10px] flex flex-row justify-between items-center gap-4">
                <div className="flex items-center  text-[10px] lg:text-[12px] text-[#757575] leading-tight">{`${news.date}.${news.readTime}`}</div>
                <div className="flex items-center gap-2 text-[10px] text-[#757575]">
                  <span className="font-bold">Read More</span>
                  <span>
                    <Image src="/images/read-more-arrow-right.png" alt="arrow-right" width={16} height={16} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination currentPage={1} totalPages={5} onPageChange={() => console.log("")} />
    </section>
  );
}
