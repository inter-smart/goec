import ScrollerSection from "@/components/common/ScrollerSection";
import AboutMercantile from "@/components/features/mercantile-nepal/AboutMercantile";
import FooterCard from "@/components/features/mercantile-nepal/FooterCard";
import HeroSection from "@/components/features/mercantile-nepal/HeroSection";
import IndustySection from "@/components/features/mercantile-nepal/IndustySection";
import InvestmentSection from "@/components/features/mercantile-nepal/InvestmentSection";
import { fetchFromAPI } from "@/lib/api";

const Gallery = {
  title: "Gallery",
  list: [
    {
      src: "/images/gallery_1.png", // replace with your image path
      alt: "Team photo 1",
    },
    {
      src: "/images/gallery_2.png", // replace with your image path
      alt: "Team photo 2",
    },
    {
      src: "/images/gallery_3.png", // replace with your image path
      alt: "Team photo 1",
    },
    {
      src: "/images/gallery_1.png", // replace with your image path
      alt: "Team photo 2",
    },
    {
      src: "/images/gallery_2.png", // replace with your image path
      alt: "Team photo 1",
    },
    {
      src: "/images/gallery_3.png", // replace with your image path
      alt: "Team photo 2",
    },
  ],
};

export default async function MerchantileNepalPage() {
  const { data, error } = await fetchFromAPI("merchantile-nepal");

  if (error) {
    return <Error path={"/merchantile-nepal"} />;
  }

  const { banner_section, about_section, graph_section, our_values, gallery, bottom_card } = data || {};

  return (
    <div>
      <HeroSection bannerData={banner_section} />
      <AboutMercantile aboutData={about_section} />
      <IndustySection data={graph_section} values={our_values} />
      {/* <InvestmentSection /> */}
      <FooterCard data={bottom_card} />
      <ScrollerSection title={gallery.title} list={gallery.list} page="mercantile-nepal" />
    </div>
  );
}
