"use client";

import BlogCard from "@/components/common/BlogCard";
import { Heading } from "@/components/utils/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const blogs = [
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
    description: "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
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
    description: "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
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
    description: "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
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
    description: "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
    button: {
      link: "/blog/blog-detail",
      label: "Read now",
    },
  },
];

export default function SimiliarNews() {
  return (
    <div className="w-full sm:w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto px-1.5 mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]">
      <Heading
        as="h1"
        className="text-center mt-[20px] md:mt-[40px] lg:text-[40px] text-[24px] md:text-[32px] font-medium text-[#373737] leading-tight mb-[24px] lg:mb-[32px]"
      >
        Similar News
      </Heading>

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
            <SwiperSlide key={"blog" + index} style={{ width: "33.333%" }}>
              <BlogCard blog={item} type={"similar_blogs"} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
