"use client";

import { Heading } from "@/components/utils/Heading";

import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const local_data = {
  media: null,
  title: "Life at GO EC",
  list: [
    {
      media_type: "image",
      media_path: "/images/about-recognition-1.jpg",
      media_alt: "news-3",
    },
    {
      media_type: "image",
      media_path: "/images/career-life-2.jpg",
      media_alt: "career-life-2",
    },
    {
      media_type: "video",
      media_path: "/videos/electric_vehicle.mp4",
      media_alt: "video-1",
      poster: "/images/news-3.jpg",
    },
  ],
};

export default function CareerLifeSection({ data = local_data }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[60px] xl:py-[120px] 2xl:py-[140px] bg-[#fafafa]">
      <div className="container">
        <Heading
          as="h3"
          size="heading3"
          className="text-[#030303] mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] max-sm:text-center"
        >
          {data?.title}
        </Heading>
      </div>

      <div className="w-full sm:w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1280px] 2xl:max-w-[1536px] 3xl:max-w-[1920px] mx-auto px-2">
        <Gallery>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -mx-1 lg:-mx-2 cursor-grab">
              {data?.list?.map((item, index) => (
                <div
                  key={"gallery" + index}
                  className="flex-[0_0_40%] sm:flex-[0_0_40%] xl:flex-[0_0_40%] 3xl:flex-[0_0_50%] px-1 lg:px-2"
                >
                  {item?.media_type === "video" ? (
                    <Item
                      html={`
                              <video 
                                controls 
                                autoplay 
                                style="width: 100%; height: 100%;"
                                poster="${item?.poster || ""}"
                                className="w-full h-full object-cover"
                              >
                                <source src="${item?.media_path}" type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            `}
                      width="1200"
                      height="720"
                    >
                      {({ ref, open }) => (
                        <div
                          ref={ref}
                          onClick={open}
                          className="group w-full h-auto aspect-[64/36] rounded-[10px] xl:rounded-[20px] overflow-hidden cursor-pointer relative z-0"
                        >
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition group-hover:scale-105"
                            poster={item?.poster}
                          >
                            <source src={item?.media_path} type="video/mp4" />
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
                      original={item?.media_path || "/images/placeholder.jpg"}
                      thumbnail={item?.media_path || "/images/placeholder.jpg"}
                      width="1200"
                      height="720"
                      alt={item?.media_alt || "gallery"}
                      className="w-full h-full object-cover"
                    >
                      {({ ref, open }) => (
                        <div className="w-full h-auto aspect-[64/36] rounded-[10px] xl:rounded-[20px] overflow-hidden cursor-pointer">
                          <Image
                            ref={ref}
                            onClick={open}
                            src={item?.media_path || "/images/placeholder.jpg"}
                            alt={item?.media_alt || "gallery"}
                            width={960}
                            height={540}
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
      </div>
    </section>
  );
}
