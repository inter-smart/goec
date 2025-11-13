import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import PartnerForm from "./Form";

export default function FormBanner({ data }) {
  return (
    <>
      <div className="w-full h-auto min-h-[468px] xl:min-h-[540px] 2xl:min-h-[620px] 3xl:min-h-[768px] flex items-center bg-black py-[calc(40px+var(--header-y))_40px] sm:py-[calc(60px+var(--header-y))_60px] xl:py-[calc(100px+var(--header-y))_100px] 2xl:py-[calc(120px+var(--header-y))_120px] relative z-0">
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
          <div className="w-full flex flex-col items-center justify-center">
            {/* Header Section */}
            <div className="text-center mb-8 xl:mb-12">
              <Text size="text1" className="text-white text-center mb-4 xl:mb-6">
                {data?.title}
              </Text>
              <Heading as="h1" size="heading1" className="text-white text-center font-bold max-w-[60%] mx-auto">
                {data?.description}
              </Heading>
            </div>

            {/* Form Section */}
          </div>
        </div>
      </div>
      <div className="w-full max-w-[800px]">
        <PartnerForm />
      </div>
    </>
  );
}
