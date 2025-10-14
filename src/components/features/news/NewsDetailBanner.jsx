import { Heading } from "@/components/utils/Heading";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function NewsDetailBanner({ data }) {
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
          // quality={40}
        />
      </picture>
      <div className="container">
        <div className="w-full">
          <Heading
            as="h1"
            size="heading1"
            className="line-clamp-3 text-start text-transparent font-bold bg-linear-to-r from-white via-50% w-[70%] via-white to-[#999]  bg-clip-text"
          >
            {data?.title}
          </Heading>
          <div className="flex gap-3 mt-3">
            <div className="flex items-center gap-2">
              <Calendar className="text-white" />
              <span className="text-white font-medium text-[16px]">{data?.published_at}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-medium text-[16px]">{`${data?.category} - ${data?.time}`}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
