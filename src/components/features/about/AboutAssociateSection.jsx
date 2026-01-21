import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { MEDIA_URL } from "@/lib/api";
import parse from "html-react-parser";
import Image from "next/image";


export default function AboutAssociateSection({
  title,
  description,
  list,
}) {
  return (
    <section id="our-associates" className="w-full h-auto block py-[20px_40px] sm:py-[30px_60px] xl:py-[50px_100px] 2xl:py-[70px_140px]">
      <div className="container">
        <div className="flex flex-wrap mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px] max-sm:flex-col">
          <div className="flex-1 max-sm:mb-[15px]">
            <Heading
              as="h2"
              size="heading2"
              className="text-[#030303] max-sm:text-center"
            >
              {title}
            </Heading>
          </div>
          <div className="w-[80%] sm:w-[300px] md:w-[368px] xl:w-[400px] 2xl:w-[476px] 3xl:w-[640px] max-sm:mx-auto max-sm:text-center">
            <Text as="div" size="text2" className="text-[#373737]">
              {parse(description)}
            </Text>
          </div>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-start mx-[-5px] xl:mx-[-10px] 2xl:mx-[-15px] [&>*]:p-[5px] xl:[&>*]:p-[10px] 2xl:[&>*]:p-[15px]">
          {list?.map((item, index) => (
            <div key={"associate" + index} className="w-1/2 3xs:w-1/3 sm:w-1/5">
              <div className="w-full aspect-[4/2] rounded-[20px] xl:rounded-[25px] flex items-center justify-center overflow-hidden bg-[#fcfcfc] border border-[#f0f0f0] transition hover:border-primary/10">
                <Image
                  src={`${MEDIA_URL}${item?.media?.media_path}`}
                  alt={item?.media?.media_alt}
                  width={220}
                  height={60}
                  className="w-full max-w-[80px] sm:max-w-[120px] xl:w-[130px] 2xl:max-w-[176px] h-[25px] sm:h-[30px] xl:h-[40px] 2xl:h-[50px] aspect-[4/2] object-contain filter brightness-0 saturate-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
