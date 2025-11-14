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
              <div>
                <ActionButton
                  size={"lg"}
                  variant={"link"}
                  className="text-[#0055e0]"
                  asChild
                >
                  <Link href={"#"}>
                    <Image
                      src="/images/icon-share.svg"
                      alt="share"
                      width={16}
                      height={16}
                      className="w-[10px] xl:w-[14px] 2xl:w-[16px]"
                    />
                    Share link
                  </Link>
                </ActionButton>
              </div>
              <div>
                <CareerModal>
                  <ActionButton
                    size={"lg"}
                    variant={"blue"}
                    className="text-white min-w-[120px] xl:min-w-[140px] 2xl:min-w-[160px]"
                    asChild
                  >
                    <Link href={"#"}>Apply Now</Link>
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
          <CareerModal>
            <ActionButton size="lg" variant={"blue"} className="w-full" asChild>
              <Link href={"#"}>
                Apply Now
                <svg
                  width="55"
                  height="31"
                  viewBox="0 0 55 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    "size-[15px] xl:size-[30px] 3xl:size-[40px] transition-all duration-500 ease-in-out"
                  )}
                >
                  <path
                    d="M42.6667 15.332L36 11.483V19.181L42.6667 15.332ZM0 15.332L0 15.9987L36.6667 15.9987V15.332V14.6654L0 14.6654L0 15.332Z"
                    fill={isHover ? "white" : "white"}
                  />
                  <mask
                    id="path-2-inside-1_3026_25027"
                    fill={isHover ? "white" : "white"}
                  >
                    <path d="M24.4924 11.4789C25.4273 7.87914 27.6387 4.74188 30.7148 2.6514C33.7909 0.560913 37.5219 -0.340281 41.213 0.115651C44.9042 0.571583 48.3038 2.35356 50.7787 5.12971C53.2537 7.90586 54.6353 11.4869 54.6661 15.206C54.697 18.9251 53.3751 22.5286 50.9466 25.3455C48.5181 28.1623 45.1486 30.0005 41.4655 30.5177C37.7825 31.0349 34.037 30.1958 30.9266 28.1567C27.8162 26.1176 25.553 23.0175 24.5584 19.4337L25.8811 19.0666C26.7867 22.3296 28.8473 25.1521 31.6792 27.0087C34.5111 28.8652 37.9213 29.6292 41.2746 29.1584C44.628 28.6875 47.6959 27.0138 49.907 24.4491C52.1181 21.8844 53.3216 18.6035 53.2935 15.2174C53.2654 11.8313 52.0075 8.57079 49.7541 6.04317C47.5007 3.51554 44.4055 1.8931 41.0448 1.47798C37.6841 1.06287 34.287 1.88338 31.4863 3.78672C28.6856 5.69006 26.6722 8.54646 25.821 11.824L24.4924 11.4789Z" />
                  </mask>
                  <path
                    d="M24.4924 11.4789C25.4273 7.87914 27.6387 4.74188 30.7148 2.6514C33.7909 0.560913 37.5219 -0.340281 41.213 0.115651C44.9042 0.571583 48.3038 2.35356 50.7787 5.12971C53.2537 7.90586 54.6353 11.4869 54.6661 15.206C54.697 18.9251 53.3751 22.5286 50.9466 25.3455C48.5181 28.1623 45.1486 30.0005 41.4655 30.5177C37.7825 31.0349 34.037 30.1958 30.9266 28.1567C27.8162 26.1176 25.553 23.0175 24.5584 19.4337L25.8811 19.0666C26.7867 22.3296 28.8473 25.1521 31.6792 27.0087C34.5111 28.8652 37.9213 29.6292 41.2746 29.1584C44.628 28.6875 47.6959 27.0138 49.907 24.4491C52.1181 21.8844 53.3216 18.6035 53.2935 15.2174C53.2654 11.8313 52.0075 8.57079 49.7541 6.04317C47.5007 3.51554 44.4055 1.8931 41.0448 1.47798C37.6841 1.06287 34.287 1.88338 31.4863 3.78672C28.6856 5.69006 26.6722 8.54646 25.821 11.824L24.4924 11.4789Z"
                    fill="#D9D9D9"
                    stroke="white"
                    strokeWidth="2.66667"
                    mask="url(#path-2-inside-1_3026_25027)"
                    className={cn(
                      "transition-all duration-500 ease-in-out origin-center",
                      isHover ? "scale-105" : "scale-0"
                    )}
                  />
                </svg>
              </Link>
            </ActionButton>
          </CareerModal>
        </div>
      </div>
    </section>
  );
}
