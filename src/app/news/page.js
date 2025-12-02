export const dynamic = "force-dynamic";

import BlogListSection from "@/components/features/blog/BlogListSection";
import { fetchFromAPI } from "@/lib/api";
import Error from "../error";

const local_data = {
  title: "Insights",
  button: [
    {
      type: "primary",
      label: "Blogs",
      link: "/blog",
    },
    {
      type: "primary",
      label: "News",
      link: "/news",
    },
  ],
  popular: {
    title: "Popular News",
    item_popular: [
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/news-insights-1.png",
          alt: "news",
        },
        category: "News",
        duration: "10 mins",
        title: "Things you should to know about the EV Chargers",
        description:
          "<p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strate</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-2.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins",
        title: "Top 5 Myths About Electric Vehicles",
        description: "<p>Uncover the art of strategic planning & decision-making in the business world.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-3.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins",
        title: "The Future of Urban E-Mobility",
        description: "<p>Uncover the art of strategic planning & decision-making in the business world.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-4.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins",
        title: "Debunking EV Charging Misconceptions",
        description: "<p>Uncover the art of strategic planning & decision-making in the business world.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
    ],
  },
  blog: {
    title: "All News.",
    item_blog: [
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-5.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins read",
        title: "The Environmental Impact of Electric Cars",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-6.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins read",
        title: "How to Maximize Your EV Battery Life",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-7.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins read",
        title: "Smart EV Charging for Apartment Buildings",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-8.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins read",
        title: "Government Incentives for EV Adoption",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-9.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins read",
        title: "The Role of Renewable Energy in EV Charging",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-10.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins read",
        title: "Building a Sustainable EV Charging Network",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-11.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins read",
        title: "The Impact of EVs on Grid Stability",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-12.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins read",
        title: "Innovations in Wireless EV Charging Tech",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-13.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins read",
        title: "Understanding Different EV Charger Types",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-5.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins read",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-6.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins read",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-7.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins read",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-8.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins read",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/newsdetail-9.jpg",
          alt: "news",
        },
        category: "News",
        duration: "10 mins read",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/news/news-detail",
          label: "Read now",
        },
      },
    ],
  },
};


async function getMetaData() {
  try {
    const { data } = await fetchFromAPI(`meta-tags/news-listing`);
    const meta = data;

    // Parse additional meta tags from other_meta_tags field
    let otherMetaTags = {};
    if (meta?.other_meta_tags) {
      try {
        const parsed =
          typeof meta.other_meta_tags === "string"
            ? JSON.parse(meta.other_meta_tags)
            : meta.other_meta_tags;

        if (typeof parsed === "object" && !Array.isArray(parsed)) {
          otherMetaTags = parsed;
        }
      } catch (err) {
        console.error("Error parsing other_meta_tags:", err);
      }
    }

    // Build canonical URL
    const canonical = otherMetaTags.canonical_url || `${process.env.NEXT_PUBLIC_SITE_URL}/news-listing`;

    return {
      title: meta?.meta_title || "GO EC News",
      description: meta?.meta_description || "Latest news and updates from GO EC",
      keywords: meta?.meta_keywords || "GO EC, news, EV, updates",

      // OpenGraph
      openGraph: {
        title: otherMetaTags.og_title || meta?.meta_title,
        description: otherMetaTags.og_description || meta?.meta_description,
        images: otherMetaTags.og_image
          ? [{ url: otherMetaTags.og_image, width: 1200, height: 630 }]
          : [],
        type: "website",
        url: canonical,
      },

      // Twitter
      twitter: {
        card: "summary_large_image",
        title: otherMetaTags.twitter_title || meta?.meta_title,
        description: otherMetaTags.twitter_description || meta?.meta_description,
        images: otherMetaTags.twitter_image ? [otherMetaTags.twitter_image] : [],
      },

      // Canonical
      alternates: {
        canonical,
      },

      // Additional metadata
      other: otherMetaTags,

      error: null,
    };
  } catch (error) {
    return {
      title: "GO EC News",
      description: "Latest news and updates from GO EC",
      keywords: "GO EC, news, EV, updates",
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
  const { data, error } = await fetchFromAPI("news");

  if (error) {
    return <Error path="/news" />;
  }

  const { featured_section, popular_news_section, all_news_section } = data;

  return (
    <>
      <BlogListSection
        variant="news"
        featured_section={featured_section}
        popular_blogs_section={popular_news_section}
        all_blogs_section={all_news_section}
      />
    </>
  );
}
