// "use client";

// import ReactStars from "react-stars";
// import Pagination from "@/components/ui/paginations";
// import { useState } from "react";
// import { Heading } from "@/components/utils/Heading";
// import Image from "next/image";
// import { Text } from "@/components/utils/Text";
// import RatingSection from "./RatingSection";
// import { IoIosStar } from "react-icons/io";
// import Rating from "react-rating";

// const reviewData = [
//   {
//     name: "Rodger Struck",
//     date: "September 13, 2025 10:50 am",
//     rating: 5,
//     review:
//       "I’ve been using the GO EC charging stations around the city, and I’ve learned that keeping my electric vehicle’s battery between 20% and 80% really helps with longevity. I make sure to avoid letting it drop to 0% or stay at 100% for too long, as I’ve heard this can harm the battery.",
//     avatar: "/images/reviewer_1.png",
//   },
//   {
//     name: "Alex Buckmaster",
//     date: "Sep 3, 2025 7:44 am",
//     rating: 4,
//     review: "Good experience.",
//     avatar: "/images/reviewer_2.png",
//   },
//   {
//     name: "Joshua Jones",
//     date: "Aug 20, 2025 1:55 am",
//     rating: 2,
//     review:
//       "Using the GO EC charging stations has taught me the importance of battery management. I keep my electric vehicle’s charge between 20% and 80% to ensure it lasts longer. I avoid letting it drop to 0% or stay at 100% too long, which I know can damage the battery.",
//     avatar: "/images/reviewer_3.png",
//   },
//   {
//     name: "Judith Rodriguez",
//     date: "Sep 2, 2025 10:12 am",
//     rating: 4,
//     review: "",
//     avatar: "/images/reviewer_4.png",
//   },
//   {
//     name: "Rodger Struck",
//     date: "September 20,  10:50 am",
//     rating: 1,
//     // review:
//     // "I’ve been using the GO EC charging stations around the city, and I’ve learned that keeping my electric vehicle’s battery between 20% and 80% really helps with longevity. I make sure to avoid letting it drop to 0% or stay at 100% for too long, as I’ve heard this can harm the battery.",
//     avatar: "/images/reviewer_1.png",
//   },
// ];

// const summaryData = {
//   average: 4.5,
//   total: 25,
//   breakdown: [305, 108, 72, 50, 20], // Example: Excellent, Very good, Good, Average, Poor
// };

// export default function ReviewsSection({
//   reviews = reviewData,
//   summary = summaryData,
// }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const POSTS_PER_PAGE = 4;

//   // Pagination logic
//   const totalPages = Math.ceil(reviews.length / POSTS_PER_PAGE);
//   const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
//   const endIndex = startIndex + POSTS_PER_PAGE;
//   const currentPosts = reviews.slice(startIndex, endIndex);

//   // Use real color codes for ReactStars
//   const getStarColor = (rating) => {
//     console.log(rating);
//     if (rating === 5) return "#239B44"; // Tailwind green-500
//     if (rating === 4) return "#32C95C"; // Tailwind amber-400 as gold
//     if (rating === 3) return "#F5CA01"; // Tailwind yellow-400
//     if (rating === 2) return "#FFA826"; // Tailwind amber-400 (orange-ish)
//     if (rating === 1) return "#FF5A4F"; // Tailwind red-500
//     return "#d4d4d4"; // Tailwind gray-300
//   };

//   return (
//     <section className="w-full container h-auto block pt-[40px] sm:pt-[60px] xl:pt-[100px] 2xl:pt-[140px]">
//       {/* Reviews List */}
//       <Heading
//         as={"h2"}
//         size="heading2"
//         className="mb-[50px] lg:mb-[58px] xl:mb-[72px] 2xl:mb-[80px] 3xl:mb-[107px]"
//       >
//         Rating & Reviews
//       </Heading>
//       <div className=" mx-auto flex flex-col sm:flex-row gap-[18px] 2xl:gap-[24px] 3xl:gap-[32px]">
//         <div className="">
//           <div className="gap-[16px] flex flex-col lg:min-w-[568px] xl:min-w-[710px] 2xl:min-w-[798px] 3xl:min-w-[1064px]">
//             {currentPosts.map((review, idx) => (
//               <div
//                 key={idx}
//                 className="bg-[#FCFCFC] border-1 border-[#F0F0F0] p-[12px] lg:p-[18px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[32px] rounded-[12px] xl:rounded-[24px]"
//               >
//                 <div className="flex items-start gap-[16px] mb-[12px] xl:mb-[16px] 3xl:mb-[22px]">
//                   <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden flex-shrink-0">
//                     <Image
//                       src={review.avatar}
//                       alt={review.name}
//                       width={56}
//                       height={56}
//                       className="w-full h-full rounded-full object-cover"
//                       quality={100}
//                     />
//                   </div>

//                   <div className="flex items-start justify-between w-full">
//                     <div>
//                       <Heading
//                         as={"h5"}
//                         size={"heading5"}
//                         className=" text-[#030303]"
//                       >
//                         {review.name}
//                       </Heading>
//                       <Text as={"p"} size={"text2"} className="text-[#A9A9A9]">
//                         {review.date}
//                       </Text>
//                     </div>

//                     <div className="flex">
//                       <Rating
//                         readonly
//                         initialRating={review.rating}
//                         emptySymbol={
//                           <IoIosStar className="text-[#D4D4D4] mx-[3px]" />
//                         }
//                         fullSymbol={
//                           <IoIosStar
//                             style={{ color: getStarColor(5 - idx) }}
//                             className="mx-[3px]"
//                           />
//                         }
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <Text
//                   as={"p"}
//                   size={"text2"}
//                   className="text-[#373737] leading-relaxed line-clamp-2"
//                 >
//                   {review.review}
//                 </Text>
//               </div>
//             ))}
//           </div>

//           <div className="flex flex-col sm:flex-row items-center justify-between ">
//             <p className="text-[16px] text-[#7B7B75]">
//               Showing {startIndex + 1} to {Math.min(endIndex, reviews.length)}{" "}
//               of {reviews.length} reviews
//             </p>
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={setCurrentPage}
//             />
//           </div>
//         </div>
//         <div className="w-full mx-auto">
//           {/* <RatingSection summary={summary} getStarColor={getStarColor} /> */}
//         </div>
//       </div>
//     </section>
//   );
// }
