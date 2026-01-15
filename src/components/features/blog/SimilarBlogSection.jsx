"use client";
import { Heading } from "@/components/utils/Heading";

import NewsCard from "@/components/common/NewsCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function SimilarBlogSection({
  similar_section,
  footer_section,
  variant,
}) {
  return (
    <section className="w-full h-auto block py-[20px] sm:py-[30px_40px] xl:py-[60px_120px] 2xl:py-[80px_140px]">
      <div className="container">
        <Heading
          as="h2"
          size="heading3"
          className="text-center text-[#303030] mb-[15px] xl:mb-[40px] 2xl:mb-[60px]"
        >
          {similar_section?.title}
        </Heading>
        </div>
        <div className="container max-sm:pr-0">
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
              slidesPerView: 1.2,
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
          {similar_section?.list?.map((item, index) => {
            return (
              <SwiperSlide
                key={variant + index}
                style={{ width: "33.333%" }}
                className="h-auto!"
              >
                <NewsCard data={item} variant={"blog_details"} page={variant} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
