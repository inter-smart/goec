import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import parse from "html-react-parser";
import Image from "next/image";

const AboutAssociateData = {
  title: "Our Associates",
  description:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae.</p>",
  media: {
    desktop: {
      type: "image",
      path: "/images/about-team-1.jpg",
      alt: "about-team",
    },
    mobile: {
      type: "image",
      path: "/images/about-team-1.jpg",
      alt: "about-team",
    },
  },
  item_associate: [
    {
      media: {
        type: "image",
        path: "/images/partner-0.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-1.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-2.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-3.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-4.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-5.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-6.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-7.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-8.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-9.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-10.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-11.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-12.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-7.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-8.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-9.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-10.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-11.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-12.png",
        alt: "partners",
      },
    },
    {
      media: {
        type: "image",
        path: "/images/partner-11.png",
        alt: "partners",
      },
    },
  ],
};

export default function AboutAssociateSection({ data = AboutAssociateData }) {
  return (
    <section className="w-full h-auto block py-[20px_40px] sm:py-[30px_60px] xl:py-[50px_100px] 2xl:py-[70px_140px]">
      <div className="container">
        <div className="flex flex-wrap mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px] max-sm:flex-col">
          <div className="flex-1 max-sm:mb-[15px]">
            <Heading
              as="h2"
              size="heading2"
              className="text-[#030303] max-sm:text-center"
            >
              {data?.title}
            </Heading>
          </div>
          <div className="w-[80%] sm:w-[300px] md:w-[368px] xl:w-[420px] 2xl:w-[576px] 3xl:w-[640px] max-sm:mx-auto max-sm:text-center">
            <Text as="div" size="text2" className="text-[#373737]">
              {parse(data?.description)}
            </Text>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-5px] xl:mx-[-10px] 2xl:mx-[-15px] [&>*]:p-[5px] xl:[&>*]:p-[10px] 2xl:[&>*]:p-[15px]">
          {data?.item_associate?.map((item, index) => (
            <div key={"associate" + index} className="w-1/2 3xs:w-1/3 sm:w-1/5">
              <div className="w-full aspect-[4/2] rounded-[20px] xl:rounded-[25px] flex items-center justify-center overflow-hidden bg-[#fcfcfc] border border-[#f0f0f0] transition hover:bg-primary/10">
                <Image
                  src={item?.media?.path}
                  alt={item?.media?.alt}
                  width={220}
                  height={60}
                  className="w-full max-w-[80px] sm:max-w-[120px] xl:w-[140px] 2xl:max-w-[176px] h-[25px] sm:h-[30px] xl:h-[50px] 2xl:h-[60px] aspect-[4/2] object-contain filter brightness-0 saturate-100"
                  
                  
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
