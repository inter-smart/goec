// hooks/useResponsive.js
"use client";
import { useMediaQuery } from "react-responsive";

export function useResponsive() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 641px) and (max-width: 1024px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });

  return { isMobile, isTablet, isDesktop };
}
