import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { cn, generateMediaUrl, parseDescriptionToListItems } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ChargingStationForm from "@/components/form/ChargingStationForm";
import RecaptchaProvider from "@/components/layout/CaptchaWrapper";

const local_data = {
  title: "Explore our chargers",
  items: [
    {
      id: 1,
      media: {
        type: "image",
        path: "/images/charging-station-1.png",
        alt: "charging-station",
      },
      title: "ECM 25kW",
      features: ["Module Capacity Range: 25kW", "Super Fast DC Charger Connector : CCS 2"],
      button: {
        link: null,
        label: "Book Now",
      },
    },
    {
      id: 2,
      media: {
        type: "image",
        path: "/images/charging-station-2.png",
        alt: "charging-station",
      },
      title: "ECM 30kW",
      features: ["Module Capacity Range: 25kW", "Super Fast DC Charger Connector : CCS 2"],
      button: {
        link: null,
        label: "Book Now",
      },
    },
    {
      id: 3,
      media: {
        type: "image",
        path: "/images/charging-station-3.png",
        alt: "charging-station",
      },
      title: "ECM 30kW",
      features: ["Module Capacity Range : 60kW", "Super Fast Dual Gun DC Charger Connectors : CCS 2"],
      button: {
        link: null,
        label: "Book Now",
      },
    },
    {
      id: 4,
      media: {
        type: "image",
        path: "/images/charging-station-4.png",
        alt: "charging-station",
      },
      title: "ECM 120kW",
      features: ["Module Capacity Range :120kW", "Super Fast Dual Gun DC Charger Connectors : CCS 2"],
      button: {
        link: null,
        label: "Book Now",
      },
    },
    {
      id: 5,
      media: {
        type: "image",
        path: "/images/charging-station-5.png",
        alt: "charging-station",
      },
      title: "ECM 120kW",
      features: [
        "Upgradable version from 60kW upto 120kW",
        "Module Capacity Range : 60kW - 120kW",
        "Super Fast Dual Gun DC Charger Connectors : CCS 2",
      ],
      button: {
        link: null,
        label: "Book Now",
      },
    },
    {
      id: 6,
      media: {
        type: "image",
        path: "/images/charging-station-6.png",
        alt: "charging-station",
      },
      title: "ECM 80kW - 160kW",
      features: [
        "Upgradable version from 80kW upto 160kW",
        "Module Capacity Range : 80kW - 160kW",
        "Super Fast Dual Gun DC Charger Connector : CCS 2",
      ],
      button: {
        link: null,
        label: "Book Now",
      },
    },
    {
      id: 7,
      media: {
        type: "image",
        path: "/images/charging-station-7.png",
        alt: "charging-station",
      },
      title: "ECM 60kW-25kW-7.4kW",
      features: ["7.4kW upto 60kW (Upgradable to 120kW)", "Super Fast DC & AC Chargers", "Connectors : CCS 2 & Type 2"],
      button: {
        link: null,
        label: "Book Now",
      },
    },
  ],
};

const className =
  "text-[12px] sm:text-[10px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[22px] leading-tight font-medium text-[#373737] p-[4px_10px] xl:p-[6px_15px] 2xl:p-[10px_20px] rounded-full border border-[#eee] hover:border-primary transition flex";
export default function StationListSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[60px] xl:py-[100px] 2xl:py-[140px]">
      <div className="container">
        <Heading as="h2" size="heading2" className="text-[#030303] max-xl:text-center mb-[15px] sm:mb-[20px] xl:mb-[40px] 2xl:mb-[60px]">
          {data?.title}
        </Heading>
        <div className="flex flex-wrap mx-[-4px] xl:mx-[-10px] 3xl:mx-[-15px] [&>*]:p-[4px] xl:[&>*]:p-[10px] 3xl:[&>*]:p-[15px]">
          {data?.list?.map((item, index) => {
            const lastItem = data?.items?.length - 1;
            return (
              <div key={"stations" + index} className={cn("", index === lastItem ? "w-full" : "w-full 2xs:w-1/2 sm:w-1/2")}>
                <div className="w-full h-full flex flex-col rounded-[10px] sm:rounded-[15px] xl:rounded-[20px] bg-[#fcfcfc] border border-[#f0f0f0] overflow-hidden">
                  <div
                    className={cn(
                      "w-full h-auto block overflow-hidden rounded-[8px] bg-[#f0f0f0] relative z-0",
                      index === lastItem ? "aspect-[6/2] xl:aspect-[1060/284]" : "aspect-[52/28]"
                    )}
                  >
                    <Image
                      src={generateMediaUrl(item?.media?.media_path)}
                      alt={item?.media?.media_alt}
                      width={784}
                      height={426}
                      className="w-full h-full object-contain block transition hover:scale-105"
                      placeholder="blur"
                      blurDataURL="/images/placeholder.jpg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between p-[10px] sm:p-[15px] xl:p-[30px] 2xl:p-[40px]">
                    <div>
                      <Heading as="div" size="heading3" className="max-sm:text-[18px] text-[#030303] mb-[2px] sm:mb-[5px] xl:mb-[15px]">
                        {parse(item?.title)}
                      </Heading>
                      <ul className="flex flex-wrap mx-[-2px] xl:mx-[-4px] [&>*]:p-[2px] xl:[&>*]:p-[4px]">
                        {/* {item?.features?.map((feature, idx) => ( */}
                        <Text as="div" size="none">
                          {parseDescriptionToListItems(item?.features, className)}
                        </Text>
                        {/* ))} */}
                      </ul>
                    </div>
                    <div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <ActionButton size={"lg"} variant={"blue"} className="max-w-full mt-[10px] xl:mt-[20px] 2xl:mt-[30px]" asChild>
                            <Link href={"#"}>{item?.button?.text}</Link>
                          </ActionButton>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[576px] xl:max-w-[980px] p-[20px] sm:p-[30px] xl:p-[40px_55px] 2xl:p-[60px] rounded-[15px] xl:rounded-[24px] gap-2 2xl:gap-4">
                          <DialogHeader>
                            <DialogTitle>
                              <Heading as="div" size="heading3" className="font-medium text-start text-[#030303] xl:mb-[10px] 2xl:mb-[15px]">
                                {data?.form_title}
                              </Heading>
                            </DialogTitle>
                            <DialogDescription className={"sr-only"}>
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, id.
                            </DialogDescription>
                          </DialogHeader>
                          <RecaptchaProvider>
                            <ChargingStationForm chargerId={item?.id} />
                          </RecaptchaProvider>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
