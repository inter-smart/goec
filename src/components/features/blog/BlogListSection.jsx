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
import { MEDIA_URL } from "@/lib/api";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const data = {
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

export default function BlogListSection({
  featured_section,
  popular_blogs_section,
  all_blogs_section,
  variant,
}) {
  const blogSectionRef = useRef(null);
  const pathname = usePathname();
  const popularItems = popular_blogs_section?.list || [];
  const firstItem = featured_section?.list[0] || [];
  const otherItems = popular_blogs_section?.list || [];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const blogItems = all_blogs_section?.list || [];
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

  const [emblaRef] = useEmblaCarousel(
    {
      axis: "x",
      containScroll: "keepSnaps",
      dragFree: false,
      // loop: true,
      breakpoints: {
        "(min-width: 768px)": { axis: "y", dragFree: true },
      },
    }
    // [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="w-full h-auto block py-[30px] sm:py-[60px_60px] xl:py-[80px_80px] 2xl:py-[100px_90px] mt-(--header-y)">
      <div className="container">
        <div className="flex flex-wrap items-end mb-[20px] sm:mb-[30px] xl:mb-[40px] 2xl:mb-[60px]">
          <Heading
            as="h2"
            size="heading1"
            className="font-semibold text-[#030303] max-sm:text-center"
          >
            {featured_section?.title}
          </Heading>
          <div className="ml-auto flex gap-[10px] xl:gap-[20px] 2xl:gap-[30px]">
            {data?.button?.map((item, index) => (
              <div key={"button" + index}>
                <ActionButton
                  size="lg"
                  variant={"blue"}
                  className={cn(
                    "font-semibold w-[80px] sm:w-[120px] xl:w-[160px] 2xl:w-[190px] 3xl:w-[220px]",
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
                <Link
                  href={`${variant}/${firstItem?.slug}`}
                  className="w-full h-auto block aspect-[92/44] rounded-[20px] xl:rounded-[30px] overflow-hidden relative z-0"
                >
                  <Image
                    src={`${MEDIA_URL}${firstItem?.media?.media_path}`}
                    alt={firstItem.media?.media_alt}
                    fill
                    sizes="512px"
                    className="transition hover:scale-105"
                    placeholder="blur"
                    blurDataURL="/images/placeholder.jpg"
                  />
                </Link>
                <div className="flex flex-col justify-between p-[15px_15px] sm:p-[15px_20px_30px] xl:p-[20px_30px_35px] 2xl:p-[30px_40px_40px]">
                  <div>
                    <Heading
                      as="h3"
                      size="heading3"
                      className={cn(
                        "line-clamp-2 text-[#030303] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]",
                        variant === "blog" && "font-semibold"
                      )}
                    >
                      <Link href={`${variant}/${firstItem?.slug}`}>
                        {firstItem.title}
                      </Link>
                    </Heading>
                    <Text
                      as="div"
                      size="text3"
                      className={cn(
                        "text-[#373737]",
                        variant === "blog" &&
                          "line-clamp-1 mb-[20px] xl:mb-[30px] 2xl:mb-[50px]",
                        variant === "news" &&
                          "line-clamp-2 mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
                      )}
                    >
                      {parse(firstItem?.description || "description")}
                    </Text>
                  </div>
                  <div className="flex justify-between items-center gap-[10px]">
                    {variant === "blog" && (
                      <div>
                        <div className="w-full h-auto flex items-center">
                          <div className="w-[20px] xl:w-[30px] 2xl:w-[40px] h-auto aspect-square rounded-full overflow-hidden bg-white/20">
                            <Image
                              src={`${MEDIA_URL}${firstItem?.author?.media?.media_path}`}
                              alt={
                                firstItem?.author?.media?.media_alt ||
                                "author alt image "
                              }
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
                              {firstItem?.author?.name}
                            </Text>
                          </div>
                        </div>
                      </div>
                    )}
                    <Text
                      as="div"
                      size="none"
                      className="text-[12px] sm:text-[10px] xl:text-[14px] 2xl:text-[16px] leading-none font-normal text-[#757575] flex gap-[4px] lg:gap-[6px] items-center"
                    >
                      {format(
                        new Date(firstItem?.published_on),
                        "dd MMMM yyyy"
                      )}
                      <span className="w-[4px] h-[4px] inline-block bg-[#757575] rounded"></span>
                      {firstItem?.reading_time}
                    </Text>
                    {variant === "news" && (
                      <div>
                        <ActionButton
                          variant="link"
                          className="text-[14px] sm:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-black hover:[>svg]:translate-x-1"
                          asChild
                        >
                          <Link href={`${variant}/${firstItem?.slug}`}>
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
                              <mask
                                id="path-2-inside-1_1293_11217"
                                fill="white"
                              >
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
                    )}
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
                className="text-[26px] md:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[32px] leading-tight font-semibold text-[#030303] max-md:text-center mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
              >
                {popular_blogs_section?.title}
              </Heading>
              <div className="md:w-full max-md:mr-[-16px] mask-[linear-gradient(to_right,white_0%,white_95%,transparent_100%)] md:mask-[linear-gradient(to_bottom,white_0%,white_95%,transparent_100%)]">
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex md:flex-col md:h-[300px] lg:h-[400px] xl:h-[480px] 2xl:h-[620px] 3xl:h-[740px] touch-pan-x touch-pinch-zoom">
                    {otherItems?.map((item, index) => {
                      const formattedDate = format(
                        new Date(item.published_on),
                        "dd MMMM yyyy"
                      );
                      return (
                        <div
                          key={index}
                          className="flex-[0_0_320px] xs:flex-[0_0_50%] md:flex-[0_0_120px] lg:flex-[0_0_33.333%] min-h-0 max-md:p-[5px] md:py-1 xl:py-2 md:border-b border-[#f0f0f0] group-last:border-white"
                        >
                          <div className="w-full h-full block ">
                            <div className="h-full flex flex-wrap mx-[-5px] xl:mx-[-8px] 2xl:mx-[-10px] [&>*]:px-[5px] xl:[&>*]:px-[8px] 2xl:[&>*]:px-[10px] max-md:flex-col">
                              <div className="w-full md:w-[100px] lg:w-[140px] xl:w-[160px] 2xl:w-[200px] 3xl:w-[240px]">
                                <Link
                                  href={`${variant}/${item?.slug}`}
                                  className="w-full md:h-full block aspect-[2/1] md:aspect-[240/220] rounded-[20px] xl:rounded-[30px] overflow-hidden relative z-0 border border-[#f8f8f8]"
                                >
                                  <Image
                                    src={`${MEDIA_URL}${item?.media?.media_path}`}
                                    alt={item?.media?.media_alt}
                                    fill
                                    sizes="512px"
                                    className="object-cover block transition hover:scale-105"
                                  />
                                </Link>
                              </div>
                              <div className="w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-140px)] xl:w-[calc(100%-160px)] 2xl:w-[calc(100%-200px)] 3xl:w-[calc(100%-240px)] flex-1">
                                <div className="h-full flex flex-col justify-between py-[10px] 2xl:py-[15px] 3xl:py-[30px]">
                                  <div>
                                    <div className="text-[14px] sm:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] leading-tight font-semibold text-black line-clamp-2 mb-[2px] xl:mb-[4px] 3xl:mb-[8px]">
                                      <Link href={`${variant}/${item?.slug}`}>
                                        {item?.title}
                                      </Link>
                                    </div>
                                    <Text
                                      as="div"
                                      size="text3"
                                      className="line-clamp-2 text-[#373737] mb-[5px] xl:mb-[10px] 3xl:mb-[15px]"
                                    >
                                      {parse(item?.description)}
                                    </Text>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    {variant === "blog" ? (
                                      <>
                                        <Text
                                          as="div"
                                          size="none"
                                          className="text-[10px] sm:text-[10px] xl:text-[12px] 2xl:text-[15px] leading-none font-normal text-[#757575]"
                                        >
                                          {item?.category || "Blog"}
                                          <span>&nbsp;-&nbsp;</span>
                                          {item?.reading_time}
                                        </Text>
                                        <Text
                                          as="div"
                                          size="none"
                                          className="text-[10px] sm:text-[11px] xl:text-[12px] 2xl:text-[15px] leading-none font-normal text-[#757575]"
                                        >
                                          {formattedDate}
                                        </Text>
                                      </>
                                    ) : (
                                      <>
                                        <Text
                                          as="div"
                                          size="none"
                                          className="text-[10px] sm:text-[10px] xl:text-[12px] 2xl:text-[15px] leading-none font-normal text-[#757575] flex gap-[4px] lg:gap-[6px] items-center"
                                        >
                                          {formattedDate}
                                          <span className="w-[4px] h-[4px] inline-block bg-[#757575] rounded"></span>
                                          {item?.reading_time}
                                        </Text>
                                        <ActionButton
                                          variant="link"
                                          className="text-[12px] sm:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black hover:[>svg]:translate-x-1"
                                          asChild
                                        >
                                          <Link
                                            href={`${variant}/${item?.slug}`}
                                          >
                                            Read now
                                            <svg
                                              width="32"
                                              height="8"
                                              viewBox="0 0 32 8"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="size-[10px] sm:size-[15px] xl:size-[18px] 3xl:size-[22px]"
                                            >
                                              <path
                                                d="M32 3.84766L25.3333 -0.00134566V7.69666L32 3.84766ZM0 3.84766L0 4.51432L26 4.51432V3.84766V3.18099L0 3.18099L0 3.84766Z"
                                                fill="#151515"
                                              />
                                              <mask
                                                id="path-2-inside-1_1293_11217"
                                                fill="white"
                                              >
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
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
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
          {all_blogs_section?.title}
        </Heading>

        <div className="flex flex-wrap mx-[-5px] xl:mx-[-10px] 2xl:mx-[-12px] [&>*]:p-[5px] xl:[&>*]:p-[10px] 2xl:[&>*]:p-[12px]">
          {currentItems?.map((item, index) => (
            <div key={"blog" + index} className="w-full xs:w-1/2 lg:w-1/3">
              <NewsCard data={item} variant={variant} page={variant} />
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
