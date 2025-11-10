import Image from "next/image";
import { Heading } from "../../utils/Heading";
import { Text } from "../../utils/Text";
import { ActionButton } from "../../utils/Button";
import Link from "next/link";

// Pass the path to your spotlight bg image and logo bg image props as needed
export default function Hero({
  title = "Let's join & Grow Together",
  description = "At GOEC, we are dedicated to making a meaningful impact in the EV industry. If you share this passion, we could be the perfect match for you.",
  bglogo = "/images/goec_bg_logo.png", // Replace with actual
  children,
}) {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center py-16 overflow-hidden">
      {/* Spotlight radial bg effect */}
      <div
        className="absolute w-full h-screen flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <Image
          src="/images/Spotlight_bg.png"
          alt="Spotlight effect"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Centered background logo */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <Image
          src={bglogo}
          alt="Background logo"
          width={400}
          height={400}
          className="opacity-5 w-full h-full object-contain"
          style={{ filter: "blur(0.5px)" }}
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[400px] lg:max-w-[630px] xl:max-w-[630px] 2xl:max-w-[613px] mx-auto">
        <div className="max-w-[200px] md:max-w-[200px] lg:max-w-[250px] xl:max-w-[390px] 3xl:max-w-[500px] mx-auto">
          <Heading
            as="h1"
            size="heading1"
            className="text-white text-center font-bold mb-[22px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[50px]"
          >
            {title}
          </Heading>
        </div>
        <Text size="text1" className="text-white text-center">
          {description}
        </Text>
      </div>
    </section>
  );
}
