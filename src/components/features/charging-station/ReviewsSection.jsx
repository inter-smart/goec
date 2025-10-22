"use client";

import ReactStars from "react-stars";
import Pagination from "@/components/ui/paginations";
import { useState } from "react";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import { Text } from "@/components/utils/Text";

const reviewData = [
  {
    name: "Rodger Struck",
    date: "September 20, 2025",
    rating: 5,
    review: "I’ve been using the GO EC charging stations around the city, and I’ve learned that keeping my electric vehicle’s battery between 20% and 80% really helps with longevity. I make sure to avoid letting it drop to 0% or stay at 100% for too long, as I’ve heard this can harm the battery.",
    avatar: "/images/reviewer_1.png",
  },
  {
    name: "Alex Buckmaster",
    date: "September 18, 2025",
    rating: 4,
    review: "Good experience.",
    avatar: "/images/reviewer_2.png",
  },
  {
    name: "Joshua Jones",
    date: "September 15, 2025",
    rating: 2,
    review: "Using the GO EC charging stations has taught me the importance of battery management. I keep my electric vehicle’s charge between 20% and 80% to ensure it lasts longer. I avoid letting it drop to 0% or stay at 100% too long, which I know can damage the battery.",
    avatar: "/images/reviewer_3.png",
  },
  {
    name: "Judith Rodriguez",
    date: "September 12, 2025",
    rating: 3,
    review: "",
    avatar: "/images/reviewer_4.png",
  },
  {
    name: "Rodger Struck",
    date: "September 20, 2025",
    rating: 5,
    review: "I’ve been using the GO EC charging stations around the city, and I’ve learned that keeping my electric vehicle’s battery between 20% and 80% really helps with longevity. I make sure to avoid letting it drop to 0% or stay at 100% for too long, as I’ve heard this can harm the battery.",
    avatar: "/images/reviewer_1.png",
  },
];

const summaryData = {
  average: 4.5,
  total: 25,
  breakdown: [305, 108, 72, 50, 20], // Example: Excellent, Very good, Good, Average, Poor
};

const ratingLabels = ["Excellent", "Very good", "Good", "Average", "Poor"];
const starColors = [
"text-[#239B44]",
  "text-[#32C95C]",
  "text-[#F5CA01]",
  "text-[#F5CA01]",
  "text-[#FF5A4F]",
];

export default function ReviewsSection({
  reviews = reviewData,
  summary = summaryData,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 4;

  // Pagination logic
  const totalPages = Math.ceil(reviews.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = reviews.slice(startIndex, endIndex);

  // Use real color codes for ReactStars
  const getStarColor = (rating) => {
    console.log(rating)
    if (rating === 5) return "#239B44"; // Tailwind green-500
    if (rating === 4) return "#32C95C"; // Tailwind amber-400 as gold
    if (rating === 3) return "#F5CA01"; // Tailwind yellow-400
    if (rating === 2) return "#F5CA01"; // Tailwind amber-400 (orange-ish)
    if (rating === 1) return "#FF5A4F"; // Tailwind red-500
    return "#d4d4d4"; // Tailwind gray-300
  };

  return (
    <section className="w-full h-auto block py-[40px] sm:py-[60px] xl:py-[100px] 2xl:py-[140px]">
      {/* Reviews List */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Heading
            as={"h2"}
            size="heading2"
            className="mb-[50px] lg:mb-[58px] xl:mb-[72px] 2xl:mb-[80px] 3xl:mb-[107px]"
          >
            Rating & Reviews
          </Heading>
          {currentPosts.map((review, idx) => (
            <div
              key={idx}
              className="mb-5 bg-[#FCFCFC] border-1 border-[#F0F0F0] p-[12px] lg:p-[24px] rounded-[12px] xl:rounded-[24px]"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="relative w-[36px] h-[36px] rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={36}
                    height={36}
                    className="w-full h-full rounded-full object-cover"
                    quality={100}
                  />
                </div>

                <div className="flex items-start justify-between w-full">
                  <div>
                    <div className=" text-[#030303]">
                      {review.name}
                    </div>
                    <span className="text-sm text-[#A9A9A9]">
                      {review.date}
                    </span>
                  </div>

                  <div className="flex">
                    <ReactStars
                      key={review.rating}
                      count={5}
                      value={review.rating}
                      size={24}
                      isHalf={false}
                      edit={false}
                      activeColor={getStarColor(review.rating)}
                      // color="#d4d4d4"
                    />
                  </div>
                </div>
              </div>

              <Text as={"p"} size={"text1"} className="text-[#373737] text-[14px] lg:text-[16px] leading-relaxed">
                {review.review}
              </Text>
            </div>
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
        {/* Summary Box */}
        <div className="bg-black text-white p-6 flex flex-col items-center max-h-[366px] rounded-[24px]">
          <div className="text-4xl font-bold">{summary.average}</div>
          <div className="mb-2">★ Based on {summary.total} reviews</div>
          <div className="w-full mt-4">
            {summary.breakdown.map((count, idx) => (
              <div className="flex items-center justify-between mb-2" key={idx}>
                <span className="flex gap-2 items-center">
                  <span className={`text-lg font-bold ${starColors[idx]}`}>
                    ★
                  </span>
                  <span>{ratingLabels[idx]}</span>
                </span>
                <span>{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
