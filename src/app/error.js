"use client";
import NotFoundSection from "@/components/features/error/NotFoundSection";

export default function Error({ path }) {


  const local_data = {
    error_code: "500",
    title: "Something went wrong!",
    description:
      "<p>Our server ran into an issue. We’re working on it.<br/> Please try again in a few moments.</p>",
    button: {
      label: "Reload Page",
      link: "/",
    },
  };

  return <NotFoundSection data={local_data} />;
}
