import Image from "next/image";
import { Heading } from "../utils/Heading";
import { Text } from "../utils/Text";
import { ActionButton } from "../utils/Button";
import Link from "next/link";
import { MEDIA_URL } from "@/lib/api";
import BrochureModal from "./BrochureModal";
import { cn } from "@/lib/utils";

const heroData = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/sportlight.png",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/sportlight.png",
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
  button,
  childern,
  title,
  description,
  media,
  varient,
  backgroundMedia = "/images/hero-about-bg-2.jpg",
}) {
  // const button = external_button?.buttons?.length
  //   ? external_button.buttons.map((btn) => ({
  //       type: "external",
  //       link: btn.button_link,
  //       media: {
  //         path: btn.media_path,
  //         alt: btn.meida_alt,
  //       },
  //     }))
  //   : data?.button;

  return (
    <section className="w-full h-auto min-h-[468px] xl:min-h-[540px] 2xl:min-h-[620px] 3xl:min-h-[768px] flex items-center bg-black py-[calc(40px+var(--header-y))_40px] sm:py-[calc(60px+var(--header-y))_60px] xl:py-[calc(100px+var(--header-y))_100px] 2xl:py-[calc(120px+var(--header-y))_120px] relative z-0">
      <Image
        src={backgroundMedia}
        alt="banner-bg"
        fill
        sizes="100vw"
        className="-z-2 w-full h-full object-cover pointer-events-none"
      />
      <div className="container">
        <div className="flex flex-wrap max-sm:flex-col-reverse max-sm:items-center relative z-0">
          <div
            className={cn(
              "w-full sm:w-[calc(100%-276px)] md:w-[calc(100%-320px)] xl:w-[calc(100%-400px)] 2xl:w-[calc(100%-468px)]",
            )}
          >
            <Heading
              as="h1"
              size="heading1"
              className={cn(
                "line-clamp-3 text-center sm:text-start text-transparent bg-linear-to-r from-[#999] via-50% via-white to-white bg-clip-text xl:max-w-[80%] mb-[15px] sm:mb-[20px] xl:mb-[40px] 2xl:mb-[60px]",
                varient === "investment" && "xl:max-w-[100%]",
              )}
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
                      className="xl:text-[16px] 2xl:text-[19px] 3xl:text-[20px] max-w-[150px] 3xs:max-w-[160px] sm:max-w-[200px] xl:max-w-[220px] 2xl:max-w-[240px]"
                      asChild
                    >
                      <Link href={buttonItem?.link}>{buttonItem?.label}</Link>
                    </ActionButton>
                  ) : buttonItem?.type === "external-with-image" ? (
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
                  ) : buttonItem?.type === "modal" ? (
                    <BrochureModal key={index}>
                      <ActionButton
                        size={"lg"}
                        className="xl:text-[16px] 2xl:text-[19px] 3xl:text-[20px] text-black bg-white max-w-[130px] 3xs:max-w-[140px] sm:max-w-[160px] xl:max-w-[200px] 2xl:max-w-[220px] hover:text-white"
                      >
                        Get Brochure
                      </ActionButton>
                    </BrochureModal>
                  ) : buttonItem?.type === "external" ? (
                    <ActionButton
                      key={index}
                      size={"lg"}
                      variant={"default"}
                      target="_blank"
                      className="xl:text-[16px] 2xl:text-[19px] 3xl:text-[20px] max-w-[150px] text-black bg-white 3xs:max-w-[160px] sm:max-w-[200px] xl:max-w-[220px] 2xl:max-w-[240px] hover:text-white"
                      asChild
                    >
                      <Link href={buttonItem?.link}>{buttonItem?.label}</Link>
                    </ActionButton>
                  ) : (
                    <ActionButton
                      key={index}
                      size={"lg"}
                      className="xl:text-[16px] 2xl:text-[19px] 3xl:text-[20px] text-black bg-white max-w-[130px] 3xs:max-w-[140px] sm:max-w-[160px] xl:max-w-[200px] 2xl:max-w-[220px] hover:text-white"
                      asChild
                    >
                      <Link href={buttonItem?.link}>{buttonItem?.label}</Link>
                    </ActionButton>
                  ),
                )}
              </div>
            )}
            {childern}
          </div>
          <div
            className={cn(
              "w-[176px] sm:w-[276px] md:w-[320px] xl:w-[400px] 2xl:w-[468px] max-sm:mb-[20px]",
            )}
          >
            <div
              className={cn(
                "w-full sm:max-w-[200px] lg:max-w-[320px] xl:max-w-[468px] 2xl:max-w-[668px] 3xl:max-w-[676px] aspect-[52/57] sm:absolute z-0 top-1/2 right-0 sm:-translate-y-1/2 ",
                varient === "investment" &&
                  "xl:max-w-[376px] 2xl:max-w-[440px] 3xl:max-w-[576px]",
              )}
            >
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
                <picture>
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
