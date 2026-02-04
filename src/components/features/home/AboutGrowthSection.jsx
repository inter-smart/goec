"use client";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";

import { motion } from "framer-motion";

import { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { generateMediaUrl } from "@/lib/utils";

export default function AboutGrowthSection({ growthData }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [arrowPositions, setArrowPositions] = useState({}); // Per-slide pixel positions for arrow
  const [currentStep, setCurrentStep] = useState(0); // Track discrete scroll steps

  // Scroll-hijacking refs and calculations
  const containerRef = useRef(null);
  const slideCount = growthData?.length || 1;

  // 5 lines per slide (1 large + 4 small), arrow snaps to each line
  const LINES_PER_SLIDE = 5;
  const LINE_SPACING = 14; // ~14px between each line in rendered size
  const DWELL_STEPS = 4; // Extra steps where arrow stays at year position

  // Calculate total steps
  const stepsPerSlide = LINES_PER_SLIDE + DWELL_STEPS;
  const totalSteps = slideCount * stepsPerSlide;

  // Wheel handler - one step per scroll tick
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();

      setCurrentStep((prev) => {
        const direction = e.deltaY > 0 ? 1 : -1;
        const next = prev + direction;
        return Math.max(0, Math.min(next, totalSteps - 1));
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [totalSteps]);

  // Update slide and arrow position based on currentStep
  useEffect(() => {
    if (!swiperRef.current || slideCount <= 1) return;

    const targetSlide = Math.floor(currentStep / stepsPerSlide);
    const stepWithinSlide = currentStep % stepsPerSlide;

    // First DWELL_STEPS keep arrow at position 0 (year bar)
    // Remaining steps move through lines 0-4
    const lineIndex =
      stepWithinSlide < DWELL_STEPS
        ? 0
        : Math.min(stepWithinSlide - DWELL_STEPS, LINES_PER_SLIDE - 1);

    // Change slide when needed
    if (targetSlide !== swiperRef.current.activeIndex) {
      swiperRef.current.slideTo(targetSlide);
    }

    // Snap arrow to current line position (per-slide)
    setArrowPositions((prev) => ({
      ...prev,
      [targetSlide]: lineIndex * LINE_SPACING,
    }));
  }, [currentStep, stepsPerSlide, slideCount, DWELL_STEPS, LINES_PER_SLIDE, LINE_SPACING]);

  return (
    <div
      ref={containerRef}
      className="relative z-0 h-screen"
    >
      <section className="w-full h-screen block bg-black z-0 overflow-hidden">
        <div className="w-[120px] h-auto absolute z-2 -translate-y-1/2 top-[54%] left-[0.5rem] sm:left-[calc((100%-var(--container-sm))/2)] md:left-[calc((100%-var(--container-md))/2)] lg:left-[calc((100%-var(--container-lg))/2)] xl:left-[calc((100%-var(--container-xl))/2)] 2xl:left-[calc((100%-var(--container-2xl))/2)] 3xl:left-[calc((100%-var(--container-3xl))/2)] [mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)] ">
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            loop={false}
            spaceBetween={0}
            slidesPerView={3}
            speed={600}
            autoplay={false}
            navigation={false}
            direction={"vertical"}
            allowTouchMove={false}
            className="h-[200px] sm:h-[276px] 2xl:h-[320px]"
          >
            {growthData?.map((item, index) => (
              <SwiperSlide key={"growth" + index} className="cursor-pointer">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.15,
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="w-full h-auto flex relative z-0 pl-3 sm:pl-4 pointer-events-none"
                >
                  <Image
                    src="/images/about_growth-vector-2.svg"
                    alt="about_growth-vector-2"
                    width={10}
                    height={10}
                    style={{
                      transform: `translateY(${arrowPositions[index] || 0}px)`,
                    }}
                    className={cn(
                      "w-[8px] sm:w-[10px] aspect-square absolute z-0 left-0 top-[1px] sm:top-[2px] xl:top-[7px]",
                      currentSlide === index ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <Image
                    src="/images/about_growth-vector-1.svg"
                    alt="about_growth-vector-1"
                    width={14}
                    height={72}
                    unoptimized
                    className="w-[12px] sm:w-[16px] h-full object-contain mt-[5px] xl:mt-[10px] mr-[5px] sm:mr-[10px] xl:mr-[20px]"
                  />
                  <div
                    className={cn(
                      "text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] leading-tight font-semibold text-white",
                      currentSlide === index ? "opacity-100" : "opacity-60",
                    )}
                  >
                    {item?.year}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <Swiper
        effect={"fade"}
        modules={[EffectFade, Thumbs, Autoplay]}
        thumbs={{ swiper: thumbsSwiper }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        loop={false}
        spaceBetween={10}
        slidesPerView={1}
        navigation={false}
        speed={600}
        autoplay={false}
        noSwiping={true}
        longSwipes={false}
        className="max-h-[1080px]"
      >
        {growthData?.map((item, index) => (
          <SwiperSlide key={"growth" + index}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${currentSlide}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full min-h-[376px] sm:min-h-[576px] xl:min-h-[640px] 2xl:min-h-[868px] 3xl:min-h-[992px] flex items-center bg-black relative z-0 py-[30px] sm:py-[80px] xl:py-[100px] 2xl:py-[120px]"
              >
                {item?.media?.type === "video" ? (
                  <video
                    autoPlay
                    loop
                    mutedc
                    playsInline
                    className="w-full h-full object-cover absolute -z-1 inset-0"
                  >
                    <source
                      src={generateMediaUrl(item?.media?.media_path)}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <Image
                    src={`${MEDIA_URL}${item?.media?.media_path}`}
                    alt={item?.media?.media_alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
                    priority={index === 0}
                    className="-z-1 object-cover"
                  />
                )}
                <motion.div
                  key={`heading-${currentSlide}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="container px-[80px] sm:px-[120px] xl:px-[180px]"
                >
                  <Heading
                    as="h3"
                    size="heading3"
                    className="text-white max-w-[80%] xl:max-w-[60%] 2xl:max-w-[50%] max-2xs:text-[14px]"
                  >
                    {item?.title}
                  </Heading>
                </motion.div>
                <div className="w-full h-full bg-black absolute -z-1 inset-0 [mask-image:linear-gradient(to_bottom,white_0%,transparent_10%,transparent_90%,white_100%)] [-webkit-mask-image:linear-gradient(to_bottom,white_0%,transparent_10%,transparent_90%,white_100%)]" />
              </motion.div>
            </AnimatePresence>
          </SwiperSlide>
        ))}
      </Swiper> */}

        <Swiper
          effect={"fade"}
          modules={[EffectFade, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          loop={false}
          spaceBetween={10}
          slidesPerView={1}
          navigation={false}
          speed={600}
          autoplay={false}
          noSwiping={true}
          longSwipes={false}
          allowTouchMove={false}
          className="h-full"
        >
          {growthData?.map((item, index) => (
            <SwiperSlide key={"growth" + index}>
              <div className="w-full h-screen flex items-center bg-black relative z-0 py-[30px] sm:py-[80px] xl:py-[100px] 2xl:py-[120px]">
                {/* Background Media */}
                <motion.div
                  key={`media-${index}`}
                  initial={{ scale: 1.2 }}
                  animate={{
                    scale: currentSlide === index ? 1 : 1.2,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="w-full h-full absolute -z-1 inset-0"
                >
                  {item?.media?.type === "video" ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source
                        src={generateMediaUrl(item?.media?.media_path)}
                        type="video/mp4"
                      />
                    </video>
                  ) : (
                    <picture>
                      <source
                        media="(max-width: 640px)"
                        srcSet={generateMediaUrl(item?.media?.mobile?.media_path)}
                      />
                      <Image
                        // src={`${MEDIA_URL}${item?.media?.media_path}`}
                        src={generateMediaUrl(item?.media?.desktop?.media_path)}
                        alt={item?.media?.desktop?.desktop?.media_alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
                        priority={index === 0}
                        className="object-cover"
                      />
                    </picture>
                  )}
                </motion.div>

                {/* Animated Content - Only animate when slide becomes active */}
                <motion.div
                  key={`heading-${index}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    y: currentSlide === index ? 0 : 40,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="container px-[80px] sm:px-[120px] xl:px-[180px]"
                >
                  <Heading
                    as="h3"
                    size="heading3"
                    className="text-white max-w-[80%] sm:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[50%]"
                  >
                    {item?.title}
                  </Heading>
                </motion.div>

                {/* Gradient Overlay */}
                <div className="w-full h-full bg-black absolute -z-1 inset-0 [mask-image:linear-gradient(to_bottom,white_0%,transparent_10%,transparent_90%,white_100%)] [-webkit-mask-image:linear-gradient(to_bottom,white_0%,transparent_10%,transparent_90%,white_100%)]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
