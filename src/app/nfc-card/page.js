import InnerHero from "@/components/common/InnerHero";
import AppDetailSection from "@/components/features/mobile-app/AppDetailSection";
import HowChargeSection from "@/components/features/mobile-app/HowChargeSection";
import AppDownloadSection from "@/components/features/nfc-card/AppDownloadSection";
import KeyBenefitSection from "@/components/features/nfc-card/KeyBenefitSection";
import { ActionButton } from "@/components/utils/Button";
import { fetchFromAPI } from "@/lib/api";
import Link from "next/link";
import Error from "../error";

export default async function Page() {
  const { data, error } = await fetchFromAPI("nfc-card");

  if (error) {
    return <Error path={"/merchantile-nepal"} />;
  }

  const { banner_section, description, key_values, steps, bottom_card } = data || {};

  return (
    <>
      <InnerHero title={banner_section?.title} button={banner_section?.button} media={banner_section.media} />

      <AppDetailSection description={description} />
      <KeyBenefitSection title={key_values?.title} values={key_values?.list} />
      <HowChargeSection title={steps?.title} description={steps?.description} list={steps?.list} variant={"nfc-card"} />
      <AppDownloadSection title={bottom_card?.description} button={bottom_card?.button} media={bottom_card?.media} />
    </>
  );
}
