"use client";

import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import { useState } from "react";
import ReactStars from "react-stars";

const bannerData = {
  title: "GO EC, Pnampally Nagar, Kochi",
  btn_text: "Get DIrection",
  btn_link: "/",
  address: "KB Square, Panampally Nagar, Kochi, 682036",
  time: "Open 24 hours",
};

const stationInfoData = [
  {
    id: 1,
    label: "Unit changes:",
    value: "04",
  },
  {
    id: 2,
    label: "Charger Type:",
    value: "AC, DC",
  },
  {
    id: 3,
    label: "Power:",
    value: "60 KW, 90 KW, 240 KW",
  },
  {
    id: 4,
    label: "Socket Type:",
    value: "IEC 62823, CCSI, CCS2",
  },
];


export default function ChargingStationHero({
  data = bannerData,
  infoData = stationInfoData,
}) {
  const [rating, setRating] = useState(4);

  return (
    <div className="relative h-screen w-full bg-gray-100 z-0">
      <div className="bg-[#00000052] w-full h-full absolute top-0 left-0 z-10"></div>
      <div className="w-full h-full aspect-[1440/714] z-0">
        <Image
          src="/images/Blog_1.png"
          alt="Charging Station Hero"
          fill
          className="w-full object-cover"
          quality={100}
        />
      </div>

      {/* CARD SECTION */}
      <div className="absolute w-full bottom-[120px] z-10">
        <div className="container mx-auto">
          <div className="sm:flex justify-between items-center w-full">
            <Heading size={"heading1"} as={"h1"} className="text-white">
              {data.title}
            </Heading>
            <ReactStars
              count={5}
              value={rating}
              // onChange={handleChange}
              size={30}
              color2="#ffd700" // active star color
              edit={false}
            />
          </div>
          <div className="sm:flex justify-between items-center w-full mt-[10px]">
            <div className="sm:flex items-center gap-[16px] mb-[10px]">
              <div className="flex items-center gap-[8px]">
                <Image
                  src="/images/location_icon.png"
                  alt="Charging Station Card"
                  width={10}
                  height={10}
                  className="object-contain"
                />
                <Text as={"p"} size={"text1"} className="text-white">
                  {data.address}
                </Text>
              </div>
              <div className="flex items-center gap-[8px]">
                <Image
                  src="/images/timer.png"
                  alt="Charging Station Card"
                  width={10}
                  height={10}
                  className="object-contain"
                />
                <Text as={"p"} size={"text1"} className="text-white">
                  {data.time}
                </Text>
              </div>
            </div>

            <div>
              <ActionButton
                size={"lg"}
                className="bg-white text-[#0055E0]"
                asChild
              >
                <div className="flex items-center gap-[8px]">
                  <Image
                    src="/images/direction.png"
                    alt="direction Icon"
                    width={10}
                    height={10}
                    className="object-contain"
                  />
                  {data.btn_text}
                </div>
              </ActionButton>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full left-0 -bottom-[40px] xl:bottom-[-60px] 2xl:bottom-[-90px] z-20">
        <div className="container mx-auto">
          <div className="bg-white rounded-[24px] shadow-xl  p-[20px_10px] xl:p-[40px_23px]  2xl:p-[45px_32px]">
          <div className="flex w-full">
              {infoData.map((item, index) => (
                <div key={item.id} className="flex items-center w-full justify-around">
                  {/* Info Item */}
                  <div className="text-center sm:flex sm:items-center sm:gap-[16px]">
                    <Text
                      as="p"
                      size={"text2"}
                      className="text-[#A9A9A9] font-regular  tracking-wide"
                    >
                      {item.label}
                    </Text>
                    <Text
                      as={"p"}
                      size={"text2"}
                      className="text-[#030303] font-medium"
                    >
                      {item.value}
                    </Text>
                  </div>

                  {/* Divider - don't show after last item */}
                  {index < stationInfoData.length - 1 && (
                    <div className="h-12 w-px bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
