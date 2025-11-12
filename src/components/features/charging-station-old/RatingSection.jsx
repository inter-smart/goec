// "use client";

// import React from "react";

// const ratingLabels = ["Excellent", "Very good", "Good", "Average", "Poor"];
// import Rating from "react-rating";
// import { IoIosStar } from "react-icons/io";
// import { Heading } from "@/components/utils/Heading";
// import { Text } from "@/components/utils/Text";

// export default function RatingSection({ summary, getStarColor }) {
//   // Default data for demo (remove when integrating with real data)
//   const defaultSummary = {
//     average: 4.5,
//     total: 2391,
//     breakdown: [365, 210, 234, 197, 92],
//   };

//   const data = summary || defaultSummary;

//   return (
//     <div className="w-full max-w-md">
//       {/* Summary Box */}
//       <div className="bg-[#1C1C1C] text-white p-[20px] sm:p-[24px] xl:p-[28px] 2xl:p-[32px] rounded-[24px]">
//         {/* Average Rating with Star */}
//         <Heading
//           as="h2"
//           size="heading1"
//           className="flex items-center gap-1 text-[#239B44]"
//         >
//           <IoIosStar />
//           <div className="">{data.average}</div>
//         </Heading>

//         {/* Total Reviews */}
//         <Text
//           as={"div"}
//           size={"text2"}
//           className="mt-[12px] xl:mt-[15px] 2xl:mt-[16px] 3xl:mt-[22px] text-[#FCFCFC]"
//         >
//           {data.total.toLocaleString()} ratings & {data.total.toLocaleString()}{" "}
//           reviews
//         </Text>

//         <div className="w-full h-[1px] my-[6px] xl:my-[8px] 2xl:my-[8px] 3xl:my-[11px]  bg-[#FFFFFF1A]" />
//         {/* Rating Breakdown */}
//         <div className="">
//           {data.breakdown.map((count, idx) => (
//             <div key={idx} className="flex items-center">
//               {/* Label */}
//               <Text
//                 as={"p"}
//                 size={"text2"}
//                 className="text-sm font-medium text-white w-[60px] sm:w-20 flex-shrink-0"
//               >
//                 {ratingLabels[idx]}
//               </Text>

//               {/* Stars */}
//               <div className="w-full">
//                 <Rating
//                   readonly
//                   initialRating={5 - idx}
//                   emptySymbol={
//                     <IoIosStar className="w-[14px] lg:w-[18px] xl:w-[22px] 2xl:w-[24px] 3xl:w-[32px] mx-[2px]" />
//                   }
//                   fullSymbol={
//                     <IoIosStar
//                       style={{ color: getStarColor(5 - idx) }}
//                       className="w-[14px] lg:w-[18px] xl:w-[22px] 2xl:w-[24px] 3xl:w-[32px] mx-[2px]"
//                     />
//                   }
//                   edit={false}
//                 />
//               </div>

//               {/* Count */}
//               <Text
//                 as={"p"}
//                 size={"text2"}
//                 className="text-sm font-medium text-white w-[10px] sm:w-10 text-right flex-shrink-0"
//               >
//                 {count}
//               </Text>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
