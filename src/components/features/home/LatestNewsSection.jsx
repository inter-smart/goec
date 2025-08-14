import NewsCard from "@/components/common/NewsCard";
import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { Text } from "@/components/utils/Text";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const newsData = {
  title: "Latest News",
  button: {
    link: "/",
    label: "View all",
  },
  items_news: [
    {
      timestamp: "2025-08-14T05:00:00.000000Z",
      media: {
        type: "image",
        path: "/images/news-1.jpg",
        alt: "news",
      },
      title:
        "New super charger hub Inaugurated, LULU Mall TVM New super charger hub Inaugurated, LULU Mall TVM",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
      button: {
        link: "/news/news-detail",
        label: "Read now",
      },
    },
    {
      timestamp: "2025-08-14T05:00:00.000000Z",
      media: {
        type: "image",
        path: "/images/news-2.jpg",
        alt: "news",
      },
      title: "The Advantages of Having an EV Charging Station in 2025",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
      button: {
        link: "/news/news-detail",
        label: "Read now",
      },
    },
    {
      timestamp: "2025-08-14T05:00:00.000000Z",
      media: {
        type: "image",
        path: "/images/news-3.jpg",
        alt: "news",
      },
      title: "The Advantages of Having an EV Charging Station in 2025",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
      button: {
        link: "/news/news-detail",
        label: "Read now",
      },
    },
    {
      timestamp: "2025-08-14T05:00:00.000000Z",
      media: {
        type: "image",
        path: "/images/news-4.jpg",
        alt: "news",
      },
      title: "The Advantages of Having an EV Charging Station in 2025",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
      button: {
        link: "/news/news-detail",
        label: "Read now",
      },
    },
    {
      timestamp: "2025-08-14T05:00:00.000000Z",
      media: {
        type: "image",
        path: "/images/news-5.jpg",
        alt: "news",
      },
      title: "The Advantages of Having an EV Charging Station in 2025",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
      button: {
        link: "/news/news-detail",
        label: "Read now",
      },
    },
  ],
};

export default function LatestNewsSection({ data = newsData }) {
  return (
    <section className="w-full h-auto block py-[40px_30px] sm:py-[80px_60px] xl:py-[100px_80px] 2xl:py-[120px_90px]">
      <div className="container">
        <div className="flex flex-wrap items-center mb-[20px] sm:mb-[30px] xl:mb-[40px] 2xl:mb-[60px] 3xl:mb-[80px]">
          <div className="flex-1">
            <Heading
              as="h2"
              size="heading2"
              className="text-[#303030] xl:max-w-[840px]"
            >
              {data?.title}
            </Heading>
          </div>
          <div>
            <ActionButton variant="link" className="text-black" asChild>
              <Link href={data?.button?.link}>{data?.button?.label}</Link>
            </ActionButton>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-4px] xl:mx-[-6px] 2xl:mx-[-12px] [&>*]:p-[4px] xl:[&>*]:p-[6px] 2xl:[&>*]:p-[12px]">
          {data?.items_news.map((item, index) => {
            const formattedDate = format(
              new Date(item?.timestamp),
              "dd MMMM yyyy"
            );
            return index === 0 ? (
              <div key={"news" + index} className="w-full sm:w-1/2 lg:w-2/3">
                <Suspense fallback={<NewsLgCardSkeleton />}>
                  <div className="w-full h-full block rounded-[30px] bg-[#fcfcfc] border border-[#f0f0f0]">
                    <div className="h-full flex flex-wrap mx-[-4px] xl:mx-[-6px] 2xl:mx-[-12px] [&>*]:px-[4px] xl:[&>*]:px-[6px] 2xl:[&>*]:px-[12px]">
                      <div className="w-full sm:w-1/2">
                        <div className="w-full h-full aspect-[4/2] rounded-[30px] overflow-hidden relative z-0">
                          <Image
                            src={item?.media?.path}
                            alt={item?.media?.alt}
                            fill
                            sizes="512px"
                            className="transition hover:scale-105"
                          />
                        </div>
                      </div>
                      <div className="w-full sm:w-1/2">
                        <div className="h-full flex flex-col justify-between p-[15px_20px_15px_0] xl:p-[20px_30px_20px_0] 2xl:p-[30px_40px_30px_0]">
                          <div>
                            <div className="text-[14px] sm:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[26px] leading-tight font-medium text-black line-clamp-2 mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
                              {item?.title}
                            </div>
                            <Text
                              as="div"
                              size="text2"
                              className="line-clamp-3 text-[#373737] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
                            >
                              {parse(item?.description)}
                            </Text>
                          </div>
                          <div className="flex justify-between">
                            <div className="text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-none font-normal text-[#757575]  mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
                              {formattedDate}
                            </div>
                            <div>
                              <ActionButton
                                variant="link"
                                className="text-black"
                                asChild
                              >
                                <Link href={item?.button?.link}>
                                  {item?.button?.label}
                                </Link>
                              </ActionButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Suspense>
              </div>
            ) : (
              <div key={"news" + index} className="w-full sm:w-1/2 lg:w-1/3">
                <NewsCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function NewsLgCardSkeleton() {
  return (
    <Skeleton className="h-full flex flex-wrap bg-gray-400 rounded-[30px]">
      <Skeleton className="w-full sm:w-1/2 aspect-[4/2] rounded-[30px]" />
      <div className="w-full sm:w-1/2 flex flex-col justify-between p-10">
        <div>
          <Skeleton className="h-[26px] w-3/4 mb-4 rounded" />
          <Skeleton className="h-[18px] w-full mb-2 rounded" />
          <Skeleton className="h-[18px] w-5/6 mb-2 rounded" />
          <Skeleton className="h-[18px] w-4/6 rounded" />
        </div>
        <div className="flex justify-between items-center mt-4">
          <Skeleton className="h-[20px] w-[80px] rounded" />
          <Skeleton className="h-[30px] w-[100px] rounded-md" />
        </div>
      </div>
    </Skeleton>
  );
}
