import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import Link from "next/link";

const tripData = {
  media: {
    type: "video",
    path: "/videos/trip-bg.mp4",
    alt: "trip",
  },
  title: "Make every ride smoother, <span>greener</span> & smarter.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.",
  button: {
    link: "/",
    label: "Plan a trip now",
  },
};
export default function TripSection({ data = tripData }) {
  return (
    <section className="w-full h-auto block bg-white relative z-0 py-[40px_10px] sm:py-[80px_10px] xl:py-[100px_15px] 2xl:py-[120px_20px]">
      <div className="w-full h-1/2 bg-black absolute top-[-2px] left-0 right-0s -z-1" />
      <div className="max-sm:container sm:w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] sm:mx-auto">
        <div className="w-full h-auto block overflow-hidden rounded-[20px] xl:rounded-[40px] p-[40px] sm:p-[60px] xl:p-[60px_80px] 2xl:p-[80px_100px] bg-black relative z-0">
          <Image
            src="/images/hero-overlay.png"
            alt="overlay"
            fill
            sizes="1820px"
            className="-z-1 pointer-events-none"
          />
          <Image
            src="/images/logo-vector.svg"
            alt="logo-vector"
            width={100}
            height={100}
            className="w-[220px] sm:w-[576px] xl:w-[768px] 2xl:w-[1080px] aspect-square opacity-5 absolute -z-1 top-1/2 right-[-15%] -translate-y-1/2 object-contain object-center "
          />
          {data?.media?.type === "video" ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full opacity-95 object-cover absolute -z-2 inset-0"
            >
              <source src={data?.media?.path} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={data?.media?.path}
              alt={data?.media?.alt}
              fill
              sizes="1820px"
              className="-z-2 opacity-95"
            />
          )}
          <div>
            <Heading
              as="h2"
              size="heading1"
              className="font-medium leading-tight text-white sm:max-w-[576px] xl:max-w-[420px] 2xl:max-w-[576px] 3xl:max-w-[620px] mb-[80px] sm:mb-[100px] xl:mb-[180px] 2xl:mb-[220px] 3xl:mb-[276px]"
            >
              <span
                className="[&>span]:text-primary [&>span]:italic"
                dangerouslySetInnerHTML={{ __html: data?.title }}
              />
            </Heading>
          </div>
          <div className="flex flex-wrap justify-between items-end">
            <div className="flex">
              <Text
                as="p"
                size="text2"
                className="text-white sm:max-w-[468px] xl:max-w-[520px] 2xl:max-w-[768px]"
              >
                {data?.description}
              </Text>
            </div>
            <ActionButton
              size={"lg"}
              className="text-black bg-[white] max-w-[180px] xl:max-w-[200px] 2xl:max-w-[220px]"
              asChild
            >
              <Link href={data?.button?.link}>{data?.button?.label}</Link>
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
}
