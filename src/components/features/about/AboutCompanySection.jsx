"use client";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import parse from "html-react-parser";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const aboutCompanyData = {
  value: {
    title: "Our Values ",
    description:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae.</p>",
    item_value: [
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
  journey: {
    title: "Our Journey ",
    description:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae.</p>",
    item_journey: [
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/about-journey-1.jpg",
          alt: "journey",
        },
        title: "All Starter with a Dream!",
        description:
          "<p>Lorem ipsum dolor sit amet consectetur. Viverra aenean cursus arcu arcu tortor tellus. Accumsan nisl risus consequat ut ornare. Etiam volutpat aliquam.</p>",
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/about-journey-1.jpg",
          alt: "journey",
        },
        title: "All Starter with a Dream!",
        description:
          "<p>Lorem ipsum dolor sit amet consectetur. Viverra aenean cursus arcu arcu tortor tellus. Accumsan nisl risus consequat ut ornare. Etiam volutpat aliquam.</p>",
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/about-journey-2.jpg",
          alt: "journey",
        },
        title: "Lorem ipsum dolor sit amet!",
        description:
          "<p>Lorem ipsum dolor sit amet consectetur. Viverra aenean cursus arcu arcu tortor tellus. Accumsan nisl risus consequat ut ornare. Etiam volutpat aliquam.</p>",
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/about-journey-1.jpg",
          alt: "journey",
        },
        title: "All Starter with a Dream!",
        description:
          "<p>Lorem ipsum dolor sit amet consectetur. Viverra aenean cursus arcu arcu tortor tellus. Accumsan nisl risus consequat ut ornare. Etiam volutpat aliquam.</p>",
      },
    ],
  },
};

export default function AboutCompanySection({ ourValues = aboutCompanyData?.value, ourJourney = aboutCompanyData?.journey }) {
  const valueData = ourValues;
  const journeyData = ourJourney;
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
          <div className="flex flex-wrap mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px] max-sm:flex-col">
            <div className="flex-1 max-sm:mb-[15px]">
              <Heading
                as="h2"
                size="heading2"
                className="text-white max-sm:text-center"
              >
                {valueData?.title}
              </Heading>
            </div>
            <div className="w-[80%] sm:w-[300px] md:w-[368px] xl:w-[420px] 2xl:w-[576px] 3xl:w-[640px] max-sm:mx-auto max-sm:text-center">
              <Text as="div" size="text2" className="text-[#ced1c0]">
                {parse(valueData?.description)}
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
            {valueData?.item_value.map((item, index) => {
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

      <div className="w-full">
        <div className="container">
          <div className="flex flex-wrap mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px] max-sm:flex-col">
            <div className="flex-1 max-sm:mb-[15px]">
              <Heading
                as="h2"
                size="heading2"
                className="text-white max-sm:text-center"
              >
                {journeyData?.title}
              </Heading>
            </div>
            <div className="w-[80%] sm:w-[300px] md:w-[368px] xl:w-[420px] 2xl:w-[576px] 3xl:w-[640px] max-sm:mx-auto max-sm:text-center">
              <Text as="div" size="text2" className="text-[#ced1c0]">
                {parse(journeyData?.description)}
              </Text>
            </div>
          </div>
          <div className="flex flex-wrap mx-[-5px] sm:mx-[-10px] xl:mx-[-15px] 2xl:mx-[-20px] [&>*]:p-[5px] sm:[&>*]:p-[10px] xl:[&>*]:p-[15px] 2xl:[&>*]:p-[20px]">
            {journeyData?.item_journey.map((item, index) => {
              return (
                <div key={"journey" + index} className="w-full 3xs:w-1/2 sm:w-full">
                  <div
                    className={`w-full h-full flex flex-wrap items-center border border-[#f0f0f0]/20 rounded-[20px] xl:rounded-[25px] overflow-hidden bg-white/4 shadow-md backdrop-blur-sm
                    ${index % 2 === 1 && "sm:flex-row-reverse"}
                    `}
                  >
                    <div className="w-full sm:w-[calc(100%-320px)] md:w-[calc(100%-368px)] xl:w-[calc(100%-468px)] 2xl:w-[calc(100%-576px)] 3xl:w-[calc(100%-700px)]">
                      <div className="w-full h-full relative z-0 p-[20px_10px_20px_40px] sm:p-[40px_30px_40px_80px] md:p-[60px_40px_60px_100px] xl:p-[80px_60px_80px_120px] 2xl:p-[100px_80px_100px_160px] flex flex-col justify-between">
                        <div
                          className={`text-[8px] sm:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] leading-tight font-normal text-white absolute z-0 top-[20%] sm:top-[28%] left-[10px] sm:left-[30px] xl:left-[40px] 2xl:left-[50px]
                        `}
                        >
                          {item?.timestamp?.slice(0, 4)}
                        </div>
                        <Heading
                          as={"h3"}
                          size={"heading3"}
                          className="font-medium line-clamp-2 text-white mb-[15px] md:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]"
                        >
                          {item?.title}
                        </Heading>
                        <Text
                          as="div"
                          size="text2"
                          className="line-clamp-3 text-[#ced1d0]"
                        >
                          {parse(item?.description)}
                        </Text>
                      </div>
                    </div>
                    <div className="w-full sm:w-[320px] md:w-[368px] xl:w-[468px] 2xl:w-[576px] 3xl:w-[700px]">
                      <div className="w-full h-full xl:h-auto aspect-[4/3] overflow-hidden rounded-[20px] sm:rounded-[30px] relative z-1">
                        <div className="w-full h-full">
                          <Image
                            src={item?.media?.path}
                            alt={item?.media?.alt}
                            width={876}
                            height={676}
                            className="w-full h-full object-cover hover:scale-105 transition"
                            placeholder="blur"
                            blurDataURL="/images/placeholder.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
