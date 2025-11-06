import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { Text } from "@/components/utils/Text";
import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";

export default function ConnectSection({ data }) {
  return (
    <section className="w-full h-auto block py-[0_30px] sm:py-[0_60px] xl:py-[0_120px] 2xl:py-[0_140px]">
      <div className="w-full sm:w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto px-2">
        <div className="w-full h-auto overflow-hidden rounded-[20px] xl:rounded-[30px] p-[20px] sm:p-[40px] xl:p-[60px] 2xl:p-[80px] 3xl:p-[100px] relative z-0">
          <Image
            src={"/images/blogdetail-bg.jpg"}
            alt={"blogdetail"}
            fill
            sizes={"1820px"}
            className="-z-1"
          />
          <div className="flex flex-wrap justify-between items-center gap-[20px] max-sm:flex-col">
            <div className="flex-1">
              <Heading
                as="h2"
                size="heading2"
                className="leading-tight text-white max-sm:text-center mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
              >
                {data?.title}
              </Heading>
              <Text
                as="div"
                size="text1"
                className="text-[#ced1d0] max-sm:text-center max-w-full sm:max-w-[576px] xl:max-w-[720px] 2xl:max-w-[1060px]"
              >
                {parse(data?.description)}
              </Text>
            </div>
            <ActionButton
              size={"lg"}
              className="text-black bg-white max-w-[140px] sm:max-w-[180px] xl:max-w-[200px] 2xl:max-w-[220px]"
              asChild
            >
              <Link href={data?.button?.link}>{data?.button?.label}</Link>
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
}
