"use client";

import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { useRef } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { generateMediaUrl } from "@/lib/utils";

const local_data = {
  title: "Gallery",
  list: [
    {
      media_type: "image",
      media_path: "/images/news-3.jpg",
      media_alt: "news-3",
    },
    {
      media_type: "video",
      media_path: "/videos/electric_vehicle.mp4",
      media_alt: "video-1",
      poster: "/images/news-3.jpg",
    },
    {
      media_type: "image",
      media_path: "/images/news-4.jpg",
      media_alt: "news-4",
    },
    {
      media_type: "image",
      media_path: "/images/news-5.jpg",
      media_alt: "news-5",
    },
    {
      media_type: "image",
      media_path: "/images/news-3.jpg",
      media_alt: "news-3",
    },
    {
      media_type: "video",
      media_path: "/videos/electric_vehicle.mp4",
      media_alt: "video-1",
      poster: "/images/news-3.jpg",
    },
    {
      media_type: "image",
      media_path: "/images/news-4.jpg",
      media_alt: "news-4",
    },
    {
      media_type: "image",
      media_path: "/images/news-5.jpg",
      media_alt: "news-5",
    },
  ],
};

export default function MerchantileGallerySection({ data = local_data }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section className="w-full h-auto block py-[15px_30px] sm:py-[30px_60px] xl:py-[60px_120px] 2xl:py-[80px_160px]">
      <div className="container">
        <Heading
          as="h2"
          size="heading2"
          className="text-[#030303] mb-[10px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]"
        >
          {parse(data?.title)}
        </Heading>
      </div>

      <Gallery>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -mx-1 lg:-mx-2 cursor-grab">
            {data?.list?.map((item, index) => (
              <div
                key={"gallery" + index}
                className="flex-[0_0_40%] sm:flex-[0_0_40%] xl:flex-[0_0_35%] 3xl:flex-[0_0_25%] px-1 lg:px-2"
              >
                {item?.media_type === "video" ? (
                  <Item
                    html={`
                      <video 
                        controls 
                        autoplay 
                        style="width: 100%; height: 100%;"
                        poster="${item?.poster || ""}"
                      >
                        <source src="${item?.media_path}" type="video/mp4" />
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
                        className="w-full h-auto aspect-[48/36] rounded-[10px] xl:rounded-[20px] overflow-hidden cursor-pointer relative group"
                      >
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover transition group-hover:scale-105"
                        >
                          <source src={generateMediaUrl(item?.media_path)} type="video/mp4" />
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
                    original={generateMediaUrl(item?.media_path) || "/images/placeholder.jpg"}
                    thumbnail={generateMediaUrl(item?.media_path) || "/images/placeholder.jpg"}
                    width="1200"
                    height="900"
                    alt={item?.media_alt || "gallery"}
                  >
                    {({ ref, open }) => (
                      <div className="w-full h-auto aspect-[48/36] rounded-[10px] xl:rounded-[20px] overflow-hidden cursor-pointer">
                        <Image
                          ref={ref}
                          onClick={open}
                          src={generateMediaUrl(item?.media_path) || "/images/placeholder.jpg"}
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
