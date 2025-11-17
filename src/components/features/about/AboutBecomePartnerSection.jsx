import ChargingStationForm from "@/components/form/ChargingStationForm";
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
  title, description
}) {

  console.log(description)
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[60px] xl:py-[100px] 2xl:py-[120px] bg-[#0055e0] relative z-0">
      <Image
        src="/images/about-contact-bg.jpg"
        alt="about-contact-bg"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
        className="-z-1 object-cover"
        quality={100}
      />
      <div className="container max-sm:px-8">
        <div className="flex flex-wrap flex-col sm:flex-row gap-[10px] sm:gap-[15px] xl:gap-[20px] 2xl:gap-[30px]">
          <div className="w-full sm:w-[268px] lg:w-[320px] xl:w-[390px] 2xl:w-[468px] 3xl:w-[600px] flex-shrink-0">
            <div className="w-full">
              <Text
                as="p"
                className="text-[10px] sm:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-normal text-white mb-[5px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
              >
                {description}
              </Text>
              <Heading
                as="h2"
                size="heading1"
                className="text-white xl:max-w-[576px] 2xl:max-w-[668px] mx-auto mb-[15px] sm:mb-[30px] xl:mb-[40px] 2xl:mb-[60px]"
              >
                {title}
              </Heading>
              {/* <div className="flex">
                <ActionButton
                  size={"lg"}
                  className="text-black bg-white w-[120px] xl:w-[160px] 2xl:w-[200px] 3xl:w-[220px]"
                  asChild
                >
                  <Link href={data?.button?.link}>{data?.button?.label}</Link>
                </ActionButton>
              </div> */}
            </div>
          </div>

          <div className="flex-1">
            <ChargingStationForm variant="about" />
          </div>
        </div>
      </div>
    </section>
  );
}
