import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import parse from "html-react-parser";
import { format } from "date-fns";

export default function BlogDetailSection({ data }) {
  return (
    <section className="w-full h-auto block py-[20px] sm:py-[40px_30px] xl:py-[60px_60px] 2xl:py-[80px_70px] mt-(--header-y)">
      <div className="w-full max-w-[940px] 3xl:max-w-[1280px] mx-auto">
        <div className="container">
          <div className="w-full mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Insights</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/blog">Blogs</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Recent blogs</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>India prioritising EV</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="w-full">
            <Heading
              as="h2"
              size="heading2"
              className="font-normal text-[#030303] mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
            >
              {data?.title}
            </Heading>
            <div className="typography">{parse(data?.description)}</div>
            <Text
              as="div"
              size="none"
              className="text-[8px] sm:text-[10px] xl:text-[14px] 2xl:text-[16px] leading-none font-medium text-[#373737] flex gap-[4px] lg:gap-[6px] items-center mb-[15px] xl:mb-[30px] 2xl:mb-[40px]"
            >
              <Image
                src={"/images/icon-calendar.svg"}
                alt={"icon-calendar"}
                width={24}
                height={24}
                className="w-[10px] xl:w-[15px] 2xl:w-[20px] hover:scale-105 transition duration-300"
              />
              {format(new Date(data.timestamp), "dd MMMM yyyy")}
              &nbsp;&nbsp;&nbsp;&nbsp;
              {data?.category}
              <span>-</span>
              {data?.duration}
            </Text>
            <div className="w-full aspect-[10/4] overflow-hidden rounded-[20px] sm:rounded-[25px] relative z-0 mb-[15px] xl:mb-[30px] 2xl:mb-[40px]">
              <Image
                src={data?.media?.path}
                alt={data?.media?.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
                className="-z-1 transition hover:scale-105"
              />
            </div>
            <div className="typography [&_h4]:font-medium [&_h4]:my-[15px] xl:[&_h4]:my-[20px] 2xl:[&_h4]:my-[30px]">
              {parse(data?.sub_description)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
