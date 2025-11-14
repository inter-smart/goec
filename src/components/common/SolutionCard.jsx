"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Text } from "../utils/Text";
import { ActionButton } from "../utils/Button";
import Link from "next/link";
import Image from "next/image";
import { Heading } from "../utils/Heading";
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
        className={`relative -top-[25%] origin-top w-full h-auto bg-[#fcfcfc] border border-[#f0f0f0] rounded-[20px] sm:rounded-[30px] overflow-hidden flex flex-wrap shadow-[0_0_40px_0_rgba(0,0,0,0.05)] max-sm:flex-col-reverse
            ${index % 2 === 1 && "sm:flex-row-reverse"}
            `}
      >
        <div className="w-full sm:w-[420px] md:w-[468px] xl:w-[468px] 2xl:w-[576px] 3xl:w-[700px]">
          <div className="w-full h-full relative z-0 p-[20px] xl:p-[40px] 2xl:p-[60px] flex flex-col justify-between">
            <div>
              <div className="text-[36px] sm:text-[48px] lg:text-[168px] xl:text-[176px] 2xl:text-[220px] 3xl:text-[276px] leading-[0.75] font-semibold whitespace-nowrap text-ellipsis text-transparent bg-clip-text bg-gradient-to-b from-[#f2f2f2] to-[#fcfcfc]">
                {index + 1 < 10 ? "0" + (index + 1) : index + 1}
              </div>
              <Heading
                as={"h4"}
                size={"heading3"}
                className="font-medium line-clamp-2 text-[#191a19] mb-[15px] md:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.2,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {item?.title}
                </motion.span>
              </Heading>
              <Text
                as="div"
                size="text2"
                className="line-clamp-3 text-[#373737]"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.2,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {item?.description}
                </motion.span>
              </Text>
            </div>
            <div>
              <ActionButton variant="link" className="text-black" asChild>
                <Link href={item?.button?.link}>{item?.button?.label}</Link>
              </ActionButton>
            </div>
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
          <div className="w-full h-full xl:h-auto aspect-[4/3] overflow-hidden rounded-[20px] sm:rounded-[30px] relative z-1">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image
                src={item?.media?.path}
                alt={item?.media?.alt}
                width={876}
                height={676}
                className="w-full h-full object-cover hover:scale-105 transition"
                placeholder="blur"
                blurDataURL="/images/placeholder.jpg"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
