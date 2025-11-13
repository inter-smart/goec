import Link from "next/link";
import { Heading } from "../../utils/Heading";
import { Text } from "../../utils/Text";
import { ActionButton } from "../../utils/Button";
import Image from "next/image";
import parse from "html-react-parser";

export default function NotFoundSection({ data }) {
  return (
    <section className="w-full xl:h-screen min-h-[468px] xl:min-h-[540px] 2xl:min-h-[620px] 3xl:min-h-[768px] py-[calc(30px_+_var(--header-y))_30px] sm:py-[calc(40px_+_var(--header-y))_40px] xl:py-[calc(60px_+_var(--header-y))_60px] 2xl:py-[calc(80px_+_var(--header-y))_80px] flex items-center relative z-0 overflow-hidden">
      <Image
        src="/images/error-bg.jpg"
        alt="error-bg"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
        className="-z-1 pointer-events-none"
      />
      <div className="container">
        <Heading
          as={"h1"}
          size={"none"}
          className="text-[56px] sm:text-[72px] lg:text-[120px] xl:text-[168px] 2xl:text-[200px] leading-none font-semibold text-center text-transparent bg-linear-to-b from-[#2473F6] via-50% via-[#003894] to-[#000000] bg-clip-text"
        >
          {data?.error_code}
        </Heading>
        <Heading
          as={"h2"}
          size={"heading2"}
          className="text-center text-white mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
        >
          {data?.title}
        </Heading>
        <Text
          as={"div"}
          size={"text2"}
          className="text-center text-[#e6e6e6] mb-[20px] xl:mb-[30px] 2xl:mb-[40px]"
        >
          {parse(data?.description)}
        </Text>
        <div className="flex">
          <ActionButton
            size={"lg"}
            className="text-black bg-white max-w-[120px] sm:max-w-[130px] xl:max-w-[140px] 2xl:max-w-[160px] mx-auto"
            asChild
          >
            <Link href={data?.button?.link}>{data?.button?.label}</Link>
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
