"use client";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import parse from "html-react-parser";
import { Text } from "@/components/utils/Text";
import { Rating } from "react-simple-star-rating";

const header_data = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/findChargingStaton-hero-1.jpg",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/findChargingStaton-hero-1.jpg",
      alt: "hero",
    },
  },
  title: "GO EC, Pnampally Nagar, Kochi",
  description: null,
  rating: "4.5",
  location: "KB Square, Panampally Nagar, Kochi, 682036",
  timing: "Open 24 hours",
  total_charger: "04",
  charger_type: "AC, DC",
  power_type: "60 KW, 120 KW, 240 KW",
  socket_types: "ICE 25123, CCS1, CCS2",
};

export default function DetailHeroSection({ data = header_data }) {
  return (
    // <section className="w-full h-auto block py-[30px] sm:py-[60px] xl:py-[100px] 2xl:py-[140px]">
    //   <div className="container">
    //     <Heading
    //       as="h2"
    //       size="heading2"
    //       className="text-[#030303] max-xl:text-center mb-[15px] sm:mb-[20px] xl:mb-[40px] 2xl:mb-[60px]"
    //     >
    //       {data?.title}
    //     </Heading>
    //   </div>
    // </section>

    <section className="w-full h-auto min-h-[268px] sm:min-h-[420px] xl:min-h-[540px] 2xl:min-h-[620px] 3xl:min-h-[768px] flex items-center bg-black py-[calc(40px+var(--header-y))_40px] sm:py-[calc(60px+var(--header-y))_60px] xl:py-[calc(100px+var(--header-y))_100px] 2xl:py-[calc(120px+var(--header-y))_120px] relative z-0">
      <picture className="absolute -z-2 inset-0">
        <source
          media="(max-width: 640px)"
          srcSet={data?.background_media?.mobile?.path}
        />
        <Image
          src={data?.background_media?.desktop?.path}
          alt={data?.background_media?.desktop?.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          className="-z-2 object-cover pointer-events-none"
          quality={100}
        />
      </picture>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-[60%]">
            <Heading
              as="h1"
              size="heading1"
              className="line-clamp-3 text-transparent bg-linear-to-r from-[#999] via-50% via-white to-white bg-clip-text max-w-[320px] sm:max-w-[468px] xl:max-w-[620px] 2xl:max-w-[668px] 3xl:max-w-[820px] mx-auto"
            >
              {parse(data?.title)}
            </Heading>
            <div className="flex flex-wrap gap-[10px] xl:gap-[25px]">
              {data?.location && (
                <Text
                  as="div"
                  size="none"
                  className="text-[8px] sm:text-[10px] xl:text-[14px] 2xl:text-[16px] leading-tight font-medium text-white"
                >
                  <Image
                    src={"/images/icon-location.svg"}
                    alt={"icon-location"}
                    width={24}
                    height={24}
                    className="w-[14px] xl:w-[16px] 2xl:w-[20px] mr-[10px] inline-block"
                  />
                  {data?.location}
                </Text>
              )}
              {data?.timing && (
                <Text
                  as="div"
                  size="none"
                  className="text-[8px] sm:text-[10px] xl:text-[14px] 2xl:text-[16px] leading-tight font-medium text-white"
                >
                  <Image
                    src={"/images/icon-clock.svg"}
                    alt={"icon-clock"}
                    width={24}
                    height={24}
                    className="w-[14px] xl:w-[16px] 2xl:w-[20px] mr-[10px] inline-block"
                  />
                  {data?.timing}
                </Text>
              )}
            </div>
          </div>
          <div className="w-full sm:w-[40%]">
            <div>
              <Rating
                readonly
                size={20}
                className="[&_svg]:inline-block"
                fillColor="#ffd24f"
                initialValue={parseInt(data?.rating)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
