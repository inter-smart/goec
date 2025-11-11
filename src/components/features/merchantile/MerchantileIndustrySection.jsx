"use client";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import parse from "html-react-parser";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const MarketSizeChart = dynamic(
  () => import("@/components/common/MarketSizeChart"),
  { ssr: false }
  
);

const local_data = {
  media: {
    type: "image",
    path: "/images/merchantile-industry-1.svg",
    alt: "merchantile-industry-1",
  },
  title: "See how Nepal EV Industry is booming",
  description:
    "<p>Nepal has experienced an explosive growth in its electric vehicle (EV) industry, with EVs now making up a large majority of new car sales, driven by favorable government policies, cheap.</p><p>Chinese vehicle imports. After a fuel crisis in 2015, Nepal significantly reduced import tariffs and offered favorable financing, making EVs much cheaper than their petrol-powered counterparts.</p>",
  value: {
    title: "Our Values ",
    description:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae.</p>",
    tag_desription:
      "Electric Vehicle Charging Infrastructure Market Size, 2021 to 2030 (in USD Billion)",
    items: [
      {
        media: null,
        title: "Future Focused",
        description:
          "<p>We unite today for a sustainable future, aligning our strategies with future needs and ensuring efficiency in all operations.</p>",
        button: {
          link: "/",
          label: "Learn more",
        },
      },
      {
        media: null,
        title: "Honesty & Transparency",
        description:
          "<p>We prioritise honesty & transparency in our collaborations to foster collective power and maintain smooth operations.</p>",
        button: {
          link: "/",
          label: "Learn more",
        },
      },
      {
        media: null,
        title: "Collaborative Power",
        description:
          "<p>We aim to leverage collaboration and profit sharing by partnering with stakeholders who value teamwork and share a common vision.</p>",
        button: {
          link: "/",
          label: "Learn more",
        },
      },
    ],
  },
};

export default function MerchantileIndustrySection({ data = local_data,our_values }) {
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[40px_60px] xl:py-[80px_120px] 2xl:py-[100px_140px] bg-[#0048bf] overflow-hidden relative z-0">
      <Image
        src="/images/merchantile-industry-bg.png"
        alt="merchantile-industry-bg"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
        className="-z-1 object-cover"
      />
      <div className="container">
        <div className="w-full h-auto mb-[30px] sm:mb-[60px] xl:mb-[120px] 2xl:mb-[140px] max-lg:flex max-lg:flex-col-reverse">
          <div className="w-full max-w-full lg:max-w-[468px] xl:max-w-[440px] 2xl:max-w-[576px] 3xl:max-w-[640px] lg:float-right lg:ml-[13%]">
            <div className="w-full h-full block">
              <Suspense fallback={<div>Loading...</div>}>
                <MarketSizeChart data={data?.chart} bottomColor="#1f52a7" topColor="#aec1e0" />
              </Suspense>
              {/* if media */}
              {/* <Image
                src={data?.media?.path}
                alt={data?.media?.alt}
                width={750}
                height={660}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              /> */}
              <div className="w-full h-auto p-[5px] xl:p-[10px] 2xl:p-[15px] bg-white/10 rounded-full border border-white/10">
                <Text
                  as="p"
                  className="text-[8px] sm:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-tight font-normal text-center text-[#ced1d0]"
                >
                  {data?.summary}
                </Text>
              </div>
            </div>
          </div>
          <div className="typography [--text-color:white] xl:[&_p]:text-[16px] 2xl:[&_p]:text-[18px] max-lg:mb-[10px] ">
            <Heading
              as="h2"
              size="none"
              className="text-[18px] sm:text-[24px] lg:text-[30px] xl:text-[42px] 2xl:text-[50px] 3xl:text-[64px] leading-tight font-medium text-white mb-[20px] sm:mb-[30px] xl:mb-[40px] xl:pt-[40px] 2xl:mb-[60px] 2xl:pt-[60px] max-sm:mt-0"
            >
              {data?.title}
            </Heading>

            {parse(data?.description)}
          </div>
          <div className="clear-both"></div>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px]">
            <div className="flex-1 max-sm:mb-[15px]">
              <Heading
                as="h2"
                size="heading2"
                className="text-white max-sm:text-center"
              >
                {our_values?.title}
              </Heading>
            </div>
            <div className="w-full lg:w-[368px] xl:w-[420px] 2xl:w-[576px] 3xl:w-[640px] max-sm:mx-auto max-sm:text-center">
              <Text as="div" size="text2" className="text-[#ced1c0]">
                {parse(our_values?.description)}
              </Text>
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
            {our_values?.list?.map((item, index) => {
              return (
                <SwiperSlide key={"value" + index} style={{ width: "33.333%" }}>
                  <div className="group w-full h-full min-h-[176px] sm:min-h-[268px] xl:min-h-[350px] 3xl:min-h-[420px] flex flex-col justify-between border border-[#f0f0f0]/20 rounded-[20px] xl:rounded-[25px] overflow-hidden bg-white/4 p-[15px] sm:p-[20px] xl:p-[30px] 2xl:p-[40px] relative z-0 shadow-md backdrop-blur-sm">
                    {/* <Image
                      src="/images/about-value_card-bg.png"
                      alt="about-value-bg"
                      width={139}
                      height={278}
                      className="w-[80px] xl:w-[100px] 2xl:w-[140px] absolute -z-1 top-[40%] right-0 -translate-y-1/2 opacity-5 transition duration-300 group-hover:scale-105 group-hover:opacity-10"
                    /> */}
                    <Heading
                      as="h3"
                      size="heading3"
                      className="font-medium text-white xl:max-w-[60%] mb-[20px] sm:mb-[30px] xl:mb-[40px] 2xl:mb-[60px]"
                    >
                      {item?.title}
                    </Heading>
                    <Text as="div" size={"text2"} className="text-[#ced1d0]">
                      {parse(item?.description)}
                    </Text>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
