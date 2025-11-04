import Image from "next/image";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/Heading";

export default function HeroSection({ data = local_data }) {
  return (
    <section className="w-full h-auto min-h-[268px] sm:min-h-[420px] xl:min-h-[540px] 2xl:min-h-[620px] 3xl:min-h-[768px] flex items-center bg-black py-[calc(40px+var(--header-y))_40px] sm:py-[calc(60px+var(--header-y))_60px] xl:py-[calc(100px+var(--header-y))_100px] 2xl:py-[calc(120px+var(--header-y))_120px] relative z-0">
      <picture className="absolute -z-2 inset-0">
        <source
          media="(max-width: 640px)"
          srcSet={data?.background_media?.mobile?.path}
        />
        <Image
          src={data?.background_media?.desktop?.path}
          alt={data?.background_media?.desktop?.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          className="-z-2 object-cover pointer-events-none"
          quality={100}
        />
      </picture>
      <div className="container">
        <div className="flex flex-wrap max-sm:flex-col-reverse max-sm:items-center">
          <div className="w-full">
            <Heading
              as="h1"
              size="heading1"
              className="line-clamp-3 text-center text-transparent bg-linear-to-r from-[#999] via-50% via-white to-white bg-clip-text max-w-[320px] sm:max-w-[468px] xl:max-w-[620px] 2xl:max-w-[668px] 3xl:max-w-[820px] mx-auto"
            >
              {parse(data?.title)}
            </Heading>
          </div>
        </div>
      </div>
    </section>
  );
}
