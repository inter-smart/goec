import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import parse from "html-react-parser";
export default function FaqHeroSection({ data = heroData }) {
  return (
    <section className="w-full h-auto min-h-[320px] xl:min-h-[400px] 2xl:min-h-[480px] 3xl:min-h-[520px] flex items-center bg-black py-[calc(40px+var(--header-y))_40px] sm:py-[calc(60px+var(--header-y))_60px] xl:py-[calc(100px+var(--header-y))_100px] 2xl:py-[calc(120px+var(--header-y))_120px] relative z-0">
      <picture className="absolute -z-2 inset-0">
        <source media="(max-width: 640px)" srcSet={data?.media?.mobile?.media_path} />
        <Image
          src={data?.media?.desktop?.media_path}
          alt={data?.media?.desktop?.media_alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          className="-z-2 object-cover pointer-events-none"
          // quality={40}
          priority={true}
        />
      </picture>
      <div className="container">
        <Heading
          as="h1"
          size="heading1"
          className="line-clamp-2 text-center text-transparent bg-linear-to-r from-[#999] via-50% via-white to-white bg-clip-text xl:max-w-[80%] mx-auto mb-[15px] sm:mb-[20px] xl:mb-[40px] 2xl:mb-[60px]"
        >
          {parse(data?.title)}
        </Heading>
      </div>
    </section>
  );
}
