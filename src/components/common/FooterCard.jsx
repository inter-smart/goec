import Image from "next/image";
import React from "react";
import { Heading } from "../utils/Heading";
import { Text } from "../utils/Text";
import parse from "html-react-parser";
import Link from "next/link";
import { ActionButton } from "../utils/Button";

const footerDetails = {
  title: "Wish to know more about GO EC?",
  paragraph:
    "<p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial insights reveals down the importance of having a well-thought-out strategy.</p>",
  button_text: "Get in touch",
  button_text_link: "/contact",
};

export default function FooterCard({ title, description = footerDetails?.paragraph }) {
  return (
    <div className="px-[10px] sm:px-[15px] xl:p-[20px]">
      <div className="w-full my-[90px] lg:my-[100px] 2xl:my-[140px] 3xl:my-[187px] relative rounded-[24px] overflow-hidden">
        <Image
          src="/images/Footer_background.jpg"
          alt="footer-card-bg"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 80vw"
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0055E0] via-[#003894] to-[#003894] opacity-70 z-10" />
        {/* Content Container */}
        <div className="relative z-20 p-[50px] lg:p-[57px] xl:p-[72px] 2xl:p-[80px] 3xl:p-[107px] flex flex-col sm:flex-row items-start sm:items-center justify-between lg:gap-[140px] gap-8">
          {/* Text Content */}
          <div className="text-white">
            <Heading as={"h3"} size={"heading3"} className="font-medium mb-[10px] sm:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[22px]">
              {title}
            </Heading>
            <Text as={"div"} size={"text2"} className="text-[#E6E6E6] xl:text-[20px] text-[16px] leading-tight">
              {parse(description)|| "wewqeqwe"}
            </Text>
          </div>
          {/* CTA Button */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <ActionButton
              size={"lg"}
              className="xl:p-[25.5px_80px] p-[10px_20px] font-medium rounded-full bg-white text-[#0C030A] transition-all duration-300 shadow-lg hover:bg-white"
            >
              <Link href="/contact">Get in touch</Link>
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}
