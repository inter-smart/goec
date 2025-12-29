"use client";

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
import { cn } from "@/lib/utils";
import Image from "next/image";
import parse from "html-react-parser";
import { ActionButton } from "@/components/utils/Button";
import Link from "next/link";
import CareerModal from "@/components/common/CareerModal";
import { toast } from "sonner";

const local_data = {
  slug: "marketing-intern",
  title: "Marketing Intern",
  department: "Marketing",
  job_location: "Kochi",
  job_type: "Full Time",
  experience: "Fresher",
  description:
    "<p>Lorem ipsum dolor sit amet consectetur. Lorem velit tempus a sit. Porta risus in eget egestas quisque tellus eu nulla convallis. Bibendum ut faucibus bibendum enim bibendum mattis diam. A tincidunt tellus massa aliquam porttitor. Placerat mauris neque eu tellus nec urna lacus egestas. Quis justo at egestas nunc sed enim sem et gravida. Ullamcorper sed pellentesque vitae gravida amet mi magna sed blandit.</p><p>Nisl nam arcu erat proin elit donec. Id faucibus maecenas adipiscing imperdiet libero. Pretium placerat proin morbi vel faucibus. Turpis magna maecenas commodo potenti vitae enim pretium congue. Vitae quis malesuada amet ut. Potenti at gravida lectus consectetur amet ac egestas.</p>",
  responsibilities:
    "<ul><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li></ul>",
  requirements:
    "<ul><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li></ul>",
};

export default function CareerInfoSection({ slug, data = local_data }) {
  const copyLink = () => {
    const link = typeof window !== "undefined" ? window.location.href : "";

    navigator.clipboard
      .writeText(link)
      .then(() => {
        toast.success("Link copied!");
      })
      .catch(() => {
        toast.success("Failed to copy link.");
      });
  };
  const isHover = false;
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[40px] xl:py-[70px_100px] 2xl:py-[100px_120px] mt-(--header-y)">
      <div className="w-full px-4 max-w-full sm:max-w-[576px] lg:max-w-[768px] xl:max-w-[840px] 2xl:max-w-[1000px] 3xl:max-w-[1260px] mx-auto">
        <div className="w-full mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/career">Career</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className={"capitalize"}>{slug}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-wrap justify-between sm:items-center mb-[15px] xl:mb-[30px] 2xl:mb-[30px] max-sm:flex-col">
          <div className="flex-1">
            <Heading
              as="h2"
              size="heading2"
              className="text-[#030303] mb-4 sm:mb-0"
            >
              {data?.title}
            </Heading>
          </div>
          <div>
            <div className="flex flex-wrap gap-[10px] xl:gap-[15px]">
              <div onClick={copyLink}>
                <ActionButton
                  size={"lg"}
                  variant={"link"}
                  className="text-[#0055e0]"
                  asChild
                >
                  <div>
                    <Image
                      src="/images/icon-share.svg"
                      alt="share"
                      width={16}
                      height={16}
                      className="w-[10px] xl:w-[14px] 2xl:w-[16px]"
                    />
                    Share link
                  </div>
                </ActionButton>
              </div>
              <div>
                <CareerModal data={data}>
                  <ActionButton
                    size={"lg"}
                    variant={"blue"}
                    className={cn(
                      "text-white min-w-[120px] xl:min-w-[140px] 2xl:min-w-[160px]",
                      "hover:bg-transparent hover:bg-gradient-to-r hover:from-[#2cc59c] hover:via-[#00eea8] hover:to-[#2cc59c]"
                    )}
                  >
                    Apply Now
                  </ActionButton>
                </CareerModal>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#fcfcfc] border border-[#f0f0f0] rounded-[20px] xl:rounded-[30px] p-[8px_15px] xl:p-[15px_20px] 2xl:p-[20px_30px] flex items-center mb-[20px] xl:mb-[40px] 2xl:mb-[60px]">
          {data?.experience && (
            <>
              <Text
                as="div"
                size="text3"
                className={cn("!font-medium text-[#373737]")}
              >
                {data?.experience}
              </Text>
              <div className="w-[1px] h-[10px] xl:h-[15px] bg-[#373737] mx-[10px] xl:mx-[20px]" />
            </>
          )}
          {data?.job_type && (
            <>
              <Text
                as="div"
                size="text3"
                className={cn("!font-medium text-[#373737]")}
              >
                {data?.job_type}
              </Text>
              <div className="w-[1px] h-[10px] xl:h-[15px] bg-[#373737] mx-[10px] xl:mx-[20px]" />
            </>
          )}
          {data?.job_type && (
            <>
              <Text
                as="div"
                size="text3"
                className={cn("!font-medium text-[#373737]")}
              >
                {data?.job_location}
              </Text>
            </>
          )}
        </div>
        <Heading
          as="h3"
          size="heading3"
          className="text-[#030303] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
        >
          About
        </Heading>
        <div className="typography mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]">
          {parse(data?.description)}
        </div>
        <Heading
          as="h3"
          size="heading3"
          className="text-[#030303] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
        >
          Responsibilities
        </Heading>
        <div className="typography mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]">
          {parse(data?.responsibilities)}
        </div>
        <Heading
          as="h3"
          size="heading3"
          className="text-[#030303] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
        >
          Requirements
        </Heading>
        <div className="typography mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]">
          {parse(data?.requirements)}
        </div>
        <div className="mt-[20px] sm:mt-[30px] xl:mt-[40px] 2xl:mt-[50px]">
          <CareerModal data={data}>
            <ActionButton
              size={"lg"}
              variant={"blue"}
              className={cn(
                "w-full",
                "hover:bg-transparent hover:bg-gradient-to-r hover:from-[#2cc59c] hover:via-[#00eea8] hover:to-[#2cc59c]",
                "not-hover:[&_.notHover]:scale-100 not-hover:[&_.isHover]:scale-0",
                "hover:[&_.notHover]:scale-0 hover:[&_.isHover]:scale-100"
              )}
            >
              Apply Now
              <span className="w-6 xl:w-8 aspect-4/2 relative z-0">
                <Image
                  src="/images/icon-btn-arrow-light.svg"
                  alt="icon-btn-arrow-light"
                  width={41}
                  height={23}
                  className="max-w-[75%] block notHover transition duration-600 absolute z-0 inset-0 m-auto ml-0"
                />
                <Image
                  src="/images/icon-btn-arrow-hover.svg"
                  alt="icon-btn-arrow-hover"
                  width={41}
                  height={23}
                  className="block isHover transition duration-600 absolute z-0 inset-0 m-auto"
                />
              </span>
            </ActionButton>
          </CareerModal>
        </div>
      </div>
    </section>
  );
}
