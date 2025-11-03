"use client";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import parse from "html-react-parser";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { MEDIA_URL } from "@/lib/api";

const AboutRecognitionData = {
  title: "Media & Recognition",
  description:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae.</p>",
  item_recognition: [
    {
      media: {
        type: "image",
        path: "/images/about-recognition-1.jpg",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/about-recognition-2.jpg",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/about-recognition-1.jpg",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/about-recognition-2.jpg",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/about-recognition-1.jpg",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/about-recognition-2.jpg",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/about-recognition-1.jpg",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/about-recognition-2.jpg",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/about-recognition-1.jpg",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/about-recognition-2.jpg",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/about-recognition-1.jpg",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/about-recognition-2.jpg",
        alt: "partners",
      },
    },
  ],
};

export default function AboutRecognitionSection({
  data = AboutRecognitionData,
  title,
  description,
  list,
}) {
  return (
    <section className="w-full h-auto block py-[40px] sm:py-[60px] xl:py-[100px] 2xl:py-[140px] bg-[#fafafa]">
      <div className="container">
        <div className="flex flex-wrap mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px] max-sm:flex-col">
          <div className="flex-1 max-sm:mb-[15px]">
            <Heading
              as="h2"
              size="heading2"
              className="text-[#030303] max-sm:text-center"
            >
              {title}
            </Heading>
          </div>
          <div className="w-[80%] sm:w-[300px] md:w-[368px] xl:w-[420px] 2xl:w-[576px] 3xl:w-[640px] max-sm:mx-auto max-sm:text-center">
            <Text as="div" size="text2" className="text-[#373737]">
              {parse(description)}
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
        {list?.map((item, index) => {
          return (
            <SwiperSlide
              key={"value" + index}
              className="max-w-[276px] sm:max-w-[468px] xl:max-w-[576px] 2xl:max-w-[768px] 3xl:max-w-[960px]"
            >
              <div className="group w-full aspect-[960/540] rounded-[20px] xl:rounded-[25px] overflow-hidden">
                <Image
                  src={`${MEDIA_URL}${item?.thumbnail?.media_path}`}
                  alt={item?.thumbnail?.media_alt}
                  width={960}
                  height={540}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
