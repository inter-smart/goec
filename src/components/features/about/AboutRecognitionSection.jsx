"use client";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import parse from "html-react-parser";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { generateMediaUrl } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function AboutRecognitionSection({ title, description, list }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section
      id="media-recognition"
      className="w-full h-auto block py-[40px] sm:py-[60px] xl:py-[100px] 2xl:py-[140px] bg-[#fafafa]"
    >
      <div className="container">
        <div className="flex flex-wrap mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px] max-sm:flex-col">
          <div className="flex-1 max-sm:mb-[15px]">
            <Heading
              as="h2"
              size="heading2"
              className="text-[#030303] max-sm:text-center"
            >
              {title}
            </Heading>
          </div>
          <div className="w-[80%] sm:w-[300px] md:w-[368px] xl:w-[420px] 2xl:w-[576px] 3xl:w-[640px] max-sm:mx-auto max-sm:text-center">
            <Text as="div" size="text2" className="text-[#373737]">
              {parse(description)}
            </Text>
          </div>
        </div>
      </div>

      <Gallery>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -mx-1 lg:-mx-2 cursor-grab">
            {list?.map((item, index) => (
              <div
                key={"gallery" + index}
                className="flex-[0_0_40%] sm:flex-[0_0_40%] xl:flex-[0_0_35%] 3xl:flex-[0_0_25%] px-1 lg:px-2"
              >
                {item?.media?.media_type === "video" ? (
                  <Item
                    html={`
                         <video 
                           controls 
                           autoplay 
                           style="width: 100%; height: 100%;"
                           poster="${generateMediaUrl(item?.thumbnail?.media_path) || ""}"
                           className="w-full h-full object-cover"
                         >
                           <source src="${generateMediaUrl(item?.media?.media_path)}" type="video/mp4" />
                           Your browser does not support the video tag.
                         </video>
                       `}
                    width="1920"
                    height="1080"
                  >
                    {({ ref, open }) => (
                      <div
                        ref={ref}
                        onClick={open}
                        className="w-full h-auto aspect-[48/36] bg-gray-200 rounded-[10px] xl:rounded-[20px] overflow-hidden cursor-pointer relative group"
                      >
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          poster={generateMediaUrl(item?.thumbnail?.media_path)}
                          className="w-full h-full object-cover transition group-hover:scale-105"
                        >
                          <source
                            src={generateMediaUrl(item?.media?.media_path)}
                            type="video/mp4"
                          />
                        </video>
                        {/* Play icon overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg
                            className="w-16 h-16 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </Item>
                ) : (
                  <Item
                    original={
                      generateMediaUrl(item?.media?.media_path) ||
                      "/images/placeholder.jpg"
                    }
                    thumbnail={
                      generateMediaUrl(item?.media?.media_path) ||
                      "/images/placeholder.jpg"
                    }
                    width="1200"
                    height="900"
                    alt={item?.media_alt || "gallery"}
                  >
                    {({ ref, open }) => (
                      <div className="w-full h-auto aspect-[48/36] bg-gray-200 rounded-[10px] xl:rounded-[20px] overflow-hidden cursor-pointer">
                        <Image
                          ref={ref}
                          onClick={open}
                          src={
                            generateMediaUrl(item?.media?.media_path) ||
                            "/images/placeholder.jpg"
                          }
                          alt={item?.media_alt || "gallery"}
                          width={476}
                          height={268}
                          className="w-full h-full object-cover transition hover:scale-105"
                        />
                      </div>
                    )}
                  </Item>
                )}
              </div>
            ))}
          </div>
        </div>
      </Gallery>
    </section>
  );
}
