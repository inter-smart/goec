"use client";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";

import { AnimatePresence, motion } from "motion/react";

import { useRef, useState } from "react";
import { MEDIA_URL } from "@/lib/api";

const aboutGrowthData = [
  {
    media: {
      mobile: {
        type: "image",
        path: "/images/about-growth-1.jpg",
        alt: "about",
      },
      desktop: {
        type: "image",
        path: "/images/about-growth-1.jpg",
        alt: "about",
      },
    },
    title:
      "GO EC started with one charging station in Kerala, sparking an electric revolution.",
    timestamp: "2020-08-14T05:00:00.000000Z",
  },
  {
    media: {
      mobile: {
        type: "image",
        path: "/images/about-growth-2.jpg",
        alt: "about",
      },
      desktop: {
        type: "image",
        path: "/images/about-growth-2.jpg",
        alt: "about",
      },
    },
    title:
      "We're now Kerala's leading EV charging station and expanding across India.",
    timestamp: "2025-08-14T05:00:00.000000Z",
  },
  {
    media: {
      mobile: {
        type: "image",
        path: "/images/about-growth-3.jpg",
        alt: "about",
      },
      desktop: {
        type: "image",
        path: "/images/about-growth-3.jpg",
        alt: "about",
      },
    },
    title:
      "By 2030, GOEC will power every state in India with EV charging stations.",
    timestamp: "2030-08-14T05:00:00.000000Z",
  },
];

export default function AboutGrowthSection({ growthData = aboutGrowthData }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="w-full h-auto block bg-black relative z-0">
      <div className="w-[120px] h-auto absolute z-2 -translate-y-1/2 top-[54%] left-[0.5rem] sm:left-[calc((100%-var(--container-sm))/2)] md:left-[calc((100%-var(--container-md))/2)] lg:left-[calc((100%-var(--container-lg))/2)] xl:left-[calc((100%-var(--container-xl))/2)] 2xl:left-[calc((100%-var(--container-2xl))/2)] 3xl:left-[calc((100%-var(--container-3xl))/2)] [mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)] ">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={0}
          slidesPerView={3}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={false}
          direction={"vertical"}
          className="h-[176px] sm:h-[276px] 2xl:h-[320px]"
        >
          {growthData?.map((item, index) => (
            <SwiperSlide key={"growth" + index}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full h-auto flex relative z-0 pl-3 sm:pl-4"
              >
                <Image
                  src="/images/about_growth-vector-2.svg"
                  alt="about_growth-vector-2"
                  width={10}
                  height={10}
                  className={`w-[8px] sm:w-[10px] aspect-square transition absolute z-0 left-0 top-[1px] sm:top-[2px] xl:top-[7px]
                        ${currentSlide === index ? "opacity-100" : "opacity-0"}
                        `}
                />
                <Image
                  src="/images/about_growth-vector-1.svg"
                  alt="about_growth-vector-1"
                  width={14}
                  height={72}
                  className="w-[10px] sm:w-[16px] h-full object-contain mt-[5px] xl:mt-[10px] mr-[5px] sm:mr-[10px] xl:mr-[20px]"
                />
                <div
                  className={`text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] leading-tight font-semibold text-white cursor-pointer
                        ${currentSlide === index ? "opacity-100" : "opacity-60"}
                        `}
                >
                  {item?.year}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        effect={"fade"}
        modules={[EffectFade, Thumbs, Autoplay]}
        thumbs={{ swiper: thumbsSwiper }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        loop={false}
        spaceBetween={10}
        slidesPerView={1}
        navigation={false}
        speed={600}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        noSwiping={true}
        longSwipes={false}
        className="max-h-[1080px]"
      >
        {growthData?.map((item, index) => (
          <SwiperSlide key={"growth" + index}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${currentSlide}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full min-h-[376px] sm:min-h-[576px] xl:min-h-[640px] 2xl:min-h-[868px] 3xl:min-h-[992px] flex items-center bg-black relative z-0 py-[30px] sm:py-[80px] xl:py-[100px] 2xl:py-[120px]"
              >
              {item?.media?.type === "video" ? (
                  <video
                    autoPlay
                    loop
                    mutedc
                    playsInline
                    className="w-full h-full object-cover absolute -z-2 inset-0"
                  >
                    <source src="/videos/video-medium.mp4" media="(max-width: 640px)" /> 
                    <source src={item?.media?.path} type="video/mp4" />
                  </video>
                ) :
                  <picture className="absolute -z-2 inset-0">
                    <source
                      media="(max-width: 640px)"
                      srcSet={`${MEDIA_URL}${item?.media?.media_path}`}
                    />
                    <Image
                      src={`${MEDIA_URL}${item?.media?.media_path}`}
                      alt={item?.media?.media_alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
                      priority={index === 0}
                      className="-z-2 object-cover"
                      quality={100}
                    />
                  </picture>
                 } 
                <motion.div
                  key={`heading-${currentSlide}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="container px-[80px] sm:px-[120px] xl:px-[180px]"
                >
                  <Heading
                    as="h3"
                    size="heading3"
                    className="text-white max-w-[60%] xl:max-w-[60%] 2xl:max-w-[50%] max-sm:text-[14px]"
                  >
                    {item?.title}
                  </Heading>
                </motion.div>

                <div className="w-full h-full bg-black absolute -z-1 inset-0 [mask-image:linear-gradient(to_bottom,white_0%,transparent_10%,transparent_90%,white_100%)] [-webkit-mask-image:linear-gradient(to_bottom,white_0%,transparent_10%,transparent_90%,white_100%)]" />
              </motion.div>
            </AnimatePresence>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
