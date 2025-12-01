"use client";
import SolutionCard from "@/components/common/SolutionCard";
import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "motion/react";

const expertiseData = {
  title: "Explore our Expertise ",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae.",
  button: {
    link: "/",
    label: "Explore more",
  },
  item_expertise: [
    {
      media: {
        type: "image",
        path: "/images/expertise-1.png",
        alt: "expertise",
      },
      title: "GOEC Charging Hub",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae. consectetur adipiscing elit. Sed sit",
      button: {
        link: "/",
        label: "Learn more",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/expertise-2.png",
        alt: "expertise",
      },
      title: "GOEC Exclusive",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae. consectetur adipiscing elit. Sed sit",
      button: {
        link: "/",
        label: "Learn more",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/expertise-3.png",
        alt: "expertise",
      },
      title: "Public Commercial Parking",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae. consectetur adipiscing elit. Sed sit",
      button: {
        link: "/",
        label: "Learn more",
      },
    },
  ],
};

export default function SolutionsSection({ data = expertiseData }) {
  const container = useRef(null);

  // global scroll progress
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="w-full h-auto block relative z-0 pb-[40px] sm:pb-[80px] xl:pb-[100px] 2xl:pb-[120px]">
      <Image
        src="/images/expertise-sec-bg.svg"
        alt="expertise-bg"
        width={1820}
        height={1820}
      />
      <div className="container">
        <div className="flex flex-wrap mb-[80px] sm:mb-[70px] xl:mb-[70px] 2xl:mb-[80px] 3xl:mb-[100px] max-sm:flex-col">
          <motion.div
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
            className="flex-1 max-sm:mb-[15px]"
          >
            <Heading
              as="h2"
              size="heading2"
              className="text-[#303030] max-sm:text-center"
            >
              {data?.title}
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
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
            className="w-[80%] sm:w-[300px] md:w-[368px] xl:w-[420px] 2xl:w-[576px] 3xl:w-[640px] max-sm:mx-auto max-sm:text-center"
          >
            <Text as="p" size="text2" className="text-[#373737]">
              {data?.description}
            </Text>
          </motion.div>
        </div>
        <div ref={container}>
          {data?.item_expertise.map((item, i) => {
            const targetScale = 1 - (data?.item_expertise.length - i) * 0.05;
            return (
              <SolutionCard
                key={i}
                i={i}
                index={i}
                item={item}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
        <div className="max-w-[95%] mx-auto mt-[20px] sm:mt-[30px] xl:mt-[40px] 2xl:mt-[60px]">
          <ActionButton
            size="lg"
            className="text-black bg-[#f5f5f5] hover:bg-[#dddddd]"
            asChild
          >
            <Link href={data?.button?.link}>{data?.button?.label}</Link>
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
