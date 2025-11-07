// Card Component
"use client";

import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { InvestmentCard } from "./InvestmentCard";
import { Autoplay } from "swiper/modules";
import parse from "html-react-parser";

const investment = {
  title: "Invest in the E V Revolution with GO EC Mercantile.",
  description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae.</p>",
  cards: [
    {
      image: "/images/invest_1.png",
      title: "FOCO",
      subtitle: "Franchise Owned Company Operated",
      description: "For people who want to maximize their returns by owning a charging station.",
      link: "/foco",
    },
    {
      image: "/images/invest_2.png",
      title: "Invest in COCO",
      subtitle: "Franchise Owned Company Operated",
      description: "For people who want to maximize their returns by owning a charging station.",
      link: "/invest-coco",
    },
    {
      image: "/images/invest_3.png",
      title: "COCO",
      subtitle: "Company Owned & Operated",
      description: "For people who want to maximize their returns by owning a charging station.",
      link: "/coco",
    },
    {
      image: "/images/invest_1.png",
      title: "FOCO",
      subtitle: "Franchise Owned Company Operated",
      description: "For people who want to maximize their returns by owning a charging station.",
      link: "/foco",
    },
    {
      image: "/images/invest_2.png",
      title: "Invest in COCO",
      subtitle: "Franchise Owned Company Operated",
      description: "For people who want to maximize their returns by owning a charging station.",
      link: "/invest-coco",
    },
    {
      image: "/images/invest_3.png",
      title: "COCO",
      subtitle: "Company Owned & Operated",
      description: "For people who want to maximize their returns by owning a charging station.",
      link: "/coco",
    },
  ],
};

// Main Investment Section Component
export default function InvestmentSection({ data = investment, cards = investment.cards }) {
  return (
    <section className="w-full h-auto block pt-[40px] sm:pt-[60px] xl:pt-[100px] 2xl:pt-[140px]">
      <div className="container">
        <div className="flex flex-wrap mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px] max-sm:flex-col">
          <div className="flex-1 max-sm:mb-[15px]">
            <Heading as="h2" size="heading2" className="text-[#030303] w-full max-sm:text-center">
              {data.title}
            </Heading>
          </div>
          <div className="w-[80%] sm:w-[300px] md:w-[368px] xl:w-[420px] 2xl:w-[576px] 3xl:w-[640px] max-sm:mx-auto max-sm:text-center">
            <Text as="div" size="text2" className="text-[#373737]">
              {parse(data.description)}
            </Text>
          </div>
        </div>
      </div>

      <Swiper
        loop={true}
        spaceBetween={30}
        slidesPerView={"auto"}
        allowTouchMove={false}
        speed={4000} // Reduced speed for smoother transition
        autoplay={{
          delay: 0, // No delay between slides for continuous motion
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Keeps sliding even on hover
        }}
        modules={[Autoplay]} // Add Autoplay to modules array
        breakpoints={{
          320: {
            // slidesPerView: 1,
            spaceBetween: 10,
          },
          384: {
            // slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            // slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            // slidesPerView: 2,
            spaceBetween: 20,
          },
          1536: {
            // slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {cards?.map((item, index) => {
          return (
            <SwiperSlide key={"value" + index} className="max-w-[276px] sm:max-w-[468px] xl:max-w-[576px] 2xl:max-w-[768px] 3xl:max-w-[960px]">
              <InvestmentCard item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
