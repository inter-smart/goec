import Image from "next/image";
import { Heading } from "../utils/Heading";
import { Text } from "../utils/Text";
import { ActionButton } from "../utils/Button";
import Link from "next/link";

const heroData = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/hero-investment-bg-1.jpg",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/hero-investment-bg-1.jpg",
      alt: "hero",
    },
  },
  media: {
    type: "image",
    path: "/images/hero-investment-1.svg",
    alt: "hero",
  },
  title: "Invest in India's Fast-Growing Electric Vehicle Infrastructure",
  description: null,
  button: [
    {
      type: "secondary",
      label: "Download Brochure ",
      link: "/",
    },
    {
      type: "primary",
      label: "Get a free consulation",
      link: "/",
    },
  ],
};

export default function InnerHero({ data = heroData }) {
  return (
    <section className="w-full h-auto min-h-[468px] xl:min-h-[540px] 2xl:min-h-[620px] 3xl:min-h-[768px] flex items-center bg-black py-[calc(40px+var(--header-y))_40px] sm:py-[calc(60px+var(--header-y))_60px] xl:py-[calc(100px+var(--header-y))_100px] 2xl:py-[calc(120px+var(--header-y))_120px] relative z-0">
      <picture className="absolute -z-2 inset-0">
        <source
          media="(max-width: 640px)"
          srcSet={data?.background_media?.mobile?.path}
        />
        <Image
          src={data?.background_media?.desktop?.path}
          alt={data?.background_media?.desktop?.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
          className="-z-2 pointer-events-none"
          quality={40}
        />
      </picture>
      <div className="container">
        <div className="flex flex-wrap relative z-0">
          <div className="w-full xl:w-[calc(100%-400px)] 2xl:w-[calc(100%-468px)]">
            <Heading
              as="h1"
              size="heading1"
              className="line-clamp-2 text-transparent bg-linear-to-r from-[#999] via-50% via-white to-white bg-clip-text mb-[15px] xl:mb-[20px] 2xl:mb-[40px]"
            >
              {data?.title}
            </Heading>
            <Text
              as="div"
              size="text1"
              className="line-clamp-2 text-white max-w-[80%] mb-[15px] xl:mb-[20px] 2xl:mb-[40px]"
            >
              {data?.description}
            </Text>
            <div className="flex space-x-[10px] xl:space-x-[15px]">
              {data?.button?.map((buttonItem, index) =>
                buttonItem?.type === "primary" ? (
                  <ActionButton
                    key={index}
                    size={"lg"}
                    variant={"blue"}
                    className="max-w-[180px] xl:max-w-[220px] 2xl:max-w-[240px]"
                    asChild
                  >
                    <Link href={buttonItem?.link}>{buttonItem?.label}</Link>
                  </ActionButton>
                ) : (
                  <ActionButton
                    key={index}
                    size={"lg"}
                    className="text-black bg-white max-w-[120px] xl:max-w-[200px] 2xl:max-w-[220px]"
                    asChild
                  >
                    <Link href={buttonItem?.link}>{buttonItem?.label}</Link>
                  </ActionButton>
                )
              )}
            </div>
          </div>
          <div className="w-full xl:w-[400px] 2xl:w-[468px] absolute z-0 top-1/2 -translate-y-1/2 right-0">
            <div className="w-full h-full ">
              {data?.media?.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover absolute -z-2 inset-0"
                >
                  <source src={data?.media?.path} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={data?.media?.path}
                  alt={data?.media?.alt}
                  width={100}
                  height={100}
                  className="w-full h-full"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"
                  priority={true}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
