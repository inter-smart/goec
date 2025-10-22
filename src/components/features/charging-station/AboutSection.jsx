// components/AboutUsSection.jsx

import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import parse from "html-react-parser";
import Image from "next/image";

const aboutData = {
    media: {
        media_path: "/images/charging_station_about.png",
        media_alt: "Charging electric car",
    },
    title: "About Us",
    description:   `<p>Lorem ipsum dolor sit amet consectetur. Lorem velit tempus a sit. Porta risus in eget egestas quisque tellus eu nulla convallis. Bibendum ut faucibus bibendum enim bibendum mattis diam. A tincidunt tellus massa aliquam porttitor. </p>
    <br/>
    <p>Nisl nam arcu erat proin elit donec. Id faucibus maecenas adipiscing imperdiet libero. Pretium placerat proin morbi vel faucibus. Turpis magna maecenas commodo potenti vitae enim pretium congue. Vitae quis malesuada amet ut. Potenti at gravida lectus consectetur amet ac egestas.</p>
    `
}

export default function AboutUsSection({
    data= aboutData,
}) {
  return (
    <section className="mt-[120px] lg:mt-[143px] xl:mt-[178px] 2xl:mt-[200px] 3xl:mt-[267px]">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center bg-[#FCFCFC] border-1 border-[#F0F0F0] rounded-[24px]">
          {/* Image Section */}
          <div className="w-full flex aspect-[560/495] justify-center md:justify-start">
            <Image
              src={data.media.media_path}
              alt={data.media.media_alt}
              width={560}
              height={495}
               className="object-cover w-full h-full rounded-l-none rounded-t-[24px] sm:rounded-t-none sm:rounded-l-[24px]"
      />
          </div>
          {/* Text Section */}
          <div className="w-full max-sm:my-[24px] px-[35px_23px] xl:px-[43px_29px] 2xl:px-[48px_32px] 3xl:px-[64px_43px]">
            <Heading as={"h2"} size={"heading2"} className="font-semibold mb-[20px] lg:mb-[35px] xl:mb-[43px] 2xl:mb-[48px] 3xl:mb-[64px]">{data.title}</Heading>
            <Text as="div" size={"text2"} className="text-[#373737]">
              {parse(data.description)}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
