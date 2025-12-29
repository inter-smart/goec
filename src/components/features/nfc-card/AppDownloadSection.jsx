import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { generateMediaUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const local_data = {
  title: "Get Your EV Charging Smart Card Today!",
  button: {
    type: "internal",
    label: "Book card now",
    link: "#",
  },
};

export default function AppDownloadSection({ title = local_data?.title, button = local_data?.button, media }) {
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[80px] xl:py-[120px] 2xl:py-[140px]">
      <div className="w-full sm:w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto px-2">
        <div className="w-full h-auto overflow-hidden rounded-[20px] xl:rounded-[30px] p-[20px] sm:p-[40px] xl:p-[70px] 2xl:p-[80px] 3xl:p-[100px] relative z-0">
          <Image
            src={media?.media_path ? generateMediaUrl(media?.media_path) : "/images/nfccard-appdownload-bg.jpg"}
            alt={media?.media_alt || "nfccard-appdownload-bg"}
            fill
            sizes={"1820px"}
            className="-z-1 object-cover"
          />
          <div className="flex flex-wrap justify-between items-center gap-[10px] xl:gap-[20px] max-sm:flex-col">
            <div className="flex-1">
              <Heading
                as="h2"
                size="heading2"
                className="leading-tight text-white max-sm:text-center max-w-[320px] sm:max-w-[376px] xl:max-w-[500px] 2xl:max-w-[576px] mb-[15px] sm:mb-0"
              >
                {title}
              </Heading>
            </div>

            <div className="w-[140px] sm:w-[180px] xl:w-[276px] 2xl:w-[320px] flex">
              <ActionButton
                size={"lg"}
                className="text-black bg-white max-w-[130px] 3xs:max-w-[140px] sm:max-w-[160px] xl:max-w-[200px] 2xl:max-w-[220px] ml-auto hover:text-white"
                asChild
              >
                <Link target="_blank" href={button?.link}>{button?.text || button?.label}</Link>
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}