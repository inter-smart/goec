"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function InitialLoading() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const minDuration = 3000; // 3 seconds minimum

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          // Only hide after minimum duration has passed
          const elapsed = Date.now() - startTime;
          if (elapsed >= minDuration) {
            setIsComplete(true);
          } else {
            setTimeout(() => setIsComplete(true), minDuration - elapsed);
          }

          return 100;
        }
        return prev + 1;
      });
    }, 40); // Adjusted to 40ms so 100 steps = 4000ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "w-full min-h-screen flex items-center justify-center bg-[#030303] fixed inset-0 z-99 transition-opacity duration-300",
        isComplete && "opacity-0 pointer-events-none"
      )}
    >
      <div>
        {progress < 90 ? (
          <div className="text-[22px] sm:text-[28px] lg:text-[36px] xl:text-[48px] 2xl:text-[56px] 3xl:text-[72px] leading-none font-light text-center text-white transition duration-300 ease-out">
            {progress}%
          </div>
        ) : (
          <Image
            src="/images/header-logo.svg"
            alt="logo"
            width={90}
            height={45}
            className="w-[80px] xl:w-[120px]"
            priority
          />
        )}
      </div>

      <div className="absolute z-0 bottom-0 left-0 right-0 mb-[30px] xl:mb-[40px]">
        <div className="w-full h-[1px] bg-gray-500 shadow-inner mb-[15px] xl:mb-[30px]">
          <div
            className="h-full bg-gradient-to-r from-[#2cc59c] to-[rgba(0,72,191,0.3)] shadow-[0_0_20px_4px_rgba(44,197,156,0.4)] transition duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-[10px] xl:text-[12px] 2xl:text-[14px] leading-none font-thin text-center text-white">
          {progress < 100 ? "LOADING..." : "READY TO GO"}
        </div>
      </div>
    </div>
  );
}
