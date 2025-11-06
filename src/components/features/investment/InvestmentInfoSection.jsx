import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";

const investmentData = {
  media: {
    desktop: {
      type: "video",
      path: "/videos/investment-info-1.mp4",
      alt: "investment",
    },
    mobile: {
      type: "video",
      path: "/videos/investment-info-1.mp4",
      alt: "investment",
    },
  },
  description:
    "<h4>GO EC is envisioned to meet the opportunities for sustainable mobility through collaborations with wiling and progressive partners. Our focus remains on creating a chain of EV Charging Stations that are optimized within the best-given space and infrastructure capacities.</h4>",
};

export default function InvestmentInfoSection({
  description,
  data = investmentData,
}) {
  const sanitizedText = DOMPurify.sanitize(description);
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[60px] xl:py-[100px] 2xl:py-[120px]">
      <div className="w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto mb-[15px] sm:mb-[30px] xl:mb-[60px] 2xl:mb-[80px]">
        <div className="w-full aspect-[1360/520] overflow-hidden rounded-[20px] xl:rounded-[25px] relative z-0">
          <Image
            src="/images/icon-play.svg"
            alt="icon-play"
            width={78}
            height={78}
            className="w-[60px] xl:w-[70px] 2xl:w-[78px] aspect-square absolute z-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition hover:scale-105"
          />
          {data?.media?.desktop?.type === "video" ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover absolute -z-2 inset-0"
            >
              <source src={data?.media?.desktop?.path} type="video/mp4" />
            </video>
          ) : (
            <picture className="absolute -z-1 inset-0">
              <source
                media="(max-width: 640px)"
                srcSet={data?.media?.mobile?.path}
              />
              <Image
                src={data?.media?.desktop?.path}
                alt={data?.media?.desktop?.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
                className="-z-1 transition hover:scale-105"
                placeholder="blur"
                blurDataURL="/images/placeholder.jpg"
              />
            </picture>
          )}
        </div>
      </div>
      <div className="container">
        <div className="typography my-[20px_10px] sm:my-[40px_20px] xl:my-[100px_30px] 2xl:my-[140px_40px]">
          {parse(data?.description)}
        </div>
      </div>
    </section>
  );
}
