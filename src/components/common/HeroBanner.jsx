import Image from "next/image";
import { Heading } from "../utils/Heading";

export default function HeroBanner({ data }) {
  return (
    <>
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
        <div className="container flex justify-center">
          <div className="text-center w-[40%]">
            <div className="flex flex-col gap-[24px]">
              <Heading as={"h6"} size={"heading6"} className="text-white">
                {data.background_media.texts?.main}
              </Heading>
              <Heading
                as="h1"
                size="heading1"
                className=" text-center text-transparent bg-linear-to-r from-[#999] via-50% via-white to-white bg-clip-text"
              >
                {data.background_media.texts?.sub}
              </Heading>
              <Heading as={"h6"} size={"heading6"} className="text-white sm:text-[20px]">
                {data.background_media.texts?.description}
              </Heading>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
