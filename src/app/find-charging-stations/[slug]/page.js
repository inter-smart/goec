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

async function getMetaData(slug) {
  try {
    const { data } = await fetchFromAPI(`meta-tags/charging-station-details`);
    const meta = data;

    // Parse additional meta tags from other_meta_tags JSON
    let otherMetaTags = {};
    if (meta?.other_meta_tags) {
      try {
        const parsed =
          typeof meta.other_meta_tags === "string"
            ? JSON.parse(meta.other_meta_tags)
            : meta.other_meta_tags;

        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          otherMetaTags = parsed;
        }
      } catch (err) {
        console.error("Error parsing other_meta_tags:", err);
      }
    }

    // Build canonical URL
    const canonical =
      otherMetaTags?.canonical_url ||
      `${process.env.NEXT_PUBLIC_SITE_URL}/find-charging-stations/${slug}`;

    return {
      title: meta?.meta_title,
      description:
        meta?.meta_description,
      keywords:
        meta?.meta_keywords,

      // OpenGraph
      openGraph: {
        title: otherMetaTags?.og_title || meta?.meta_title,
        description: otherMetaTags?.og_description || meta?.meta_description,
        images: otherMetaTags?.og_image
          ? [{ url: otherMetaTags.og_image, width: 1200, height: 630 }]
          : [],
        type: "website",
        url: canonical,
      },

      // Twitter
      twitter: {
        card: "summary_large_image",
        title: otherMetaTags?.twitter_title || meta?.meta_title,
        description:
          otherMetaTags?.twitter_description || meta?.meta_description,
        images: otherMetaTags?.twitter_image
          ? [otherMetaTags.twitter_image]
          : [],
      },

      // Canonical
      alternates: {
        canonical,
      },

      // Merge any additional meta tags from admin
      other: otherMetaTags,

      error: null,
    };
  } catch (error) {
    return {
      title: "Charging Station Details | GO EC",
      description:
        "Detailed information about GO EC EV charging stations including location and availability.",
      keywords: "ev charging station details, go ec, charging info",
      error: "Failed to fetch metadata",
    };
  }
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const { title, description, keywords, twitter, openGraph, alternates } =
    await getMetaData(slug);

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
