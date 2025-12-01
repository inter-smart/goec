import InnerHero from "@/components/common/InnerHero";
import AppDetailSection from "@/components/features/mobile-app/AppDetailSection";
import HowChargeSection from "@/components/features/mobile-app/HowChargeSection";
import AppDownloadSection from "@/components/features/nfc-card/AppDownloadSection";
import KeyBenefitSection from "@/components/features/nfc-card/KeyBenefitSection";
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
    "<h4>The GOEC NFC card allows you to start and pay for your EV charging session within seconds—simply tap your card at any GOEC charging station. It’s the fastest and most convenient way to charge on the go.</h4>",
};

const how_charge_section_data = {
  media: {
    mobile: {
      type: "image",
      path: "/images/invest-1.jpg",
      alt: "invest",
    },
    desktop: {
      type: "image",
      path: "/images/invest-1.jpg",
      alt: "invest",
    },
  },
  title: "Get the GO EC <br /> Smart Card in 3 steps",
  description:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae.</p>",
  button: {
    link: "/",
    label: "Learn more",
  },
  item_howcharge: [
    {
      id: 1,
      media: {
        type: "image",
        path: "/images/nfccard-howcharge-1.jpg",
        alt: "nfccard-howcharge-1",
      },
      title: "Apply for smart card",
      description:
        "<p>Register through the GOEC mobile app or official website.</p>",
    },
    {
      id: 2,
      media: {
        type: "image",
        path: "/images/nfccard-howcharge-2.jpg",
        alt: "nfccard-howcharge-2",
      },
      title: "Connect Charger",
      description:
        "<p>Park your car in the slot and connect the charger to your EV.</p>",
    },
    {
      id: 3,
      media: {
        type: "image",
        path: "/images/nfccard-howcharge-3.jpg",
        alt: "nfccard-howcharge-3",
      },
      title: "Tap & Go",
      description: "<p>Activate the card and begin charging immediately</p>",
    },
  ],
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
      <KeyBenefitSection />
      <HowChargeSection data={how_charge_section_data} variant={"nfc-card"} />
      <AppDownloadSection />
    </>
  );
}
