import Image from "next/image";
import { ActionButton } from "../utils/Button";
import Link from "next/link";
import { Heading } from "../utils/Heading";
import { Text } from "../utils/Text";
import parse from "html-react-parser";

const local_data = {
  media: {
    type: "image",
    path: "/images/icon-success.svg",
    alt: "icon-success",
  },
  title: "Thank You!",
  description:
    "<p>Brochure will be forward to your email, you <br /> can download it from there.</p>",
};

export default function SuccessComp({ data = local_data }) {
  return (
    <div className="w-full p-[20px] xl:p-[30px] 2xl:p-[40px] flex flex-col">
      <Image
        src={data?.media?.path}
        alt={data?.media?.alt}
        width={100}
        height={100}
        className="w-[60px] xl:w-[80px] h-auto mx-auto transition hover:scale-105"
      />
      <Heading
        as="h2"
        size="heading2"
        className="font-medium text-center text-[#030303] mb-[5px] 2xl:mb-[10px]"
      >
        {data?.title}
      </Heading>
      <Text
        as="div"
        size="text3"
        className="text-center text-[#373737] mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
      >
        {parse(data?.description)}
      </Text>
      <ActionButton
        size={"lg"}
        variant={"blue"}
        className="max-w-[90px] sm:max-w-[100px] xl:max-w-[120px] 2xl:max-w-[140px] mx-auto"
        asChild
      >
        <Link href="/">Continue</Link>
      </ActionButton>
    </div>
  );
}
