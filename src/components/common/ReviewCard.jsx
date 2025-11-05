"use client";

import { cn } from "@/lib/utils";

const { default: Image } = require("next/image");
const { useState, useRef, useEffect } = require("react");
const { Heading } = require("../utils/Heading");
const { format } = require("date-fns");
const { Rating } = require("react-simple-star-rating");
const { Text } = require("../utils/Text");
import parse from "html-react-parser";

export default function ReviewCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      // Check if content exceeds 2 lines
      const lineHeight = parseInt(getComputedStyle(textRef.current).lineHeight);
      const height = textRef.current.scrollHeight;
      setShowButton(height > lineHeight * 2);
    }
  }, [item?.description]);

  return (
    <div className="w-full flex flex-wrap items-center bg-white border-1 border-[#f0f0f0] rounded-[15px] xl:rounded-[20px] p-[15px] xl:p-[20px] 2xl:p-[30px] hover:shadow-lg transition">
      <div className="w-full flex flex-wrap items-center">
        <div className="flex-1 flex flex-wrap items-center mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
          <Image
            src={item?.media?.path}
            alt={item?.media?.alt}
            width={75}
            height={75}
            className="w-[40px] xl:w-[50px] 2xl:w-[60px] aspect-square rounded-full mr-2 xl:mr-4 block hover:scale-105 transition"
          />
          <div>
            <Heading
              as="h5"
              size="heading5"
              className="leading-none text-[#353535] mb-[2px]"
            >
              {item?.username}
            </Heading>
            <Text as="div" size="text2" className="text-[#ced1c0]">
              {format(new Date(item?.timestamp), "dd MMMM yyyy")}
            </Text>
          </div>
        </div>
        <div>
          <Rating
            readonly
            size={24}
            className="[&_svg]:inline-block [&_svg]:size-[12px] sm:[&_svg]:size-[16px] xl:[&_svg]:size-[24px]"
            fillColor={
              item?.rating >= 5
                ? "#239b44"
                : item?.rating >= 4
                  ? "#32c95c"
                  : item?.rating >= 3
                    ? "#f5ca01"
                    : item?.rating >= 2
                      ? "#ffa826"
                      : "#ff5a4f"
            }
            // fillColorArray={["#ff0", "#ef4444", "#ef4444", "#f5ca01", "#32c95c", "#000"]}
            initialValue={parseInt(item?.rating)}
          />
        </div>
      </div>
      <div className="w-full">
        <Text
          as="div"
          size="text2"
          ref={textRef}
          className={cn("text-[#373737]", !isExpanded && "line-clamp-2")}
        >
          {parse(item?.description)}
        </Text>
        {showButton && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[10px] sm:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[24px] leading-normal font-medium text-gray-500 hover:text-blue-800 text-sm my-1 transition-colors"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
}
