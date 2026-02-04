"use client";
import { createContext, useContext, useState } from "react";

const LoadingContext = createContext({
  isLoadingComplete: false,
  setLoadingComplete: () => {},
});

export function LoadingProvider({ children }) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  console.log("loading context: ", isLoadingComplete)

  return (
    <LoadingContext.Provider value={{ isLoadingComplete, setLoadingComplete }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
