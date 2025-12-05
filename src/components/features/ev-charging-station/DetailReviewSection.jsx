"use client";
import { Heading } from "@/components/utils/Heading";
import { useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import ReviewCard from "@/components/common/ReviewCard";
import { Rating } from "react-simple-star-rating";
import { Text } from "@/components/utils/Text";

export default function DetailReviewSection({
  reviewsTitle = "Rating & Reviews",
  reviewsData,
  pagination,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paginationRef = useRef(null);

  // Extract reviews and pagination data from backend
  const resultItems = reviewsData?.list || [];
  const averageRating = reviewsData?.average_rating || 0;
  const totalRating = reviewsData?.total_rating || 0;
  const totalReview = reviewsData?.total_review || 0;
  const reviewsBreakdown = reviewsData?.reviews || [];

  const currentPage = pagination?.currentPage || 1;
  const totalPages = pagination?.totalPages || 1;
  const total = pagination?.total || 0;
  const perPage = pagination?.perPage || 4;

  // Calculate display indices
  const indexOfFirstItem = (currentPage - 1) * perPage;
  const indexOfLastItem = Math.min(indexOfFirstItem + perPage, total);

  // Page number logic
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("ellipsis-start");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("ellipsis-end");
      pages.push(totalPages);
    }
    return pages;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("reviews_page", page.toString());
     // Use router.push with the full path (avoids reload)
    router.push(`${window.location.pathname}?${params.toString()}`, { scroll: false });

      setTimeout(() => {
        if (paginationRef.current) {
          const offset = 150;
          const elementPosition =
            paginationRef.current.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <section className="w-full h-auto block py-[20px_40px] sm:py-[40px_60px] xl:py-[60px_120px] 2xl:py-[80px_140px]">
      <div className="container">
        <Heading
          as="h3"
          size="heading3"
          className="text-[#030303] mb-[10px] xl:mb-[20px] 2xl:mb-[30px]"
        >
          {reviewsTitle}
        </Heading>

        <div className="flex flex-wrap mx-[-5px] xl:mx-[-10px] 2xl:mx-[-15px] [&>*]:p-[5px] xl:[&>*]:p-[10px] 2xl:[&>*]:p-[15px] max-md:flex-col-reverse">
          {/* Left: Review List */}
          <div className="w-full md:w-[calc(100%_-_268px)] lg:w-[calc(100%_-_320px)] xl:w-[calc(100%_-_368px)] 2xl:w-[calc(100%_-_400px)]">
            <div className="w-full [&>*]:mb-[5px] xl:[&>*]:mb-[10px] 2xl:[&>*]:mb-[15px]">
              {resultItems.map((item, index) => (
                <ReviewCard key={"user-" + index} item={item} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center gap-[20px] mt-[20px] xl:mt-[30px] 2xl:mt-[40px] max-xs:flex-col">
              <div>
                <div
                  className={cn(
                    "text-[10px] sm:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[24px] leading-normal font-normal",
                    "text-[#7b7b75]"
                  )}
                >
                  Showing {indexOfFirstItem + 1} to {indexOfLastItem} of {total}{" "}
                  reviews
                </div>
              </div>

              {totalPages > 1 && (
                <div ref={paginationRef}>
                  <Pagination className="justify-end">
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
                          {page === "ellipsis-start" ||
                          page === "ellipsis-end" ? (
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
          </div>

          {/* Right: Rating Summary */}
          <div className="w-full md:w-[268px] lg:w-[320px] xl:w-[368px] 2xl:w-[400px]">
            <div className="w-full h-auto bg-black rounded-[15px] xl:rounded-[20px] p-[15px] xl:p-[20px] 2xl:p-[30px]">
              <div className="flex items-center">
                <Rating
                  readonly
                  size={44}
                  className="[&_svg]:size-[25px] sm:[&_svg]:size-[25px] md:[&_svg]:size-[30px] xl:[&_svg]:size-[44px] mr-1"
                  fillColor={
                    averageRating >= 5
                      ? "#239b44"
                      : averageRating >= 4
                      ? "#32c95c"
                      : averageRating >= 3
                      ? "#f5ca01"
                      : averageRating >= 2
                      ? "#ffa826"
                      : "#ff5a4f"
                  }
                  initialValue={1}
                  iconsCount={1}
                />
                <Heading
                  as="h3"
                  size="heading3"
                  className={cn(
                    "leading-normal",
                    averageRating >= 5
                      ? "text-[#239b44]"
                      : averageRating >= 4
                      ? "text-[#32c95c]"
                      : averageRating >= 3
                      ? "text-[#f5ca01]"
                      : averageRating >= 2
                      ? "text-[#ffa826]"
                      : "text-[#ff5a4f]"
                  )}
                >
                  {averageRating}
                </Heading>
              </div>

              <Text
                as="div"
                size="text3"
                className="text-white py-[2px_10px] xl:py-[5px_15px] mb-[10px] xl:mb-[15px] border-b border-[#333]"
              >
                {totalRating} ratings & {totalReview} reviews
              </Text>

              {reviewsBreakdown?.map((item) => {
                const starLabels = {
                  5: "Excellent",
                  4: "Very good",
                  3: "Good",
                  2: "Average",
                  1: "Poor",
                };
                return (
                  <div
                    key={item?.star}
                    className="flex items-center justify-between md:my-[5px] xl:my-[15px]"
                  >
                    <span className="text-[10px] sm:text-[12px] xl:text-[16px] 2xl:text-[18px] leading-none font-normal text-white min-w-[100px]">
                      {starLabels[item?.star] || ""}
                    </span>
                    <Rating
                      readonly
                      size={24}
                      className="[&_svg]:inline-block [&_svg]:size-[12px] sm:[&_svg]:size-[16px] xl:[&_svg]:size-[24px]"
                      fillColor={
                        item?.star >= 5
                          ? "#239b44"
                          : item?.star >= 4
                          ? "#32c95c"
                          : item?.star >= 3
                          ? "#f5ca01"
                          : item?.star >= 2
                          ? "#ffa826"
                          : "#ff5a4f"
                      }
                      initialValue={parseInt(item?.star)}
                    />
                    <span className="text-[10px] sm:text-[12px] xl:text-[16px] 2xl:text-[18px] leading-none font-normal text-right text-white min-w-[50px]">
                      {item?.count}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// {
//   const [isExpanded, setIsExpanded] = useState(true);
//   console.log(item.description);

//   return (
//     <div key={"user-" + index}>
//       <div className="w-full flex flex-wrap items-center bg-white border-1 border-[#f0f0f0] rounded-[15px] xl:rounded-[20px] p-[15px] xl:p-[20px] 2xl:p-[30px] hover:shadow-lg transition">
//         <div className="w-full flex flex-wrap items-center">
//           <div className="flex-1 flex flex-wrap items-center mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
//             <Image
//               src={item?.media?.path}
//               alt={item?.media?.alt}
//               width={75}
//               height={75}
//               className="w-[40px] xl:w-[50px] 2xl:w-[60px] aspect-square rounded-full mr-2 xl:mr-4 block hover:scale-105 transition"
//             />
//             <div>
//               <Heading
//                 as="h5"
//                 size="heading5"
//                 className="leading-none text-[#353535] mb-[2px]"
//               >
//                 {item?.username}
//               </Heading>
//               <Text
//                 as="div"
//                 size="text2"
//                 className="text-[#ced1c0]"
//               >
//                 {format(
//                   new Date(item?.timestamp),
//                   "dd MMMM yyyy"
//                 )}
//               </Text>
//             </div>
//           </div>
//           <div>
//             <Rating
//               allowFraction
//               readonly
//               size={24}
//               className="[&_svg]:inline-block"
//               fillColor="#ffd24f"
//               initialValue={parseInt(item?.rating)}
//             />
//           </div>
//         </div>
//         <div className="w-full">
//           <Text
//             as="div"
//             size="text2"
//             className={cn(
//               "text-[#373737]",
//               isExpanded ? "line-clamp-2" : "line-clamp-none"
//             )}
//           >
//             {parse(item?.description)}
//           </Text>
//           <button
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 transition-colors"
//           >
//             {isExpanded ? "Read More" : "Read Less"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// })}
