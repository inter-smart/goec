import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import parse from "html-react-parser";
import { Text } from "@/components/utils/Text";

const local_data = {
  media: {
    desktop: {
      media_path: "/images/career-hero-2.jpg",
      media_alt: "career-hero-2",
    },
    mobile: {
      media_path: "/images/career-hero-2.jpg",
      media_alt: "career-hero-2",
    },
  },
  title: "Let's join & <br /> Grow Together",
  description:
    "<p>At GO EC, we are dedicated to making a meaningful impact in the EV industry. If you share this passion, we could be the perfect match for you!</p>",
};

export default function CareerHeroSection({ data = local_data }) {
  return (
    <section className="w-full xl:h-screen min-h-[468px] sm:min-h-[420px] xl:min-h-[576px] 2xl:min-h-[768px] 3xl:min-h-[900px] flex flex-wrap bg-black py-[calc(20px+var(--header-y))_20px] sm:py-[calc(60px+var(--header-y))_80px] xl:py-[calc(80px+var(--header-y))_200px] 2xl:py-[calc(100px+var(--header-y))_200px] xl:mb-[210px] 2xl:mb-[200px] 3xl:mb-[400px] relative z-0 max-sm:flex-col max-sm:justify-center">
      <Image
        src={"/images/career-hero-1.jpg"}
        alt={"career-hero-1"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
        className="-z-2 object-cover pointer-events-none"
      />
      <div className="w-full max-w-[320px] sm:max-w-[576px] xl:max-w-[620px] 2xl:max-w-[768px] 3xl:max-w-[960px] mx-auto max-sm:px-4">
        <Heading
          as="h1"
          size="heading1"
          className="text-center text-transparent bg-linear-to-l from-[#999] via-50% via-white to-white bg-clip-text mb-[10px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
        >
          {parse(data?.title)}
        </Heading>
        {data?.description && (
          <Text
            as="div"
            size="text2"
            className="line-clamp-2 text-center text-white"
          >
            {parse(data?.description)}
          </Text>
        )}
      </div>
      <div className="container xl:absolute z-2 top-[calc(100%-100px)] sm:top-[calc(100%-100px)] xl:top-[calc(100%-200px)] 2xl:top-[calc(100%-280px)] left-0 right-0 max-xl:w-full max-xl:mt-4">
        <div className="w-full max-w-[320px] sm:max-w-[468px] xl:max-w-full h-auto aspect-[1060/420] bg-black rounded-[15px] xl:rounded-[20px] overflow-hidden mx-auto relative z-0">
          <picture className="absolute z-2 inset-0">
            <source
              media="(max-width: 640px)"
              srcSet={data?.media?.mobile?.media_path}
            />
            <Image
              src={data?.media?.desktop?.media_path}
              alt={data?.media?.desktop?.media_alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
              className="z-2 object-cover transition hover:scale-105"
              quality={100}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
