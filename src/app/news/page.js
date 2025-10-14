import HeroBanner from "@/components/common/HeroBanner";

export default function Page() {
  const data = {
    bannerData: {
      background_media: {
        desktop: {
          path: "/images/news-banner.png",
          alt: "hero",
        },
        texts: {
          main: "News",
          sub: "The EV Industry & Our Perspective In ourown words.",
          description:
            "Explore the newest advancements in the electric vehicle industry, particularly our innovative charging stations that are setting new standards in efficiency!",
        },
      },
    },
  };

  console.log("Test");

  return (
    <>
      <HeroBanner data={data?.bannerData} />
    </>
  );
}
