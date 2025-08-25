import { ActionButton } from "@/components/utils/Button";
import { Heading } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutBecomePartnerData = {
  title: "Let's conquer the journey together",
  description: "Contact us",
  button: {
    type: "primary",
    label: "Become a partner",
    link: "/contact",
  },
};

export default function AboutBecomePartnerSection({
  data = AboutBecomePartnerData,
}) {
  return (
    <section className="w-full h-auto block py-[60px] sm:py-[100px] xl:py-[140px] 2xl:py-[180px] relative z-0">
      <Image
        src="/images/about-become_partner-1.jpg"
        alt="Contact us"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
        className="-z-1 object-cover"
      />
      <div className="container">
        <Heading as="h2" size="heading2" className="text-center text-white">
          {data?.description}
        </Heading>
        <Heading as="h2" size="heading2" className="text-center text-white">
          {data?.title}
        </Heading>
        <div>
          <ActionButton
            size={"lg"}
            variant={"blue"}
            className=" w-[120px] xl:w-[160px] 2xl:w-[200px] 3xl:w-[220px]"
            asChild
          >
            <Link href={data?.button?.link}>{data?.button?.label}</Link>
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
