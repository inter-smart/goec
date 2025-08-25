import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import parse from "html-react-parser";
import Image from "next/image";

const AboutTeamData = {
  title: "Meet the team",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae.",
  media: {
    desktop: {
      type: "image",
      path: "/images/about-team-1.jpg",
      alt: "about-team",
    },
    mobile: {
      type: "image",
      path: "/images/about-team-1.jpg",
      alt: "about-team",
    },
  },
};

export default function AboutTeamSection({ data = AboutTeamData }) {
  return (
    <section className="w-full h-auto block py-[40px_20px] sm:py-[60px_30px] xl:py-[100px_50px] 2xl:py-[140px_70px]">
      <div className="container">
        <div className="flex flex-wrap mb-[80px] sm:mb-[70px] xl:mb-[70px] 2xl:mb-[80px] 3xl:mb-[90px] max-sm:flex-col">
          <div className="flex-1 max-sm:mb-[15px]">
            <Heading
              as="h2"
              size="heading2"
              className="text-[#030303] max-sm:text-center"
            >
              {data?.title}
            </Heading>
          </div>
          <div className="w-[80%] sm:w-[300px] md:w-[368px] xl:w-[420px] 2xl:w-[576px] 3xl:w-[640px] max-sm:mx-auto max-sm:text-center">
            <Text as="div" size="text2" className="text-[#373737]">
              {parse(data?.description)}
            </Text>
          </div>
        </div>
      </div>
      <div className="w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto">
        <div className="w-full aspect-[1820/700] overflow-hidden rounded-[20px] xl:rounded-[25px] relative z-0">
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
                className="-z-1 object-cover transition hover:scale-105"
                placeholder="blur"
                blurDataURL="/images/placeholder.jpg"
              />
            </picture>
          )}
        </div>
      </div>
    </section>
  );
}
