"use client";
import SolutionCard from "@/components/common/SolutionCard";
import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

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

export default function SolutionsSection({ title, description, solutions }) {
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
          <div className="flex-1 max-sm:mb-[15px]">
            <Heading as="h2" size="heading2" className="text-[#303030] max-sm:text-center">
              {title}
            </Heading>
          </div>
          <div className="w-[80%] sm:w-[300px] md:w-[368px] xl:w-[420px] 2xl:w-[576px] 3xl:w-[640px] max-sm:mx-auto max-sm:text-center">
            <Text as="p" size="text2" className="text-[#373737]">
              {description}
            </Text>
          </div>
        </div>
        <div ref={container}>
          {solutions.map((item, i) => {
            const targetScale = 1 - (solutions.length - i) * 0.05;
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
            <Link href="/">Explore</Link>
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
