"use client";

import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Suspense } from "react";
import MarketSizeChart from "@/components/common/MarketSizeChart";

const ourValues = {
  title: "See how Nepal EV Industry is booming",
  description: `<p>Nepal has experienced an explosive growth in its electric vehicle (EV) industry, with EVs now making up a large majority of new car sales, driven by favorable government policies, cheap </P>
<br/>
<p>Chinese vehicle imports. After a fuel crisis in 2015, Nepal significantly reduced import tariffs and offered favorable financing, making EVs much cheaper than their petrol-powered counterparts. </p>`,
  value_title: "Our Values",
  value_description:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae.</p>",

  list: [
    {
      title: "Future Focused",
      description:
        "We unite today for a sustainable future, aligning our strategies with future needs and ensuring efficiency in all operations.",
    },
    {
      title: "Honesty & Transparency",
      description:
        "<p>We prioritise honesty & transparency in our collaborations to foster collective power and maintain smooth operations.</p>",
    },
    {
      title: "Collaborative Power",
      description:
        "<p>We harness the collective power of our associates to drive innovation and innovation to drive transformation.</p>",
    },
    {
      title: "Innovative Way of Thinking",
      description:
        "Lorem ipsum dolor sit amet consectetur. In risus sit non aliquet.",
    },
    {
      title: "Honesty & Transparency",
      description:
        "<p>We prioritise honesty & transparency in our collaborations to foster collective power and maintain smooth operations.</p>",
    },
    {
      title: "Collaborative Power",
      description:
        "<p>We harness the collective power of our associates to drive innovation and innovation to drive transformation.</p>",
    },
  ],

  tag_desription:
    "Electric Vehicle Charging Infrastructure Market Size, 2021 to 2030 (in USD Billion)",
};

export default function IndustySection({ data = ourValues }) {
  const sanitizedText = DOMPurify.sanitize(data.description);

  return (
    <section className="w-full h-auto block py-[40px] sm:py-[60px] xl:py-[100px] 2xl:py-[140px] bg-[#0048bf] relative z-0">
      <Image
        src="/images/about-value-bg.svg"
        alt="about-value-bg"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
        className="-z-1 object-cover"
      />
      <div className="w-full mb-[60px] sm:mb-[60px] xl:mb-[100px] 2xl:mb-[140px]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between mx-[-4px] xl:mx-[-6px] 2xl:mx-[-12px] [&>*]:px-[4px] xl:[&>*]:px-[6px] 2xl:[&>*]:px-[12px] mb-[120px]">
            <div className="w-full sm:w-1/2 sm:max-w-[376px] xl:max-w-[478px] 2xl:max-w-[576px] 3xl:max-w-[768px]">
              <Heading
                as="h2"
                size="heading2"
                className="leading-tight font-medium text-white mb-[15px] sm:mb-[100px] xl:mb-[120px] 2xl:mb-[140px] 3xl:mb-[160px]"
              >
                {data.title}
              </Heading>
              <Text as="div" size="text2" className="text-[#ced1d0]">
                {parse(sanitizedText)}
              </Text>
            </div>

            <div className="w-full sm:w-1/2 sm:max-w-[376px] xl:max-w-[478px] 2xl:max-w-[576px] 3xl:max-w-[768px]">
              <div>
                <Suspense fallback={<div>Loading...</div>}>
                  <MarketSizeChart
                    bottomColor={"#0047AB"}
                    topColor={"rgba(255, 255, 255, 0.7)"}
                  />
                </Suspense>
                {/* if media */}
                {/* {data?.media?.type === "video" ? (
                              <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full"
                              >
                                <source src={data?.media?.path} type="video/mp4" />
                              </video>
                            ) : (
                              <Image
                                src={data?.media?.path}
                                alt={data?.media?.alt}
                                width={476}
                                height={268}
                                className="w-full h-full"
                              />
                            )} */}
                <div className="w-full h-auto p-[5px] xl:p-[10px] 2xl:p-[15px] mt-[10px] xl:mt-[15px] 2xl:mt-[20px] bg-white/10 rounded-full border border-white/10">
                  <Text
                    as="p"
                    className="text-[8px] sm:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-tight font-normal text-center text-[#ced1d0]"
                  >
                    {data?.tag_desription}
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px] max-sm:flex-col">
            <div className="flex-1 max-sm:mb-[15px]">
              <Heading
                as="h2"
                size="heading2"
                className="text-white max-sm:text-center"
              >
                {data?.value_title}
              </Heading>
            </div>
            <div className="w-[80%] sm:w-[300px] md:w-[368px] xl:w-[420px] 2xl:w-[576px] 3xl:w-[640px] max-sm:mx-auto max-sm:text-center">
              <Text as="div" size="text2" className="text-[#ced1c0]">
                {parse(data?.value_description)}
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
            {data?.list?.map((item, index) => {
              return (
                <SwiperSlide key={"value" + index} style={{ width: "33.333%" }}>
                  <div className="group w-full h-full min-h-[176px] sm:min-h-[268px] xl:min-h-[376px] 3xl:min-h-[468px] flex flex-col justify-between border border-[#f0f0f0]/20 rounded-[20px] xl:rounded-[25px] overflow-hidden bg-white/4 p-[15px] sm:p-[20px] xl:p-[30px] 2xl:p-[40px] relative z-0 shadow-md backdrop-blur-sm">
                    <Image
                      src="/images/about-value_card-bg.png"
                      alt="about-value-bg"
                      width={139}
                      height={278}
                      className="w-[80px] xl:w-[100px] 2xl:w-[140px] absolute -z-1 top-[40%] right-0 -translate-y-1/2 opacity-5 transition duration-300 group-hover:scale-105 group-hover:opacity-10"
                    />
                    <Heading
                      as="h3"
                      size="heading3"
                      className="font-medium text-white xl:max-w-[60%] mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]"
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
