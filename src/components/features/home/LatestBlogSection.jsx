"use client";
import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import Link from "next/link";
import BlogCard from "@/components/common/BlogCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const blogData = {
  title: "Explore our Blogs.",
  button: {
    link: "/",
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

export default function LatestBlogSection({ data = blogData }) {
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[80px_60px] xl:py-[100px_80px] 2xl:py-[120px_90px]">
      <div className="container">
        <div className="flex flex-wrap items-center gap-[20px] mb-[15px] sm:mb-[30px] xl:mb-[40px] 2xl:mb-[60px] 3xl:mb-[80px]">
          <div className="flex-1">
            <Heading
              as="h2"
              size="heading2"
              className="text-[#303030] xl:max-w-[840px]"
            >
              {data?.title}
            </Heading>
          </div>
          <div>
            <ActionButton variant="link" className="text-black" asChild>
              <Link href={data?.button?.link}>{data?.button?.label}</Link>
            </ActionButton>
          </div>
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
          {data?.item_blog.map((item, index) => {
            return (
              <SwiperSlide key={"blog" + index} style={{ width: "33.333%" }}>
                <BlogCard data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
