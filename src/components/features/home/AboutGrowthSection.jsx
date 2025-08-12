import { Heading } from "@/components/utils/Heading";
import Image from "next/image";

const aboutGrowthData = {
  items_growth: [
    {
      media: {
        type: "image",
        path: "/images/about-growth-1.jpg",
        alt: "about",
      },
      title:
        "GO EC started with one charging station in Kerala, sparking an electric revolution.",
      value: "2020",
    },
    {
      media: {
        type: "image",
        path: "/images/about-growth-1.jpg",
        alt: "about",
      },
      title:
        "We're now Kerala's leading EV charging station and expanding across India.",
      value: "2025",
    },
    {
      media: {
        type: "image",
        path: "/images/about-growth-1.jpg",
        alt: "about",
      },
      title:
        "By 2030, GOEC will power every state in India with EV charging stations.",
      value: "2030",
    },
  ],
};

export default function AboutGrowthSection({ data = aboutGrowthData }) {
  return (
    <section className="w-full h-auto block bg-black relative z-0 py-[40px] sm:py-[80px] xl:py-[100px] 2xl:py-[120px]">
      {data?.items_growth.map((item, index) => (
        <div key={"growth" + index}>
          <Image
            src={item?.media?.path}
            alt={item?.media?.alt}
            fill
            sizes="100vw"
            className="-z-1"
          />
          <div className="container">
            <Heading
              as="h2"
              size="heading2"
              className="text-center text-white max-w-[85%] mx-auto mb-[40px] sm:mb-[60px] xl:mb-[80px] 2xl:mb-[140px] 3xl:mb-[160px]"
            >
              {data?.title}
            </Heading>
          </div>
        </div>
      ))}
    </section>
  );
}
