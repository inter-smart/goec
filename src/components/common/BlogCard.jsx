import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import { MEDIA_URL } from "@/lib/api";

const data = [
  {
    title: "The Advantages of Having an EV Charging Station in 2025",
    slug: "The Advantages of Having an EV Charging Station in 2025",
    description:
      "Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy,",
    published_on: "2025-09-19T10:52:45.000Z",
    media: {
      media_path: "uploads/blog/1758516388631-254300881.webp",
      media_alt: "thumbnail_alt",
    },
  },
];

export default function BlogCard({ blog = data, type }) {

  console.log(type)
  let formattedDate = "";
  if (blog?.published_on) {
    const date = new Date(blog.published_on);
    if (!isNaN(date)) {
      formattedDate = format(date, "dd MMMM yyyy");
    }
  }

  console.log(blog);
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <Suspense fallback={<BlogCardSkeleton />}>
      <div className="w-full h-auto block rounded-[20px] sm:rounded-[30px] overflow-hidden bg-[#fcfcfc] border border-[#f0f0f0]">
        <Link href={`/blog/${blog?.slug}`} key={blog?.slug}>
          <div className="w-full h-auto aspect-[4/2] overflow-hidden relative z-0">
            <Image
              src={`${MEDIA_URL}${blog?.media?.media_path}`}
              alt={blog?.media?.media_alt}
              fill
              sizes="512px"
              className="transition hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-between p-[15px_15px] sm:p-[15px_20px] xl:p-[20px_30px] 2xl:p-[30px_40px]">
            <div>
              <div className="text-[12px] sm:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[26px] leading-tight font-medium text-black line-clamp-2 mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
                {blog?.title}
              </div>

              {type === "similar_blogs" && (
                <p className="text-[#373737] text-[12px] mb-[10px] lg:mb-[24px] line-clamp-2 leading-tight">
                  {blog?.description}
                </p>
              )}
            </div>
            <div className="flex justify-between gap-[10px]">
              {type === "similar_blogs" && (
                <div className="text-[10px] sm:text-[12px] mt-0 xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-[#757575] leading-none font-normal">
                  <span>Blog - 10 mins read</span>
                </div>
              )}
              <div className="text-[10px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-none font-normal text-[#757575]">
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
