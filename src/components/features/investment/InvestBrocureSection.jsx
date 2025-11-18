"use client";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import { ActionButton } from "@/components/utils/Button";
import Link from "next/link";
import { MEDIA_URL } from "@/lib/api";

import BrochureModal from "@/components/common/BrochureModal";

const investBrocureData = {
  media: {
    type: "image",
    path: "/images/investment-brochure-1.png",
    alt: "trip",
  },
  title: "Invest in GO EC. Empower progress. Spark a greener India.",
  description: null,
  button: [
    {
      type: "primary",
      label: "Connect Now",
      link: "/become-a-partner",
    },
  ],
};

export default function InvestBrocureSection({
  data = investBrocureData,
  title = investBrocureData.title,
  media,
}) {
  return (
    <section className="w-full h-auto block pb-[40px] sm:pb-[80px] xl:pb-[120px] 2xl:pb-[140px]">
      <div className="w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto">
        <div className="w-full h-auto block overflow-hidden rounded-[20px] xl:rounded-[25px] px-[15px] 3xs:px-[20px] sm:px-[30px] xl:px-[70px] 2xl:px-[80px] bg-black relative z-0">
          <Image
            src="/images/invest-download-bg.jpg"
            alt="download-bg"
            fill
            sizes="1820px"
            className="-z-1 object-cover pointer-events-none"
          />

          <div className="flex flex-wrap items-center">
            <div className="w-full max-w-[320px] sm:max-w-[376px] lg:max-w-[468px] xl:max-w-[640px] 2xl:max-w-[678px] 3xl:max-w-[768px]">
              <div className="w-full py-[15px] 3xs:py-[20px] sm:py-[30px] xl:py-[70px] 2xl:py-[80px]">
                <Heading
                  as="h2"
                  size="heading2"
                  className="leading-tight !font-normal text-white mb-[20px] sm:mb-[40px] xl:mb-[50px] 2xl:mb-[60px]"
                >
                  {title ? title : data.title}
                </Heading>
                <div className="flex space-x-[10px] xl:space-x-[15px]">
                  <BrochureModal>
                    <ActionButton
                      size={"lg"}
                      className="text-black bg-white max-w-[120px] xl:max-w-[160px] 2xl:max-w-[176px]"
                    >
                      Get Brochure
                    </ActionButton>
                  </BrochureModal>

                  {data?.button?.map((item, index) =>
                    item?.type === "primary" ? (
                      <ActionButton
                        key={"primary" + index}
                        size={"lg"}
                        variant={"blue"}
                        className="max-w-[120px] xl:max-w-[160px] 2xl:max-w-[176px]"
                        asChild
                      >
                        <Link href={item?.link}>{item?.label}</Link>
                      </ActionButton>
                    ) : (
                      <ActionButton
                        key={"!primary" + index}
                        size={"lg"}
                        className="text-black bg-white max-w-[120px] xl:max-w-[160px] 2xl:max-w-[176px]"
                        asChild
                      >
                        <Link href={item?.link}>{item?.label}</Link>
                      </ActionButton>
                    )
                  )}
                </div>
              </div>
            </div>

          
        </div>
      </div>
    </section>
  );
}
