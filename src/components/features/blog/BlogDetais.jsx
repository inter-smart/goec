import { Heading } from "@/components/utils/Heading";
import { MEDIA_URL } from "@/lib/api";
import Image from "next/image";
import parse from "html-react-parser";
import { BreadCrumb } from "@/components/Breadcrumb";
import { Text } from "@/components/utils/Text";

export default function BlogDetails({
  title,
  description,
  date,
  image,
  details,
}) {
  console.log(image);
  return (
    <>
      {/* Article Container */}
      <article className="max-w-[calc(100%-80px)] pt-[10px] mx-auto px-[24px] md:max-w-[calc(100%-200px)] lg:max-w-[calc(100%-500px)]">
        <BreadCrumb
          items={[
            { label: "Insights", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Recent BLogs", href: "/blog" },
            { label: "slug", isCurrent: true },
          ]}
        />
        {/* Article Title */}
        <Heading
          as="h1"
          className=" mt-[20px] md:mt-[40px] lg:text-[40px] text-[24px] md:text-[32px] font-regular text-[#373737] leading-tight mb-[24px] lg:mb-[32px]"
        >
          {title}
        </Heading>

        {/* Intro Paragraph */}
        <p className="text-[#373737] text-[14px] lg:text-[18px] mb-[24px]">
          {description}
        </p>

        {/* Date under description */}
        <div className="flex items-center gap-3 text-[#373737] text-[14px] lg:text-[18px] mb-[24px]">
          <Image
            src="/images/calendar.jpg"
            alt="calendar"
            width={20}
            height={20}
          />
          <span>{date}</span>
          <span>&bull;</span>
          <span>Blog • 10 mins read</span>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-[24px] overflow-hidden">
          <Image
            src={"/images/Blog_1.png"}
            alt="Featured"
             width={1200}
            height={600}
            className="w-full rounded-[24px] h-auto object-cover"
          />
        </div>

        {/* Article Section 1 */}
        <Text as="div" size={"text2"} className="text-[#373737]">
          {parse(details)}
        </Text>
      </article>
    </>
  );
}
