import Image from "next/image";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { ActionButton } from "@/components/utils/Button";
import Link from "next/link";
import { generateMediaUrl } from "@/lib/utils";

const local_data = {
  media: {
    mobile: {
      type: "video",
      path: "/videos/electric_vehicle.mp4",
      alt: "hero",
    },
    desktop: {
      type: "video",
      path: "/videos/electric_vehicle.mp4",
      alt: "hero",
    },
  },
  title: "Charge into the future <br /> with GO EC Mercantile",
  description: "<p>GO EC Mercantile. Nepal</p>",
};

export default function MerchantileHeroSection({ data = local_data }) {
  return (
    <section className="w-full h-auto xl:h-screen min-h-[468px] xl:min-h-[540px] 2xl:min-h-[620px] 3xl:min-h-[768px] flex items-end bg-black py-[calc(40px+var(--header-y))_40px] sm:py-[calc(60px+var(--header-y))_60px] xl:py-[calc(100px+var(--header-y))_100px] 2xl:py-[calc(120px+var(--header-y))_120px] relative z-0">
      {data?.media?.desktop?.media_type === "video" ? (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover absolute -z-1 inset-0 block sm:hidden opacity-60"
          >
            <source src={generateMediaUrl(data?.media?.mobile?.media_path)} type="video/mp4" />
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover absolute -z-1 inset-0 hidden sm:block opacity-60"
          >
            <source src={generateMediaUrl(data?.media?.mobile?.media_path)} type="video/mp4" />
          </video>
        </>
      ) : (
        <picture className="absolute -z-1 inset-0">
          <source
            media="(max-width: 640px)"
            srcSet={generateMediaUrl(data?.media?.mobile?.media_path)}
          />
          <Image
            src={generateMediaUrl(data?.media?.desktop?.media_path)}
            alt={data?.media?.desktop?.media_alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
            className="-z-1 opacity-60"
          />
        </picture>
      )}
      <div className="container">
        <div className="flex items-center mb-[10px] sm:mb-[20px] xl:mb-[40px] 2xl:mb-[55px]">
          <Image
            src={generateMediaUrl(data?.logo)}
            alt={data?.logoTitle}
            width={40}
            height={40}
            className="w-[20px] xl:w-[35px] 2xl:w-[40px] mr-2 xl:mr-3 object-contain inline-block"
          />
          <Text
            as="div"
            size="text1"
            className="line-clamp-2 text-center sm:text-start text-transparent bg-linear-to-r from-white via-50% via-white to-[#999] bg-clip-text "
          >
            {parse(data?.logoTitle)}
          </Text>
        </div>
        <Heading
          as="h1"
          size="heading1"
          className="line-clamp-2 text-center sm:text-start text-transparent bg-linear-to-r from-white via-50% via-white to-[#999] bg-clip-text mb-[10px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[40px] inline-block"
        >
          {parse(data?.title)}
        </Heading>
        <div className="flex flex-wrap space-y-[5px] space-x-[5px] sm:space-x-[10px] xl:space-x-[15px]">
          <ActionButton
            size={"lg"}
            className="text-black bg-white max-w-[160px] 2xs:max-w-[180px] sm:max-w-[200px] xl:max-w-[220px] 2xl:max-w-[280px] hover:text-white"
            asChild
          >
            <Link href={data?.primaryButton?.link}>{data?.primaryButton?.text}</Link>
          </ActionButton>

          <ActionButton
            size={"lg"}
            variant={"blue"}
            className="max-w-[140px] 3xs:max-w-[160px] sm:max-w-[180px] xl:max-w-[200px] 2xl:max-w-[240px]"
            asChild
          >
            <Link href={data?.secondaryButton?.link}>{data?.secondaryButton?.text}</Link>
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
