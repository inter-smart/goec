import Image from "next/image";

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
    "<p>GO EC is envisioned to meet the opportunities for sustainable mobility through collaborations with wiling and progressive partners. Our focus remains on creating a chain of EV Charging Stations that are optimized within the best-given space and infrastructure capacities.</p>",
};

export default function InvestmentInfoSection({ data = investmentData }) {
  const sanitizedText = DOMPurify.sanitize(data?.description);
  return (
    <section className="w-full h-auto block py-[40px] sm:py-[60px] xl:py-[100px] 2xl:py-[120px]">
      <div className="w-full sm:w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto px-1.5 mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]">
        <div className="w-full aspect-[1820/420] overflow-hidden rounded-[20px] sm:rounded-[30px] relative z-0">
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
              />
            </picture>
          )}
        </div>
      </div>
      <div className="container">
        <div
          className="typography"
          dangerouslySetInnerHTML={{ __html: sanitizedText }}
        />
      </div>
    </section>
  );
}
