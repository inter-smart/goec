"use client";
import { Heading } from "@/components/utils/Heading";
import { MEDIA_URL } from "@/lib/api";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


export default function PartnersSection({ title, associates }) {
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
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-duration", "60s");
    }
  };
  return (
    <section className="w-full h-auto block bg-[#030303] relative z-0 py-[40px_10px] sm:py-[100px_15px] xl:py-[120px_30px] 2xl:py-[160px_40px] overflow-hidden">
      <Image
        src="/images/partner-bg2.svg"
        alt="partners-bg"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
        className="-z-1 object-cover"
      />
      <div
        ref={containerRef}
        className="scroller relative z-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] mb-[40px] sm:mb-[40px] xl:mb-[80px] 2xl:mb-[120px]"
      >
        {/* <div className="absolute -z-1 inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/10" /> */}
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap items-center gap-[20px] xl:gap-[40px] 2xl:gap-[60px]",
            start && "animate-scroll",
            "hover:[animation-play-state:paused]"
          )}
        >
          {associates?.map((item, idx) => (
            <li key={idx}>
              <div>
                <Image
                  src={`${MEDIA_URL}${item?.media?.media_path}`}
                  alt={item?.media?.media_alt}
                  width={220}
                  height={60}
                  className="w-full h-[25px] sm:h-[30px] xl:h-[50px] 2xl:h-[60px] aspect-[4/2] object-contain opacity-80"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-center">
        <Heading
          as="h2"
          size="none"
          className="text-[18px] sm:text-[22px] lg:text-[28px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[32px] leading-tight font-light text-center text-transparent bg-clip-text bg-gradient-to-r from-white/50 via-white to-white/50 inline-block"
        >
          {title}
        </Heading>
      </div>
    </section>
  );
}
