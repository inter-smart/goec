"use client";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import parse from "html-react-parser";
import { Text } from "@/components/utils/Text";
import { Rating } from "react-simple-star-rating";
import { ActionButton } from "@/components/utils/Button";
import { generateMediaUrl } from "@/lib/utils";

const header_station = {
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
  title: "GO EC, Panampally Nagar, Kochi",
  description: null,
  rating: "4.5",
  location: "KB Square, Panampally Nagar, Kochi, 682036",
  timing: "Open 24 hours",
  total_charger: "04",
  charger_type: "AC, DC",
  power_type: "60 KW, 120 KW, 240 KW",
  socket_type: "ICE 25123, CCS1, CCS2",
  direction: "https://www.google.com/maps",
};

export default function DetailHeroSection({ station = header_station }) {
  return (
    <section className="w-full h-auto min-h-[468px] sm:min-h-[420px] xl:min-h-[540px] 2xl:min-h-[620px] 3xl:min-h-[768px] flex flex-wrap sm:items-end bg-black py-[calc(20px+var(--header-y))_20px] sm:py-[calc(60px+var(--header-y))_80px] xl:py-[calc(100px+var(--header-y))_100px] 2xl:py-[calc(120px+var(--header-y))_120px] relative z-0 max-sm:flex-col max-sm:justify-end">
      <picture className="absolute -z-2 inset-0">
        <source
          media="(max-width: 640px)"
          srcSet={generateMediaUrl(station?.media?.mobile?.media_path)}
        />
        <Image
          src={generateMediaUrl(station?.media?.desktop?.media_path)}
          alt={station?.media?.desktop?.media_alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          className="-z-2 object-cover pointer-events-none"
          quality={100}
        />
      </picture>
      <div className="container">
        <div className="flex flex-wrap sm:items-end justify-between flex-col sm:flex-row">
          <div className="flex-1">
            <Heading
              as="h1"
              size="heading1"
              className="text-white max-w-[468px] sm:max-w-[576px] xl:max-w-[768px] 2xl:max-w-[860px] 3xl:max-w-[1080px] mb-[15px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]"
            >
              {parse(station?.station)}
            </Heading>
            <div className="flex flex-wrap gap-[5px_10px] sm:gap-[15px] xl:gap-[25px]">
              {station?.place && (
                <Text
                  as="div"
                  size="none"
                  className="text-[10px] sm:text-[10px] xl:text-[14px] 2xl:text-[16px] leading-tight font-medium text-white"
                >
                  <Image
                    src={"/images/icon-location.svg"}
                    alt={"icon-location"}
                    width={24}
                    height={24}
                    className="w-[14px] xl:w-[16px] 2xl:w-[18px] mr-[4px] xl:mr-[8px] inline-block"
                  />
                  {station?.place}
                </Text>
              )}
              {station?.opening_time && (
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
                    className="w-[14px] xl:w-[16px] 2xl:w-[18px] mr-[8px] inline-block"
                  />
                  Open {station?.opening_time} hours
                </Text>
              )}
            </div>
          </div>
          <div className="flex flex-wrap flex-row-reverse xl:flex-col items-center max-xl:justify-between max-xl:w-full max-xl:mt-3">
            <div className="sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]">
              <Rating
                readonly
                size={26}
                className="[&_svg]:inline-block [&_svg]:size-[14px] sm:[&_svg]:size-[18px] xl:[&_svg]:size-[26px]"
                fillColor="#ffd24f"
                initialValue={parseInt(station?.star_ratings)}
              />
            </div>
            <div>
              <ActionButton
                size={"lg"}
                className="text-black bg-white min-w-[120px] sm:min-w-[140px] xl:min-w-[160px] 2xl:min-w-[180px] ml-auto"
                asChild
              >
                <a
                  href={station?.location_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/images/findChargingDetail-btn-icon.svg"}
                    alt={"findChargingDetail-btn-icon"}
                    width={24}
                    height={24}
                    className="w-[14px] xl:w-[16px] 2xl:w-[18px]"
                  />
                  Get Direction
                </a>
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
      <div className="container sm:absolute z-1 top-[calc(100%-20px)] sm:top-[calc(100%-50px)] left-0 right-0 max-sm:w-full max-sm:mt-3">
        <div className="w-full h-auto bg-black/20 sm:bg-white rounded-[15px] xl:rounded-[20px] p-[10px] sm:p-[15px] xl:p-[30px] 2xl:p-[40px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)]">
          <div className="flex flex-wrap sm:flex-nowrap justify-between items-center [&>*]:p-[5px] sm:[&>*]:p-[10px] xl:[&>*]:p-[10px_25px] 2xl:[&>*]:p-[15px_30px] max-sm:[&>*]:w-1/2">
            {station?.total_charger && (
              <>
                <div>
                  <Text
                    as="div"
                    size="none"
                    className="text-[10px] sm:text-[10px] xl:text-[14px] 2xl:text-[16px] leading-tight font-medium text-center text-[#a9a9a9] [&>span]:text-[102%] [&>span]:text-medium [&>span]:text-white sm:[&>span]:text-black max-xl:[&>span]:block"
                  >
                    Total chargers : <span>{station?.total_charger}</span>
                  </Text>
                </div>
                <div className="w-[1px] h-[20px] xl:h-[30px] 2xl:h-[40px] bg-[#a9a9a9] !p-0 max-sm:hidden" />
              </>
            )}
            {station?.charger_type && (
              <>
                <div>
                  <Text
                    as="div"
                    size="none"
                    className="text-[8px] sm:text-[10px] xl:text-[14px] 2xl:text-[16px] leading-tight font-medium text-[#a9a9a9] [&>span]:text-[102%] [&>span]:text-medium [&>span]:text-white sm:[&>span]:text-black max-xl:[&>span]:block max-xl:text-center"
                  >
                    Charger Types : <span>{station?.charger_type}</span>
                  </Text>
                </div>
                <div className="w-[1px] h-[20px] xl:h-[30px] 2xl:h-[40px] bg-[#a9a9a9] !p-0 max-sm:hidden" />
              </>
            )}
            {station?.power && (
              <>
                <div>
                  <Text
                    as="div"
                    size="none"
                    className="text-[8px] sm:text-[10px] xl:text-[14px] 2xl:text-[16px] leading-tight font-medium text-[#a9a9a9] [&>span]:text-[102%] [&>span]:text-medium [&>span]:text-white sm:[&>span]:text-black max-xl:[&>span]:block max-xl:text-center"
                  >
                    Power : <span>{station?.power}</span>
                  </Text>
                </div>
                <div className="w-[1px] h-[20px] xl:h-[30px] 2xl:h-[40px] bg-[#a9a9a9] !p-0 max-sm:hidden" />
              </>
            )}
            {station?.socket_type && (
              <>
                <div>
                  <Text
                    as="div"
                    size="none"
                    className="text-[8px] sm:text-[10px] xl:text-[14px] 2xl:text-[16px] leading-tight font-medium text-[#a9a9a9] [&>span]:text-[102%] [&>span]:text-medium [&>span]:text-white sm:[&>span]:text-black max-xl:[&>span]:block max-xl:text-center"
                  >
                    Socket Types : <span>{station?.socket_type}</span>
                  </Text>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
