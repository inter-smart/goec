import InnerHero from "@/components/common/InnerHero";
import AppDetailSection from "@/components/features/mobile-app/AppDetailSection";
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
    path: "/images/nfccard-hero-1.png",
    alt: "hero",
  },
  title: "Simplify Your Charging Experience with One Tap",
  description: null,
  button: [
    {
      type: "secondary",
      label: "Get GO EC NFC Card",
      link: "/",
    },
  ],
};

const app_detail_data = {
  description:
    "<h4>With the GOEC mobile app, finding an electric vehicle charging station is just a tap away. Our smart locator helps users discover the nearest available chargers in real-time eliminating range anxiety and removing the guesswork from EV travel.</h4>",
};

export default function Page({ data = heroData }) {
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
      <AppDetailSection data={app_detail_data} />
    </>
  );
}
