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

const heroData = {
  item_banner: [
    {
      media: {
        mobile: {
          type: "image",
          path: "/images/hero-banner-1.jpg",
          alt: "hero",
        },
        desktop: {
          type: "image",
          path: "/images/hero-banner-1.jpg",
          alt: "hero",
        },
      },
      title: "Powering Your Journey with Lightning Charging Nationwide",
      description: "Nationwide network of ultra-fast EV chargers with 99.9% uptime. Sustainable energy, seamless experience.",
      description: "Nationwide network of ultra-fast EV chargers with 99.9% uptime. Sustainable energy, seamless experience.",
      button: [
        {
          type: "primary",
          label: "Learn more",
          link: "/",
        },
        {
          type: "secondary",
          label: "Find Nearest Station",
          link: "/",
        },
      ],
    },
    {
      media: {
        mobile: {
          type: "image",
          path: "/images/hero-banner-1.jpg",
          alt: "hero",
        },
        desktop: {
          type: "image",
          path: "/images/hero-banner-1.jpg",
          alt: "hero",
        },
      },
      title: "Powering Your Journey with Lightning Charging Nationwide 22",
      description: "Nationwide network of ultra-fast EV chargers with 99.9% uptime. Sustainable energy, seamless experience.",
      button: [
        {
          type: "primary",
          label: "Learn more",
          link: "/",
        },
        {
          type: "secondary",
          label: "Find Nearest Station",
          link: "/",
        },
      ],
    },
  ],
};

export default function HeroSection({ data = heroData }) {
  const swiperRef = useRef(null);

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
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
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
        onSlideChange={() => {
          setTimeout(() => {
            const bullets = document.querySelectorAll(".custom-pagination .swiper-pagination-bullet .progress-bar");
            bullets.forEach((bar) => {
              bar.classList.remove("progress-active");
              bar.style.width = "0%";
            });
            const activeBullet = document.querySelector(".custom-pagination .swiper-pagination-bullet-active .progress-bar");
            if (activeBullet) {
              activeBullet.classList.add("progress-active");
            }
          }, 50);
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setTimeout(() => {
            const firstBullet = document.querySelector(".custom-pagination .swiper-pagination-bullet-active .progress-bar");
            if (firstBullet) {
              firstBullet.classList.add("progress-active");
            }
          }, 100);
        }}
      >
        {data?.item_banner?.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src="/images/hero-overlay.png"
              alt="overlay"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
              className="-z-1 pointer-events-none"
              quality={40}
            />
            {item?.media?.type === "video" ? (
              <video autoPlay loop muted playsInline className="w-full h-full object-cover absolute -z-2 inset-0">
                <source src={item?.media?.path} type="video/mp4" />
              </video>
            ) : (
              <picture className="absolute -z-2 inset-0">
                <source media="(max-width: 640px)" srcSet={item?.media?.mobile?.path} />
                <Image
                  src={item?.media?.desktop?.path}
                  alt={item?.media?.desktop?.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
                  className="-z-2"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"
                  priority={index === 0}
                />
              </picture>
            )}
            <div className="container">
              <div className="w-full min-h-screen flex items-center py-[calc(40px+var(--header-y))_40px] sm:py-[calc(60px+var(--header-y))_60px] xl:py-[calc(100px+var(--header-y))_100px] 2xl:py-[calc(120px+var(--header-y))_120px] xl:max-w-[720px] 2xl:max-w-[768px] 3xl:max-w-[1080px]">
                <div>
                  <Heading
                    as="h1"
                    size="heading1"
                    className="line-clamp-2 text-transparent bg-linear-to-r from-[#999] via-50% via-white to-white bg-clip-text mb-[15px] xl:mb-[20px] 2xl:mb-[40px]"
                  >
                    {item?.title}
                  </Heading>
                  <Text as="div" size="text1" className="line-clamp-2 text-white max-w-[80%] mb-[15px] xl:mb-[20px] 2xl:mb-[40px]">
                    {item?.description}
                  </Text>
                  <div className="flex space-x-[10px] xl:space-x-[15px]">
                    {item?.button?.map((buttonItem, index) =>
                      buttonItem?.type === "primary" ? (
                        <ActionButton key={index} size={"lg"} className="max-w-[120px] xl:max-w-[145px] 2xl:max-w-[160px]" asChild>
                          <Link href={buttonItem?.link}>{buttonItem?.label}</Link>
                        </ActionButton>
                      ) : (
                        <ActionButton
                          key={index}
                          size={"lg"}
                          className="text-black bg-white max-w-[180px] xl:max-w-[200px] 2xl:max-w-[220px]"
                          asChild
                        >
                          <Link href={buttonItem?.link}>{buttonItem?.label}</Link>
                        </ActionButton>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-[20px] xl:w-[25px] 2xl:w-[30px] aspect-[6/11] mx-auto absolute z-2 bottom-[20px] xl:bottom-[40px] 2xl:bottom-[60px] left-0 right-0">
        <Image src={"/images/hero-scroll-bottom.gif"} alt="scroll-bottom" width={30} height={60} unoptimized />
      </div>
      <div className="container absolute z-2 bottom-[100px] sm:bottom-[40px] xl:bottom-[60px] 2xl:bottom-[80px] 3xl:bottom-[100px] left-0 right-0">
        <div className="custom-pagination" />
      </div>
    </section>
  );
}
