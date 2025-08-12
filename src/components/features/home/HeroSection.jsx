import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import Image from "next/image";
import Link from "next/link";

const heroData = {
  title: "Powering Your Journey with Lightning Charging Nationwide",
  description:
    "Nationwide network of ultra-fast EV chargers with 99.9% uptime. Sustainable energy, seamless experience.",
};

export default function HeroSection({ data = heroData }) {
  return (
    <div className="w-full h-auto min-h-screen pt-[var(--header-y)] bg-black/40 relative z-0">
      <Image
        src="/images/hero-banner-1.jpg"
        alt="hero"
        fill
        sizes="100vw"
        className="-z-1"
      />
      <div className="container h-[1000px]">
        <div className="w-full min-h-screen py-[40px] sm:py-[60px] xl:py-[100px] 2xl:py-[120px] xl:max-w-[720px] 2xl:max-w-[1080px]">
          <Heading
            as="h1"
            size="heading1"
            className="text-transparent bg-linear-to-r from-[#999] via-50% via-white to-white bg-clip-text mb-[20px] xl:mb-[30px] 2xl:mb-[40px]"
          >
            {data?.title}
          </Heading>
          <Text
            as="p"
            size="text1"
            className="xl:max-w-[80%] text-white mb-[20px] xl:mb-[30px] 2xl:mb-[40px]"
          >
            {data?.description}
          </Text>
          <div className="flex">
            <ActionButton className="min-w-[145px]" asChild>
              <Link href="/login">Learn more</Link>
            </ActionButton>
            <ActionButton className="min-w-[145px]" asChild>
              <Link href="/login">Find Nearest Station
              
              </Link>
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}
