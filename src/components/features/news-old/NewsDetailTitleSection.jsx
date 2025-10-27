import { BreadCrumb } from "@/components/Breadcrumb";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";

export default function Title({ title, description, date, slug }) {
  return (
    <section className="container mt-[110px]">
      <BreadCrumb
        items={[
          { label: "News", href: "/news" },
          { label: slug, isCurrent: true },
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
      <p className="text-[#373737] text-[14px] lg:text-[18px] mb-[24px]">{description}</p>

      {/* Date under description */}
      <div className="flex items-center gap-3 text-[#373737] text-[14px] lg:text-[18px] mb-[24px]">
        <Image src="/images/calendar.jpg" alt="calendar" width={20} height={20} />
        <span>{date}</span>
        <span>&bull;</span>
        <span>Blog • 10 mins read</span>
      </div>
    </section>
  );
}
