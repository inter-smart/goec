"use client";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import parse from "html-react-parser";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const benifits = {
  title: "Innovative Way of Thinking",
  description:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae.</p>",

  list: [
    {
      title: "Innovative Way of Thinking",
      description:
        "Lorem ipsum dolor sit amet consectetur. In risus sit non aliquet.",
    },
    {
      title: "Honesty & Transparency",
      description:
        "<p>We prioritise honesty & transparency in our collaborations to foster collective power and maintain smooth operations.</p>",
    },
    {
      title: "Collaborative Power",
      description:
        "<p>We harness the collective power of our associates to drive innovation and innovation to drive transformation.</p>",
    },
    {
      title: "Innovative Way of Thinking",
      description:
        "Lorem ipsum dolor sit amet consectetur. In risus sit non aliquet.",
    },
    {
      title: "Honesty & Transparency",
      description:
        "<p>We prioritise honesty & transparency in our collaborations to foster collective power and maintain smooth operations.</p>",
    },
    {
      title: "Collaborative Power",
      description:
        "<p>We harness the collective power of our associates to drive innovation and innovation to drive transformation.</p>",
    },
  ],
};

export default function Benifits({
  innovative_section
}) {
  return (
    <section className="w-full h-auto block py-[40px] sm:py-[60px] xl:py-[100px] 2xl:py-[140px] bg-[#0048bf] relative z-0">
      <div className="container mx-auto">
        <Image
          src="/images/about-value-bg.svg"
          alt="about-value-bg"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
          className="-z-1 object-cover"
        />
        <div className="flex flex-wrap mFb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px] max-sm:flex-col">
          <div className="flex-1 max-sm:mb-[15px]">
            <Heading
              as="h2"
              size="heading2"
              className="text-white max-sm:text-center"
            >
              {innovative_section?.title}
            </Heading>
          </div>
          <div className="w-[80%] sm:w-[300px] md:w-[368px] xl:w-[420px] 2xl:w-[576px] 3xl:w-[640px] max-sm:mx-auto max-sm:text-center">
            <Text as="div" size="text2" className="text-[#ced1c0]">
              {parse(innovative_section?.description)}
            </Text>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[32px] mt-4">
          {innovative_section?.ideas?.map((item, index) => {
            return (
              <div
                key={index}
                className="group w-full h-full min-h-[176px] sm:min-h-[268px] xl:min-h-[376px] 3xl:min-h-[468px] flex flex-col justify-between border border-[#f0f0f0]/20 rounded-[20px] xl:rounded-[25px] overflow-hidden bg-white/4 p-[15px] sm:p-[20px] xl:p-[30px] 2xl:p-[40px] relative z-0 shadow-md backdrop-blur-sm"
              >
                <Image
                  src="/images/about-value_card-bg.png"
                  alt="about-value-bg"
                  width={139}
                  height={278}
                  className="w-[80px] xl:w-[100px] 2xl:w-[140px] absolute -z-1 top-[40%] right-0 -translate-y-1/2 opacity-5 transition duration-300 group-hover:scale-105 group-hover:opacity-10"
                />
                <Heading
                  as="h3"
                  size="heading3"
                  className="font-medium text-white xl:max-w-[60%] mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]"
                >
                  {item?.title}
                </Heading>
                <Text as="div" size={"text2"} className="text-[#ced1d0]">
                  {parse(item?.description)}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
