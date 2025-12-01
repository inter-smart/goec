import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import Link from "next/link";

const expertiseData = {
  title: "Explore our Expertise ",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae.",
  button: {
    link: "/",
    label: "Explore more",
  },
  items_expertise: [
    {
      media: {
        type: "image",
        path: "/images/expertise-1.png",
        alt: "expertise",
      },
      title: "GOEC Charging Hub",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae. consectetur adipiscing elit. Sed sit",
      button: {
        link: "/",
        label: "Learn more",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/expertise-2.png",
        alt: "expertise",
      },
      title: "GOEC Exclusive",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae. consectetur adipiscing elit. Sed sit",
      button: {
        link: "/",
        label: "Learn more",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/expertise-3.png",
        alt: "expertise",
      },
      title: "Public Commercial Parking",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae. consectetur adipiscing elit. Sed sit",
      button: {
        link: "/",
        label: "Learn more",
      },
    },
  ],
};

export default function SolutionsSection({ data = expertiseData }) {
  return (
    <section className="w-full h-auto block relative z-0 py-[40px] sm:py-[80px] xl:py-[100px] 2xl:py-[120px]">
      <Image
        src="/images/expertise-sec-bg.svg"
        alt="expertise-bg"
        width={1820}
        height={1820}
      />
      <div className="container">
        <div className="flex flex-wrap mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px]">
          <div className="flex-1">
            <Heading as="h2" size="heading2" className="text-[#303030] ">
              {data?.title}
            </Heading>
          </div>
          <div className="w-full sm:w-[468px] xl:w-[576px] 3xl:w-[640px]">
            <Text as="p" size="text2" className="text-[#373737]">
              {data?.description}
            </Text>
          </div>
        </div>
        {data?.items_expertise.map((item, index) => (
          <div key={"expertise" + index} className="w-full">
            <div className="w-full h-auto bg-[#fcfcfc] border border-[#f0f0f0] rounded-[30px] overflow-hidden flex flex-wrap">
              <div className="w-full sm:w-[320px] xl:w-[400px] 2xl:w-[576px] 3xl:w-[700px]">
                <div className="w-full h-full relative z-0 p-[20px] xl:p-[40px] 2xl:p-[60px] flex flex-col justify-between">
                  <div>
                    <div className="text-[48px] sm:text-[72px] lg:text-[168px] xl:text-[176px] 2xl:text-[220px] 3xl:text-[276px] leading-[0.8] font-semibold whitespace-nowrap text-ellipsis text-transparent bg-clip-text bg-gradient-to-b from-[#f2f2f2] to-[#fcfcfc]">
                      {index + 1 < 10 ? "0" + (index + 1) : index + 1}
                    </div>
                    <div className="text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[48px] leading-tight font-medium line-clamp-2 text-[#191a19] mb-[15px] sm:mb-[20px] xl:mb-[40px] 2xl:mb-[50px]">
                      {item?.title}
                    </div>
                    <Text
                      as="p"
                      size="text2"
                      className="line-clamp-3 text-[#373737]"
                    >
                      {item?.description}
                    </Text>
                  </div>
                  <div>
                    <ActionButton variant="link" className="text-black" asChild>
                      <Link href={item?.button?.link}>
                        {item?.button?.label}
                      </Link>
                    </ActionButton>
                  </div>
                  <Image
                    src="/images/expertise-bx-bg.png"
                    alt="expertise-bx-bg"
                    width={730}
                    height={220}
                    className="w-full h-auto absolute -z-1 left-0 bottom-0 right-0 scale-105"
                  />
                </div>
              </div>
              <div className="w-full sm:w-[calc(100%-320px)] xl:w-[calc(100%-400px)] 2xl:w-[calc(100%-576px)] 3xl:w-[calc(100%-700px)]">
                <div className="w-full aspect-square overflow-hidden rounded-[30px] relative z-1">
                  <Image
                    src={item?.media?.path}
                    alt={item?.media?.alt}
                    width={876}
                    height={676}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-[20px] sm:mt-[30px] xl:mt-[40px] 2xl:mt-[60px]">
          <ActionButton
            size="lg"
            className="text-black bg-[#f5f5f5] hover:bg-[#dddddd]"
            asChild
          >
            <Link href={data?.button?.link}>{data?.button?.label}</Link>
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
