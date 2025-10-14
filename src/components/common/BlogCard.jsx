import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

export default function BlogCard({ data }) {
  const formattedDate = format(new Date(data?.timestamp), "dd MMMM yyyy");

  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <Suspense fallback={<BlogCardSkeleton />}>
      <div className="w-full h-auto block rounded-[20px] sm:rounded-[30px] overflow-hidden bg-[#fcfcfc] border border-[#f0f0f0]">
        <Link href={data?.button?.link}>
          <div className="w-full h-auto aspect-[4/2] overflow-hidden relative z-0">
            <Image
              src={data?.media?.path}
              alt={data?.media?.alt}
              fill
              sizes="512px"
              className="transition hover:scale-105"
              placeholder="blur"
              blurDataURL="/images/placeholder.jpg"
            />
          </div>
          <div className="flex flex-col justify-between p-[15px_15px] sm:p-[15px_20px] xl:p-[20px_30px] 2xl:p-[30px_40px]">
            <div>
              <div className="text-[12px] sm:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[26px] leading-tight font-medium text-black line-clamp-2 mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
                {data?.title}
              </div>
            </div>
            <div className="flex justify-between gap-[10px]">
              <div className="text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-none font-normal text-[#757575]">
                {formattedDate}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Suspense>
  );
}

function BlogCardSkeleton() {
  return (
    <Skeleton className="w-full h-auto block rounded-[30px] bg-gray-400">
      <Skeleton className="w-full h-auto aspect-[4/2]" />
      <div className="p-[15px_20px] xl:p-[20px_30px] 2xl:p-[30px_40px]">
        <Skeleton className="h-[20px] sm:h-[22px] xl:h-[26px] 2xl:h-[30px] w-3/4 rounded mb-[10px] xl:mb-[15px] 2xl:mb-[20px]" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-[16px] xl:h-[18px] 2xl:h-[20px] w-[80px] rounded" />
        </div>
      </div>
    </Skeleton>
  );
}
