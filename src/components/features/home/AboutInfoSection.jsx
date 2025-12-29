"use client";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "motion/react";

export default function AboutInfoSection({
  description,
  milestones = aboutInfoData,
}) {
  return (
    <section
      id="AboutInfo"
      className="w-full h-auto block bg-black overflow-hidden relative z-0 pt-[40px] sm:pt-[80px] xl:pt-[140px] 2xl:pt-[180px] 3xl:pt-[200px]"
    >
      <Image
        src="/images/about-bg-2-3.png"
        alt="about-count-png"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
        className="w-full h-auto object-bottom -z-2"
      />

      <Image
        src="/images/about-bg-2.svg"
        alt="about-bg"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
        className="w-full h-auto opacity-20 absolute -z-1 top-1/2 left-0 right-0"
      />

      <Image
        src="/images/logo-vector.svg"
        alt="logo-vector"
        width={100}
        height={100}
        className="w-[220px] sm:w-[576px] xl:w-[768px] 2xl:w-[1080px] aspect-square opacity-1 absolute -z-1 top-[10%] right-1/2 -translate-y-1/2 translate-x-1/2 object-contain object-center "
      />

      <div className="container">
        <Heading
          as="h2"
          className="text-[18px] sm:text-[22px] lg:text-[28px] xl:text-[34px] 2xl:text-[40px] 3xl:text-[52px] leading-tight font-normal text-center text-white max-w-[85%] mx-auto mb-[20px] sm:mb-[40px] xl:mb-[80px] 2xl:mb-[120px] 3xl:mb-[160px]"
        >
          {description}
        </Heading>
        <div className="flex flex-wrap justify-center">
          {milestones.map((item, index) => (
            <div key={"spec" + index} className="w-1/2 sm:w-1/3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 100,
                }}
                transition={{
                  duration: 1,
                  ease: "linear",
                  repeat: false,
                  delay: 0.3,
                }}
                viewport={{ once: true }}
                className="w-full h-auto flex items-center justify-center aspect-square relative z-1"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileInView={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 1,
                    ease: "linear",
                    repeat: false,
                    delay: 0.3,
                  }}
                  viewport={{ once: false }}
                  className="w-full h-full absolute z-0 inset-0 pointer-events-none"
                >
                  <Image
                    src="/images/about-count-bg.svg"
                    alt="about-count-bg"
                    width={368}
                    height={368}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <div>
                  <div className="text-[16px] sm:text-[20px] lg:text-[28px] xl:text-[40px] 2xl:text-[48px] 3xl:text-[64px] leading-none font-normal text-center whitespace-nowrap text-ellipsis text-white xl:max-w-[220px] 2xl:max-w-[268px] mx-auto overflow-hidden mb-[5px] xl:mb-[10px] 2xl:mb-[15px]">
                    <CountUp
                      end={parseInt(item?.value)}
                      duration={2.75}
                      separator=","
                      suffix="+"
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
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
