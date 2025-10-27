"use client";
import { useRef, useState } from "react";
import NewsCard from "@/components/common/NewsCard";
import { ActionButton } from "@/components/utils/Button";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { Text } from "@/components/utils/Text";
import { Heading } from "@/components/utils/Heading";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function BlogListSection({ data, variant }) {
  const blogSectionRef = useRef(null);
  const pathname = usePathname();
  const popularItems = data?.popular?.item_popular || [];
  const firstItem = popularItems[0];
  const otherItems = popularItems.slice(1);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const blogItems = data?.blog?.item_blog || [];
  const totalPages = Math.ceil(blogItems.length / itemsPerPage);

  // Calculate current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogItems.slice(indexOfFirstItem, indexOfLastItem);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("ellipsis-start");
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("ellipsis-end");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  // Add a new ref at the top with other hooks
  const paginationRef = useRef(null);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);

      // Small delay to let React update the DOM first
      setTimeout(() => {
        if (paginationRef.current) {
          const offset = 150;
          const elementPosition =
            paginationRef.current.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  return (
    <section className="w-full h-auto block py-[30px] sm:py-[60px_60px] xl:py-[80px_80px] 2xl:py-[100px_90px] mt-(--header-y)">
      <div className="container">
        <div className="flex flex-wrap items-end mb-[20px] sm:mb-[30px] xl:mb-[40px] 2xl:mb-[60px]">
          <Heading
            as="h2"
            size="heading1"
            className="font-semibold text-[#030303] max-sm:text-center"
          >
            {data?.title}
          </Heading>
          <div className="ml-auto flex gap-[10px] xl:gap-[20px] 2xl:gap-[30px]">
            {data?.button?.map((item, index) => (
              <div key={"button" + index}>
                <ActionButton
                  size="lg"
                  variant={"blue"}
                  className={cn(
                    "font-semibold w-[100px] sm:w-[120px] xl:w-[160px] 2xl:w-[190px] 3xl:w-[220px]",
                    pathname !== item?.link &&
                      " text-black bg-white border-1 border-[#f0f0f0]"
                  )}
                  asChild
                >
                  <Link href={item?.link}>{item?.label}</Link>
                </ActionButton>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap mx-[-5px] xl:mx-[-10px] 2xl:mx-[-12px] [&>*]:p-[5px] xl:[&>*]:p-[10px] 2xl:[&>*]:p-[12px]">
          {firstItem && (
            <div className="w-full md:w-1/2 lg:w-[calc(100%-448px)] xl:w-[calc(100%-448px)] 2xl:w-[calc(100%-540px)] 3xl:w-[calc(100%-620px)]">
              <div className="w-full h-auto block rounded-[20px] xl:rounded-[30px] bg-[#fcfcfc] border border-[#f0f0f0]">
                <div className="w-full h-auto aspect-[92/44] rounded-[20px] xl:rounded-[30px] overflow-hidden relative z-0">
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
                <div className="flex flex-col justify-between p-[15px_15px] sm:p-[15px_20px_30px] xl:p-[20px_30px_35px] 2xl:p-[30px_40px_40px]">
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
                      className="text-[8px] sm:text-[10px] xl:text-[14px] 2xl:text-[16px] leading-none font-normal text-[#757575] flex gap-[4px] lg:gap-[6px] items-center"
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
            <div className="w-full md:w-1/2 lg:w-[448px] xl:w-[448px] 2xl:w-[540px] 3xl:w-[620px] max-md:mt-[30px]">
              <Heading
                as="h3"
                size="none"
                className="text-[20px] md:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[32px] leading-tight font-semibold text-[#030303] max-md:text-center mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
              >
                {data?.popular?.title}
              </Heading>
              <div className="flex flex-wrap mx-[-5px] md:mx-0 [&>*]:p-[5px] md:[&>*]:p-0">
                {otherItems.map((item, index) => {
                  const formattedDate = format(
                    new Date(item.timestamp),
                    "dd MMMM yyyy"
                  );
                  return (
                    <div
                      key={"news" + index}
                      className="group w-full xs:w-1/2 md:w-full mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
                    >
                      <Link
                        href={item.button?.link}
                        className="w-full h-full block md:pb-[10px] xl:pb-[15px] 2xl:pb-[20px] md:border-b border-[#f0f0f0] group-last:border-white"
                      >
                        <div className="h-full flex flex-wrap mx-[-5px] xl:mx-[-10px] 2xl:mx-[-12px] [&>*]:px-[5px] xl:[&>*]:px-[10px] 2xl:[&>*]:px-[12px]">
                          <div className="w-full md:w-[100px] lg:w-[140px] xl:w-[170px] 2xl:w-[200px] 3xl:w-[250px]">
                            <div className="w-full h-full aspect-[2/1] md:aspect-[240/220] rounded-[20px] xl:rounded-[30px] overflow-hidden relative z-0">
                              <Image
                                src={item.media?.path}
                                alt={item.media?.alt}
                                fill
                                sizes="512px"
                                className="object-cover transition hover:scale-105"
                              />
                            </div>
                          </div>
                          <div className="w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-140px)] xl:w-[calc(100%-170px)] 2xl:w-[calc(100%-200px)] 3xl:w-[calc(100%-250px)]">
                            <div className="h-full flex flex-col justify-between py-[10px] 2xl:py-[15px] 3xl:py-[30px]">
                              <div>
                                <div className="text-[14px] sm:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] leading-tight font-semibold text-black line-clamp-2 mb-[2px] xl:mb-[4px] 3xl:mb-[8px]">
                                  {item.title}
                                </div>
                                <Text
                                  as="div"
                                  size="text3"
                                  className="line-clamp-2 text-[#373737] mb-[5px] xl:mb-[10px] 3xl:mb-[15px]"
                                >
                                  {parse(item.description)}
                                </Text>
                              </div>
                              <div className="flex justify-between items-center">
                                <Text
                                  as="div"
                                  size="none"
                                  className="text-[8px] sm:text-[10px] xl:text-[14px] 2xl:text-[16px] leading-none font-normal text-[#757575]"
                                >
                                  Blog - 10 mins read
                                </Text>
                                <Text
                                  as="div"
                                  size="none"
                                  className="text-[10px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] leading-none font-normal text-[#757575]"
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
            </div>
          )}
        </div>

        <Heading
          ref={blogSectionRef}
          as="h2"
          size="heading2"
          className="font-medium text-[#030303] max-md:text-center mb-[15px] xl:mb-[20px] 2xl:mb-[30px] mt-[20px] sm:mt-[30px] xl:mt-[40px] 2xl:mt-[60px]"
        >
          {data?.blog?.title}
        </Heading>

        <div className="flex flex-wrap mx-[-5px] xl:mx-[-10px] 2xl:mx-[-12px] [&>*]:p-[5px] xl:[&>*]:p-[10px] 2xl:[&>*]:p-[12px]">
          {currentItems.map((item, index) => (
            <div key={"blogs" + index} className="w-full xs:w-1/2 lg:w-1/3">
              <NewsCard data={item} variant={variant} />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div
            ref={paginationRef}
            className="mt-[20px] sm:mt-[30px] xl:mt-[40px] 2xl:mt-[60px]"
          >
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(currentPage - 1);
                    }}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>

                {getPageNumbers().map((page, index) => (
                  <PaginationItem key={index}>
                    {page === "ellipsis-start" || page === "ellipsis-end" ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page);
                        }}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(currentPage + 1);
                    }}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
}
