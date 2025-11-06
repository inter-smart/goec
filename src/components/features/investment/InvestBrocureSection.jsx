"use client";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import { ActionButton } from "@/components/utils/Button";
import Link from "next/link";

const investBrocureData = {
  title: "Invest in GO EC. Empower progress. Spark a greener India.",
  media: {
    type: "image",
    path: "/images/investment-brochure-1.png",
    alt: "trip",
  },
  title: "Invest in GO EC. Empower progress. Spark a greener India.",
  description: null,
  button: [
    {
      type: "secondary",
      label: "Get Brochure ",
      link: "/",
    },
    {
      type: "primary",
      label: "Connect Now",
      link: "/",
    },
  ],
};

export default function InvestBrocureSection({ data = investBrocureData, title = investBrocureData.title, media }) {
  return (
    <section className="w-full h-auto block pb-[40px] sm:pb-[80px] xl:pb-[120px] 2xl:pb-[140px]">
      <div className="w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto">
        <div className="w-full h-auto block overflow-hidden rounded-[20px] xl:rounded-[25px] px-[15px] 3xs:px-[20px] sm:px-[30px] xl:px-[70px] 2xl:px-[80px] bg-black relative z-0">
          <Image src="/images/investment-brochure-bg.png" alt="overlay" fill sizes="1820px" className="-z-1 pointer-events-none" />

          <div className="flex flex-wrap items-center">
            <div className="w-full sm:w-[calc(100%-300px)] md:w-[calc(100%-376px)] xl:w-[calc(100%-400px)] 2xl:w-[calc(100%-468px)]">
              <div className="w-full py-[15px] 3xs:py-[20px] sm:py-[30px] xl:py-[70px] 2xl:py-[80px]">
                <Heading as="h2" size="heading2" className="leading-tight font-medium text-white mb-[20px] sm:mb-[40px] xl:mb-[50px] 2xl:mb-[60px]">
                  {title ? title : data.title}
                </Heading>
                <div className="flex space-x-[10px] xl:space-x-[15px]">
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

            <div className="w-full sm:w-[300px] md:w-[376px] xl:w-[400px] 2xl:w-[468px]">
              <div>
                {data?.media?.type === "video" ? (
                  <video autoPlay loop muted playsInline className="w-full h-full">
                    <source src={data?.media?.path} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={media?.nedia_path ? `${MEDIA_URL}${media?.media_path}` : "/images/investment-brochure-1.png"}
                    alt={media?.media_alt || "brochure"}
                    width={476}
                    height={268}
                    className="w-full h-full"
                    placeholder="blur"
                    blurDataURL="/images/placeholder.jpg"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
