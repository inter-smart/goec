import InnerHero from "@/components/common/InnerHero";
import AppDetailSection from "@/components/features/mobile-app/AppDetailSection";
import AppFeatureSection from "@/components/features/mobile-app/AppFeatureSection";
import HowChargeSection from "@/components/features/mobile-app/HowChargeSection";
import AppDownloadSection from "@/components/features/mobile-app/AppDownloadSection";
import { ActionButton } from "@/components/utils/Button";
import Link from "next/link";
import { fetchFromAPI } from "@/lib/api";
import Error from "../error";

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

export default async function Page() {
  const { data, error } = await fetchFromAPI("app");

  if (error) {
    return <Error path="/" />;
  }

  const {
    banner_section,
    about_section,
    feature_section,
    how_to_charge_section,
    start_ur_ev_section,
  } = data;

  return (
    <>
      <InnerHero
      data={banner_section}
        title={banner_section?.title}
        media={banner_section?.media}
        banner_button_one_link={banner_section?.banner_button_one_link}
        banner_button_two_link={banner_section?.banner_button_two_link}
        appStore_media={start_ur_ev_section?.appstore_media_path}
      >
        {/* <div className="flex space-x-[5px] sm:space-x-[10px] xl:space-x-[15px] max-sm:justify-center">
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
        </div> */}
      </InnerHero>
      <AppDetailSection data={about_section} />
      <AppFeatureSection
        title={feature_section?.title}
        list={feature_section?.list}
      />
      <HowChargeSection
        title={how_to_charge_section?.title}
        list={how_to_charge_section?.list}
      />
      <AppDownloadSection appDownloadData={start_ur_ev_section} />
    </>
  );
}
