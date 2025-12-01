"use client";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import CountUp from "react-countup";

const aboutInfoData = {
  title:
    "We transform the future of electric automobiles by building a strategic and collective network of Electric Vehicle (EV) charging stations across India.",
  items_specs: [
    {
      title: "Hours of Charging",
      value: "85000",
      sufix: "+",
    },
    {
      title: "Active Users",
      value: "25000",
      sufix: "+",
    },
    {
      title: "Charging Stations",
      value: "225",
      sufix: "+",
    },
  ],
};
export default function AboutInfoSection({ data = aboutInfoData }) {
  return (
    <section className="w-full h-auto block bg-black relative z-0 pt-[40px] sm:pt-[80px] xl:pt-[140px] 2xl:pt-[180px] 3xl:pt-[200px]">
      <Image
        src="/images/about-bg-1.png"
        alt="about-count-png"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-full h-auto absolute -z-1 inset-0"
      />
      <div className="container">
        <Heading
          as="h2"
          size="heading2"
          className="text-center text-white max-w-[85%] mx-auto mb-[40px] sm:mb-[60px] xl:mb-[80px] 2xl:mb-[140px] 3xl:mb-[160px]"
        >
          {data?.title}
        </Heading>
        <div className="flex flex-wrap">
          {data.items_specs.map((item, index) => (
            <div key={"spec" + index} className="w-full sm:w-1/3">
              <div className="w-full h-auto flex items-center justify-center aspect-square relative z-1">
                <Image
                  src="/images/about-count-bg.svg"
                  alt="about-count-bg"
                  width={368}
                  height={368}
                  className="w-full h-full object-contain absolute z-0 inset-0 pointer-events-none"
                />
                <div>
                  <div className="text-[18px] sm:text-[22px] lg:text-[28px] xl:text-[40px] 2xl:text-[48px] 3xl:text-[64px] leading-none font-normal text-center whitespace-nowrap text-ellipsis text-white xl:max-w-[220px] 2xl:max-w-[268px] mx-auto overflow-hidden mb-[5px] xl:mb-[10px] 2xl:mb-[15px]">
                    <CountUp
                      end={parseInt(item?.value)}
                      duration={2.75}
                      separator=","
                      suffix={item?.sufix}
                      enableScrollSpy
                    />
                  </div>
                  <Text
                    as="div"
                    size="text2"
                    className="text-center whitespace-nowrap text-ellipsis text-white xl:max-w-[220px] 2xl:max-w-[268px] mx-auto overflow-hidden"
                  >
                    {item?.title}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
