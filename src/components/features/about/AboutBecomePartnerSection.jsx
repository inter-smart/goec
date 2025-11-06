import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import Link from "next/link";

const AboutBecomePartnerData = {
  title: "Let's conquer the journey together",
  description: "Contact us",
  button: {
    type: "primary",
    label: "Become a partner",
    link: "/become-a-partner",
  },
};

export default function AboutBecomePartnerSection({
  data = AboutBecomePartnerData,
}) {
  return (
    <section className="w-full h-auto block py-[60px] sm:py-[100px] xl:py-[140px] 2xl:py-[180px] 3xl:py-[220px] bg-[#030303] relative z-0">
      <Image
        src="/images/about-become_partner-1.jpg"
        alt="Contact us"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
        className="-z-1 object-cover opacity-90"
      />
      <div className="container">
        <Text
          as="p"
          className="text-[10px] sm:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-normal text-center text-white mb-[10px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
        >
          {data?.description}
        </Text>
        <Heading
          as="h2"
          size="heading1"
          className="text-center text-white sm:max-w-[50%] xl:max-w-[576px] 2xl:max-w-[668px] mx-auto mb-[20px] sm:mb-[30px] xl:mb-[40px] 2xl:mb-[60px]"
        >
          {data?.title}
        </Heading>
        <div className="flex justify-center">
          <ActionButton
            size={"lg"}
            className="text-black bg-white w-[120px] xl:w-[160px] 2xl:w-[200px] 3xl:w-[220px]"
            asChild
          >
            <Link href={data?.button?.link}>{data?.button?.label}</Link>
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
