import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import Link from "next/link";

export default function StationCard({ data, btn }) {
  return (
    <div
      className={`w-full mb-[12px] lg:mb-[16px] xl:mb-[20px] 2xl:mb-[24px] sm:min-w-[260px] md:min-w-[320px] lg:min-w-[420px] xl:min-w-[520px] rounded-[20px] sm:rounded-[24px] border border-[#e5e5e5] overflow-hidden`}
    >
      {/* Image Container */}
      <div className="w-full  relative">
        <Image
          src={data?.media?.path}
          alt={data?.media?.alt}
          height={100}
          width={100}
          sizes="320px"
          className="w-full"
          placeholder="blur"
          blurDataURL="/images/placeholder.jpg"
        />
      </div>

      <div className="p-[25px] xl:p-[42px] 2xl:p-[48px]">
        <div className="flex flex-col gap-[24px]">
          {/* Title */}
          <div className="text-[16px] sm:text-[20px] lg:text-[26px] xl:text-[34px] 2xl:text-[40px] 3xl:text-[48px] leading-tight font-medium">
            {data?.title}
          </div>

          {/* Features List */}
          <div className={data?.isSuper ? "flex flex-wrap gap-[24px]" : "flex md:flex-col sm:gap-[8px]"}>
            {data?.features?.slice(0, 2).map((feature, index) => (
              <div key={index} className="rounded-full border border-black/5 px-3 sm:px-3 py-2 w-fit ">
                <div className="sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] tracking-tighter  text-black line-clamp-2">
                  {feature}
                </div>
              </div>
            ))}
          </div>

          {/* Book Now Button */}
          <ActionButton size="lg" variant="blue" className="w-full mt-2" asChild>
            <Link href={btn?.link}>{btn?.label}</Link>
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
