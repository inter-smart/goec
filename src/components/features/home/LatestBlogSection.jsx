"use client";
import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import NewsCard from "@/components/common/NewsCard";
import { cn } from "@/lib/utils";
import Image from "next/image";

const blogData = {
  title: "Explore our Blogs.",
  button: {
    link: "/blog",
    label: "View all",
  },
  item_blog: [
    {
      timestamp: "2025-08-14T05:00:00.000000Z",
      media: {
        type: "image",
        path: "/images/blog-1.jpg",
        alt: "blog",
      },
      title: "The Advantages of Having an EV Charging Station in 2025",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
      button: {
        link: "/blog/blog-detail",
        label: "Read now",
      },
    },
    {
      timestamp: "2025-08-14T05:00:00.000000Z",
      media: {
        type: "image",
        path: "/images/blog-2.jpg",
        alt: "blog",
      },
      title: "Benefit of owning an EV Charging station in 2025",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
      button: {
        link: "/blog/blog-detail",
        label: "Read now",
      },
    },
    {
      timestamp: "2025-08-14T05:00:00.000000Z",
      media: {
        type: "image",
        path: "/images/blog-3.jpg",
        alt: "blog",
      },
      title: "Things you should to know about the EV Chargers",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
      button: {
        link: "/blog/blog-detail",
        label: "Read now",
      },
    },
    {
      timestamp: "2025-08-14T05:00:00.000000Z",
      media: {
        type: "image",
        path: "/images/blog-1.jpg",
        alt: "blog",
      },
      title: "The Advantages of Having an EV Charging Station in 2025",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
      button: {
        link: "/blog/blog-detail",
        label: "Read now",
      },
    },
    {
      timestamp: "2025-08-14T05:00:00.000000Z",
      media: {
        type: "image",
        path: "/images/blog-2.jpg",
        alt: "blog",
      },
      title: "The Advantages of Having an EV Charging Station in 2025",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
      button: {
        link: "/blog/blog-detail",
        label: "Read now",
      },
    },
  ],
};

export default function LatestBlogSection({
  data = blogData,
  title,
  blogs = [],
  type = "home",
}) {
  return (
    <section className="w-full h-auto block py-[15px_30px] sm:py-[40px_80px] xl:py-[80px_80px] 2xl:py-[100px_90px]">
      <div className="container">
        <div className="flex flex-wrap items-center gap-[20px] mb-[15px] sm:mb-[30px] xl:mb-[40px] 2xl:mb-[60px] 3xl:mb-[80px]">
          <div
            className={
              type === "similar_blogs"
                ? "w-full flex justify-center text-[40px] text-center"
                : "flex-1"
            }
          >
            <Heading
              as="h2"
              size="heading2"
              className="text-[#303030] xl:max-w-[840px]"
            >
              {title}
            </Heading>
          </div>
          {type === "home" && (
            <div>
              <ActionButton
                size={"lg"}
                className={cn(
                  "text-black min-w-[100px] sm:min-w-[140px] xl:min-w-[160px] 2xl:min-w-[180px] bg-transparent shadow-none transition duration-500 max-xl:bg-white max-xl:border-[#f0f0f0]",
                  "hover:text-white",
                  "not-hover:[&_.notHover]:scale-100 not-hover:[&_.isHover]:scale-0",
                  "hover:[&_.notHover]:scale-0 hover:[&_.isHover]:scale-100"
                )}
                asChild
              >
                <Link href={data?.button?.link}>
                  {data?.button?.label}
                  <span className="w-6 xl:w-8 aspect-4/2 relative z-0">
                    <Image
                      src="/images/icon-btn-arrow-dark.svg"
                      alt="icon-btn-arrow-dark"
                      width={41}
                      height={23}
                      className="max-w-[75%] block notHover transition duration-600 absolute z-0 inset-0 m-auto ml-0"
                    />
                    <Image
                      src="/images/icon-btn-arrow-hover.svg"
                      alt="icon-btn-arrow-hover"
                      width={41}
                      height={23}
                      className="block isHover transition duration-600 absolute z-0 inset-0 m-auto"
                    />
                  </span>
                </Link>
              </ActionButton>
            </div>
          )}
        </div>
        <Swiper
          loop
          spaceBetween={30}
          slidesPerView={4}
          navigation={false}
          speed={600}
          watchSlidesProgress={true}
          watchOverflow={true}
          autoplay={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            384: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              },
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {blogs.map((item, index) => {
            return (
              <SwiperSlide key={"blog" + index} style={{ width: "33.333%" }}
              className="h-auto!"
              >
                <NewsCard
                  index={index}
                  data={item}
                  variant={"blog"}
                  page={"blog"}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
