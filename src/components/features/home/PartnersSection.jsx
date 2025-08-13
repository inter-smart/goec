"use client";
import { Heading } from "@/components/utils/Heading";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const partnersData = {
  title: "Our Associate Partners",
  items_partners: [
    {
      media: {
        type: "image",
        path: "/images/partner-0.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-1.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-2.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-3.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-4.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-5.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-6.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-7.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-8.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-9.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-10.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-11.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-12.png",
        alt: "partners",
      },
    },
  ],
};

export default function PartnersSection({ data = partnersData }) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards"
      );
      //   if (direction === "left") {
      //     containerRef.current.style.setProperty(
      //       "--animation-direction",
      //       "forwards"
      //     );
      //   } else {
      //     containerRef.current.style.setProperty(
      //       "--animation-direction",
      //       "reverse"
      //     );
      //   }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-duration", "40s");
      //   if (speed === "fast") {
      //     containerRef.current.style.setProperty("--animation-duration", "20s");
      //   } else if (speed === "normal") {
      //     containerRef.current.style.setProperty("--animation-duration", "40s");
      //   } else {
      //     containerRef.current.style.setProperty("--animation-duration", "80s");
      //   }
    }
  };
  return (
    <section className="w-full h-auto block bg-[#030303] relative z-0 py-[40px] sm:py-[80px] xl:py-[100px] 2xl:py-[120px]">
      <Image
        src="/images/partner-bg.svg"
        alt="partners-bg"
        fill
        sizes="100vw"
      />
      <div
        ref={containerRef}
        className="scroller relative z-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] mb-[20px] xl:mb-[40px] 2xl:mb-[60px]"
      >
        <div className="absolute -z-1 inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap items-center gap-[20px] xl:gap-[40px] 2xl:gap-[60px]",
            start && "animate-scroll",
            "hover:[animation-play-state:paused]"
          )}
        >
          {data?.items_partners.map((item, idx) => (
            <li key={idx}>
              <div>
                <Image
                  src={item?.media?.path}
                  alt={item?.media?.alt}
                  width={220}
                  height={60}
                  className="w-full h-[60px] aspect-[4/2] object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Heading
          as="h2"
          size="none"
          className="text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[32px] leading-tight font-normal text-center text-white mb-[15px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]"
        >
          {data?.title}
        </Heading>
      </div>
    </section>
  );
}
