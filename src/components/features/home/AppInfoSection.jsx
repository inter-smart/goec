"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const appInfoData = {
  media: {
    type: "video",
    path: "/videos/app_info-1.mp4",
    alt: "app_info",
  },
  title: "Say hi to your co-driver.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla.",
  button: {
    link: "/",
    label: "Learn more",
  },
  app_download: {
    title: "Download the app",
    button: [
      {
        media: {
          type: "image",
          path: "/images/app_info-ios.svg",
          alt: "ios",
        },
        type: "ios",
        link: "#",
      },
      {
        media: {
          type: "image",
          path: "/images/app_info-android.svg",
          alt: "android",
        },
        type: "android",
        link: "#",
      },
    ],
  },
  item_specs: [
    "Locate Chargers",
    "Connect Charger",
    "Monitor charging session",
    "Seamless Payment",
    "Save Money",
    "Monitor charging session Monitor charging session",
  ],
};

function splitIntoGroups(arr, groupCount = 4) {
  return Array.from({ length: groupCount }, (_, i) =>
    arr.filter((_, index) => index % groupCount === i)
  );
}

export default function AppInfoSection({ data = appInfoData }) {
  const groupedSpecs = splitIntoGroups(data?.item_specs || [], 4);
  return (
    <section className="w-full h-auto min-h-[520px] sm:min-h-[576px] xl:min-h-[640px] 2xl:min-h-[868px] 3xl:min-h-[992px] flex items-center bg-[#303030] relative z-0 py-[40px] sm:py-[80px] xl:py-[100px] 2xl:py-[120px]">
      <Image
        src="/images/app_info-bg.svg"
        alt="app_info-bg"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
        className="-z-3 object-cover pointer-events-none"
      />

      <div className="w-[376px] sm:w-[376px] xl:w-[468px] 2xl:w-[576px] 3xl:w-[620px] h-auto block absolute z-1 bottom-0 left-[45%] -translate-x-1/2 pointer-events-none">
        <div className="w-full h-full relative z-0">
          <div className="w-[50px] h-[14px] rounded-full bg-black absolute z-2 top-[12px] right-[23%] pointer-events-none" />
          <div className="w-[120px] sm:w-[150px] xl:w-[190px] 2xl:w-[235px] 3xl:w-[255px] aspect-[255/544] overflow-hidden rounded-[20px] xl:rounded-[25px] 2xl:rounded-[35px] absolute z-1 top-[1%] right-[7.5%]">
            {data?.media?.type === "video" ? (
              <video autoPlay loop muted playsInline className="w-full h-full">
                <source src={data?.media?.path} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={data?.media?.path}
                alt={data?.media?.alt}
                width={255}
                height={544}
                className="w-full h-full"
              />
            )}
          </div>
          <Image
            src="/images/app_info-mockup-overlay.png"
            alt="app_info-mockup-overlay"
            width={420}
            height={500}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="container">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full sm:w-[276px] xl:w-[340px] 2xl:w-[420px] 3xl:w-[476px]">
            <Heading
              as="h2"
              size="heading1"
              className="text-white mb-[15px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]"
            >
              {data?.title}
            </Heading>
            <Text
              as="p"
              size="text2"
              className="text-white mb-[15px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]"
            >
              {data?.description}
            </Text>
            <ActionButton variant="link" className="text-white" asChild>
              <Link href={data?.button?.link}>{data?.button?.label}</Link>
            </ActionButton>
            <div className="mt-[30px] xl:mt-[40px] 2xl:mt-[60px]">
              <Heading
                as="h3"
                size="heading5"
                className="text-white mb-[10px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
              >
                {data.title}
              </Heading>
              <div className="flex flex-wrap space-x-[5px] xl:space-x-[10px]">
                {data?.app_download?.button.map((item, index) => (
                  <div key={"app_download" + index}>
                    <a
                      href={item?.link}
                      className="w-[100px] xl:w-[120px] 2xl:w-[140px] h-auto aspect-[4/2] block transition hover:scale-105"
                    >
                      <Image
                        src={item?.media?.path}
                        alt={item?.media?.alt}
                        width={140}
                        height={50}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[376px] sm:w-[320px] lg:w-[468px] xl:w-[580px] 2xl:w-[768px] 3xl:w-[860px]">
            <div className="w-full h-full relative z-0">
              <Image
                src="/images/app_info-spec-bg.svg"
                alt="app_info-spec-bg"
                width={880}
                height={640}
                className="w-full h-full max-sm:w-[168px]"
              />

              <div className="absolute top-[7.5%] left-[58%]">
                <SpecItem texts={groupedSpecs[0]} />
              </div>

              <div className="absolute top-[34.5%] left-[68%]">
                <SpecItem texts={groupedSpecs[1]} />
              </div>

              <div className="absolute top-[61.5%] left-[66%]">
                <SpecItem texts={groupedSpecs[2]} />
              </div>

              <div className="absolute top-[88.5%] left-[62%]">
                <SpecItem texts={groupedSpecs[3]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecItem({ texts, duration = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!texts || texts.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, duration);
    return () => clearInterval(interval);
  }, [texts, duration]);

  if (!texts || texts.length === 0) return null;

  return (
    <div className="w-[140px] sm:w-[100px] lg:w-[140px] xl:w-[176px] 2xl:w-[190px] 3xl:w-[230px] h-5 overflow-hidden relative z-0">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal line-clamp-1 text-white"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
