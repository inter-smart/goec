import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import Link from "next/link";

export default function StationCard({ data, btn }) {
  return (
    <div className="w-full  h-auto  rounded-[20px] sm:rounded-[24px] border border-[#e5e5e5] overflow-hidden">
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

      <div className="m-[48px]">
        <div className="flex flex-col gap-[24px]">
          {/* Title */}
          <div className="text-[#303030] font-medium text-[20px] md:text-[36px]">{data?.title}</div>

          {/* Features List */}
          <div className={data?.isSuper ? "flex flex-wrap gap-[24px]" : "flex flex-col sm:gap-[8px]"}>
            {data?.features?.slice(0, 2).map((feature, index) => (
              <div key={index} className="rounded-full border border-black/5 px-3 sm:px-3 py-2 w-fit ">
                <div className="text-[12px] sm:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[26px] tracking-tighter  text-black line-clamp-2">
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
