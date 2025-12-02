"use client";

import { Heading } from "@/components/utils/Heading";

import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import parse from "html-react-parser";
import { Text } from "@/components/utils/Text";
import { ActionButton } from "@/components/utils/Button";
import { useCallback } from "react";
import { generateMediaUrl } from "@/lib/utils";

const local_data = {
  title: "Hear what our current <br /> Team members say! ",
  list: [
    {
      name: "Stephanie Sharkey",
      designation: "CEO, BrightStar Media",
      testimonial:
        "<p>As an employee at GO EC, I can confidently say that our commitment to advancing India's electric future is unwavering. The scalability of our network is truly remarkable, and the dedication of our team has not just met our goals but has far exceeded them.</p><p>As an employee at GO EC, I can confidently say that our commitment to advancing India's electric future is unwavering. The scalability of our network is truly remarkable, and the dedication of our team has not just met our goals but has far exceeded them.</p>",
      linkedin_url: "https://www.linkedin.com/in/johndoe",
      media: {
        media_path: "/images/Testimonial_1.png",
        media_alt: "John Sunny profile picture",
      },
    },
    {
      name: "author test 1",
      designation: "CEO, BrightStar Media",
      testimonial:
        "<p>As an employee at GO EC, I can confidently say that our commitment to advancing India’s electric future is unwavering. The scalability of our network is truly remarkable, and the dedication of our team has not just met our goals but has far exceeded them.</p>",
      linkedin_url: "https://www.linkedin.com/in/johndoe",
      media: {
        media_path: "/images/Testimonial_1.png",
        media_alt: "John Sunny profile picture",
      },
    },
  ],
};

export default function CareerTestimonialSection({ data = local_data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start" },
    [
      // Autoplay({ delay: 3000, stopOnInteraction: false }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  

  return (
    <section className="w-full h-auto block py-[30px] sm:py-[60px] xl:py-[120px] 2xl:py-[140px] ">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center mb-[15px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px] max-sm:flex-col">
          <div className="flex-1 max-sm:mb-[20px]">
            <Heading as="h3" size="heading3" className="text-[#030303]">
              {parse(data?.title)}
            </Heading>
          </div>
          <div>
            <div className="[--bx-xy:35px] sm:[--bx-xy:45px] xl:[--bx-xy:55px] 2xl:[--bx-xy:60px] flex gap-x-[6px] xl:gap-x-[8px] 2xl:gap-x-[10px]">
              <button
                onClick={scrollPrev}
                disabled={!scrollPrev}
                aria-label="Previous slide"
                className={`w-[var(--bx-xy)] h-auto aspect-square cursor-pointer rounded-full transition ${
                  !scrollPrev
                    ? "bg-primary-200 cursor-not-allowed opacity-50"
                    : "bg-white hover:bg-gradient-to-r hover:from-[#0f51a9] hover:via-[#0055e0] hover:to-[#0f51a9] hover:[&>img]:brightness-100 hover:[&>img]:invert"
                }`}
              >
                <Image
                  src="/images/icon-swiper-nav.svg"
                  alt="Previous"
                  width={60}
                  height={60}
                  className="w-full h-full block"
                />
              </button>

              <button
                onClick={scrollNext}
                disabled={!scrollNext}
                aria-label="Next slide"
                className={`w-[var(--bx-xy)] h-auto aspect-square cursor-pointer rounded-full transition ${
                  !scrollNext
                    ? "bg-primary-200 cursor-not-allowed opacity-50"
                    : "bg-white hover:bg-gradient-to-r hover:from-[#0f51a9] hover:via-[#035be9] hover:to-[#0f51a9] hover:[&>img]:brightness-100 hover:[&>img]:invert"
                }`}
              >
                <Image
                  src="/images/icon-swiper-nav.svg"
                  alt="Previous"
                  width={60}
                  height={60}
                  className="w-full h-full block rotate-180"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -mx-1 lg:-mx-2">
            {data?.list?.map((item, index) => (
              <div
                key={"gallery" + index}
                className="flex-[0_0_100%] px-1 lg:px-2"
              >
                <div className="group w-full h-full rounded-[20px] xl:rounded-[25px] bg-[#fcfcfc] border border-[#f0f0f0] overflow-hidden flex flex-wrap select-none max-sm:p-[20px]">
                  <div className="w-[60px] sm:w-[268px] xl:w-[350px] 2xl:w-[420px] 3xl:w-[540px] h-full rounded-[15px] xl:rounded-[20px] overflow-hidden max-sm:h-[60px] max-sm:mb-[20px]">
                    <Image
                      src={generateMediaUrl(item?.media?.media_path) || "/images/placeholder.jpg"}
                      alt={item?.media?.media_alt}
                      width={420}
                      height={510}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="w-full sm:w-[calc(100%-268px)] xl:w-[calc(100%-350px)] 2xl:w-[calc(100%-420px)] 3xl:w-[calc(100%-540px)] sm:p-[80px_60px] xl:p-[110px_80px] 2xl:p-[130px_100px] flex flex-col justify-center">
                    <div className="w-full relative z-0">
                      <Image
                        src="/images/icon-quote.svg"
                        alt="quote"
                        width={20}
                        height={20}
                        className="w-[10px] xl:w-[20px] 2xl:w-[25px] absolute z-0 top-[-10px] xl:top-[-30px] 2xl:top-[-40px] left-[-10px] sm:left-[-25px] xl:left-[-35px] 2xl:left-[-40px]"
                      />
                      <Text
                        as="div"
                        size="text1"
                        className="text-[#373737] w-full h-[80px] sm:h-[120px] xl:h-[150px] 2xl:h-[200px] mb-[10px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[40px] overflow-y-auto [mask-image:linear-gradient(to_bottom,black_0%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_95%,transparent_100%)]"
                      >
                        {parse(item?.testimonial)}
                      </Text>
                    </div>
                    <div className="w-full flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-[14px] sm:text-[16px] xl:text-[22px] 2xl:text-[26px] 3xl:text-[28px] leading-tight font-normal line-clamp-1 text-[#030303] mb-[1px] xl:mb-[2px]">
                          {item?.name}
                        </div>
                        <Text as="div" size="text3" className="line-clamp-1 text-[#373737]">
                          {item?.designation}
                        </Text>
                      </div>
                      <div>
                        <ActionButton
                          variant="link"
                          className="text-[10px] sm:text-[12px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[20px] text-black flex flex-wrap items-center"
                          asChild
                        >
                          <a
                            href={item?.linkedin_url}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <Image
                              src="/images/icon-linkedin-testi.svg"
                              alt="icon-linkedin"
                              width={20}
                              height={20}
                              className="w-[15px] sm:w-[20px] xl:w-[25px] object-contain"
                            />
                            LinkedIn profile
                          </a>
                        </ActionButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
