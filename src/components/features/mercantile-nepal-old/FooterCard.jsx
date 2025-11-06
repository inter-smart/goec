import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerData = {
  title: "Invest in GO EC Mercantile. Become a part of the Greener Nepal",
  button: { label: "Get Connected Now", link: "/contact" },
};

export default function FooterCard({ data = footerData, title = null }) {
  return (
    <div>
      <section className="w-full h-auto block pt-[40px] sm:pt-[80px] xl:pt-[120px] 2xl:pt-[140px]">
        <div className="w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto">
          <div className="w-full h-auto block overflow-hidden rounded-[20px] xl:rounded-[25px] bg-black relative">
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[#003894] to-[#0055E0] opacity-40 z-10"></div>
            <div className="w-full h-full absolute top-0 right-0">
              <Image
                src="/images/merchantile_footer.png"
                alt="overlay"
                //   neeed to move right side
                fill
                className="z-0 pointer-events-none object-cover xs:object-contain object-right h-full w-full"
              />
            </div>

            <div className="flex flex-wrap items-center relative z-20">
              <div className="w-full sm:w-[calc(100%-300px)] md:w-[calc(100%-376px)] xl:w-[calc(100%-400px)] 2xl:w-[calc(100%-468px)]">
                <div className="w-full p-[15px] 3xs:p-[20px] sm:p-[30px] xl:p-[70px] 2xl:p-[80px]">
                  <Heading
                    as="h2"
                    size="heading2"
                    className="leading-tight font-medium text-white mb-[20px] sm:mb-[40px] xl:mb-[50px] 2xl:mb-[60px]"
                  >
                    {title ? title : data.title}
                  </Heading>
                  <div className="flex space-x-[10px] xl:space-x-[15px]">
                    <ActionButton
                      size={"lg"}
                      variant={"blue"}
                      className="w-[160px] xl:w-[205px] 2xl:w-[230px] 3xl:w-[306px]"
                      asChild
                    >
                      <Link href={data.button.link}>{data.button.label}</Link>
                    </ActionButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
