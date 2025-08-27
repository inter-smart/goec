import DOMPurify from "isomorphic-dompurify";

const AppInfoData = {
  description:
    "<h3>With the GOEC mobile app, finding an electric vehicle charging station is just a tap away. Our smart locator helps users discover the nearest available chargers in real-time eliminating range anxiety and removing the guesswork from EV travel.</h3>",
};

export default function AppInfoSection({ data = AppInfoData }) {
  const sanitizedText = DOMPurify.sanitize(data?.description);
  return (
    <section className="w-full h-auto block py-[40px_20px] sm:py-[60px_30px] xl:py-[100px_50px] 2xl:py-[140px_70px]">
      <div className="container">
        <div
          className="typography [&_h2]:font-normal mb-[40px] sm:mb-[80px] xl:mb-[100px] 2xl:mb-[140px]"
          dangerouslySetInnerHTML={{ __html: sanitizedText }}
        />
      </div>
    </section>
  );
}
