"use client";
import NewsCard from "@/components/common/NewsCard";
import { ActionButton } from "@/components/utils/Button";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { Text } from "@/components/utils/Text";
import { Suspense } from "react";
import { Heading } from "@/components/utils/Heading";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const local_data = {
  title: "Insights",
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
  popular: {
    title: "Popular Blogs",
    item_popular: [
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/Blog_1.png",
          alt: "news",
        },
        author: {
          media: {
            type: null,
            path: "/images/author-1.jpg",
            alt: "author",
          },
          title: "Mary Freund",
        },
        title:
          "Here are some important things you should know about EV chargers",
        description:
          "<p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strate</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/bloglist-2.jpg",
          alt: "news",
        },
        title: "Understanding the Basics of EV Charging",
        description:
          "<p>Uncover the art of strategic planning & decision-making in the business world.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/bloglist-3.jpg",
          alt: "news",
        },
        title: "Public EV Charging Etiquette",
        description:
          "<p>Uncover the art of strategic planning & decision-making in the business world.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/bloglist-4.jpg",
          alt: "news",
        },
        title: "Home EV Charger Installation Guide",
        description:
          "<p>Uncover the art of strategic planning & decision-making in the business world.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
    ],
  },
};
export default function BlogListSection({ data = local_data }) {
  const pathname = usePathname();
  const popularItems = data?.popular?.item_popular || [];
  const firstItem = popularItems[0];
  const otherItems = popularItems.slice(1);

  return (
    <section className="w-full h-auto block py-[30px] sm:py-[80px_60px] xl:py-[100px_80px] 2xl:py-[120px_90px] mt-(--header-y)">
      <div className="container">
        {/* Header */}
        <div className="flex flex-wrap items-end mb-[20px] sm:mb-[30px] xl:mb-[40px] 2xl:mb-[80px]">
          <Heading
            as="h2"
            size="heading1"
            className="font-semibold text-[#030303] max-sm:text-center"
          >
            {data?.title}
          </Heading>
          <div className="ml-auto flex gap-[10px] sm:gap-[20px] xl:gap-[30px] 2xl:gap-[40px]">
            {data?.button?.map((item, index) => (
              <div key={"button" + index}>
                <ActionButton
                  size="lg"
                  className={cn(
                    "text-black bg-white min-w-[140px] sm:min-w-[180px] xl:min-w-[200px] 2xl:min-w-[220px]",
                    pathname === item?.link && "bg-primary text-white"
                  )}
                  asChild
                >
                  <Link href={item?.link}>{item?.label}</Link>
                </ActionButton>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap mx-[-4px] xl:mx-[-6px] 2xl:mx-[-12px] [&>*]:p-[4px] xl:[&>*]:p-[6px] 2xl:[&>*]:p-[12px]">
          {firstItem && (
            <div className="w-full sm:w-1/2 lg:w-2/3 2xl:w-[calc(100%-668px)] 3xl:w-[calc(100%-576px)]">
              <div className="w-full h-auto block rounded-[20px] sm:rounded-[30px] bg-[#fcfcfc] border border-[#f0f0f0]">
                <div className="w-full h-auto aspect-[92/44] rounded-[20px] sm:rounded-[30px] overflow-hidden relative z-0">
                  <Image
                    src={firstItem.media?.path}
                    alt={firstItem.media?.alt}
                    fill
                    sizes="512px"
                    className="transition hover:scale-105"
                    placeholder="blur"
                    blurDataURL="/images/placeholder.jpg"
                  />
                </div>
                <div className="flex flex-col justify-between p-[15px_15px] sm:p-[15px_20px] xl:p-[20px_30px] 2xl:p-[30px_40px]">
                  <div>
                    <Heading
                      as="h3"
                      size="heading3"
                      className="font-semibold line-clamp-2 text-[#030303] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
                    >
                      {firstItem.title}
                    </Heading>
                    <Text
                      as="div"
                      size="text3"
                      className="line-clamp-1 text-[#373737] mb-[20px] xl:mb-[30px] 2xl:mb-[50px]"
                    >
                      {parse(firstItem.description)}
                    </Text>
                  </div>
                  <div className="flex justify-between items-center gap-[10px]">
                    <div>
                      <div className="w-full h-auto flex items-center">
                        <div className="w-[20px] xl:w-[30px] 2xl:w-[40px] h-auto aspect-square rounded-full overflow-hidden bg-white/20">
                          <Image
                            src={firstItem?.author?.media?.path}
                            alt={firstItem?.author?.media?.alt}
                            width={50}
                            height={50}
                            className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                            placeholder="blur"
                            blurDataURL="/images/placeholder.jpg"
                          />
                        </div>
                        <div className="w-[calc(100%-20px)] xl:w-[calc(100%-30px)] 2xl:w-[calc(100%-40px)] pl-[4px] xl:pl-[6px] 2xl:pl-[10px]">
                          <Text
                            as="div"
                            size="text3"
                            className="leading-tight font-semibold text-[#030303]"
                          >
                            {firstItem?.author?.title}
                          </Text>
                        </div>
                      </div>
                    </div>

                    <Text
                      as="div"
                      size="none"
                      className="text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] leading-none font-normal text-[#757575] flex gap-[4px] lg:gap-[6px] items-center"
                    >
                      {format(new Date(firstItem.timestamp), "dd MMMM yyyy")}
                      <span className="w-[4px] h-[4px] inline-block bg-[#757575] rounded"></span>
                      10 mins read
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          )}
          {otherItems.length > 0 && (
            <div className="w-full sm:w-1/2 lg:w-1/3 2xl:w-[668px] 3xl:w-[576px]">
              <Heading
                as="h3"
                size="none"
                className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[32px] leading-tight font-semibold text-[#030303] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
              >
                {data?.popular?.title}
              </Heading>

              {otherItems.map((item, index) => {
                const formattedDate = format(
                  new Date(item.timestamp),
                  "dd MMMM yyyy"
                );
                return (
                  <div
                    key={"news" + index}
                    className="mb-[10px] lg:mb-[15px] 2xl:mb-[20px] last:mb-0"
                  >
                    <Link
                      href={item.button?.link}
                      className="w-full h-full block pb-[10px] lg:pb-[15px] 2xl:pb-[20px] border-b border-b-[#f0f0f0]"
                    >
                      <div className="h-full flex flex-wrap mx-[-4px] xl:mx-[-6px] 2xl:mx-[-12px] [&>*]:px-[4px] xl:[&>*]:px-[6px] 2xl:[&>*]:px-[12px]">
                        <div className="w-full sm:w-1/2 lg:w-[268px]">
                          <div className="w-full h-full aspect-[240/220] rounded-[30px] overflow-hidden relative z-0">
                            <Image
                              src={item.media?.path}
                              alt={item.media?.alt}
                              fill
                              sizes="512px"
                              className="object-cover transition hover:scale-105"
                            />
                          </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-[calc(100%-268px)]">
                          <div className="h-full flex flex-col justify-between py-[15px] xl:py-[30px] 2xl:py-[30px]">
                            <div>
                              <div className="text-[14px] sm:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[26px] leading-tight font-semibold text-black line-clamp-2 mb-[4px] xl:mb-[6px] 2xl:mb-[10px]">
                                {item.title}
                              </div>
                              <Text
                                as="div"
                                size="text3"
                                className="line-clamp-2 text-[#373737] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
                              >
                                {parse(item.description)}
                              </Text>
                            </div>
                            <div className="flex justify-between items-center">
                              <Text
                                as="div"
                                size="none"
                                className="text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] leading-none font-normal text-[#757575]"
                              >
                                Blog - 10 mins read
                              </Text>
                              <Text
                                as="div"
                                size="none"
                                className="text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] leading-none font-normal text-[#757575]"
                              >
                                {formattedDate}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
