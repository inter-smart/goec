import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";


const local_data = {
  media: {
    media_path: "/images/merchantile-connect-bg.jpg",
    media_alt: "merchantile-connect-bg",
  },
  description:
    "Invest in GO EC Mercantile.<br /> Become a part of the Greener Nepal.",
  button: {
    text: "Get Connected Now",
    link: " /contact",
  },
};

export default function MerchantileConnectSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block py-[15px] sm:py-[30px] xl:py-[60px] 2xl:py-[80px]">
      <div className="w-full sm:w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto px-2">
        <div className="w-full h-auto overflow-hidden rounded-[20px] xl:rounded-[30px] p-[20px] sm:p-[40px] xl:p-[60px_70px] 2xl:p-[80px] 3xl:p-[100px] relative z-0">
          <Image
            src={data?.media?.media_path}
            alt={data?.media?.media_alt}
            fill
            sizes={"1820px"}
            className="-z-1 transition hover:scale-105"
          />
          <div className="flex flex-wrap justify-between items-center gap-[20px] max-sm:flex-col">
            <div>
              <Heading
                as="h2"
                size="heading2"
                className="leading-tight text-white max-sm:text-center xl:max-w-[700px] 2xl:max-w-[1020px] mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]"
              >
                {parse(data?.description)}
              </Heading>
              <div>
                <ActionButton
                  size={"lg"}
                  variant={"blue"}
                  className="w-[140px] sm:w-[160px] xl:w-[200px] 2xl:w-[220px] 3xl:w-[240px]"
                  asChild
                >
                  <Link href={data?.button?.link}>{data?.button?.text}</Link>
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
