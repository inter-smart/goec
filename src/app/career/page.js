import ConnectSection from "@/components/features/blog/ConnectSection";
import CareerHeroSection from "@/components/features/career/CareerHeroSection";
import CareerLifeSection from "@/components/features/career/CareerLifeSection";
import CareerListSection from "@/components/features/career/CareerListSection";
import Error from "../error";
import { fetchFromAPI } from "@/lib/api";
import CareerTestimonialSection from "@/components/features/career/CareerTestimonialSection";
import CareerValueSection from "@/components/features/career/CareerValueSection";

// const local_data = {
//   enquiry_data: {
//     title: "Explore opportunities in GO EC ",
//     description:
//       "<p>Elevate your career with strategic planning and decision-making skills! Join us at Entrepreneurial Insights to discover how a solid strategy can transform your business approach.</p>",
//     button: {
//       link: "/career",
//       label: "View openings",
//     },
//   },
// };

async function getMetaData() {
  try {
    const {data, error} = await fetchFromAPI(`meta-tags/career`);
    const meta = data;

    
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


export default async function Page() {
  const { data, error } = await fetchFromAPI("career");

  if (error) {
    return <Error path="/career" />;
  }

  const {
    banner_section,
    current_opening_section,
    innovative_section,
    life_section,
    testimonials_section,
    footer_section
  } = data;

  return (
    <>
      <CareerHeroSection data={banner_section} />
      <CareerListSection data={current_opening_section} />
      <CareerValueSection data={innovative_section} />
      <CareerLifeSection data={life_section} />
      <CareerTestimonialSection data={testimonials_section} />
      <ConnectSection footer_section={footer_section} page ="career"/>
    </>
  );
}
