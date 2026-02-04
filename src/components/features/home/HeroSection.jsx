"use client";
import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import { EffectCreative, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";

import { motion } from "motion/react";

import { cn, generateMediaUrl } from "@/lib/utils";
import { useLoading } from "@/context/LoadingContext";

const titleVariants = {
  initial: {
    opacity: 0,
    y: -40,
    scale: 0.9,
    rotateX: -15,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function HeroSection({ heroBanner = heroData }) {
  const swiperRef = useRef(null);
  const { isLoadingComplete } = useLoading();

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes progressFill {
        from { width: 0%; }
        to { width: 100%; }
      }
      .progress-active {
        animation: progressFill 5s linear forwards;
      }
      /* Override default Swiper pagination styles */
      .custom-pagination .swiper-pagination-bullet {
        width: 40px !important;
        height: 4px !important;
        background: rgba(255, 255, 255, 0.1) !important;
        border-radius: 2px !important;
        position: relative !important;
        cursor: pointer !important;
        overflow: hidden !important;
        transition: all 0.3s ease !important;
        opacity: 1 !important;
        margin: 0 4px !important;
      }
      .custom-pagination .swiper-pagination-bullet:hover {
        background: rgba(255, 255, 255, 0.2) !important;
      }
      .custom-pagination .swiper-pagination-bullet-active {
        background: rgba(255, 255, 255, 0.2) !important;
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.2) !important;
      }
      .custom-pagination .swiper-pagination-bullet .progress-bar {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background: #ffffff;
        width: 0%;
        border-radius: 2px;
        transition: width 0.1s ease;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);



  // Start autoplay after loading animation completes
  useEffect(() => {
    if (isLoadingComplete && swiperRef.current) {
      const swiper = swiperRef.current;
      // Configure autoplay parameters
      swiper.params.autoplay = {
        delay: 5000,
        disableOnInteraction: false,
      };
      // Start autoplay
      swiper.autoplay.start();
      // Trigger the first progress bar animation
      const firstBullet = document.querySelector(
        ".custom-pagination .swiper-pagination-bullet-active .progress-bar"
      );
      if (firstBullet) {
        firstBullet.classList.add("progress-active");
      }
    }
  }, [isLoadingComplete]);

  return (
    <section className="w-full h-auto block bg-black relative z-0">
      <Swiper
        loop={true}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: false,
            // translate: [0, 0, -400],
            // shadow: true,
            translate: [0, 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={false}
        speed={1000}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}">
              <span class="progress-bar"></span>
            </span>`,
        }}
        modules={[EffectCreative, Pagination, Autoplay]}
        onSlideChange={(swiper) => {
          // Only animate progress bar if autoplay is running (loading complete)
          if (!swiper.autoplay.running) return;

          setTimeout(() => {
            const bullets = document.querySelectorAll(
              ".custom-pagination .swiper-pagination-bullet .progress-bar"
            );
            bullets.forEach((bar) => {
              bar.classList.remove("progress-active");
              bar.style.width = "0%";
            });
            const activeBullet = document.querySelector(
              ".custom-pagination .swiper-pagination-bullet-active .progress-bar"
            );
            if (activeBullet) {
              activeBullet.classList.add("progress-active");
            }
          }, 50);
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {heroBanner?.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src="/images/hero-overlay.webp"
              alt="overlay"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
              className="-z-1 pointer-events-none"
              // quality={40}
            />
            {item?.media?.desktop?.media_type === "video" ? (
              <>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover absolute -z-2 inset-0 block sm:hidden"
                >
                  <source
                    src={generateMediaUrl(item?.media?.mobile?.media_path)}
                    type="video/mp4"
                  />
                </video>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover absolute -z-2 inset-0 hidden sm:block"
                >
                  <source
                    src={generateMediaUrl(item?.media?.desktop?.media_path)}
                    type="video/mp4"
                  />
                </video>
              </>
            ) : (
              <picture className="absolute -z-2 inset-0">
                <source
                  media="(max-width: 640px)"
                  srcSet={generateMediaUrl(item?.media?.mobile?.media_path)}
                />
                <Image
                  src={
                    generateMediaUrl(item?.media?.desktop?.media_path) ||
                    "/images/placeholder.jpg"
                  }
                  alt={item?.media?.desktop?.media_alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  className="-z-2 object-cover"
                  priority={index === 0}
                />
              </picture>
            )}
            <div className="container">
              <div className="w-full h-[520px] sm:h-[576px] xl:h-screen min-h-[520px] sm:min-h-[468px] xl:min-h-[576px] 2xl:min-h-[768px] 3xl:min-h-[900px] flex items-center py-[calc(40px+var(--header-y))_40px] sm:py-[calc(60px+var(--header-y))_60px] xl:py-[calc(100px+var(--header-y))_100px] 2xl:py-[calc(120px+var(--header-y))_120px] xl:max-w-[720px] 2xl:max-w-[768px] 3xl:max-w-[1080px]">
                <div>
                  <Heading
                    as="h2"
                    size="heading1"
                    className="line-clamp-2 text-transparent bg-linear-to-r from-[#999] via-50% via-white to-white bg-clip-text mb-[15px] xl:mb-[20px] 2xl:mb-[40px]"
                  >
                    {item?.title}
                  </Heading>
                  <Text
                    as="div"
                    size="text1"
                    className="line-clamp-2 text-white max-w-[80%] mb-[15px] xl:mb-[20px] 2xl:mb-[40px]"
                  >
                    {item?.description}
                  </Text>
                  <div className="flex flex-wrap space-x-[10px] xl:space-x-[15px] gap-y-2">
                    {item?.button?.map((buttonItem, index) =>
                      buttonItem?.type === "primary" ? (
                        <div key={"cta-" + index}>
                          <ActionButton
                            size={"lg"}
                            className={cn(
                              "min-w-[150px] sm:min-w-[120px] xl:min-w-[170px] 2xl:min-w-[180px] ",
                              "not-hover:[&_.notHover]:scale-100 not-hover:[&_.isHover]:scale-0",
                              "hover:[&_.notHover]:scale-0 hover:[&_.isHover]:scale-100"
                            )}
                            asChild
                          >
                            <Link href={buttonItem?.link}>
                              {buttonItem?.text}

                              <span className="w-6 xl:w-8 aspect-4/2 relative z-0">
                                <Image
                                  src="/images/icon-btn-arrow-light.svg"
                                  alt="icon-btn-arrow-light"
                                  width={41}
                                  height={23}
                                  className="max-w-[75%] block notHover transition duration-600 absolute z-0 inset-0 m-auto ml-0"
                                />
                                <Image
                                  src="/images/icon-btn-arrow-hover.svg"
                                  alt="icon-btn-arrow-hover"
                                  width={41}
                                  height={23}
                                  className="block isHover transition duration-600 absolute z-0 inset-0 m-auto"
                                />
                              </span>
                            </Link>
                          </ActionButton>
                        </div>
                      ) : (
                        <div key={"secondary-cta-" + index}>
                          <ActionButton
                            size={"lg"}
                            className={cn(
                              "text-black bg-white min-w-[160px] sm:min-w-[160px] xl:min-w-[190px] 2xl:min-w-[220px]",
                              "hover:text-white",
                              "not-hover:[&_.notHover]:scale-100 not-hover:[&_.isHover]:scale-0",
                              "hover:[&_.notHover]:scale-0 hover:[&_.isHover]:scale-100"
                            )}
                            asChild
                          >
                            <Link href={buttonItem?.link}>
                              {buttonItem?.text}

                              <span className="w-6 xl:w-8 aspect-4/2 relative z-0">
                                <Image
                                  src="/images/icon-btn-arrow-dark.svg"
                                  alt="icon-btn-arrow-dark"
                                  width={41}
                                  height={23}
                                  className="max-w-[75%] block notHover transition duration-600 absolute z-0 inset-0 m-auto ml-0"
                                />
                                <Image
                                  src="/images/icon-btn-arrow-hover.svg"
                                  alt="icon-btn-arrow-hover"
                                  width={41}
                                  height={23}
                                  className="block isHover transition duration-600 absolute z-0 inset-0 m-auto"
                                />
                              </span>
                            </Link>
                          </ActionButton>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link
        href={"#AboutInfo"}
        className="text-[9px] leading-none font-normal text-center text-white/50 flex flex-col gap-1 xl:gap-2 absolute z-2 bottom-[20px] xl:bottom-[40px] 2xl:bottom-[60px] left-0 right-0"
      >
        <span>SCROLL</span>
        <span className="w-7 h-7 border border-white/50 rounded-full flex justify-center items-center overflow-hidden mx-auto">
          <motion.svg
            initial={{ y: -30 }}
            animate={{ y: [-30, 20] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            width="5"
            height="14"
            viewBox="0 0 5 14"
            fill="none"
            className={"mx-auto block"}
          >
            <path
              d="M2.16504 13.5L4.3301 9.75H-2.4447e-05L2.16504 13.5ZM2.16504 0H1.79004V10.125H2.16504H2.54004V0H2.16504Z"
              fill="white"
              fillOpacity="0.5"
            />
          </motion.svg>
        </span>
      </Link>
      <div className="container absolute z-2 bottom-[100px] sm:bottom-[40px] xl:bottom-[60px] 2xl:bottom-[80px] 3xl:bottom-[100px] left-0 right-0">
        <div className="custom-pagination" />
      </div>
    </section>
  );
}
