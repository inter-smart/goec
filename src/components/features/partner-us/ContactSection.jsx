import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

const AboutBecomePartnerData = {
  title: "Let's conquer the journey together",
  description: "Contact us",
  button: {
    type: "primary",
    label: "Become a partner",
    link: "/contact",
  },
};

export default function ContactSection({ data = AboutBecomePartnerData }) {
  return (
    <section className="w-full h-auto block py-[60px] sm:py-[100px] xl:py-[140px] 2xl:py-[180px] 3xl:py-[220px] bg-[#030303] relative z-0">
      <Image
        src="/images/partner-us-form-bg.png"
        alt="Contact us"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
        className="-z-1 object-cover opacity-90"
      />
      <div className="container">
        <div className="w-full flex flex-col lg:flex-row ">
          <div className="w-full xl:w-[360px] ">
            <Text
              as="p"
              className="text-[10px] sm:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-normal text-center sm:text-start text-white mb-[5px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
            >
              {data?.description}
            </Text>
            <Heading
              as="h2"
              className="text-[22px] sm:text-[28px] lg:text-[36px] xl:text-[48px] 2xl:text-[56px] 3xl:text-[72px] leading-tight font-normal text-center sm:text-start text-white mb-[20px]"
            >
              {data?.title}
            </Heading>
          </div>
          <div className="w-full xl:w-[calc(100%-360px)] lg:pl-[80px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
