"use client";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import parse from "html-react-parser";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
import { cn } from "@/lib/utils";
import { ActionButton } from "@/components/utils/Button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const local_data = {
  title: "Invest in the E V Revolution with GO EC Mercantile.",
  description:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae.</p>",
  item_invest: [
    {
      media: {
        type: "image",
        path: "/images/investment-business_model-1.jpg",
        alt: "investment",
      },
      title: "FOCO",
      sub_title: "Franchise Owned & Company Operated",
      description:
        "<p>Duis cras auctor sit felis quisque nibh sed in. Sed sed lorem auctor non. Diam diam quam quisque ac nulla laoreet ultrices. Faucibus amet cursus natoque cras orci cursus quisque vitae. Ipsum adipiscing sed mauris orci. Eget ut sed placerat tellus semper porttitor malesuada mauris. Interdum aenean pellentesque amet suspendisse lorem.</p>",
      button: {
        link: "/",
        label: "Learn more",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/investment-business_model-2.jpg",
        alt: "investment",
      },
      title: "Invest in COCO",
      sub_title: "Franchise Owned & Company Operated",
      description:
        "<p>Duis cras auctor sit felis quisque nibh sed in. Sed sed lorem auctor non. Diam diam quam quisque ac nulla laoreet ultrices. Faucibus amet cursus natoque cras orci cursus quisque vitae. Ipsum adipiscing sed mauris orci. Eget ut sed placerat tellus semper porttitor malesuada mauris. Interdum aenean pellentesque amet suspendisse lorem.</p>",
      button: {
        link: "/",
        label: "Learn more",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/investment-business_model-3.jpg",
        alt: "investment",
      },
      title: "COCO",
      sub_title: "Franchise Owned & Company Operated",
      description:
        "<p>Duis cras auctor sit felis quisque nibh sed in. Sed sed lorem auctor non. Diam diam quam quisque ac nulla laoreet ultrices. Faucibus amet cursus natoque cras orci cursus quisque vitae. Ipsum adipiscing sed mauris orci. Eget ut sed placerat tellus semper porttitor malesuada mauris. Interdum aenean pellentesque amet suspendisse lorem.</p>",
      button: {
        link: "/",
        label: "Learn more",
      },
    },
  ],
};

