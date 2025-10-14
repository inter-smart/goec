import Image from "next/image";
import { ActionButton } from "../utils/Button";
import Link from "next/link";
import { format } from "date-fns";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import { MEDIA_URL } from "@/lib/api";

export default function NewsCard({ news }) {

  
  let formattedDate = "";
  if (news?.published_on) {
    const date = new Date(news.published_on);
    if (!isNaN(date)) {
      formattedDate = format(date, "dd MMMM yyyy");
    }
  }
  return (
    <Suspense fallback={<NewsCardSkeleton />}>
      <div className="w-full h-auto block rounded-[20px] sm:rounded-[30px] bg-[#fcfcfc] border border-[#f0f0f0]">
        <div className="w-full h-auto aspect-[4/2] rounded-[20px] sm:rounded-[30px] overflow-hidden relative z-0">
          <Image
            src={`${MEDIA_URL}${news?.media?.media_path}`}
            alt={news?.media?.media_alt}
            fill
            sizes="512px"
            className="transition hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-between p-[15px_15px] sm:p-[15px_20px] xl:p-[20px_30px] 2xl:p-[30px_40px]">
          <div>
            <div className="text-[12px] sm:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[26px] leading-tight font-medium text-black line-clamp-2 mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
              {formattedDate}
            </div>
          </div>
          <div className="flex justify-between items-center gap-[10px]">
            <div className="text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-none font-normal text-[#757575]">
              {formattedDate}
            </div>
            <div>
              <ActionButton variant="link" className="text-black" asChild>
                <Link href={`news/${news?.slug}`}>{news?.button?.label}</Link>
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
