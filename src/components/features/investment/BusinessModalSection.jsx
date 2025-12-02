"use client";
import { Heading } from "@/components/utils/Heading";
import { MEDIA_URL } from "@/lib/api";
import { generateMediaUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useMedia from "use-media";

const businessModalData = {
  title: "Explore our Business Models",
  item_business: [
    {
      id: 1,
      tag: "FOCO",
      media: {
        type: "image",
        path: "/images/investment-business_model-1.jpg",
        alt: "investment",
      },
      title: "FOCO – Franchise Owned & Company Operated",
      description:
        "<p>Duis cras auctor sit felis quisque nibh sed in. Sed sed lorem auctor non. Diam diam quam quisque ac nulla laoreet ultrices. Faucibus amet cursus natoque cras orci cursus quisque vitae. Ipsum adipiscing sed mauris orci. Eget ut sed placerat tellus semper porttitor malesuada.</p><ul><li>Lorem ipsum dolor sit amet nisnulla consectetur. Quam id nisl nulla elem.</li><li>Lorem ipsum <b> dolor sit amet nisnulla consectetur.</b> Quam id nisl nulla elem.</li><li>Lorem ipsum dolor sit amet nisnulla onsectetur. Quam id nisl nulla elem.</li><li>Lorem ipsum dolor sit amet nisnulla consectetur. Quam id nisl nulla elem.</li></ul>",
    },
    {
      id: 2,
      tag: "COCO",
      media: {
        type: "image",
        path: "/images/investment-business_model-2.jpg",
        alt: "investment",
      },
      title: "COCO – Company Owned & Company Operated",
      description:
        "<p>Duis cras auctor sit felis quisque nibh sed in. Sed sed lorem auctor non. Diam diam quam quisque ac nulla laoreet ultrices. Faucibus amet cursus natoque cras orci cursus quisque vitae. Ipsum adipiscing sed mauris orci. Eget ut sed placerat tellus semper porttitor malesuada.</p><ul><li>Lorem ipsum<b> dolor sit amet nisnulla consectetur. </b>Quam id nisl nulla elem.</li><li>Lorem ipsum dolor sit amet nisnulla consectetur. Quam id nisl nulla elem.</li><li>Lorem ipsum dolor sit amet nisnulla onsectetur. Quam id nisl nulla elem.</li><li>Lorem ipsum dolor sit amet nisnulla consectetur. Quam id nisl nulla elem.</li></ul>",
    },
    {
      id: 3,
      tag: "I-COCO",
      media: {
        type: "image",
        path: "/images/investment-business_model-3.jpg",
        alt: "investment",
      },
      title: "I-COCO – Invest in Company Owned Company Operated",
      description:
        "<p>Duis cras auctor sit felis quisque nibh sed in. Sed sed lorem auctor non. Diam diam quam quisque ac nulla laoreet ultrices. Faucibus amet cursus natoque cras orci cursus quisque vitae. Ipsum adipiscing sed mauris orci. Eget ut sed placerat tellus semper porttitor malesuada.</p><ul><li>Lorem ipsum<b> dolor sit amet nisnulla consectetur.</b> Quam id nisl nulla elem.</li><li>Lorem ipsum dolor sit amet nisnulla consectetur. Quam id nisl nulla elem.</li><li>Lorem ipsum dolor sit amet nisnulla onsectetur. Quam id nisl nulla elem.</li><li>Lorem ipsum dolor sit amet nisnulla consectetur. Quam id nisl nulla elem.</li></ul>",
    },
  ],
};

export default function BusinessModalSection({ data = businessModalData, title, list }) {
  const [activeId, setActiveId] = useState(list?.[0]?.name);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry?.target?.id); // update active
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px", // 🔑 tweak to trigger while section is centered
        threshold: 0,
      }
    );

    list.forEach((item) => {
      const el = document.getElementById(item.name);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [list]);

  const isMobile = useMedia("(max-width: 640px)");

  return (
    <section className="w-full h-auto block pb-[40px] sm:pb-[60px] xl:pb-[100px] 2xl:pb-[120px]">
      <div className="container">
        <Heading as="h2" size="heading2" className="text-[#030303] mb-[15px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]">
          {title}
        </Heading>
        <div className="flex flex-wrap mx-[-15px] sm:mx-[-20px] xl:mx-[-25px] 2xl:mx-[-30px] [&>*]:px-[15px] sm:[&>*]:px-[20px] xl:[&>*]:px-[25px] 2xl:[&>*]:px-[30px]">
          {!isMobile && (
            <div className="w-full h-full sm:w-[200px] md:w-[276px] xl:w-[300px] 2xl:w-[420px] 3xl:w-[476px] sticky top-[var(--header-y)]">
              <div className="w-full h-full">
                {list?.map((item, index) => (
                  <div key={"business-modal" + index} className="w-full">
                    <Link
                      href={`#${item?.name}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(item.name);
                        if (el) {
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }}
                      className={`text-[14px] sm:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] leading-none font-normal w-full h-[35px] sm:h-[40px] xl:h-[55px] 2xl:h-[60px] p-[10px] sm:p-[15px] xl:p-[20px] 2xl:p-[25px] rounded-[15px] flex items-center justify-between transition-all duration-300
                        ${
                          activeId == item?.name
                            ? "text-white bg-transparent bg-gradient-to-r from-[#0f51a9] via-[#0055e0] to-[#0f51a9] "
                            : "text-[#030303] bg-white hover:bg-[#0f51a9]/10"
                        }
                        `}
                    >
                      <span>{item?.name}</span>
                      <span>
                        <Image
                          src="/images/icon-arrow-right.svg"
                          alt="arrow-right"
                          width={16}
                          height={16}
                          className="w-[16px] xl:w-[20px] 2xl:w-[25px] h-auto block"
                        />
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="w-full sm:w-[calc(100%-200px)] md:w-[calc(100%-276px)] xl:w-[calc(100%-300px)] 2xl:w-[calc(100%-420px)] 3xl:w-[calc(100%-476px)]">
            {list?.map((item, index) => (
              <div key={"business-modal" + index} className="not-last:mb-[20px] xl:not-last:mb-[60px] 2xl:not-last:mb-[60px]">
                <div
                  id={item?.name}
                  className="w-full h-auto block rounded-[20px] bg-[#fcfcfc] border border-[#f0f0f0] overflow-hidden scroll-smooth scroll-m-[var(--header-y)]"
                >
                  <div className="w-full h-auto aspect-[768/268] overflow-hidden relative z-0">
                    <Image
                      src={generateMediaUrl(item?.media?.media_path)}
                      alt={item?.media?.media_alt}
                      fill
                      sizes="512px"
                      className="object-cover transition hover:scale-105"
                    />
                  </div>

                  <div className="w-full h-auto p-[20px_15px] sm:p-[25px_20px] xl:p-[35px_40px] 2xl:p-[40px_50px]">
                    <Heading as="h3" size="heading3" className="font-medium text-[#030303] mb-[10px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]">
                      {item?.title}
                    </Heading>
                    <div className="-p-[20px_15px] sm:-p-[25px_20px] xl:-p-[35px_40px] 2xl:-p-[40px_50px]">
                      <div
                        className="typography [&_ul]:flex [&_ul]:flex-wrap [&_ul]:justify-between [&_ul>li]:w-full sm:[&_ul>li]:w-[45%] [&_ul>li]:list-none [&_ul>li]:relative [&_ul>li]:before:content-[''] [&_ul>li:before]:bg-[url('/images/icon-list.svg')] [&_ul>li]:before:w-[15px] xl:[&_ul>li]:before:w-[20px] 2xl:[&_ul>li]:before:w-[25px] [&_ul>li]:before:aspect-square [&_ul>li]:before:block [&_ul>li]:before:absolute [&_ul>li]:before:top-[1px] sm:[&_ul>li]:before:top-[8px] [&_ul>li]:before:left-[-20px] sm:[&_ul>li]:before:left-[-20px] lg:[&_ul>li]:before:left-[-30px] [&_ul>li]:before:bg-no-repeat [&_ul>li]:before:bg-cover [&_ul>li]:before:bg-center bg-ima"
                        dangerouslySetInnerHTML={{ __html: item?.description }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
