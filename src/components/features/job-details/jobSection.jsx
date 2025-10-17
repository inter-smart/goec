import { BreadCrumb } from "@/components/Breadcrumb";
import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

export default function JobSection() {
  return (
    <div className="min-h-screen mt-[150px] mx-[30px] md:mx-[135px] lg:mx-[178px] xl:mx-[250px] 2xl:mx-[267px] 3xl:mx-[335px] mb-[73px] lg:mb-[95px] xl:mb-[140px] 2xl:mb-[146px] 3xl:mb-[197px]">
      <div className="container mx-auto">
        <BreadCrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Careers", href: "/careers" },
            { label: "Marketing Intern", isCurrent: true },
          ]}
        />

        <div className="flex flex-col xs:flex-row justify-between items-start sm:items-center gap-4 my-[30px_18px] lg:my-[30_24px] xl:my-[56px_33px] 2xl:my-[60px_36px] 3xl:my-[75px_44px]">
          <Heading
            as={"h1"}
            size={"heading1"}
            className=" font-medium text-[#030303]"
          >
            Marketing Intern
          </Heading>

          <div className="flex gap-3">
            <ActionButton
              className="text-sm sm:text-[10px] lg:text-[13px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] font-medium bg-white text-[#0055E0] transition-all duration-300 flex items-center gap-2"
              variant={"link"}
            >
              <Image
                src="/images/Vector.svg"
                alt="share"
                width={16}
                height={16}
              />
              Share Link
            </ActionButton>

            <ActionButton
              variant={"blue"}
              className="rounded-full p-[10px_20px]"
            >
              Apply Now
            </ActionButton>
          </div>
        </div>
        <Text
          as={"div"}
          size={"text2"}
          className="flex flex-wrap items-center gap-2 sm:gap-3 bg-[#FCFCFC] text-[#030303] border rounded-full p-[10px_16px] lg:p-[12px_18px] xl:p-[15px_22px] 2xl:p-[17px_24px] 3xl:p-[22px_32px] "
        >
          <span>Fresher</span>
          <span className="text-[#373737]">|</span>
          <span>Part Time</span>
          <span className="text-[#373737]">|</span>
          <span>Kochi</span>
        </Text>
        {/* Job Info Sections */}

        <div className="flex flex-col gap-8 text-gray-700 mt-[26px] lg:mt-[30px] xl:mt-[56px] 2xl:mt-[60px] 3xl:mt-[75px]">
          {/* About */}
          <section>
            <Heading
              as={"h2"}
              size={"heading2"}
              className="mb-[18px] lg:mb-[23px] 2xl:mb-[35px] 3xl:mb-[43px] text-[#030303]"
            >
              About
            </Heading>
            <Text as="div" size="text1" className="leading-tight font-light">
              Lorem ipsum dolor sit amet consectetur. Lorem velit tempus a sit.
              Porta risus in eget egestas quisque tellus eu nulla convallis.
              Bibendum ut faucibus bibendum enim bibendum mattis diam. A
              tincidunt tellus massa aliquam porttitor. Placerat mauris neque eu
              tellus nec urna lacus egestas. Quis justo at egestas nunc sed enim
              sem et gravida. Ullamcorper sed pellentesque vitae gravida amet mi
              magna sed blandit. Nisl nam arcu erat proin elit donec. Id
              faucibus maecenas adipiscing imperdiet libero. Pretium placerat
              proin morbi vel faucibus. Turpis magna maecenas commodo potenti
              vitae enim pretium congue. Vitae quis malesuada amet ut. Potenti
              at gravida lectus consectetur amet ac egestas.
            </Text>
          </section>

          {/* Responsibilities */}
          <section>
            <Heading as={"h2"} size={"heading3"} className="font-semibold mb-3">
              Responsibilities
            </Heading>
            <ul className="list-disc list-inside space-y-2 leading-relaxed text-sm md:text-base">
              <li>
                Assist in social media campaigns and marketing strategies.
              </li>
              <li>
                Coordinate with the content team for blog and newsletter
                updates.
              </li>
              <li>
                Analyze marketing metrics and provide actionable insights.
              </li>
              <li>Support the marketing team in day-to-day operations.</li>
            </ul>
          </section>

          {/* Requirements */}
          <section>
            <Heading as={"h2"} size={"heading3"} className="font-semibold mb-3">
              Requirements
            </Heading>
            <ul className="list-disc list-inside space-y-2 leading-relaxed text-sm md:text-base">
              <li>
                Pursuing a degree in Marketing, Business, or related field.
              </li>
              <li>Strong communication and organizational skills.</li>
              <li>
                Familiarity with social media platforms and content creation.
              </li>
              <li>
                Ability to work collaboratively in a fast-paced environment.
              </li>
            </ul>
          </section>
        </div>

        <ActionButton
          as={"default"}
          variant={"blue"}
          className=" flex items-center justify-center w-[100%] mt-[40px] lg:mt-[50px] xl:mt-[80px] 2xl:mt-[90px] 3xl:mt-[120px] py-[10px] rounded-full font-medium"
        >
          <Link href="/">Apply Now</Link>
          <HiArrowLongRight />
        </ActionButton>
      </div>
    </div>
  );
}
