"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Text } from "../utils/Text";
import { ActionButton } from "../utils/Button";
import Link from "next/link";
import Image from "next/image";
import { Heading } from "../utils/Heading";
import { MEDIA_URL } from "@/lib/api";
import { cn } from "@/lib/utils";

export default function SolutionCard({
  i,
  index,
  progress,
  range,
  targetScale,
  item,
}) {
  const container = useRef(null);

  // local scroll for image zoom
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // global card scale
  const scale = useTransform(progress, range, [1, targetScale]);
  // local image zoom
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  return (
    <div
      ref={container}
      className="h-[auto] flex items-center justify-center sticky top-[10%] sm:top-[15%]"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={cn(
          "relative -top-[25%] origin-top w-full h-auto bg-[#fcfcfc] border border-[#f0f0f0] rounded-[20px] sm:rounded-[30px] overflow-hidden flex flex-wrap shadow-[0_0_40px_0_rgba(0,0,0,0.05)] max-sm:flex-col-reverse",
          index % 2 === 1 && "sm:flex-row-reverse"
        )}
      >
        <div className="w-full sm:w-[420px] md:w-[468px] xl:w-[468px] 2xl:w-[576px] 3xl:w-[700px]">
          <div className="w-full h-full relative z-0 p-[20px] xl:p-[40px] 2xl:p-[60px] flex flex-col justify-between">
            <div>
              <div className="text-[36px] sm:text-[48px] lg:text-[168px] xl:text-[176px] 2xl:text-[220px] 3xl:text-[276px] leading-[0.75] font-semibold whitespace-nowrap text-ellipsis text-transparent bg-clip-text bg-gradient-to-b from-[#f2f2f2] to-[#fcfcfc]">
                {index + 1 < 10 ? "0" + (index + 1) : index + 1}
              </div>
              <motion.div
                initial={index === 0 ? { opacity: 0, y: 40 } : false}
                whileInView={
                  index === 0
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : false
                }
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0,
                }}
                viewport={{ once: false, amount: 0 }}
                className="overflow-hidden"
              >
                <Heading
                  as={"h4"}
                  size={"heading3"}
                  className="font-medium! line-clamp-2 text-[#191a19] mb-[15px] md:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                >
                  {item?.title}
                </Heading>
              </motion.div>
              <motion.div
                initial={index === 0 ? { opacity: 0, y: 40 } : false}
                whileInView={index === 0 ? { opacity: 1, y: 0 } : false}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0,
                }}
                viewport={{ once: false, amount: 0 }}
                className="overflow-hidden"
              >
                <Text
                  as="div"
                  size="text2"
                  className="line-clamp-3 text-[#373737]"
                >
                  {item?.description}
                </Text>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0,
              }}
              viewport={{ once: false, amount: 0 }}
              className="overflow-hidden mt-4 sm:mt-1"
            >
              <ActionButton
                size={"lg"}
                className={cn(
                  "text-black max-w-[100px] sm:max-w-[140px] xl:max-w-[180px] 2xl:max-w-[200px] bg-transparent shadow-none transition duration-500 max-xl:bg-white max-xl:border-[#f0f0f0]",
                  "xl:not-hover:-translate-x-8 2xl:not-hover:-translate-x-9",
                  "hover:text-white hover:border-white/80 hover:bg-transparent hover:bg-gradient-to-r hover:from-[#0f51a9] hover:via-[#0055e0] hover:to-[#0f51a9]",
                  "not-hover:[&_.notHover]:scale-100 not-hover:[&_.isHover]:scale-0",
                  "hover:[&_.notHover]:scale-0 hover:[&_.isHover]:scale-100"
                )}
                asChild
              >
                <Link href={"/investment"}>
                  Learn more
                  <span className="w-6 xl:w-8 aspect-4/2 relative z-0">
                    <Image
                      src="/images/icon-btn-arrow-dark.svg"
                      alt="icon-btn-arrow-dark"
                      width={41}
                      height={23}
                      className="max-w-[75%] block notHover transition duration-600 absolute z-0 inset-0 m-auto ml-0"
                    />
                    <Image
                      src="/images/icon-btn-arrow-hover.svg"
                      alt="icon-btn-arrow-hover"
                      width={41}
                      height={23}
                      className="block isHover transition duration-600 absolute z-0 inset-0 m-auto"
                    />
                  </span>
                </Link>
              </ActionButton>
            </motion.div>
            <Image
              src="/images/expertise-bx-bg.png"
              alt="expertise-bx-bg"
              width={730}
              height={220}
              className="w-full h-auto absolute -z-1 left-0 bottom-0 right-0 scale-105 pointer-events-none"
            />
          </div>
        </div>
        <div
          className={cn(
            "w-full sm:w-[calc(100%-420px)] md:w-[calc(100%-468px)] xl:w-[calc(100%-468px)] 2xl:w-[calc(100%-576px)] 3xl:w-[calc(100%-700px)]"
          )}
        >
          <motion.div
            initial={index === 0 ? { translateX: "100%", opacity: 0 } : false}
            whileInView={index === 0 ? { translateX: 0, opacity: 1 } : false}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.1,
            }}
            viewport={{ once: false, amount: 0 }}
            className={cn(
              "w-full h-full xl:h-auto aspect-[4/3] overflow-hidden rounded-[20px] sm:rounded-[30px] relative z-1",
              index === 0 ? "origin-right" : ""
            )}
          >
            <motion.div
              style={{ scale: imageScale }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.1,
              }}
              className="w-full h-full"
            >
              <Image
                src={`${MEDIA_URL}${item?.media?.media_path}`}
                alt={item?.media?.media_alt}
                width={876}
                height={676}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
