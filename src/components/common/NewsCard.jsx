import Image from "next/image";
import { ActionButton } from "../utils/Button";
import Link from "next/link";
import { format } from "date-fns";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import { Text } from "../utils/Text";
import { MEDIA_URL } from "@/lib/api";

const section = {
  button: [
    {
      type: "primary",
      label: "Blogs",
      link: "/blog",
    },
    {
      type: "primary",
      label: "News",
      link: "/news",
    },
  ],
};

export default function NewsCard({ data, variant = "news" }) {

  const formattedDate = data?.published_on
    ? format(new Date(data?.published_on), "dd MMMM yyyy")
    : format(new Date(), "dd MMMM yyyy");


    console.log(`${variant}/${data?.slug}`)
  return (
    <Suspense fallback={<NewsCardSkeleton />}>
      <div className="w-full h-auto block rounded-[20px] sm:rounded-[30px] bg-[#fcfcfc] border border-[#f0f0f0]">
        <Link
          href={`/${variant}/${data?.slug}`}
          className={cn(
            "w-full h-auto block aspect-[4/2] overflow-hidden relative z-0",
            variant === "blog" ||
              variant === "blog-detail" ||
              variant === "home"
              ? "rounded-t-[20px] sm:rounded-t-[30px]"
              : "rounded-[20px] sm:rounded-[30px]"
          )}
        >
          <Image
            src={`${MEDIA_URL}${data?.media?.media_path}`}
            alt={data?.media?.media_alt}
            fill
            sizes="512px"
            className="transition hover:scale-105"
            placeholder="blur"
            blurDataURL="/images/placeholder.jpg"
          />
        </Link>
        <div className="flex flex-col justify-between p-[15px_15px] sm:p-[15px_20px] xl:p-[20px_30px] 2xl:p-[30px_40px]">
          <div>
            <div className="text-[12px] sm:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[26px] leading-tight font-medium text-black line-clamp-2 mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
              <Link href={`/${variant}/${data?.slug}`}>{data?.title}</Link>
            </div>
            {variant === "blog-detail" && (
              <div className="text-[10px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-tight line-clamp-2 font-normal text-[#757575] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
                {parse(data?.description)}
              </div>
            )}
          </div>
          <div className="flex justify-between items-center gap-[10px]">
            {variant === "blog-detail" ? (
              <>
                <Text
                  as="div"
                  size="none"
                  className="text-[8px] sm:text-[10px] xl:text-[14px] 2xl:text-[16px] leading-none font-normal text-[#373737]"
                >
                  {data?.category}
                  <span>&nbsp;-&nbsp;</span>
                  {data?.reading_time}
                </Text>
                <div className="text-[8px] sm:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-none font-normal text-[#373737] flex gap-[4px] lg:gap-[6px] items-center">
                  {formattedDate}
                </div>
              </>
            ) : (
              <>
                <div className="text-[8px] sm:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-none font-normal text-[#757575] flex gap-[4px] lg:gap-[6px] items-center">
                  {formattedDate}
                  {variant === "blog" && (
                    <>
                      <span className="w-[4px] h-[4px] inline-block bg-[#757575] rounded"></span>
                      {data?.reading_time}
                    </>
                  )}
                </div>
                <div>
                  <ActionButton
                    variant="link"
                    className="text-[10px] sm:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-black hover:[>svg]:translate-x-1"
                    asChild
                  >
                    <Link href={`/${variant}/${data?.slug}`}>
                      Read now
                      <svg
                        width="32"
                        height="8"
                        viewBox="0 0 32 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-[10px] sm:size-[15px] xl:size-[20px] 3xl:size-[25px]"
                      >
                        <path
                          d="M32 3.84766L25.3333 -0.00134566V7.69666L32 3.84766ZM0 3.84766L0 4.51432L26 4.51432V3.84766V3.18099L0 3.18099L0 3.84766Z"
                          fill="#151515"
                        />
                        <mask id="path-2-inside-1_1293_11217" fill="white">
                          <path d="M30.6874 3.67877C30.7281 3.52226 30.8242 3.38586 30.958 3.29497C31.0917 3.20408 31.2539 3.16489 31.4144 3.18472C31.5749 3.20454 31.7227 3.28202 31.8303 3.40272C31.9379 3.52342 31.998 3.67912 31.9993 3.84082C32.0007 4.00252 31.9432 4.15919 31.8376 4.28166C31.732 4.40414 31.5855 4.48406 31.4254 4.50654C31.2653 4.52903 31.1024 4.49255 30.9672 4.40389C30.8319 4.31523 30.7335 4.18045 30.6903 4.02463L30.7478 4.00867C30.7872 4.15054 30.8768 4.27326 30.9999 4.35398C31.123 4.4347 31.2713 4.46791 31.4171 4.44744C31.5629 4.42697 31.6963 4.3542 31.7924 4.24269C31.8885 4.13118 31.9409 3.98854 31.9396 3.84131C31.9384 3.69409 31.8837 3.55233 31.7858 3.44243C31.6878 3.33254 31.5532 3.262 31.4071 3.24395C31.261 3.2259 31.1133 3.26157 30.9915 3.34433C30.8697 3.42708 30.7822 3.55127 30.7452 3.69377L30.6874 3.67877Z" />
                        </mask>
                        <path
                          d="M30.6874 3.67877C30.7281 3.52226 30.8242 3.38586 30.958 3.29497C31.0917 3.20408 31.2539 3.16489 31.4144 3.18472C31.5749 3.20454 31.7227 3.28202 31.8303 3.40272C31.9379 3.52342 31.998 3.67912 31.9993 3.84082C32.0007 4.00252 31.9432 4.15919 31.8376 4.28166C31.732 4.40414 31.5855 4.48406 31.4254 4.50654C31.2653 4.52903 31.1024 4.49255 30.9672 4.40389C30.8319 4.31523 30.7335 4.18045 30.6903 4.02463L30.7478 4.00867C30.7872 4.15054 30.8768 4.27326 30.9999 4.35398C31.123 4.4347 31.2713 4.46791 31.4171 4.44744C31.5629 4.42697 31.6963 4.3542 31.7924 4.24269C31.8885 4.13118 31.9409 3.98854 31.9396 3.84131C31.9384 3.69409 31.8837 3.55233 31.7858 3.44243C31.6878 3.33254 31.5532 3.262 31.4071 3.24395C31.261 3.2259 31.1133 3.26157 30.9915 3.34433C30.8697 3.42708 30.7822 3.55127 30.7452 3.69377L30.6874 3.67877Z"
                          fill="#151515"
                          stroke="#151515"
                          strokeWidth="0.115942"
                          mask="url(#path-2-inside-1_1293_11217)"
                        />
                      </svg>
                    </Link>
                  </ActionButton>
                </div>
              </>
            )}
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
