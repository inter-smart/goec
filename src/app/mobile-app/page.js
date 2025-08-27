import InnerHero from "@/components/common/InnerHero";
import AppFeatureSection from "@/components/features/mobile-app/AppFeatureSection";
import AppInfoSection from "@/components/features/mobile-app/AppInfoSection";
import { ActionButton } from "@/components/utils/Button";
import Link from "next/link";

const heroData = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/hero-about-bg-1.jpg",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/hero-about-bg-1.jpg",
      alt: "hero",
    },
  },
  media: {
    type: "image",
    path: "/images/app-hero-1.png",
    alt: "hero",
  },
  title: "Charge on the Go effortlessly with the GO EC App",
  description: null,
  button: [
    {
      media: {
        type: "image",
        path: "/images/icon-app_store.svg",
        alt: "app",
      },
      type: "external",
      label: "app store ",
      link: "/",
    },
    {
      media: {
        type: "image",
        path: "/images/icon-play_store.svg",
        alt: "play",
      },
      type: "external",
      label: "play store ",
      link: "/",
    },
  ],
};

export default function Page() {
  const data = heroData;
  return (
    <>
      <InnerHero data={heroData}>
        <div className="flex space-x-[5px] sm:space-x-[10px] xl:space-x-[15px] max-sm:justify-center">
          {data?.button?.map((buttonItem, index) =>
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
      </InnerHero>
      <AppInfoSection />
      <AppFeatureSection />
    </>
  );
}
