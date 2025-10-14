import { Heading } from "@/components/utils/Heading";
import Image from "next/image";

export default function HeroSection({ data }) {
  return (
    <section className="w-full h-auto min-h-[468px] xl:min-h-[540px] 2xl:min-h-[620px] 3xl:min-h-[768px] flex items-center bg-black py-[calc(40px+var(--header-y))_40px] sm:py-[calc(60px+var(--header-y))_60px] xl:py-[calc(100px+var(--header-y))_100px] 2xl:py-[calc(120px+var(--header-y))_120px] relative z-0">
      <picture className="absolute -z-2 inset-0">
        <source media="(max-width: 640px)" srcSet={data?.background_media?.mobile?.path} />
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
        <Heading
          as="h1"
          size="heading1"
          className="line-clamp-2 text-center text-transparent bg-linear-to-r from-[#999] via-50% via-white to-white bg-clip-text mx-auto max-w-[50%] mb-[15px] sm:mb-[20px] xl:mb-[40px] 2xl:mb-[60px]"
        >
          {data?.title}
        </Heading>
      </div>
    </section>
  );
}
