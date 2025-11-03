"use client";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { MEDIA_URL } from "@/lib/api";
import parse from "html-react-parser";
import Image from "next/image";
import CountUp from "react-countup";

const investNowData = {
  background_media: {
    type: null,
    path: "/images/investment-now-bg.jpg",
    alt: "investment",
  },
  media: {
    type: null,
    path: "/images/investment-investnow-1.png",
    alt: "investment",
  },
  title: "Why Invest in GO EC now?",
  description:
    "<p>Duis cras auctor sit felis quisque nibh sed in. Sed sed lorem auctor non. Diam diam quam quisque ac nulla laoreet ultrices. Faucibus amet cursus natoque cras orci cursus quisque vitae. Ipsum adipiscing sed mauris orci. Eget ut sed placerat.</p>",
  item_count: [
    {
      title: "Charging Points",
      value: "273",
      sufix: "+",
    },
    {
      title: "Franchises",
      value: "160",
      sufix: "+",
    },
    {
      title: "Energy Delivered",
      value: "50",
      sufix: "M+",
    },
  ],
  item_invest: [
    {
      media: {
        type: null,
        path: "/images/investment-now-1.svg",
        alt: "investment",
      },
      description:
        "<p>The global EV market is set to grow from USD 246.74 billion to USD 985.72 billion by 2027, creating vast opportunities</p>",
    },
    {
      media: {
        type: null,
        path: "/images/investment-now-2.svg",
        alt: "investment",
      },
      description:
        "<p>The EV industry is at the forefront of tackling climate change and advancing eco friendly transportation, significantly boosting EV adoption.</p>",
    },
    {
      media: {
        type: null,
        path: "/images/investment-now-3.svg",
        alt: "investment",
      },
      description:
        "<p>Implementation and paperwork are currently straightforward, but future involvement of multiple agencies could increase costs.</p>",
    },
    {
      media: {
        type: null,
        path: "/images/investment-now-4.svg",
        alt: "investment",
      },
      description:
        "<p>Rising fuel prices and environmental concerns are driving increased demand for electric vehicles.</p>",
    },
    {
      media: {
        type: null,
        path: "/images/investment-now-5.svg",
        alt: "investment",
      },
      description:
        "<p>EV adoption is expected to cut CO2 emissions by 300 metric tons by 2030, aiding global sustainability.</p>",
    },
    {
      media: {
        type: null,
        path: "/images/investment-now-6.svg",
        alt: "investment",
      },
      description:
        "<p>Ongoing advancements in battery technology will make EVs more efficient and cost-effective.</p>",
    },
  ],
};

export default function InvestNowSection({
  data = investNowData,
  title,
  description,
  milestones,
  features,
}) {

  return (
    <section className="w-full h-auto block py-[40px] sm:py-[80px] xl:py-[120px] 2xl:py-[140px] overflow-hidden relative z-0">
      <Image
        src="/images/investment-now-bg-overlay.png"
        alt="investment-now-bg-overlay"
        width={1920}
        height={1080}
        className="w-full h-full absolute -z-1 inset-0 object-cover opacity-40"
      />
      <Image
        src={data?.background_media?.path}
        alt={data?.background_media?.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
        className="-z-2 object-cover"
      />
      <div className="container">
        <div className="flex flex-wrap mx-[-20px] sm:mx-[-40px] xl:mx-[-60px] 2xl:mx-[-70px] [&>*]:px-[20px] sm:[&>*]:px-[40px] xl:[&>*]:px-[60px] 2xl:[&>*]:px-[70px] max-sm:flex-col-reverse">
          <div className="w-full sm:w-[60%] xl:w-[54%]">
            <Heading
              as="h2"
              size="heading2"
              className="text-white mb-[15px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]"
            >
              {title}
            </Heading>
            <Text
              as="div"
              size="text2"
              className="tracking-[1px] text-white mb-[15px] sm:mb-[20px] xl:mb-[40px] 2xl:mb-[60px]"
            >
              {parse(description)}
            </Text>
            <div className="flex flex-wrap gap-[10px]">
              {milestones?.map((item, index) => (
                <div
                  key={"spec" + index}
                  className="w-full max-w-[80px] sm:max-w-[120px] xl:max-w-[140px] 2xl:max-w-[160px]"
                >
                  <div className="w-full h-auto block">
                    <div className="text-[16px] sm:text-[20px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] leading-none font-normal whitespace-nowrap text-ellipsis text-white mb-[4px] xl:mb-[6px] 2xl:mb-[10px]">
                      <CountUp
                        end={parseInt(item?.value)}
                        duration={2.75}
                        separator=","
                        suffix={item?.prefix}
                        enableScrollSpy
                      />
                    </div>
                    <Text
                      as="div"
                      size="text2"
                      className="whitespace-nowrap text-ellipsis text-white overflow-hidden"
                    >
                      {item?.subtitle}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-[40%] xl:w-[46%]">
            <div className="w-full h-full max-sm:mb-[20px]">
              <Image
                src={data?.media?.path}
                alt={data?.media?.alt}
                width={320}
                height={320}
                className="w-[120px] sm:w-[268px] xl:w-[320px] 2xl:w-[368px] bg-blend-soft-light"
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-[20px] sm:mt-[40px] xl:mt-[60px] 2xl:mt-[80px]">
          <div className="flex flex-wrap mx-[-4px] sm:mx-[-6px] xl:mx-[-10px] 2xl:mx-[-12px] [&>*]:p-[4px] sm:[&>*]:p-[6px] xl:[&>*]:p-[10px] 2xl:[&>*]:p-[12px]">
            {features?.map((item, index) => (
              <div key={"invest" + index} className="w-full sm:w-1/2 xl:w-1/3">
                <div className="group w-full h-full block rounded-[25px] p-[20px] sm:p-[25px] xl:p-[28px] 2xl:p-[30px] bg-gradient-to-tr from-[#183D7B]/70 to-[#124496]/70 backdrop-blur-[6px] transition hover:from-[#183D7B]/80 hover:to-[#0d3575]/80">
                  <div className="w-[30px] xl:w-[60px] 2xl:w-[80px] aspect-square rounded-full bg-white/10 flex items-center justify-center mb-[20px] xl:mb-[30px] 2xl:mb-[40px] transition group-hover:scale-105">
                    <Image
                      src={`${MEDIA_URL}${item?.media?.media_path}`}
                      alt={item?.media?.media_alt}
                      width={40}
                      height={40}
                      className="w-[20px] xl:w-[30px] 2xl:w-[40px] block"
                    />
                  </div>
                  <Text as="div" size="text2" className="text-white">
                    {parse(item?.description)}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
