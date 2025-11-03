import InnerHero from "@/components/common/InnerHero";
import AppDetailSection from "@/components/features/mobile-app/AppDetailSection";
import AppFeatureSection from "@/components/features/mobile-app/AppFeatureSection";
import HowChargeSection from "@/components/features/mobile-app/HowChargeSection";
import AppDownloadSection from "@/components/features/mobile-app/AppDownloadSection";
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

const app_detail_data = {
  description:
    "<h4>With the GOEC mobile app, finding an electric vehicle charging station is just a tap away. Our smart locator helps users discover the nearest available chargers in real-time eliminating range anxiety and removing the guesswork from EV travel.</h4>",
};

const how_charge_section_data = {
  title: "How to charge your EV",
  description: null,
  item_howcharge: [
    {
      id: 1,
      media: {
        type: "image",
        path: "/images/mobileapp-howcharge-1.jpg",
        alt: "mobileapp-howcharge-1",
      },
      title: "Locate Charger",
      description:
        "<p>Locate your nearest charging station from the GO EC app.</p>",
    },
    {
      id: 2,
      media: {
        type: "image",
        path: "/images/mobileapp-howcharge-1.jpg",
        alt: "mobileapp-howcharge-1",
      },
      title: "Connect Charger",
      description:
        "<p>Park your car in the slot and connect the charger to your EV.</p>",
    },
    {
      id: 3,
      media: {
        type: "image",
        path: "/images/mobileapp-howcharge-1.jpg",
        alt: "mobileapp-howcharge-1",
      },
      title: "Start Charging",
      description: "<p>Use the GO EC app / RFID Card to start charging.</p>",
    },
    {
      id: 4,
      media: {
        type: "image",
        path: "/images/mobileapp-howcharge-1.jpg",
        alt: "mobileapp-howcharge-1",
      },
      title: "Payment",
      description:
        "<p>Complete the payment conveniently using the app / RFID Card</p>",
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
      <AppDetailSection data={app_detail_data} />
      <AppFeatureSection />
      <HowChargeSection data={how_charge_section_data} />
      <AppDownloadSection />
    </>
  );
}
