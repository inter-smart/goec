import Image from "next/image";
import { Heading } from "../utils/Heading";
import { Text } from "../utils/Text";
import { ActionButton } from "../utils/Button";
import Link from "next/link";
import { MEDIA_URL } from "@/lib/api";

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

export default function InnerHero({
  data = heroData,
  start_ur_ev_section,
  childern,
  title,
  description,
  media,
}) {


  const button = start_ur_ev_section?.buttons?.length
    ? start_ur_ev_section.buttons.map((btn) => ({
        type: "external",
        link: btn.button_link,
        media: {
          path: btn.media_path,
          alt: btn.meida_alt,
        },
      }))
    : data?.button;


    
  return (
    <section className="w-full h-auto min-h-[468px] xl:min-h-[540px] 2xl:min-h-[620px] 3xl:min-h-[768px] flex items-center bg-black py-[calc(40px+var(--header-y))_40px] sm:py-[calc(60px+var(--header-y))_60px] xl:py-[calc(100px+var(--header-y))_100px] 2xl:py-[calc(120px+var(--header-y))_120px] relative z-0">
      <picture className="absolute -z-2 inset-0">
        <source
          media="(max-width: 640px)"
          srcSet={"/images/hero-investment-bg-1.jpg"}
        />
        <Image
          src={"/images/hero-investment-bg-1.jpg"}
          alt={"hero"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          className="-z-2 object-cover pointer-events-none"
          // quality={40}
          priority={true}
        />
      </picture>
      <div className="container">
        <div className="flex flex-wrap max-sm:flex-col-reverse max-sm:items-center relative z-0">
          <div className="w-full sm:w-[calc(100%-276px)] md:w-[calc(100%-320px)] xl:w-[calc(100%-400px)] 2xl:w-[calc(100%-468px)]">
            <Heading
              as="h1"
              size="heading1"
              className="line-clamp-3 text-center sm:text-start text-transparent bg-linear-to-r from-[#999] via-50% via-white to-white bg-clip-text xl:max-w-[80%] mb-[15px] sm:mb-[20px] xl:mb-[40px] 2xl:mb-[60px]"
            >
              {title}
            </Heading>
            {description && (
              <Text
                as="div"
                size="text1"
                className="line-clamp-2 text-center sm:text-start text-white max-w-[80%] mb-[15px] xl:mb-[20px] 2xl:mb-[40px]"
              >
                {data?.description || description}
              </Text>
            )}
            {button && (
              <div className="flex space-x-[5px] sm:space-x-[10px] xl:space-x-[15px] max-sm:justify-center">
                {button?.map((buttonItem, index) =>
                  buttonItem?.type === "primary" ? (
                    <ActionButton
                      key={index}
                      size={"lg"}
                      variant={"blue"}
                      className="max-w-[150px] 3xs:max-w-[160px] sm:max-w-[200px] xl:max-w-[220px] 2xl:max-w-[240px]"
                      asChild
                    >
                      <Link href={buttonItem?.link}>{buttonItem?.label}</Link>
                    </ActionButton>
                  ) : buttonItem?.type === "external" ? (
                    <ActionButton
                      key={index}
                      size={"default"}
                      className="bg-transparent border-none hover:bg-transparent hover:scale-105 max-w-[130px] 3xs:max-w-[140px] sm:max-w-[160px] xl:max-w-[176px] 2xl:max-w-[200px]"
                      asChild
                    >
                      <a
                        href={buttonItem?.link}
                        aria-label={buttonItem?.label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={`${MEDIA_URL}${buttonItem?.media?.path}`}
                          alt={buttonItem?.media?.alt}
                          width={176}
                          height={64}
                        />
                      </a>
                    </ActionButton>
                  ) : (
                    <ActionButton
                      key={index}
                      size={"lg"}
                      className="text-black bg-white max-w-[130px] 3xs:max-w-[140px] sm:max-w-[160px] xl:max-w-[200px] 2xl:max-w-[220px]"
                      asChild
                    >
                      <Link href={buttonItem?.link}>{buttonItem?.label}</Link>
                    </ActionButton>
                  )
                )}
              </div>
            )}
            {childern}
          </div>
          <div className="w-[176px] sm:w-[276px] md:w-[320px] xl:w-[400px] 2xl:w-[468px] max-sm:mb-[20px]">
            <div className="w-full xl:max-w-[576px] 2xl:max-w-[668px] 3xl:max-w-[720px] h-auto aspect-[52/57] sm:absolute z-0 top-1/2 right-0 sm:-translate-y-1/2 ">
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
                <picture className="absolute -z-2 inset-0">
                  <source
                    media="(max-width: 640px)"
                    srcSet={`${MEDIA_URL}${media?.mobile?.media_path}`}
                  />
                  <Image
                    src={`${MEDIA_URL}${media?.desktop?.media_path}`}
                    alt={media?.desktop?.media_alt}
                    width={868}
                    height={868}
                    className="w-full h-full object-contain"
                    priority={true}
                  />
                </picture>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
