import Image from "next/image";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { generateMediaUrl } from "@/lib/utils";

export default function HeroSection({ banner_section }) {
  return (
    <section className="w-full h-auto min-h-[268px] sm:min-h-[420px] xl:min-h-[540px] 2xl:min-h-[620px] 3xl:min-h-[768px] flex items-center bg-black py-[calc(10px+var(--header-y))_40px] sm:py-[calc(20px+var(--header-y))_60px] xl:py-[calc(0+var(--header-y))_100px] 2xl:py-[calc(0+var(--header-y))_120px] relative z-0">
      <picture className="absolute -z-2 inset-0">
        <source
          media="(max-width: 640px)"
          srcSet={generateMediaUrl(banner_section?.media?.mobile?.media_path)}
        />
        <Image
          src={generateMediaUrl(banner_section?.media?.desktop?.media_path)}
          alt={banner_section?.media?.desktop?.media_alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          className="-z-2 object-cover pointer-events-none"
          quality={100}
        />
      </picture>
      <div className="container">
        <div className="flex flex-wrap max-sm:flex-col-reverse max-sm:items-center">
          <div className="w-full">
            {banner_section?.description && (
              <Text
                as="div"
                size="text1"
                className="line-clamp-1 text-center text-white mb-[5px] xl:mb-[10px] 2xl:mb-[20px]"
              >
                {banner_section?.description}
              </Text>
            )}
            <Heading
              as="h1"
              size="heading1"
              className="line-clamp-3 text-center text-transparent bg-linear-to-r from-[#999] via-50% via-white to-white bg-clip-text max-w-[320px] sm:max-w-[468px] xl:max-w-[620px] 2xl:max-w-[768px] 3xl:max-w-[920px] mx-auto"
            >
              {parse(banner_section?.title)}
            </Heading>
          </div>
        </div>
      </div>
    </section>
  );
}
