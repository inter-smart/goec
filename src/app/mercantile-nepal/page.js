import ScrollerSection from "@/components/common/ScrollerSection";
import AboutMercantile from "@/components/features/mercantile-nepal/AboutMercantile";
import FooterCard from "@/components/features/mercantile-nepal/FooterCard";
import HeroSection from "@/components/features/mercantile-nepal/HeroSection";
import IndustySection from "@/components/features/mercantile-nepal/IndustySection";
import InvestmentSection from "@/components/features/mercantile-nepal/InvestmentSection";

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
  return (
    <div>
      <HeroSection />
      <AboutMercantile />
      <IndustySection />
      <InvestmentSection />
      <FooterCard />
      <ScrollerSection  title={Gallery.title} list={Gallery.list} />
    </div>
  );
}
