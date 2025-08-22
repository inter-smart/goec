"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SwiperNavigation({ swiperRef }) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    // Initial state
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    // Update state on slide change
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);
    swiper.on("reachBeginning", () => setIsBeginning(true));
    swiper.on("reachEnd", () => setIsEnd(true));
    swiper.on("fromEdge", () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });

    // Cleanup
    return () => {
      if (swiper && !swiper.destroyed) {
        swiper.off("slideChange", handleSlideChange);
        swiper.off("reachBeginning");
        swiper.off("reachEnd");
        swiper.off("fromEdge");
      }
    };
  }, [swiperRef]);

  return (
    <div className="[--bx-xy:35px] sm:[--bx-xy:45px] xl:[--bx-xy:55px] 2xl:[--bx-xy:60px] flex gap-x-[6px] xl:gap-x-[8px] 2xl:gap-x-[10px]">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isBeginning}
        className={`w-[var(--bx-xy)] h-auto aspect-square cursor-pointer rounded-full transition ${
          isBeginning
            ? "bg-primary-200 cursor-not-allowed opacity-50"
            : "bg-white hover:bg-gradient-to-r hover:from-[#0f51a9] hover:via-[#0055e0] hover:to-[#0f51a9] hover:[&>img]:brightness-100 hover:[&>img]:invert"
        }`}
      >
        <Image
          src="/images/icon-swiper-nav.svg"
          alt="Previous"
          width={60}
          height={60}
          className={`w-full h-full block ${isBeginning && "opacity-50"}`}
        />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
        className={`w-[var(--bx-xy)] h-auto aspect-square cursor-pointer rounded-full transition ${
          isEnd
            ? "bg-primary-200 cursor-not-allowed opacity-50"
            : "bg-white hover:bg-gradient-to-r hover:from-[#0f51a9] hover:via-[#035be9] hover:to-[#0f51a9] hover:[&>img]:brightness-100 hover:[&>img]:invert"
        }`}
      >
        <Image
          src="/images/icon-swiper-nav.svg"
          alt="Previous"
          width={60}
          height={60}
          className={`w-full h-full block rotate-180 ${isEnd && "opacity-50"}`}
        />
      </button>
    </div>
  );
}
