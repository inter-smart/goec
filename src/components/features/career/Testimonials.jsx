"use client";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import { Text } from "@/components/utils/Text";
import SwiperNavigation from "@/components/common/SwiperNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import parse from "html-react-parser";
import { MEDIA_URL } from "@/lib/api";

const testimonials = [
  {
    id: 1,
    text: "As an employee at GO EC, I can confidently say that our commitment to advancing India's electric future is unwavering. The scalability of our network is truly remarkable, and the dedication of our team has not just met our goals but has far exceeded them.",
    name: "Stephanie Sharkey",
    role: "GO Superstar Media",
    image: "/images/Testimonial_1.png",
    linkedinUrl: "/",
  },
  {
    id: 2,
    text: "Working with this team has been an incredible journey. The innovation and dedication to sustainable solutions is inspiring every single day.",
    name: "John Anderson",
    role: "Senior Developer",
    image: "/images/Testimonial_1.png",
    linkedinUrl: "/",
  },
  {
    id: 3,
    text: "The collaborative environment and forward-thinking approach make this company stand out. Proud to be part of this mission.",
    name: "Sarah Mitchell",
    role: "Product Manager",
    image: "/images/Testimonial_1.png",
    linkedinUrl: "/",
  },
];

export default function TestimonialSection({
  title, list
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="w-full h-auto block bg-white pt-[40px] sm:pt-[80px] xl:pt-[120px] 2xl:pt-[140px]">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-[20px] lg:mb-[64px] 2xl:mb-[72px]">
          <Heading as={"h2"} size={"heading2"} className="text-[#030303]">
           {title}
          </Heading>

          {/* Navigation Buttons */}
          <div className="mt-[20px] flex justify-center sm:justify-start max-sm:mb-[20px]">
            <SwiperNavigation swiperRef={swiperRef} />
          </div>
        </div>

        {/* Testimonial Card */}
        <Swiper
          loop={true}
          //   grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: false,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[EffectCreative]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        >
          {list?.map((item, index) => (
            <SwiperSlide key={"testimonial-" + index}>
              <div className="flex flex-col sm:flex-row gap-[32px] items-stretch bg-[#FCFCFC] border border-[#F0F0F0] overflow-hidden h-full rounded-[18px] lg:rounded-[20px] xl:rounded-[24px] 2xl:rounded-[28px] 3xl:rounded-[36px] ">
                {/* Image with rounded corners */}
                <div className="flex-shrink-0">
                  <Image
                    src={`${MEDIA_URL}${list[currentIndex]?.media?.media_path}`}
                    alt={list[currentIndex].meida?.media_alt}
                    className="aspect-square md:aspect-[5/6] w-full h-full lg:min-w-[340px] xl:min-w-[355px] 2xl:min-w-[400px] 3xl:min-w-[534px] rounded-[18px] lg:rounded-[20px] xl:rounded-[24px] 2xl:rounded-[28px] 3xl:rounded-[36px] object-cover"
                    width={400}
                    height={600}
                    priority
                    quality={100}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center lg:py-[70px] xl:py-[88px] 2xl:py-[98px] 3xl:py-[130px]">
                  {/* Quote Mark */}
                  <div className="">
                    <Image
                      src="/images/icon-quote.svg"
                      alt="quote"
                      width={30}
                      height={30}
                      className="w-[10px] xl:w-[25px] 2xl:w-[30px] max-sm:ml-[10px] mb-[10px]"
                    />
                  </div>

                  <div className=" px-[20px_30px] lg:px-[50px_48px] max-sm:mb-[20px]">
                    {/* Testimonial Text */}
                    <Text as="p" size="text1" className="text-[#373737] mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
                      {parse(item?.testimonial)}
                    </Text>
                    {/* Author Info */}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <Heading
                          as={"h3"}
                          size={"heading3"}
                          className="font-normal text-[#030303] mb-[5px] lg:mb-[13px] xl:mb-[15px] 2xl:mb-[16px] 3xl:mb-[22px]"
                        >
                          {item?.name}
                        </Heading>
                        <Text as={"p"} size={"text2"} className="text-[#373737]">
                          {item?.designation}
                        </Text>
                      </div>

                      {/* LinkedIn Badge */}
                      <a href={item?.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Image src={"/images/linkedin.png"} alt="linkedin" width={20} height={20} className="w-[15px] xl:w-[20px] 2xl:w-[25px]" />
                        <Text as={"p"} className="text-[#373737]" size={"text2"}>
                          LinkedIn profile
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
