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
        description:
          "<p>Uncover the art of strategic planning & decision-making in the business world.</p>",
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
        description:
          "<p>Uncover the art of strategic planning & decision-making in the business world.</p>",
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
        description:
          "<p>Uncover the art of strategic planning & decision-making in the business world.</p>",
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
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
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
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
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
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
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
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
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
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
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
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
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
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
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
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
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
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
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
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
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
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
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
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
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
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
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
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
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
    const {data, error} = await fetchFromAPI(`meta-tags/news-listing`);
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
