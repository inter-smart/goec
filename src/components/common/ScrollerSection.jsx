"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Heading } from "@/components/utils/Heading";
import { Autoplay, FreeMode } from "swiper/modules";
import { MEDIA_URL } from "@/lib/api";

const lifeImages = [
  {
    src: "/images/life_image_1.png", // replace with your image path
    alt: "Team photo 1",
  },
  {
    src: "/images/life_image_2.png", // replace with your image path
    alt: "Team photo 2",
  },
  {
    src: "/images/life_image_3.png", // replace with your image path
    alt: "Team photo 1",
  },
  {
    src: "/images/life_image_4.png", // replace with your image path
    alt: "Team photo 2",
  },
  {
    src: "/images/life_image_5.png", // replace with your image path
    alt: "Team photo 1",
  },
  {
    src: "/images/life_image_1.png", // replace with your image path
    alt: "Team photo 2",
  },
];

export default function ScrollerSection({ title, list, page = "career" }) {
  return (
    <section className={`w-full py-[40px] sm:py-[80px] xl:py-[120px] 2xl:py-[140px]  ${page === "career" ? " bg-[#FAFAFA]" : "bg-white"}`}>
      {/* Heading */}
      <div className="container mx-auto">
        <Heading as={"h2"} size={"heading2"} className="font-semibold text-gray-900  mb-[40px] sm:mb-[40px] xl:mb-[80px] 2xl:mb-[120px]">
          {title}
        </Heading>
      </div>
      {/* Image grid */}

      {page === "career" ? (
        <Swiper
          loop={true}
          modules={[]}
          spaceBetween={30}
          slidesPerView={1.9}
          speed={5000}
          allowTouchMove={true}
          simulateTouch={true}
          loopAdditionalSlides={3}
          loopedSlides={lifeImages.length}
          autoplay={{
            delay: 0, // No delay between slides
            disableOnInteraction: false,
            pauseOnMouseEnter: false, // Don't pause on hover
            reverseDirection: false,
          }}
          freeMode={true} // Enable free mode for smooth continuous scrolling
          freeModeMomentum={false}
          breakpoints={{
            320: {
              slidesPerView: 1.9,
              spaceBetween: 10,
            },
            384: {
              slidesPerView: 1.9,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1.9,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 1.9,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 1.9,
              spaceBetween: 30,
            },
          }}
          onInit={(swiper) => {
            // Start continuous auto-scroll
            const autoScroll = () => {
              if (swiper && !swiper.destroyed) {
                swiper.setTransition(0);
                swiper.translateTo(swiper.translate - 1, 0);

                // Reset position when reaching end
                if (Math.abs(swiper.translate) >= swiper.virtualSize / 2) {
                  swiper.setTransition(0);
                  swiper.translateTo(0, 0);
                }
              }
            };

            const interval = setInterval(autoScroll, 16); // ~60fps

            // Store interval ID to clear later
            swiper.autoScrollInterval = interval;
          }}
          onDestroy={(swiper) => {
            if (swiper.autoScrollInterval) {
              clearInterval(swiper.autoScrollInterval);
            }
          }}
        >
          {" "}
          {list?.map((img, index) => {
            return (
              <SwiperSlide key={"value" + index}>
                <div className="relative w-full aspect-[640/360] rounded-[24px] overflow-hidden">
                  <Image src={`${MEDIA_URL}${img?.media?.desktop?.media_path}`} alt={img?.media?.desktop?.media_alt} width={640} height={360} className="object-cover w-full h-full" quality={100} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Swiper
          loop={true}
          modules={[]}
          spaceBetween={30}
          slidesPerView={1.9}
          speed={5000}
          allowTouchMove={true}
          simulateTouch={true}
          loopAdditionalSlides={3}
          loopedSlides={lifeImages.length}
          autoplay={{
            delay: 0, // No delay between slides
            disableOnInteraction: false,
            pauseOnMouseEnter: false, // Don't pause on hover
            reverseDirection: false,
          }}
          freeMode={true} // Enable free mode for smooth continuous scrolling
          freeModeMomentum={false}
          breakpoints={{
            320: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            384: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
          }}
          onInit={(swiper) => {
            // Start continuous auto-scroll
            const autoScroll = () => {
              if (swiper && !swiper.destroyed) {
                swiper.setTransition(0);
                swiper.translateTo(swiper.translate - 1, 0);

                // Reset position when reaching end
                if (Math.abs(swiper.translate) >= swiper.virtualSize / 2) {
                  swiper.setTransition(0);
                  swiper.translateTo(0, 0);
                }
              }
            };

            const interval = setInterval(autoScroll, 16); // ~60fps

            // Store interval ID to clear later
            swiper.autoScrollInterval = interval;
          }}
          onDestroy={(swiper) => {
            if (swiper.autoScrollInterval) {
              clearInterval(swiper.autoScrollInterval);
            }
          }}
        >
          {list.map((img, index) => {
            return (
              <SwiperSlide key={"value" + index}>
                <div className="relative w-full aspect-[640/360] rounded-[24px] overflow-hidden">
                  <Image src={`${MEDIA_URL}${img?.media?.desktop?.media_path}`} alt={img?.media?.desktop?.media_alt} width={640} height={360} className="object-cover w-full h-full" quality={100} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
}
