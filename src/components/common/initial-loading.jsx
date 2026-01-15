"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function InitialLoading() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const minDuration = 1000; // 2 seconds minimum

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          // Only hide after minimum duration has passed
          const elapsed = Date.now() - startTime;
          if (elapsed >= minDuration) {
            setIsComplete(true);
            // Trigger hide after a brief delay
            setTimeout(() => setShouldHide(true), 100);
          } else {
            setTimeout(() => {
              setIsComplete(true);
              setTimeout(() => setShouldHide(true), 100);
            }, minDuration - elapsed);
          }

          return 100;
        }
        return prev + 1;
      });
    }, 10); // 20ms intervals = 2000ms total

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!shouldHide && (
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          exit={{
            y: "100%",
            opacity: 0,
          }}
          transition={{
            height: {
              duration: 1.4,
              ease: [0.43, 0.13, 0.23, 0.96],
            },
            opacity: {
              duration: 1,
              ease: "easeOut",
            },
          }}
          className={cn(
            "w-full h-dvh flex items-center justify-center bg-[#030303] fixed inset-0 z-[99] overflow-hidden origin-top"
          )}
        >
          <motion.div
            exit={{
              y: 100,
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeIn",
            }}
          >
            {progress < 90 ? (
              <div className="text-[34px] sm:text-[28px] lg:text-[36px] xl:text-[48px] 2xl:text-[56px] 3xl:text-[72px] leading-none font-light text-center text-white transition duration-300 ease-out">
                {progress}%
              </div>
            ) : (
              <Image
                src="/images/header-logo.svg"
                alt="logo"
                width={90}
                height={45}
                className="w-[140px] sm:w-[80px] xl:w-[120px]"
                priority
              />
            )}
          </motion.div>

          <motion.div
            className="absolute z-0 bottom-0 left-0 right-0 mb-[30px] xl:mb-[40px]"
            exit={{
              y: 100,
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeIn",
            }}
          >
            <div className="w-full h-[1px] bg-gray-500 shadow-inner mb-[15px] xl:mb-[30px]">
              <div
                className="h-full bg-gradient-to-r from-[#2cc59c] to-[rgba(0,72,191,0.3)] shadow-[0_0_20px_4px_rgba(44,197,156,0.4)] transition duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-[18px] xl:text-[12px] 2xl:text-[14px] leading-none font-thin text-center text-white">
              {progress < 90 ? "LOADING..." : "READY TO GO"}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
