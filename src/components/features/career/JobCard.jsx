import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import Link from "next/link";

export default function JobCard({ job }) {
  return (
    <div>
      <Heading as={"h2"} size={"heading2"} className="">
        {job.title}
      </Heading>
      <Text as={"p"} size={"text1"} className="text-[#757575] my-[16px] lg:my-[22px] xl:py-[24px] 3xl:my-[32px]">
        Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial insights breaks down the importance of having
        a well-thought-out strategy.
      </Text>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 text-[15px] text-gray-600">
          <span className="flex items-center gap-2 p-[12px] rounded-full border border-[#EEEEEE]">
            <Image src="/images/Time.jpg" alt="clock" width={18} height={18} />
            <Text size={"text2"} className="font-normal text-[#373737]">
              {job.type}
            </Text>
          </span>
          <span className="flex items-center gap-2 p-[12px] rounded-full border border-[#EEEEEE]">
            <Image src="/images/Suitcase.jpg" alt="experience" width={18} height={18} />
            <Text size={"text2"} as={"p"} className="font-normal text-[#373737]">
              8+ Years
            </Text>
          </span>
        </div>
        <Text
          as={"text2"}
          size={"text2"}
          className="flex items-center justify-center gap-[8px] text-[#151515] group hover:text-[#0048BF] shadow-none font-medium"
        >
          <Link href={`/career/${job.slug}`}>Read More</Link>
          <Image src="/images/Arrow.png" alt="arrow" width={18} height={18} />
        </Text>
      </div>
    </div>
  );
}
