"use client";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";

import dynamic from "next/dynamic";
import { Suspense } from "react";
const MarketSizeChart = dynamic(() => import("@/components/common/MarketSizeChart"), { ssr: false });

const futureData = {
  media: {
    type: "image",
    path: "/images/investment-future-1.svg",
    alt: "trip",
  },
  title: "Electric Vehicles are the future of Transportation. Make your seat reserved",
  description:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae. consectetur adipiscing elit. Sed sit.</p>",
  tag_desription: "Electric Vehicle Charging Infrastructure Market Size, 2021 to 2030 (in USD Billion)",
  button: {
    link: "/",
    label: "Plan a trip now",
  },
};

export default function MarketSizeSection({ data = futureData, title, description, summary, media, chart }) {  
  const sanitizedText = DOMPurify.sanitize(description);
  return (
    <section className="w-full h-auto block pb-[40px] sm:pb-[80px] xl:pb-[120px] 2xl:pb-[140px]">
      <div className="w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto">
        <div className="w-full h-auto block overflow-hidden rounded-[20px] xl:rounded-[25px] p-[20px] 3xs:p-[30px] sm:p-[30px] xl:p-[100px_80px] 2xl:p-[120px_100px] bg-black relative z-0">
          <Image src="/images/investment-future-bg.png" alt="overlay" fill sizes="1820px" className="-z-1 pointer-events-none" />
          <Image
            src="/images/logo-vector.svg"
            alt="logo-vector"
            width={100}
            height={100}
            className="w-[220px] sm:w-[576px] xl:w-[768px] 2xl:w-[992px] aspect-square opacity-5 absolute -z-1 top-1/2 right-[-10%] -translate-y-1/2 object-contain object-center"
          />

          <div className="flex flex-wrap items-center justify-between mx-[-4px] xl:mx-[-6px] 2xl:mx-[-12px] [&>*]:px-[4px] xl:[&>*]:px-[6px] 2xl:[&>*]:px-[12px]">
            <div className="w-full sm:w-1/2 sm:max-w-[376px] xl:max-w-[478px] 2xl:max-w-[576px] 3xl:max-w-[768px]">
              <Heading
                as="h2"
                size="heading2"
                className="leading-tight font-medium text-white mb-[15px] sm:mb-[100px] xl:mb-[120px] 2xl:mb-[140px] 3xl:mb-[160px]"
              >
                {title}
              </Heading>
              <Text as="div" size="text2" className="text-[#ced1d0]">
                {parse(sanitizedText)}
              </Text>
            </div>

            <div className="w-full sm:w-1/2 sm:max-w-[376px] xl:max-w-[478px] 2xl:max-w-[576px] 3xl:max-w-[768px]">
              <div>
                <Suspense fallback={<div>Loading...</div>}>
                  <MarketSizeChart data={chart} />
                </Suspense>
                {/* if media */}
                {/* {data?.media?.type === "video" ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full"
                  >
                    <source src={data?.media?.path} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={data?.media?.path}
                    alt={data?.media?.alt}
                    width={476}
                    height={268}
                    className="w-full h-full"
                  />
                )} */}
                <div className="w-full h-auto p-[5px] xl:p-[10px] 2xl:p-[15px] mt-[10px] xl:mt-[15px] 2xl:mt-[20px] bg-white/10 rounded-full border border-white/10">
                  <Text
                    as="p"
                    className="text-[8px] sm:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-tight font-normal text-center text-[#ced1d0]"
                  >
                    {}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
