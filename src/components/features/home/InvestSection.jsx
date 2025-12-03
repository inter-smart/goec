"use client";
import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import { motion } from "motion/react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MEDIA_URL } from "@/lib/api";

// const investData = {
//   media: {
//     mobile: {
//       type: "image",
//       path: "/images/invest-1.jpg",
//       alt: "invest",
//     },
//     desktop: {
//       type: "image",
//       path: "/images/invest-1.jpg",
//       alt: "invest",
//     },
//   },
//   title: "Invest in India's fast-growing electric vehicle infrastructure.",
//   button: {
//     link: "/",
//     label: "Learn more",
//   },
//   item_invest: [
//     {
//       title: "FOCO",
//       subtitle: "For people who want to maximize their returns by owning a charging station.",
//       description:
//         "<p>Duis cras auctor sit felis quisque nibh sed in. Sed sed lorem auctor non. Diam diam quam quisque ac nulla laoreet ultrices. Faucibus amet cursus natoque cras orci cursus quisque vitae. Ipsum adipiscing sed mauris orci. Eget ut sed placerat tellus semper porttitor malesuada mauris. Interdum aenean pellentesque amet suspendisse lorem.</p>",
//       button: {
//         link: "/",
//         label: "Learn more",
//       },
//     },
//     {
//       title: "Invest in COCO",
//       subtitle: "For people who want to maximize their returns by owning a charging station.",
//       description:
//         "<p>Duis cras auctor sit felis quisque nibh sed in. Sed sed lorem auctor non. Diam diam quam quisque ac nulla laoreet ultrices. Faucibus amet cursus natoque cras orci cursus quisque vitae. Ipsum adipiscing sed mauris orci. Eget ut sed placerat tellus semper porttitor malesuada mauris. Interdum aenean pellentesque amet suspendisse lorem.</p>",
//       button: {
//         link: "/",
//         label: "Learn more",
//       },
//     },
//     {
//       title: "COCO",
//       subtitle: "For people who want to maximize their returns by owning a charging station.",
//       description:
//         "<p>Duis cras auctor sit felis quisque nibh sed in. Sed sed lorem auctor non. Diam diam quam quisque ac nulla laoreet ultrices. Faucibus amet cursus natoque cras orci cursus quisque vitae. Ipsum adipiscing sed mauris orci. Eget ut sed placerat tellus semper porttitor malesuada mauris. Interdum aenean pellentesque amet suspendisse lorem.</p>",
//       button: {
//         link: "/",
//         label: "Learn more",
//       },
//     },
//   ],
// };

export default function InvestSection({ milestoneDescription, investMedia, investList }) {
  return (
    <section className="w-full h-auto block py-[40px_30px] sm:py-[80px_60px] xl:py-[100px_80px] 2xl:py-[120px_90px]">
      <div className="container">
        <div className="flex flex-wrap sm:items-center mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px] max-sm:flex-col">
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
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 max-sm:mb-[20px]"
          >
            <Heading as="h2" size="heading2" className="text-[#303030] xl:max-w-[568px] 2xl:max-w-[800px]">
              {milestoneDescription}
            </Heading>
          </motion.div>
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
            viewport={{ once: false, amount: 0.3 }}
          >
            <ActionButton variant="link" className="text-black" asChild>
              <Link href="/investment">Learn More</Link>
            </ActionButton>
          </motion.div>
        </div>
      </div>
      <div className="w-full sm:w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto px-1.5 mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 0.2,
          }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full aspect-[1820/420] overflow-hidden rounded-[20px] sm:rounded-[30px] relative z-0"
        >
          <picture className="absolute -z-1 inset-0">
            <source media="(max-width: 640px)" srcSet={`${MEDIA_URL}${investMedia?.mobile?.media_path}`} />
            <Image
              src={`${MEDIA_URL}${investMedia?.desktop?.media_path}`}
              alt={investMedia?.desktop?.media_alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
              className="-z-1 transition hover:scale-105"
            />
          </picture>
        </motion.div>
      </div>
      <div className="container">
        <Accordion type="single" collapsible>
          {investList.map((item, index) => {
            const sanitizedText = DOMPurify.sanitize(item?.description);
            return (
              <AccordionItem key={"invest" + index} value={"item-" + index} className="border-0">
                <AccordionTrigger className="hover:underline-none [&>svg]:w-0 [&>svg]:hidden py-[20px] xl:py-[30px] 2xl:py-[40px] 3xl:py-[50px]">
                  <div className="w-full flex items-center space-x-[20px] xl:space-x-[60px] 2xl:space-x-[80px]">
                    <div className="w-[10%] sm:w-[12%]">
                      <div className="text-[14px] sm:text-[22px] lg:text-[26px] xl:text-[34px] 2xl:text-[40px] 3xl:text-[48px] leading-none font-medium whitespace-nowrap text-ellipsis text-[#030303] w-[40px] sm:w-[80px] xl:w-[120px] 2xl:w-[140px] aspect-square bg-white border border-[#030303]/20 rounded-full flex items-center justify-center">
                        {index + 1 < 10 ? "0" + (index + 1) : index + 1}
                      </div>
                    </div>
                    <div className="w-[40%] sm:w-[38%]">
                      <div className="text-[14px] sm:text-[22px] lg:text-[26px] xl:text-[34px] 2xl:text-[40px] 3xl:text-[48px] leading-none font-medium whitespace-nowrap text-ellipsis text-[#030303]">
                        {item?.title}
                      </div>
                    </div>
                    <div className="w-[50%]">
                      <Text as={"div"} size="text2" className="text-[#030303] ">
                        {item?.subtitle}
                      </Text>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="w-[85%] sm:w-[88%] xl:w-[84%] ml-auto bg-[#fbfbfb] rounded-[20px] sm:rounded-[30px] p-[20px] xl:p-[30px] 2xl:p-[40px] 3xl:p-[50px]">
                    <div className="typography" dangerouslySetInnerHTML={{ __html: sanitizedText }} />
                    <div className="mt-[20px] sm:mt-[30px] xl:mt-[40px] 2xl:mt-[50px]">
                      <ActionButton size="lg" variant={"blue"} className="w-full" asChild>
                        <Link href={"/investment"}>Learn more</Link>
                      </ActionButton>
                    </div>
                  </div>
                </AccordionContent>

                {index + 1 !== investList.length && (
                  <div className="w-full max-w-[85%] sm:max-w-[88%] xl:max-w-[84%] h-[1px] ml-auto border border-dashed border-b-[#949494]" />
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
