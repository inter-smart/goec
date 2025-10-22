"use client";

import Link from "next/link";
import { Heading } from "./utils/Heading";
import { Text } from "./utils/Text";
import { ActionButton } from "./utils/Button";

export default function NotFound({ data }) {
  return (
    <section className="flex flex-col items-center justify-center w-full lg:px-0">
      <div className="flex flex-col items-center w-full max-w-lg lg:max-w-xl 2xl:max-w-2xl lg:mx-auto">
        <div className="text-[8rem] md:text-[10rem] xl:text-[13rem] font-bold inline-block bg-gradient-to-b from-[#2473F6] via-[#003894] to-black bg-clip-text text-transparent leading-tight">
          {data.statusCode}
        </div>
        <div className="text-center flex flex-col justify-center items-center w-full">
          <Heading
            as={"h1"}
            size={"heading1"}
            className=" text-center font-bold text-white drop-shadow dark:drop-shadow-lg transition-colors"
          >
            {data.message}
          </Heading>
          <Text
            as={"p"}
            size={"text2"}
            className="text-center text-[#E6E6E6] w-[200px] sm:w-[250px] md:w-[300px] 2xl:w-[400px] 3xl:w-[500px] my-[24px_40px]"
          >
            {data.description}
          </Text>
          <Link href={`/${data.btn_link}`} className="transition-colors button">
            <ActionButton
              size={"lg"}
              className="bg-white text-[#151515] font-semibold p-[22px_32px] rounded-full shadow-lg hover:bg-gradient-to-r hover:from-[#2CC59C] hover:via-[#00EEA8] hover:to-[#2CC59C] hover:text-white dark:hover:bg-blue-700 transition-all duration-200"
              type="button"
            >
              {data.btn_text}
            </ActionButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
