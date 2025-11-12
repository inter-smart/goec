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

const local_data = {
  slug: "marketing-intern",
  title: "Marketing Intern",
  department: "Marketing",
  location: "Kochi",
  type: "Full Time",
  experience: "Fresher",
  description:
    "<p>Lorem ipsum dolor sit amet consectetur. Lorem velit tempus a sit. Porta risus in eget egestas quisque tellus eu nulla convallis. Bibendum ut faucibus bibendum enim bibendum mattis diam. A tincidunt tellus massa aliquam porttitor. Placerat mauris neque eu tellus nec urna lacus egestas. Quis justo at egestas nunc sed enim sem et gravida. Ullamcorper sed pellentesque vitae gravida amet mi magna sed blandit.</p><p>Nisl nam arcu erat proin elit donec. Id faucibus maecenas adipiscing imperdiet libero. Pretium placerat proin morbi vel faucibus. Turpis magna maecenas commodo potenti vitae enim pretium congue. Vitae quis malesuada amet ut. Potenti at gravida lectus consectetur amet ac egestas.</p>",
  responsibilities:
    "<ul><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li></ul>",
  requirements:
    "<ul><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li><li>Lorem ipsum dolor sit amet consectetur. Fringilla id eget eros venenatis sit sollicitudin morbi. Amet libero placerat in et sed aliquam. Faucibus semper interdum est sem magna donec ultrices eget auctor. Quis.</li></ul>",
};

export default function CareerInfoSection({ slug, data = local_data }) {
  return (
    <section className="w-full h-auto block py-[20px] sm:py-[40px_30px] xl:py-[60px_60px] 2xl:py-[80px_70px] mt-(--header-y)">
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
        <div className="flex flex-wrap justify-between items-center mb-[15px] xl:mb-[30px] 2xl:mb-[30px]">
          <div className="flex-1">
            <Heading
              as="h2"
              size="heading2"
              className="text-[#030303]"
            >
              {data?.title}
            </Heading>
          </div>
          <div>
            <div className="flex">
              <div className="">
                <ActionButton
                  size={"lg"}
                  variant={"link"}
                  className="text-[#0055e0] min-w-[120px] xl:min-w-[160px] 2xl:min-w-[176px]"
                  asChild
                >
                  <Link href={"#"}>
                    <Image
                      src="/images/icon-share.svg"
                      alt="share"
                      width={16}
                      height={16}
                    />
                    Share link
                  </Link>
                </ActionButton>
              </div>
              <div className="">
                <ActionButton
                  size={"lg"}
                  variant={"blue"}
                  className="text-white min-w-[120px] xl:min-w-[140px] 2xl:min-w-[160px]"
                  asChild
                >
                  <Link href={"#"}>Apply Now</Link>
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#fcfcfc] border border-[#f0f0f0] rounded-[20px] xl:rounded-[30px] p-[10px_20px] xl:p-[15px_25px] 2xl:p-[20px_30px] flex items-center mb-[20px] xl:mb-[40px] 2xl:mb-[60px]">
          {data?.experience && (
            <>
              <Text
                as="div"
                size="text3"
                className={cn("font-medium text-[#373737]")}
              >
                {data?.experience}
              </Text>
              <div className="w-[1px] h-[10px] xl:h-[15px] bg-[#373737] mx-[15px] xl:mx-[20px]" />
            </>
          )}
          {data?.type && (
            <>
              <Text
                as="div"
                size="text3"
                className={cn("font-medium text-[#373737]")}
              >
                {data?.type}
              </Text>
              <div className="w-[1px] h-[10px] xl:h-[15px] bg-[#373737] mx-[15px] xl:mx-[20px]" />
            </>
          )}
          {data?.type && (
            <>
              <Text
                as="div"
                size="text3"
                className={cn("font-medium text-[#373737]")}
              >
                {data?.location}
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
      </div>
    </section>
  );
}