export default function MerchantileInvestSection({ data = local_data }) {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);
  return (
    <section className="w-full h-auto block py-[30px_15px] sm:py-[60px_30px] xl:py-[120px_60px] 2xl:py-[140px_80px]">
      <div className="container">
        <div className="flex flex-wrap items-center gap-[15px] xl:gap-[60px] 2xl:gap-[80px] mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] max-sm:flex-col">
          <div className="flex-1 max-sm:mb-[15px]">
            <Heading
              as="h2"
              size="heading2"
              className="text-[#030303] max-sm:text-center"
            >
              {parse(data?.title)}
            </Heading>
          </div>
          <div className="w-[80%] sm:w-[300px] md:w-[368px] xl:w-[420px] 2xl:w-[576px] 3xl:w-[640px] max-sm:mx-auto max-sm:text-center">
            <Text as="div" size="text2" className="text-[#373737]">
              {parse(data?.description)}
            </Text>
          </div>
        </div>
      </div>

      <div className="w-full pl-4 lg:max-w-[calc(var(--container-lg)/2+50%)] xl:max-w-[calc(var(--container-xl)/2+50%)] 2xl:max-w-[calc(var(--container-2xl)/2+50%)] 3xl:max-w-[calc(var(--container-3xl)/2+50%)] ml-auto [mask-image:linear-gradient(to_right,black_0%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_90%,transparent_100%)]">
        {/* <Swiper
          loop
          spaceBetween={30}
          slidesPerView={4}
          navigation={false}
          speed={600}
          watchSlidesProgress={true}
          watchOverflow={false}
          autoplay={false}
          draggable={true}
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
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
          }}
        >
          {data?.item_invest?.map((item, index) => {
            const [isHover, setIsHover] = useState(false);
            return (
              <SwiperSlide key={"value" + index} style={{ width: "33.333%" }}>
                <div className="w-full h-auto block rounded-[20px] sm:rounded-[30px] bg-[#fcfcfc] border border-[#f0f0f0]">
                  <div
                    className={cn(
                      "w-full h-auto block aspect-[46/30] rounded-[20px] overflow-hidden relative z-0"
                    )}
                  >
                    <Image
                      src={item?.media?.path || "/images/placeholder.jpg"}
                      alt={item?.media?.alt}
                      fill
                      sizes="700px"
                      className="w-full h-full object-cover transition hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-[15px] sm:p-[20px] xl:p-[25px] 2xl:p-[40px]">
                    <div>
                      <Heading
                        as="div"
                        size="heading3"
                        className="font-semibold text-[#191a19] mb-[2px]"
                      >
                        {item?.title}
                      </Heading>
                      <Text
                        as="div"
                        size="text2"
                        className="line-clamp-1 text-[#757575] mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                      >
                        {item?.sub_title}
                      </Text>
                      <Text
                        as="div"
                        size="text2"
                        className="line-clamp-2 text-[#373737] mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                      >
                        {parse(item?.description)}
                      </Text>
                      <div>
                        <ActionButton
                          onMouseEnter={() => setIsHover(true)}
                          onMouseLeave={() => setIsHover(false)}
                          size={"lg"}
                          variant={"blue"}
                          className={cn(
                            "transition-all duration-500 ease-in-out overflow-hidden",
                            " ",
                            isHover
                              ? "text-white max-w-[140px] sm:max-w-[150px] xl:max-w-[160px] 2xl:max-w-[240px] px-0"
                              : "text-black max-w-[110px] bg-none"
                          )}
                          asChild
                        >
                          <Link href={item?.button?.link}>
                            {item?.button?.label}
                            <svg
                              width="55"
                              height="31"
                              viewBox="0 0 55 31"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className={cn(
                                "size-[15px] xl:size-[30px] 3xl:size-[40px] transition-all duration-500 ease-in-out"
                              )}
                            >
                              <path
                                d="M42.6667 15.332L36 11.483V19.181L42.6667 15.332ZM0 15.332L0 15.9987L36.6667 15.9987V15.332V14.6654L0 14.6654L0 15.332Z"
                                fill={isHover ? "white" : "black"}
                              />
                              <mask
                                id="path-2-inside-1_3026_25027"
                                fill={isHover ? "white" : "black"}
                              >
                                <path d="M24.4924 11.4789C25.4273 7.87914 27.6387 4.74188 30.7148 2.6514C33.7909 0.560913 37.5219 -0.340281 41.213 0.115651C44.9042 0.571583 48.3038 2.35356 50.7787 5.12971C53.2537 7.90586 54.6353 11.4869 54.6661 15.206C54.697 18.9251 53.3751 22.5286 50.9466 25.3455C48.5181 28.1623 45.1486 30.0005 41.4655 30.5177C37.7825 31.0349 34.037 30.1958 30.9266 28.1567C27.8162 26.1176 25.553 23.0175 24.5584 19.4337L25.8811 19.0666C26.7867 22.3296 28.8473 25.1521 31.6792 27.0087C34.5111 28.8652 37.9213 29.6292 41.2746 29.1584C44.628 28.6875 47.6959 27.0138 49.907 24.4491C52.1181 21.8844 53.3216 18.6035 53.2935 15.2174C53.2654 11.8313 52.0075 8.57079 49.7541 6.04317C47.5007 3.51554 44.4055 1.8931 41.0448 1.47798C37.6841 1.06287 34.287 1.88338 31.4863 3.78672C28.6856 5.69006 26.6722 8.54646 25.821 11.824L24.4924 11.4789Z" />
                              </mask>
                              <path
                                d="M24.4924 11.4789C25.4273 7.87914 27.6387 4.74188 30.7148 2.6514C33.7909 0.560913 37.5219 -0.340281 41.213 0.115651C44.9042 0.571583 48.3038 2.35356 50.7787 5.12971C53.2537 7.90586 54.6353 11.4869 54.6661 15.206C54.697 18.9251 53.3751 22.5286 50.9466 25.3455C48.5181 28.1623 45.1486 30.0005 41.4655 30.5177C37.7825 31.0349 34.037 30.1958 30.9266 28.1567C27.8162 26.1176 25.553 23.0175 24.5584 19.4337L25.8811 19.0666C26.7867 22.3296 28.8473 25.1521 31.6792 27.0087C34.5111 28.8652 37.9213 29.6292 41.2746 29.1584C44.628 28.6875 47.6959 27.0138 49.907 24.4491C52.1181 21.8844 53.3216 18.6035 53.2935 15.2174C53.2654 11.8313 52.0075 8.57079 49.7541 6.04317C47.5007 3.51554 44.4055 1.8931 41.0448 1.47798C37.6841 1.06287 34.287 1.88338 31.4863 3.78672C28.6856 5.69006 26.6722 8.54646 25.821 11.824L24.4924 11.4789Z"
                                fill="#D9D9D9"
                                stroke="white"
                                strokeWidth="2.66667"
                                mask="url(#path-2-inside-1_3026_25027)"
                                className={cn(
                                  "transition-all duration-500 ease-in-out origin-center",
                                  isHover ? "scale-105" : "scale-0"
                                )}
                              />
                            </svg>
                          </Link>
                        </ActionButton>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper> */}

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex mx-[-5px] sm:mx-[-8px] lg:mx-[-10px] 2xl:mx-[-15px]">
            {data?.item_invest?.map((item, index) => {
              const [isHover, setIsHover] = useState(false);
              return (
                <div
                  key={"value" + index}
                  className="flex-[0_0_100%] sm:flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_35%] 3xl:flex-[0_0_40%] px-[5px] sm:px-[8px] lg:px-[10px] 2xl:px-[15px]"
                >
                  <div className="w-full h-auto block rounded-[20px] sm:rounded-[30px] bg-[#fcfcfc] border border-[#f0f0f0]">
                    <div
                      className={cn(
                        "w-full h-auto block aspect-[46/30] rounded-[20px] overflow-hidden relative z-0"
                      )}
                    >
                      <Image
                        src={item?.media?.path || "/images/placeholder.jpg"}
                        alt={item?.media?.alt}
                        fill
                        sizes="700px"
                        className="w-full h-full object-cover transition hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-between p-[15px] sm:p-[20px] xl:p-[25px] 2xl:p-[40px]">
                      <div>
                        <Heading
                          as="div"
                          size="heading3"
                          className="font-semibold text-[#191a19] mb-[2px]"
                        >
                          {item?.title}
                        </Heading>
                        <Text
                          as="div"
                          size="text2"
                          className="line-clamp-1 text-[#757575] mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                        >
                          {item?.sub_title}
                        </Text>
                        <Text
                          as="div"
                          size="text2"
                          className="line-clamp-2 text-[#373737] mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                        >
                          {parse(item?.description)}
                        </Text>
                        <div>
                          <ActionButton
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                            size={"lg"}
                            variant={"blue"}
                            className={cn(
                              "transition-all duration-500 ease-in-out overflow-hidden",
                              " ",
                              isHover
                                ? "text-white max-w-[140px] sm:max-w-[150px] xl:max-w-[160px] 2xl:max-w-[240px] px-0"
                                : "text-black max-w-[110px] bg-none"
                            )}
                            asChild
                          >
                            <Link href={item?.button?.link}>
                              {item?.button?.label}
                              <svg
                                width="55"
                                height="31"
                                viewBox="0 0 55 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={cn(
                                  "size-[15px] xl:size-[30px] 3xl:size-[40px] transition-all duration-500 ease-in-out"
                                )}
                              >
                                <path
                                  d="M42.6667 15.332L36 11.483V19.181L42.6667 15.332ZM0 15.332L0 15.9987L36.6667 15.9987V15.332V14.6654L0 14.6654L0 15.332Z"
                                  fill={isHover ? "white" : "black"}
                                />
                                <mask
                                  id="path-2-inside-1_3026_25027"
                                  fill={isHover ? "white" : "black"}
                                >
                                  <path d="M24.4924 11.4789C25.4273 7.87914 27.6387 4.74188 30.7148 2.6514C33.7909 0.560913 37.5219 -0.340281 41.213 0.115651C44.9042 0.571583 48.3038 2.35356 50.7787 5.12971C53.2537 7.90586 54.6353 11.4869 54.6661 15.206C54.697 18.9251 53.3751 22.5286 50.9466 25.3455C48.5181 28.1623 45.1486 30.0005 41.4655 30.5177C37.7825 31.0349 34.037 30.1958 30.9266 28.1567C27.8162 26.1176 25.553 23.0175 24.5584 19.4337L25.8811 19.0666C26.7867 22.3296 28.8473 25.1521 31.6792 27.0087C34.5111 28.8652 37.9213 29.6292 41.2746 29.1584C44.628 28.6875 47.6959 27.0138 49.907 24.4491C52.1181 21.8844 53.3216 18.6035 53.2935 15.2174C53.2654 11.8313 52.0075 8.57079 49.7541 6.04317C47.5007 3.51554 44.4055 1.8931 41.0448 1.47798C37.6841 1.06287 34.287 1.88338 31.4863 3.78672C28.6856 5.69006 26.6722 8.54646 25.821 11.824L24.4924 11.4789Z" />
                                </mask>
                                <path
                                  d="M24.4924 11.4789C25.4273 7.87914 27.6387 4.74188 30.7148 2.6514C33.7909 0.560913 37.5219 -0.340281 41.213 0.115651C44.9042 0.571583 48.3038 2.35356 50.7787 5.12971C53.2537 7.90586 54.6353 11.4869 54.6661 15.206C54.697 18.9251 53.3751 22.5286 50.9466 25.3455C48.5181 28.1623 45.1486 30.0005 41.4655 30.5177C37.7825 31.0349 34.037 30.1958 30.9266 28.1567C27.8162 26.1176 25.553 23.0175 24.5584 19.4337L25.8811 19.0666C26.7867 22.3296 28.8473 25.1521 31.6792 27.0087C34.5111 28.8652 37.9213 29.6292 41.2746 29.1584C44.628 28.6875 47.6959 27.0138 49.907 24.4491C52.1181 21.8844 53.3216 18.6035 53.2935 15.2174C53.2654 11.8313 52.0075 8.57079 49.7541 6.04317C47.5007 3.51554 44.4055 1.8931 41.0448 1.47798C37.6841 1.06287 34.287 1.88338 31.4863 3.78672C28.6856 5.69006 26.6722 8.54646 25.821 11.824L24.4924 11.4789Z"
                                  fill="#D9D9D9"
                                  stroke="white"
                                  strokeWidth="2.66667"
                                  mask="url(#path-2-inside-1_3026_25027)"
                                  className={cn(
                                    "transition-all duration-500 ease-in-out origin-center",
                                    isHover ? "scale-105" : "scale-0"
                                  )}
                                />
                              </svg>
                            </Link>
                          </ActionButton>
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
