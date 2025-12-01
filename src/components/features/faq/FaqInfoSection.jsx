"use client";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useState, useMemo } from "react";
import { renderHtml } from "@/components/utils/parseHtml";

export default function FaqInfoSection({ faq_items, categories }) {
  const [activeId, setActiveId] = useState(1);

  // Filter FAQ items based on the active category
  const filteredFaqs = useMemo(() => {
    return faq_items?.list?.filter((item) => item.category === activeId) || [];
  }, [faq_items, activeId]);
  return (
    <section className="w-full h-auto block py-[40px] sm:py-[60px] xl:py-[120px] 2xl:py-[140px]">
      <div className="container">
        <div className="flex flex-wrap sm:mx-[-10px] xl:mx-[-15px] 2xl:mx-[-20px] sm:[&>*]:px-[10px] xl:[&>*]:px-[15px] 2xl:[&>*]:px-[20px]">
          <div className="w-full h-full sm:w-[220px] xl:w-[280px] 2xl:w-[340px] sm:sticky top-[var(--header-y)]">
            <div className="w-full h-full overflow-auto mb-[20px] sm:mb-0 max-sm:flex max-sm:[&>*]:mr-[10px] max-sm:[mask-image:linear-gradient(to_right,black_0%,black_95%,transparent_100%)]">
              {categories?.list?.map((item, index) => (
                <div
                  key={"categories-" + index}
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    "text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[22px] leading-none font-normal text-center sm:text-start min-w-[168px] sm:min-w-full min-h-[40px] sm:min-h-[40px] xl:min-h-[60px] 2xl:h-[80px] p-[10px] sm:p-[15px] xl:p-[20px] 2xl:p-[25px] rounded-[10px] xl:rounded-[15px] flex items-center justify-center sm:justify-between transition-all duration-300 select-none",
                    activeId === item.id
                      ? "text-white bg-transparent bg-gradient-to-r from-[#0f51a9] via-[#0055e0] to-[#0f51a9] "
                      : "text-[#030303] bg-[#0f51a9]/10 sm:bg-white hover:bg-[#0f51a9]/10"
                  )}
                >
                  <span>{item?.title}</span>
                  <span
                    className={cn(
                      activeId === item.id ? "visible" : "invisible",
                      "max-sm:hidden"
                    )}
                  >
                    <Image
                      src="/images/icon-arrow-right.svg"
                      alt="arrow-right"
                      width={16}
                      height={16}
                      className="w-[16px] xl:w-[20px] 2xl:w-[25px] h-auto block"
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-[calc(100%-220px)] xl:w-[calc(100%-280px)] 2xl:w-[calc(100%-340px)]">
            <Accordion type="single" collapsible>
              {filteredFaqs?.map((item, index) => {
                return (
                  <AccordionItem
                    key={"invest" + index}
                    value={"item-" + index}
                    className="[&[data-state=open]]:shadow-[0_2px_60px_0_rgba(116,116,116,0.10)] bg-[#fcfcfc] border border-[#f0f0f0] rounded-[15px] xl:rounded-[20px] not-last:mb-[10px] xl:not-last:mb-[20px] 2xl:not-last:mb-[25px] transition-all duration-300"
                  >
                    <AccordionTrigger className="text-[12px] sm:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-tight font-medium text-[#030303] hover:underline-none [&>svg]:size-[15px] xl:[&>svg]:size-[20px] [&[data-state=open]>svg]:[filter:_brightness(0)_saturate(100%)_invert(17%)_sepia(85%)_saturate(3650%)_hue-rotate(214deg)_brightness(100%)_contrast(101%)] p-[15px] sm:p-[20px] xl:p-[25px] 2xl:p-[30px]">
                      {item?.question}
                    </AccordionTrigger>
                    <AccordionContent
                      className={
                        "xl:max-w-[90%] p-[0_15px_15px] sm:p-[0_20px_20px] xl:p-[0_25px_25px] 2xl:p-[0_30px_30px]"
                      }
                    >
                      <div className="typography [&,_&>p]:text-[#757575]">
                        {renderHtml(item?.answer)}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
