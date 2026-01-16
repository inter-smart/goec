import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/Breadcrumb";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MEDIA_URL } from "@/lib/api";
import { renderHtml } from "@/components/utils/parseHtml";
import { format } from "date-fns";

export default function BlogDetailSection({ data, variant }) {
  return (
    <section className="w-full h-auto block py-[20px] sm:py-[40px_30px] xl:py-[60px_60px] 2xl:py-[80px_70px] mt-(--header-y)">
      <div className="w-full px-4 max-w-full sm:max-w-[576px] lg:max-w-[768px] xl:max-w-[840px] 2xl:max-w-[1000px] 3xl:max-w-[1260px] mx-auto">
        <div className="w-full mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
          <Breadcrumb>
            <BreadcrumbList>
              {/* <BreadcrumbItem> */}
              {/* <BreadcrumbLink href="/">Insights</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator> */}
              <BreadcrumbLink href={variant === "blog_details" ? "/blog" : `/${variant}`}>
                {variant === "blog_details" ? "Blogs" : variant}
              </BreadcrumbLink>

              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              {/* <BreadcrumbItem>
                <BreadcrumbLink href="/">Recent blogs</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator> */}
              <BreadcrumbItem>
                <BreadcrumbPage>{data?.slug}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="w-full">
          <Heading as="h2" size="heading2" className="font-normal text-[#030303] mb-[15px] xl:mb-[20px] 2xl:mb-[30px]">
            {data?.title}
          </Heading>
          <div className="typography">{renderHtml(data?.description)}</div>
          <Text
            as="div"
            size="none"
            className="text-[12px] sm:text-[10px] xl:text-[14px] 2xl:text-[16px] leading-none font-medium text-[#373737] flex gap-[4px] lg:gap-[6px] items-center mb-[15px] xl:mb-[30px] 2xl:mb-[40px]"
          >
            <Image
              src={"/images/icon-calendar.svg"}
              alt={"icon-calendar"}
              width={24}
              height={24}
              className="w-[10px] xl:w-[15px] 2xl:w-[20px] hover:scale-105 transition duration-300"
            />
            {format(new Date(data?.published_on), "dd MMMM yyyy")}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {variant}
            <span>-</span>
            {data?.reading_time}
          </Text>
        </div>
      </div>
      <div
        className={cn(
          "",
          variant !== "news" &&
            "w-full px-4 max-w-full sm:max-w-[576px] lg:max-w-[768px] xl:max-w-[840px] 2xl:max-w-[1000px] 3xl:max-w-[1260px] mx-auto"
        )}
      >
        <div
          className={cn(
            "w-full overflow-hidden relative z-0 mb-[15px] xl:mb-[30px] 2xl:mb-[40px]",
            variant === "news" ? "aspect-[10/4] xl:aspect-[144/38] " : "aspect-[10/4] rounded-[20px] sm:rounded-[25px]"
          )}
        >
          <picture className="absolute -z-1 inset-0">
            <source media="(max-width: 640px)" srcSet={`${MEDIA_URL}${data?.media?.mobile?.media_path}`} />
            <Image
              src={`${MEDIA_URL}${data?.media?.desktop?.media_path}`}
              alt={data?.media?.desktop?.media_alt || "No image available"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
              className="-z-1 object-cover transition hover:scale-105"
            />
          </picture>
        </div>
      </div>
      <div className="w-full px-4 max-w-full sm:max-w-[576px] lg:max-w-[768px] xl:max-w-[840px] 2xl:max-w-[1000px] 3xl:max-w-[1260px] mx-auto">
        <div className="typography [&_h4]:font-medium [&_h4]:my-[15px] xl:[&_h4]:my-[20px] 2xl:[&_h4]:my-[30px]">
          {renderHtml(data?.sub_description)}
        </div>
      </div>
    </section>
  );
}
