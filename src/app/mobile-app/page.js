export const dynamic = "force-dynamic";

import InnerHero from "@/components/common/InnerHero";
import AppDetailSection from "@/components/features/mobile-app/AppDetailSection";
import AppFeatureSection from "@/components/features/mobile-app/AppFeatureSection";
import HowChargeSection from "@/components/features/mobile-app/HowChargeSection";
import AppDownloadSection from "@/components/features/mobile-app/AppDownloadSection";
import { fetchFromAPI } from "@/lib/api";
import Error from "../error";

async function getMetaData() {
  try {
    const { data, error } = await fetchFromAPI(`meta-tags/app-page`);
    const meta = data;

    // Parse other meta tags if they exist
    const otherMetaTags = {};
    
    if (meta?.other_meta_tags) {
      try {
        // If it's a JSON string, parse it
        const parsedTags = typeof meta.other_meta_tags === 'string' 
          ? JSON.parse(meta.other_meta_tags) 
          : meta.other_meta_tags;
        
        // Convert array of meta tags to object format
        if (Array.isArray(parsedTags)) {
          parsedTags.forEach(tag => {
            const key = tag.name || tag.property || tag.httpEquiv;
            if (key && tag.content) {
              otherMetaTags[key] = tag.content;
            }
          });
        } else if (typeof parsedTags === 'object') {
          // If already an object, use directly
          Object.assign(otherMetaTags, parsedTags);
        }
      } catch (parseError) {
        console.error('Error parsing other_meta_tags:', parseError);
      }
    }

    return {
      title: meta?.meta_title,
      description: meta?.meta_description,
      keywords: meta?.meta_keywords,
      
      // Author and publisher
      authors: [{ name: meta?.author || "Your Company Name" }],
      publisher: meta?.publisher || "Your Company Name",
      
      // Robots meta
      robots: {
        index: meta?.index !== false,
        follow: meta?.follow !== false,
        googleBot: {
          index: meta?.index !== false,
          follow: meta?.follow !== false,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      
      // OpenGraph
      openGraph: {
        title: meta?.og_title || meta?.meta_title,
        description: meta?.og_description || meta?.meta_description,
        images: meta?.og_image
          ? [{ 
              url: meta.og_image, 
              width: 1200, 
              height: 630,
              alt: meta?.og_image_alt || meta?.meta_title 
            }]
          : [],
        type: meta?.og_type || "website",
        url: meta?.canonical_url || `${process.env.NEXT_PUBLIC_SITE_URL}/home`,
        siteName: meta?.site_name || "Your Site Name",
        locale: meta?.og_locale || "en_US",
      },
      
      // Twitter
      twitter: {
        card: meta?.twitter_card || "summary_large_image",
        title: meta?.twitter_title || meta?.meta_title,
        description: meta?.twitter_description || meta?.meta_description,
        images: meta?.twitter_image ? [meta.twitter_image] : [],
        creator: meta?.twitter_creator || "@yourusername",
        site: meta?.twitter_site || "@yourusername",
      },
      
      // Canonical URL
      alternates: {
        canonical: meta?.canonical_url || `${process.env.NEXT_PUBLIC_SITE_URL}`,
      },
      
      // Verification tags
      verification: {
        google: meta?.google_site_verification,
        yandex: meta?.yandex_verification,
        bing: meta?.bing_verification,
      },
      
      // Merge additional meta tags from admin
      other: {
        'format-detection': 'telephone=no',
        ...otherMetaTags, // Dynamically added meta tags from admin
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
  const { title, description, keywords, twitter, openGraph, alternates } =
    await getMetaData();
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
  const { data, error } = await fetchFromAPI("app");

  if (error) {
    return <Error path="/mobile-app" />;
  }

  const { banner_section, about_section, feature_section, how_to_charge_section, start_ur_ev_section } = data;

  return (
    <>
      <InnerHero
        data={banner_section}
        title={banner_section?.title}
        media={banner_section?.media}
        button={banner_section?.button}
      />
      <AppDetailSection data={about_section} />
      <AppFeatureSection title={feature_section?.title} list={feature_section?.list} />
      <HowChargeSection title={how_to_charge_section?.title} list={how_to_charge_section?.list} />
      <AppDownloadSection appDownloadData={start_ur_ev_section} />
    </>
  );
}
