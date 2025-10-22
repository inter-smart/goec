import FormBanner from "@/components/features/partner-us/FormBanner";

const heroData = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/become-partner-banner.png",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/become-partner-banner.png",
      alt: "hero",
    },
  },
  title: "Become a Partner",
  description: "Become a part of EV Revolution",
};

export default function Page() {
  return <FormBanner data={heroData} />;
}
