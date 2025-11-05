"use client";
import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components/utils/Text";

import NewsCard from "@/components/common/NewsCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { renderHtml } from "@/components/utils/parseHtml";

export default function SimilarBlogSection({ similar_section, footer_section }) {

  console.log("similar_section", similar_section);

  return (
    <section className="w-full h-auto block py-[20px_30px] sm:py-[30px_60px] xl:py-[60px_120px] 2xl:py-[80px_140px]">
      <div className="container">
        <Heading
          as="h2"
          size="heading3"
          className="text-center text-[#303030] mb-[15px] xl:mb-[40px] 2xl:mb-[60px]"
        >{similar_section?.title}
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
          {similar_section?.list?.map((item, index) => {
            return (
              <SwiperSlide key={"blog" + index} style={{ width: "33.333%" }}>
                <NewsCard data={item} variant={"blog"} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="w-full sm:w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto px-2 mt-[20px] sm:mt-[40px] xl:mt-[120px] 2xl:mt-[140px]">
        <div className="w-full h-auto overflow-hidden rounded-[20px] xl:rounded-[30px] p-[20px] sm:p-[40px] xl:p-[60px] 2xl:p-[80px] 3xl:p-[100px] relative z-0">
          <Image
            src={"/images/blogdetail-bg.jpg"}
            alt={"blogdetail"}
            fill
            sizes={"1820px"}
            className="-z-1"
          />
          <div className="flex flex-wrap justify-between items-center gap-[20px] max-sm:flex-col">
            <div className="flex-1">
              <Heading
                as="h2"
                size="heading2"
                className="leading-tight text-white max-sm:text-center mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
              >
                {footer_section?.title}
              </Heading>
              <Text
                as="div"
                size="text1"
                className="text-[#ced1d0] max-sm:text-center max-w-full sm:max-w-[576px] xl:max-w-[720px] 2xl:max-w-[1060px]"
              >
                {renderHtml(footer_section?.description)}
              </Text>
            </div>
            <ActionButton
              size={"lg"}
              className="text-black bg-white max-w-[140px] sm:max-w-[180px] xl:max-w-[200px] 2xl:max-w-[220px]"
              asChild
            >
              <Link href="/contact">
                Get in touch
              </Link>
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
}
