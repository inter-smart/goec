import InnerHero from "@/components/common/InnerHero";
import AppDetailSection from "@/components/features/mobile-app/AppDetailSection";
import AppFeatureSection from "@/components/features/mobile-app/AppFeatureSection";
import HowChargeSection from "@/components/features/mobile-app/HowChargeSection";
import AppDownloadSection from "@/components/features/mobile-app/AppDownloadSection";
import { fetchFromAPI } from "@/lib/api";
import Error from "../error";

export default async function Page() {
  const { data, error } = await fetchFromAPI("app");

  if (error) {
    return <Error path="/mobile-app" />;
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
         external_button={start_ur_ev_section}
      ></InnerHero>
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
