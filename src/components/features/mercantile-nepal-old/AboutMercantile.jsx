"use client";

import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { generateMediaUrl } from "@/lib/utils";
import parse from "html-react-parser";
import Image from "next/image";

const aboutData = {
  title: "About GO EC Mercantile",
  description: `<p> GO EC Auto Tech PVT LTD is on a mission to build the foundation for the EV Revolution in India. We’re strategically placing electric vehicle chargers nationwide, making it convenient for EV drivers to travel long distances without fear of a drained battery or limited power.</p>
  <br/> 
  <p>
   Partnering with a variety of businesses we're installing chargers in their properties. As our network of charging stations expands, the EV market in India is surging, reducing concerns about charging accessibility and driving increased EV adoption`,
  about_media_path: "/images/about_merchantile.png",
  about_media_alt: "GO EC Auto Tech PVT LTD",
  vision_media_path: "/images/header-logo 4.png",
  vision_media_alt: "GO EC Auto Tech PVT LTD",
  vision:
    "<p>Our vision is to operate a chain of EV Charging Stations across India and positioning GOEC as an authentic player in the EV industry by offering the best service to the end-user with guaranteed quality.</p>",
  mission: "<p>Our mission is to develop a highly successful and profitable electric vehicle charging station business with the state of an</p>",
  mission_media_path: "/images/mercantile_logo.png",
  mission_media_alt: "GO EC Auto Tech PVT LTD",
};

export default function AboutMercantile({ aboutData }) {
  const boxes = aboutData?.boxes;
  return (
    <section className="w-full h-auto block py-[20px] sm:py-[60px] xl:py-[100px] 2xl:py-[140px]">
      <div className="container mx-auto">
        <div className=" ">
          {/* --- Content Wrapper --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[40px] xl:gap-[50px] 2xl:gap-[56px] 3xl:gap-[75px] items-center">
            <div className="h-full flex flex-col">
              <Heading as={"h2"} size={"heading2"} className="text-[#303030] mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[0=90px] 3xl:mb-[120px]">
                {aboutData.title}
              </Heading>

              {/* --- Left: Text --- */}
              <Text as="div" size={"text2"} className="text-[#303030] mb-[20px] sm:mb-[30px] xl:mb-[40px] 2xl:mb-[60px]">
                {parse(aboutData.description)}
              </Text>
            </div>

            {/* --- Right: Image --- */}
            <div className="flex justify-center">
              <div className="relative w-full aspect-[588/471] rounded-[24px] overflow-hidden shadow-md">
                <Image
                  src={generateMediaUrl(aboutData.mainImage)}
                  alt={aboutData.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-[20px] lg:mt-[30px] xl:mt-[40px] 3xl:mt-[55px] gap-[24px]">
          {boxes?.map((box) => (
            <div className="bg-[#FCFCFC] p-[20px] 2xl:p-[40px] rounded-[24px]  border-1 border-[#F0F0F0E5] transition-shadow">
              <Image src={generateMediaUrl(box?.mediaPath)} alt={box?.mediaAlt} width={114} height={56} className="object-contain" />
              <Text as="div" size={"text2"} className="text-[#373737] mt-[20px] lg: 2xl:mt-[60px] 3xl:mt-[80px]">
                {parse(box?.description)}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
