import NotFoundSection from "@/components/features/error/NotFoundSection";

export default function NotFound() {
  const local_data = {
    error_code: "404",
    title: "Oops! Page not found.",
    description:
      "<p>The page you're looking for might have been<br/> moved, deleted, or never existed.</p>",
    button: {
      label: "Go to Home",
      link: "/",
    },
  };
  return <NotFoundSection data={local_data} />;
}
