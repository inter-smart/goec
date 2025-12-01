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

async function getMetaData() {
  try {
    const {data, error} = await fetchFromAPI(`meta-tags/charging-station-details`);
    const meta = data;

    console.log(meta)
      return {
        title: meta?.meta_title,
        description: meta?.meta_description,
        keywords: meta?.meta_keywords,
        // Enhanced SEO fields
        openGraph: {
          title: meta?.og_title || meta?.meta_title,
          description: meta?.og_description || meta?.meta_description,
          images: meta?.og_image ? [{ url: meta.og_image, width: 1200, height: 630 }] : [],
          type: "website",
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/home`,
        },
        twitter: {
          card: "summary_large_image",
          title: meta?.twitter_title || meta?.meta_title,
          description: meta?.twitter_description || meta?.meta_description,
          images: meta?.twitter_image ? [meta.twitter_image] : [],
        },
        alternates: {
          canonical: meta?.canonical_url || `${process.env.NEXT_PUBLIC_SITE_URL}`,
        },
        error: null,
      };
  } catch (error) {
    return {
      title: "Home",
      description: "Welcome to our Home Page",
      keywords: "home, welcome",
      error: "Failed to fetch metadata",
    };
  }
}

export async function generateMetadata() {
  const { title, description, keywords, twitter, openGraph, alternates } = await getMetaData();
  return {
    title,
    description,
    keywords,
    twitter,
    openGraph,
    alternates,
  };
}





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
