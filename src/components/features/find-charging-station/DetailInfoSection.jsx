import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import parse from "html-react-parser";

const local_data = {
  media: {
    type: "image",
    path: "/images/findChargingStaton-info-1.jpg",
    alt: "hero",
  },
  title: "About Us",
  description:
    "<p>Lorem ipsum dolor sit amet consectetur. Lorem velit tempus a sit. Porta risus in eget egestas quisque tellus eu nulla convallis. Bibendum ut faucibus bibendum enim bibendum mattis diam. A tincidunt tellus massa aliquam porttitor. </p><p>Nisl nam arcu erat proin elit donec. Id faucibus maecenas adipiscing imperdiet libero. Pretium placerat proin morbi vel faucibus. Turpis magna maecenas commodo potenti vitae enim pretium congue. Vitae quis malesuada amet ut. Potenti at gravida lectus consectetur amet ac egestas.</p>",
};

export default function DetailInfoSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block py-[30px_15px] sm:py-[100px_30px] xl:py-[180px_60px] 2xl:py-[200px_80px]">
      <div className="container">
        <div className="w-full h-auto bg-[#fcfcfc] border-1 border-[#f0f0f0] rounded-[15px] xl:rounded-[20px] overflow-hidden hover:shadow-lg transition ">
          <div className="w-full max-w-full 2xs:max-w-[200px] sm:max-w-[268px] xl:max-w-[500px] 2xl:max-w-[600px] aspect-[4/2] 2xs:aspect-[50/44] overflow-hidden 2xs:float-left 2xs:mr-[2%] xl:mr-[5%]">
            <Image
              src={data?.media?.path}
              alt={data?.media?.alt}
              width={750}
              height={660}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
          <div className="typography xl:[&_p]:text-[16px] 2xl:[&_p]:text-[18px] p-[15px_15px_0] xl:p-[30px_30px_0]">
            <Heading
              as="h2"
              size="none"
              className="text-[18px] sm:text-[24px] lg:text-[30px] xl:text-[42px] 2xl:text-[50px] 3xl:text-[64px] leading-tight font-medium text-[#030303] mb-[10px] sm:mb-[15px] xl:mb-[40px] 2xl:mb-[60px] max-sm:mt-0"
            >
              {data?.title}
            </Heading>

            {parse(data?.description)}
          </div>
          <div className="clear-both"></div>
        </div>
      </div>
    </section>
  );
}
