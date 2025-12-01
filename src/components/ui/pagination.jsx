import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Pagination({ className, ...props }) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }) {
  return <li data-slot="pagination-item" {...props} />;
}

function PaginationLink({ className, isActive, size = "icon", ...props }) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        "border border-[#f0f0f0] rounded-full",
        isActive ? "text-white bg-[#0055e0] pointer-events-none" : "bg-white",
        className
      )}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5 border-white", className)}
      {...props}
    >
      {/* <ChevronLeftIcon /> */}
      <svg
        width="32"
        height="8"
        viewBox="0 0 32 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-[15px] xl:size-[20px] 2xl:size-[25px] transform rotate-180"
      >
        <path
          d="M32 3.84766L25.3333 -0.00134566V7.69666L32 3.84766ZM0 3.84766L0 4.51432L26 4.51432V3.84766V3.18099L0 3.18099L0 3.84766Z"
          fill="#151515"
        />
        <mask id="path-2-inside-1_1293_11217" fill="white">
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
      <span className="hidden sm:block sr-only">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({ className, ...props }) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5 border-white", className)}
      {...props}
    >
      <svg
        width="32"
        height="8"
        viewBox="0 0 32 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-[15px] xl:size-[20px] 2xl:size-[25px]"
      >
        <path
          d="M32 3.84766L25.3333 -0.00134566V7.69666L32 3.84766ZM0 3.84766L0 4.51432L26 4.51432V3.84766V3.18099L0 3.18099L0 3.84766Z"
          fill="#151515"
        />
        <mask id="path-2-inside-1_1293_11217" fill="white">
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
      <span className="hidden sm:block sr-only">Next</span>
      {/* <ChevronRightIcon /> */}
    </PaginationLink>
  );
}

function PaginationEllipsis({ className, ...props }) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
