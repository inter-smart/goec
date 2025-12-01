"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import { Heading } from "@/components/utils/Heading";
import parse from "html-react-parser";
import Image from "next/image";
import { Text } from "@/components/utils/Text";
import SwiperNavigation from "@/components/common/SwiperNavigation";

const investorSayData = {
  title: "Hear what our current Investors say! ",
  item_investor: [
    {
      description:
        "<p>Investing in GO EC represented a commitment to driving India’s electric future forward. The impressive scalability of their network, coupled with the exceptional execution by their dedicated team, has not only met but significantly surpassed our expectations.</p>",
      author: {
        media: {
          type: null,
          path: "/images/investor-1.jpg",
          alt: "author",
        },
        title: "Stephanie Sharkey",
        description: "CEO, BrightStar Media",
      },
    },
    {
      description:
        "<p>Investing in GO EC represented a commitment to driving India’s electric future forward. The impressive scalability of their network, coupled with the exceptional execution by their dedicated team, has not only met but significantly surpassed our expectations.</p>",
      author: {
        media: {
          type: null,
          path: "/images/investor-1.jpg",
          alt: "author",
        },
        title: "Stephanie Sharkey",
        description: "CEO, BrightStar Media",
      },
    },
    {
      description:
        "<p>Investing in GO EC represented a commitment to driving India’s electric future forward. The impressive scalability of their network, coupled with the exceptional execution by their dedicated team, has not only met but significantly surpassed our expectations.</p>",
      author: {
        media: {
          type: null,
          path: "/images/investor-1.jpg",
          alt: "author",
        },
        title: "Stephanie Sharkey",
        description: "CEO, BrightStar Media",
      },
    },
  ],
};

export default function InvestorSaySection({ data = investorSayData }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);
  return (
    <section className="w-full h-auto block py-[40px] sm:py-[80px] xl:py-[120px] 2xl:py-[140px]">
      <div className="container">
        <div className="flex flex-wrap mx-[-5px] sm:mx-[-10px] xl:mx-[-15px] 2xl:mx-[-20px] [&>*]:px-[5px] sm:[&>*]:px-[10px] xl:[&>*]:px-[15px] 2xl:[&>*]:px-[20px]">
          <div className="w-full sm:w-[calc(100%-420px)] md:w-[calc(100%-540px)] xl:w-[calc(100%-576px)] 2xl:w-[calc(100%-768px)] 3xl:w-[calc(100%-940px)] flex flex-col justify-between">
            <Heading as="h2" size="heading2" className="text-[#030303] max-sm:text-center">
              {data?.title}
            </Heading>

            <div className="mt-[20px] flex justify-center sm:justify-start max-sm:mb-[20px]">
              <SwiperNavigation swiperRef={swiperRef} />
            </div>
          </div>
          <div className="w-full sm:w-[420px] md:w-[540px] xl:w-[576px] 2xl:w-[768px] 3xl:w-[940px]">
            <Swiper
              loop={true}
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: false,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[EffectCreative]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            >
              {data?.item_investor?.map((item, index) => (
                <SwiperSlide key={"investor" + index}>
                  <div className="group w-full h-full block rounded-[20px] xl:rounded-[25px] p-[40px_20px_20px_40px] sm:p-[40px_20px_20px_60px] xl:p-[50px_30px_30px_60px] 2xl:p-[60px_30px_30px_80px] bg-[#fcfcfc] border border-[#f0f0f0] overflow-hidden">
                    <Image
                      src="/images/icon-quote.svg"
                      alt="quote"
                      width={20}
                      height={20}
                      className="w-[15px] xl:w-[20px] 2xl:w-[25px] absolute z-0 top-[20px] xl:top-[30px] 2xl:top-[40px] left-[20px] sm:left-[25px] xl:left-[35px] 2xl:left-[40
                      px]"
                    />
                    <Text
                      as="div"
                      size="text1"
                      className="text-[#373737] mb-[20px] xl:mb-[30px] 2xl:mb-[40px]"
                    >
                      {parse(item?.description)}
                    </Text>
                    <div className="w-full h-auto flex items-center">
                      <div className="w-[40px] md:w-[50px] xl:w-[65px] 2xl:w-[75px] 3xl:w-[100px] h-auto aspect-square rounded-full overflow-hidden relative z-0 bg-white/20">
                        <Image
                          src={item?.author?.media?.path}
                          alt={item?.author?.media?.alt}
                          width={50}
                          height={50}
                          className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                          placeholder="blur"
                          blurDataURL="/images/placeholder.jpg"
                        />
                      </div>
                      <div className="w-[calc(100%-40px)] md:w-[calc(100%-50px)] xl:w-[calc(100%-65px)] 2xl:w-[calc(100%-75px)] 3xl:w-[calc(100%-100px)] pl-[10px] xl:pl-[15px] 2xl:pl-[20px]">
                        <div className="text-[14px] sm:text-[16px] xl:text-[22px] 2xl:text-[26px] 3xl:text-[28px] leading-tight font-normal text-[#030303] mb-[1px] xl:mb-[2px]">
                          {item?.author?.title}
                        </div>
                        <Text as="div" size="text2" className="text-[#373737]">
                          {item?.author?.description}
                        </Text>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
