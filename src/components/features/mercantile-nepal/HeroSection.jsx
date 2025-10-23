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
import { MEDIA_URL } from "@/lib/api";

const heroBanner = {
  media_logo: "/images/napal_banner_logo.png",
  banner_super_title: "GO EC Mercantile. Nepal",
  title: "Charge into the future with GO EC Mercantile",
  media_type: "video",
  media_path: "videos/hero-banner.mp4",
  media_alt: "hero wqe",
  buttons: [
    {
      text: "Invest in GO EC Mercantile",
      link: "/",
      type: "primary",
    },
    {
      text: "Get a free consulation",
      link: "/contact",
      type: "secondary",
    },
  ],
};

export default function HeroSection() {
  const swiperRef = useRef(null);

  const type = "video";
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
      <div>
        {type === "video" ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover absolute -z-2 inset-0"
          >
            <source src="/videos/electric_vehicle.mp4" type="video/mp4" />
          </video>
        ) : (
          <picture className="absolute -z-2 inset-0">
            <source
              media="(max-width: 640px)"
              srcSet="/images/hero-banner-1.jpg"
            />
            <Image
              src="/images/hero-banner-1.jpg"
              alt={heroBanner?.media_alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
              className="-z-2"
            />
          </picture>
        )}

        <div className="w-full h-full bg-black/40 absolute left-0 -z-1 right-0" />

        <div className="container z-10">
          <div className="w-full h-screen flex items-center py-[calc(40px+var(--header-y))_40px] sm:py-[calc(60px+var(--header-y))_60px] xl:py-[calc(100px+var(--header-y))_100px] 2xl:py-[calc(120px+var(--header-y))_120px] relative z-0">
            <div>
              <div className="flex items-center gap-3">
                <div className=" bg-white flex items-center justify-center rounded-[8px]">
                  <Image
                    src={heroBanner?.media_logo}
                    alt="GO EC Mercantile Nepal"
                    width={40}
                    height={30}
                    className="object-contain w-full h-full"
                  />
                </div>
                <Heading
                  size="heading4"
                  as={"h4"}
                  className="text-transparent bg-linear-to-r from-white via-50% via-white to-white/40 bg-clip-text font-medium"
                >
                  {heroBanner?.banner_super_title}
                </Heading>
              </div>

              <Heading
                as="h1"
                size="heading1"
                className="font-medium w-full xs:max-w-[55%] text-transparent bg-linear-to-r from-white via-50% via-white to-white/40 bg-clip-text my-[30px] lg:my-[40px_23px] xl:my-[50px_30px] 2xl:my-[56px_32px]  3xl:my-[75px_43px]"
              >
                {heroBanner?.title}
              </Heading>

              <div className="flex flex-col space-y-[10px] xl:space-y-[15px] xs:flex-row space-x-[10px] xl:space-x-[15px]">
                {heroBanner?.buttons?.map((buttonItem, index) =>
                  buttonItem?.type === "primary" ? (
                    <ActionButton
                      key={index}
                      size={"lg"}
                      className="bg-white text-[#151515] w-full xs:max-w-[180px] xl:max-w-[200px] 2xl:min-w-[280px]"
                      asChild
                    >
                      <Link href={buttonItem?.link}>{buttonItem?.text}</Link>
                    </ActionButton>
                  ) : (
                    <ActionButton
                      key={index}
                      size={"lg"}
                      variant={"blue"}
                      className="w-full xs:max-w-[180px] xl:max-w-[200px] 2xl:max-w-[243px]"
                      asChild
                    >
                      <Link href={buttonItem?.link}>{buttonItem?.text}</Link>
                    </ActionButton>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
