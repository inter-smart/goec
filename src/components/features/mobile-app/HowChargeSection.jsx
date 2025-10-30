"use client";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import Image from "next/image";
import { useEffect, useState } from "react";

const local_data = {
  media: {
    mobile: {
      type: "image",
      path: "/images/invest-1.jpg",
      alt: "invest",
    },
    desktop: {
      type: "image",
      path: "/images/invest-1.jpg",
      alt: "invest",
    },
  },
  title: "How to charge your EV",
  button: {
    link: "/",
    label: "Learn more",
  },
  item_howcharge: [
    {
      id: 1,
      media: {
        type: "image",
        path: "/images/mobileapp-howcharge-1.jpg",
        alt: "mobileapp-howcharge-1",
      },
      title: "Locate Charger",
      description:
        "<p>Locate your nearest charging station from the GO EC app.</p>",
    },
    {
      id: 2,
      media: {
        type: "image",
        path: "/images/mobileapp-howcharge-1.jpg",
        alt: "mobileapp-howcharge-1",
      },
      title: "Connect Charger",
      description:
        "<p>Park your car in the slot and connect the charger to your EV.</p>",
    },
    {
      id: 3,
      media: {
        type: "image",
        path: "/images/mobileapp-howcharge-1.jpg",
        alt: "mobileapp-howcharge-1",
      },
      title: "Start Charging",
      description: "<p>Use the GO EC app / RFID Card to start charging.</p>",
    },
    {
      id: 4,
      media: {
        type: "image",
        path: "/images/mobileapp-howcharge-1.jpg",
        alt: "mobileapp-howcharge-1",
      },
      title: "Payment",
      description:
        "<p>Complete the payment conveniently using the app / RFID Card</p>",
    },
  ],
};

export default function HowChargeSection({ data = local_data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered && data?.item_howcharge?.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % data.item_howcharge.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovered, data?.item_howcharge?.length]);

  const handleMouseEnter = (index) => {
    setIsHovered(true);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="w-full h-auto block py-[20px] sm:py-[30px] xl:py-[60px] 2xl:py-[70px]">
      <div className="container">
        <Heading
          as="h2"
          size="heading2"
          className="text-[#303030] mb-[15px] sm:mb-[40px] xl:mb-[80px] 2xl:mb-[100px] xl:max-w-[568px] 2xl:max-w-[800px]"
        >
          {data?.title}
        </Heading>
        <div className="w-full">
          {data?.item_howcharge?.map((item, index) => (
            <div
              key={"howcharge" + index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="[--bx-xy:40px] sm:[--bx-xy:50px] xl:[--bx-xy:80px] 2xl:[--bx-xy:100px] w-full h-auto flex flex-wrap [&>*]:pt-[15px] sm:[&>*]:pt-[20px] xl:[&>*]:pt-[40px] 2xl:[&>*]:pt-[50px]">
                <div className="w-(--bx-xy) relative z-0">
                  {index < data?.item_howcharge?.length - 1 && (
                    <div className="w-[1px] h-full border-r border-[#949494] border-dashed absolute -z-1 top-[50px] left-[calc(var(--bx-xy)/2)]" />
                  )}
                  <div
                    className={cn(
                      "text-[14px] sm:text-[16px] lg:text-[24px] xl:text-[34px] 2xl:text-[40px] 3xl:text-[48px] leading-none font-normal text-[#030303] w-full aspect-square rounded-full border border-[#030303] flex items-center justify-center transition duration-500",
                      activeIndex === index
                        ? "text-white bg-[#2565E5] border-[#2565E5]"
                        : "bg-white"
                    )}
                  >
                    {String(item?.id).padStart(2, "0")}
                  </div>
                </div>
                <div className="w-[calc(100%-var(--bx-xy))] pl-[15px] sm:pl-[20px] xl:pl-[40px] 2xl:pl-[50px]">
                  <div
                    className={cn(
                      "w-full border-b border-[#f0f0f0] relative z-0 pb-[15px] sm:pb-[20px] xl:pb-[40px] 2xl:pb-[50px]",
                      index === data?.item_howcharge?.length - 1 && "border-0"
                    )}
                  >
                    <div className="w-full sm:max-w-[calc(100%-140px)] lg:max-w-2/3">
                      <Heading
                        as="h3"
                        size="heading3"
                        className="text-[#303030] mb-[4px] xl:mb-[6px] 2xl:mb-[10px]"
                      >
                        {item?.title}
                      </Heading>
                      <Text as="div" size="text2" className="text-[#373737]">
                        {parse(item?.description)}
                      </Text>
                    </div>
                    <div
                      className={cn(
                        "w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[276px] xl:max-w-[368px] 2xl:max-w-[520px] aspect-[35/20] overflow-hidden rounded-[10px] sm:rounded-[15px] sm:absolute right-0 top-1/2  transition duration-500 ease-in-out max-sm:mt-[10px] origin-right",
                        activeIndex === index
                          ? "opacity-100 sm:-translate-y-1/2 sm:scale-100 z-1 "
                          : "opacity-50 sm:opacity-0 sm:scale-0 z-0"
                      )}
                    >
                      <Image
                        src={item?.media?.path}
                        alt={item?.media?.alt}
                        width={360}
                        height={200}
                        className="w-full h-full object-cover transition hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
