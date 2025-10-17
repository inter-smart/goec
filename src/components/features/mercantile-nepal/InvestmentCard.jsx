// Card Component
"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";


export function InvestmentCard({ image, title, subtitle, description, link }) {
  return (
    <div className="group flex flex-col bg-[#FCFCFC] border-[#F0F0F0] border-[1px] rounded-[24px]">
      {/* Image Container */}
      <div className="relative w-full aspect-[520/326] rounded-[24px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-[20px] sm:p-[24px] xl:p-[28px] 2xl:p-[32px]">
        <Heading as={"h2"} size={"heading2"} className="font-medium text-[#191A19] mb-2">{title}</Heading>
        <Text as="p" size={"text1"} className="text-sm text-[#757575] mb-4">{subtitle}</Text>
        <Text as="p" size={"text2"} className="text-gray-700 mb-6 leading-relaxed">{description}</Text>

        {/* Learn More Link */}
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-[#151515] font-medium hover:gap-3 transition-all duration-300 group/link"
        >
          <Text size={"text2"} as={"p"}>Learn more</Text>
          <Image src="/images/Arrow.png" alt="arrow" width={18} height={18} />
          </Link>
      </div>
    </div>
  );
}
