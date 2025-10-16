"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
const data = [
  {
    id: 1,
    question: "What is entrepreneurship?",
    answers:
      "Entrepreneurship is the process of designing, launching, and running a new business, often initially a small startup. It involves taking on financial risks in the hope of profit and growth.",
  },
  {
    id: 2,
    question: "How do I start my own business?",
    answers:
      "To start your own business, begin by identifying a viable idea, researching your target market, developing a business plan, securing funding, and registering your company legally.",
  },
  {
    id: 3,
    question: "What challenges do entrepreneurs face?",
    answers:
      "Entrepreneurs often face challenges such as securing capital, managing cash flow, hiring the right team, adapting to market changes, and maintaining work-life balance.",
  },
  {
    id: 4,
    question: "What makes a business successful?",
    answers:
      "A successful business typically has a strong value proposition, effective leadership, a clear understanding of its target audience, adaptability, and consistent delivery of quality products or services.",
  },
  {
    id: 5,
    question: "How important is innovation in entrepreneurship?",
    answers:
      "Innovation is vital in entrepreneurship as it helps businesses differentiate themselves, meet changing customer needs, and stay competitive in a rapidly evolving market.",
  },
];

export default function FaqItems({ data }) {
  return (
    <Accordion type="single" defaultValue={"accordion-" + data?.[0]?.id} collapsible>
      {data?.map((item, index) => (
        <AccordionItem
          key={"AccordionItem-" + index}
          value={"accordion-" + item?.id}
          className={`!border border-[#F0F0F0] bg-[#FCFCFC] rounded-[24px] 
  data-[state=open]:bg-white 
  first:mt-0 mt-[24px]`}
        >
          <AccordionTrigger className="group text-[12px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[32px] font-medium leading-tight 3xl:p-[30px] xl:p-[20px] sm:p-[15px] p-[10px_15px] items-center hover:no-underline focus:no-underline [&_svg]:w-6 [&_svg]:h-6 [&_svg]:group-data-[state=open]:text-blue-500 [&_svg]:transition-colors [&_svg]:duration-300">
            {item?.question}
          </AccordionTrigger>
          <AccordionContent className="3xl:px-[30px] xl:px-[20px] px-[15px]">
            <div className="typography max-w-[90%] xl:max-w-[70%]">
              <p className="text-[#757575] text-[12px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[24px]">{item?.answers}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
