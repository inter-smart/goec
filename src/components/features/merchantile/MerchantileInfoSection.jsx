import Image from "next/image";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { ActionButton } from "@/components/utils/Button";
import Link from "next/link";

const local_data = {
  media: {
    type: "image",
    path: "/images/about_merchantile.png",
    alt: "hero",
  },
  title: "About GO EC Mercantile",
  description:
    "<p>GO EC Auto Tech PVT LTD is on a mission to build the foundation for the EV Revolution in India. We're strategically placing electric vehicle chargers nationwide, making it convenient for EV drivers to travel long distances without the fear of running out of battery power.</p><p>Partnering with a variety of businesses we're installing chargers in their properties. As our network of charging stations expands, the EV market in India is surging, reducing concerns about charging accessibility and driving increased EV adoption.</p>",
  items: [
    {
      media: {
        type: "image",
        path: "/images/header-logo 4.png",
        alt: "header-logo 4",
      },
      description:
        "<p>Our vision is to operate a chain of EV Charging Stations across India and positioning GOEC as an authentic player in the EV industry by offering the best service to the end-user with guaranteed quality.</p>",
    },
    {
      media: {
        type: "image",
        path: "/images/mercantile_logo.png",
        alt: "header-logo 4",
      },
      description:
        "<p>Our vision is to operate a chain of EV Charging Stations across India and positioning GOEC as an authentic player in the EV industry by offering the best service to the end-user with guaranteed quality.</p>",
    },
  ],
};

export default function MerchantileInfoSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[60px] xl:py-[120px] 2xl:py-[140px]">
      <div className="container">
        <div className="w-full h-auto mb-[20px] xl:mb-[40px] 2xl:mb-[60px]">
          <div className="w-full max-w-full 2xs:max-w-[200px] sm:max-w-[268px] xl:max-w-[49%] aspect-[4/2] 2xs:aspect-[50/44] overflow-hidden rounded-[15px] xl:rounded-[24px] 2xs:float-right 2xs:ml-[2%] xl:ml-[5%] max-sm:mb-[20px]">
            <Image
              src={data?.media?.path}
              alt={data?.media?.alt}
              width={750}
              height={660}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
          <div className="typography xl:[&_p]:text-[16px] 2xl:[&_p]:text-[18px] 3xl:[&_p]:text-[24px] ">
            <Heading
              as="h2"
              size="none"
              className="text-[18px] sm:text-[24px] lg:text-[30px] xl:text-[42px] 2xl:text-[50px] 3xl:text-[64px] leading-tight font-medium text-[#030303] mb-[10px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[140px] max-sm:mt-0"
            >
              {data?.title}
            </Heading>

            {parse(data?.description)}
          </div>
          <div className="clear-both"></div>
        </div>
        <div className="flex flex-wrap mx-[-5px] xl:mx-[-10px] 2xl:mx-[-15px] [&>*]:px-[5px] xl:[&>*]:px-[10px] 2xl:[&>*]:px-[15px] max-sm:flex-col-reverse">
          {data?.items?.map((item, index) => (
            <div key={"boxes" + index} className="w-full sm:w-1/2 xl:w-1/2">
              <div className="w-full h-auto bg-[#fcfcfc] border-1 border-[#f0f0f0] p-[20px] xl:p-[35px] 2xl:p-[40px] rounded-[15px] xl:rounded-[20px]">
                <Image
                  src={item?.media?.path}
                  alt={item?.media?.alt}
                  width={100}
                  height={50}
                  className="w-[80px] xl:w-[100px] hover:scale-105 transition duration-300 mb-[20px] xl:mb-[40px] 2xl:mb-[60px]"
                />
                <div className="typography xl:[&_p]:text-[16px] 2xl:[&_p]:text-[18px] ">
                  {parse(item?.description)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
