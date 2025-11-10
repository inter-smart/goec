import ConnectSection from "@/components/features/blog/ConnectSection";
import DetailHeroSection from "@/components/features/find-charging-station/DetailHeroSection";
import DetailInfoSection from "@/components/features/find-charging-station/DetailInfoSection";
import DetailReviewSection from "@/components/features/find-charging-station/DetailReviewSection";
import { fetchFromAPI } from "@/lib/api";

const local_data = {
  enquiry_data: {
    title: "Want to own your own charging station? ",
    description:
      "<p>Take the leap and invest in your very own charging station today! Join the green revolution and power up your future.</p>",
    button: {
      link: "/",
      label: "Get connected now",
    },
  },
};

export default async function Page({ params, searchParams }) {
  const { slug } = params;

  // Extract review pagination parameters
  const reviews_page = searchParams?.reviews_page || 1;
  const reviews_limit = searchParams?.reviews_limit || 4;

  // Build query string
  const queryParams = new URLSearchParams();
  queryParams.set("reviews_page", reviews_page);
  queryParams.set("reviews_limit", reviews_limit);

  const { data, pagination, error } = await fetchFromAPI(
    `charging-station/${slug}?${queryParams.toString()}`
  );

  const {
    about_title,
    station_details,
    reviews_title,
    reviews_section,
    footer_section,
  } = data;

  console.log(about_title);
  return (
    <>
      <DetailHeroSection station={station_details} />
      <DetailInfoSection station={station_details} aboutTitle={about_title} />
      <DetailReviewSection
        reviewsTitle={reviews_title}
        reviewsData={reviews_section}
        pagination={reviews_section?.pagination}
      />
      <ConnectSection footer_section={footer_section} />
    </>
  );
}
