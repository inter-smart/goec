import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

const local_data = {
  media: {
    type: "image",
    path: "/images/mobileapp-appdownload-1.png",
    alt: "mobileapp-appdownload-1",
  },
  title: "Start your EV journey with confidence - anywhere, anytime.",
  button: [
    {
      media: {
        type: "image",
        path: "/images/app_info-ios.svg",
        alt: "ios",
      },
      type: "ios",
      link: "#",
    },
    {
      media: {
        type: "image",
        path: "/images/app_info-android.svg",
        alt: "android",
      },
      type: "android",
      link: "#",
    },
  ],
};

export default function AppDownloadSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block py-[30px_40px] sm:py-[40px_80px] xl:py-[80px_140px] 2xl:py-[100px_160px]">
      <div className="w-full sm:w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto px-2">
        <div className="w-full h-auto overflow-hidden rounded-[20px] xl:rounded-[30px] p-[20px] sm:p-[40px] xl:p-[60px_70px] 2xl:p-[80px] 3xl:p-[100px] relative z-0">
          <Image
            src={"/images/mobileapp-appdownload-bg.jpg"}
            alt={"mobileapp-appdownload-bg"}
            fill
            sizes={"1820px"}
            className="-z-1"
          />
          <div className="flex flex-wrap justify-between items-center gap-[20px] max-sm:flex-col">
            <div className="flex-1">
              <Heading
                as="h2"
                size="heading2"
                className="leading-tight text-white max-sm:text-center xl:max-w-[640px] 2xl:max-w-[768px] mb-[20px] sm:mb-[30px] xl:mb-[50px] 2xl:mb-[60px]"
              >
                {data?.title}
              </Heading>
              <div className="flex flex-wrap space-x-[5px] xl:space-x-[10px] max-sm:justify-center">
                {data?.button?.map((item, index) => (
                  <div key={"app_download" + index}>
                    <a
                      href={item?.link}
                      className="w-[80px] sm:w-[100px] xl:w-[130px] 2xl:w-[140px] h-auto aspect-[4/2] block transition hover:scale-105"
                    >
                      <Image
                        src={item?.media?.path}
                        alt={item?.media?.alt}
                        width={140}
                        height={50}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[140px] sm:w-[180px] xl:w-[276px] 2xl:w-[320px] pr-[20px] xl:pr-[40px] 2xl:pr-[60px]">
              <Image
                src={data?.media?.path}
                alt={data?.media?.alt}
                width={276}
                height={312}
                quality={100}
                className="w-full h-auto object-contain transition hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
