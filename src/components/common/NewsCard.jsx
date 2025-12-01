import Image from "next/image";
import { ActionButton } from "../utils/Button";
import Link from "next/link";
import { format } from "date-fns";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

export default function NewsCard({ data }) {
  const formattedDate = format(new Date(data?.timestamp), "dd MMMM yyyy");
  return (
    <Suspense fallback={<NewsCardSkeleton />}>
      <div className="w-full h-auto block rounded-[30px] bg-[#fcfcfc] border border-[#f0f0f0]">
        <div className="w-full h-auto aspect-[4/2] rounded-[30px] overflow-hidden relative z-0">
          <Image
            src={data?.media?.path}
            alt={data?.media?.alt}
            fill
            sizes="512px"
            className="transition hover:scale-105"
            // placeholder="blur"
            // blurDataURL={data?.media?.path}
            // quality={80}
            
            placeholder="blur"
            blurDataURL="/images/placeholder.jpg"
          />
        </div>
        <div className="flex flex-col justify-between p-[15px_20px] xl:p-[20px_30px] 2xl:p-[30px_40px]">
          <div>
            <div className="text-[14px] sm:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[26px] leading-tight font-medium text-black line-clamp-2 mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
              {data?.title}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-none font-normal text-[#757575]  mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
              {formattedDate}
            </div>
            <div>
              <ActionButton variant="link" className="text-black" asChild>
                <Link href={data?.button?.link}>{data?.button?.label}</Link>
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

function NewsCardSkeleton() {
  return (
    <Skeleton className="bg-gray-400 rounded-[30px]">
      <Skeleton className="w-full aspect-[4/2] rounded-[30px]" />
      <Skeleton className="h-[26px] w-3/4 mt-4 rounded" />
      <div className="flex justify-between mt-3">
        <Skeleton className="h-[20px] w-[80px] rounded" />
        <Skeleton className="h-[30px] w-[100px] rounded" />
      </div>
    </Skeleton>
  );
}
