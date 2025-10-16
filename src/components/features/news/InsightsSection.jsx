import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import Link from "next/link";

const news = [
  {
    id: 1,
    title: "Top 5 Myths About Electric Vehicles",
    description: "Uncover the art of strategic planning & decision-making in the business world.",
    image: "/images/news-5.png",
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
  author: "Mary Freund",
  authorImage: "/images/Blog_1.png",
  date: "21 January, 2025",
  readTime: "10 mins read",
  image: "/images/charging-station.png",
  category: "Blog",
  slug: "things-to-know-about-ev-chargers",
};

export default function InsightsSection() {
  return (
    <section className="mt-[100px] lg:mt-[152px] bg-white">
      <div className="block xs:flex justify-between items-center">
        <h1 className="text-2xl md:text-[56px] font-[600] text-black">Insights</h1>

        <div className="flex gap-[24px] justify-center items-center">
          <ActionButton className={`px-[50px] sm:px-[66px] py-[11px] rounded-[48px] font-medium bg-[#0055E0]`} size={"md"} asChild>
            <Link href="/blogs">Blogs</Link>
          </ActionButton>
          <ActionButton
            className={`px-[50px] md:px-[66px] py-[11px] rounded-[48px] transition-all text-black border border-[#F0F0F0] duration-300 font-medium`}
            size={"md"}
            asChild
          >
            <Link href="/news">News</Link>
          </ActionButton>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-[24px] mt-[60px] mb-[30px] md:mb-[60px] h-auto w-full">
        <div className="lg:w-[600px] w-full">
          <div className="rounded-[24px] overflow-hidden w-full h-full cursor-pointer transition-transform duration-300 shadow-md hover:shadow-xl">
            <div className="relative w-full h-[320px]">
              <Image src={newsBlog.image} alt={newsBlog.title} fill className="object-cover rounded-t-[24px]" priority />
            </div>

            <div className="p-[12px] md:p-[32px]">
              <h2 className="text-[20px] lg:text-[36px] font-medium mb-[16px] text-black leading-snug">{newsBlog.title}</h2>
              <p className="text-[#373737] text-[12px] lg:text-[16px] mb-[24px] line-clamp-2 leading-snug">{newsBlog.description}</p>

              <div className="flex flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-[10px] lg:text-[14px] text-[#757575]">
                  <span>{newsBlog.date}</span>
                  <span>•</span>
                  <span>{newsBlog.readTime}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] lg:text-[14px] text-[#757575]">
                  <span className="font-medium text-[16px]">Read More</span>
                  <span>
                    <Image src="/images/read-more-arrow-right.png" alt="arrow-right" width={16} height={16} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[calc(100%-624px)] w-full">
          <h2 className="text-[24px] lg:text-[32px] font-medium mb-[14px] text-black">Popular Blogs</h2>

          <div className="flex flex-col gap-[10px]">
            {news?.map((blog) => (
              <>
                <div key={blog.id} className=" flex gap-[12px] lg:gap-[24px] overflow-hidden  cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="relative w-[130px] h-[115px] lg:w-[180px] lg:h-[161px] flex-shrink-0 rounded-[12px] lg:rounded-[24px] overflow-hidden">
                    <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between p-[8px] lg:p-[11px]">
                    <div>
                      <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium mb-[8px] text-black leading-tight line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-[10px] lg:text-[16px] text-gray-600 mb-2 leading-tight line-clamp-2">{blog.description}</p>
                    </div>

                    <div className="flex flex-row justify-between items-center gap-4">
                      <div className="flex items-center  text-[10px] lg:text-[12px] text-[#757575] leading-tight">
                        {`${blog.date}.${blog.readTime}`}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-[#757575]">
                        <span className="font-bold">Read More</span>
                        <span>
                          <Image src="/images/read-more-arrow-right.png" alt="arrow-right" width={16} height={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="border-t border-gray-300 w-full mt-2" />
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
