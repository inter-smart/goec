export const dynamic = "force-dynamic";

import BlogListSection from "@/components/features/blog/BlogListSection";
import { fetchFromAPI, MEDIA_URL } from "@/lib/api";
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
    title: "Popular Blogs",
    item_popular: [
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/Blog_1.png",
          alt: "news",
        },
        author: {
          media: {
            type: null,
            path: "/images/author-1.jpg",
            alt: "author",
          },
          title: "Mary Freund",
        },
        category: "Blog",
        duration: "10 mins read",
        title: "Here are some important things you should know about EV chargers",
        description:
          "<p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strate</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/bloglist-2.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins read",
        title: "Understanding the Basics of EV Charging",
        description: "<p>Uncover the art of strategic planning & decision-making in the business world.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/bloglist-3.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins read",
        title: "Public EV Charging Etiquette",
        description: "<p>Uncover the art of strategic planning & decision-making in the business world.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/bloglist-4.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins read",
        title: "Home EV Charger Installation Guide",
        description: "<p>Uncover the art of strategic planning & decision-making in the business world.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
    ],
  },
  blog: {
    title: "All Blogs.",
    item_blog: [
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/blogdetail-5.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins",
        title: "Ensuring Safety While Charging Your EV",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/blogdetail-6.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/blogdetail-7.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/blogdetail-8.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/blogdetail-9.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/blogdetail-10.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/blogdetail-5.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/blogdetail-6.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/blogdetail-7.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/blogdetail-8.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/blogdetail-9.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/blogdetail-10.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/blogdetail-5.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
      {
        timestamp: "2025-08-14T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/blogdetail-6.jpg",
          alt: "news",
        },
        category: "Blog",
        duration: "10 mins",
        title: "Smart EV Charging Solutions for Businesses",
        description: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis.</p>",
        button: {
          link: "/blog/blog-detail",
          label: "Read now",
        },
      },
    ],
  },
  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Page component that fetches blog data from API and renders a BlogListSection with the received data.
   * If there is an error while fetching the data, it renders an Error component with the path set to "/blog".
   */
  /*******  afd5a413-0ea5-4295-af4c-bca84b1aca00  *******/
};

async function getMetaData() {
  try {
    const {data, error} = await fetchFromAPI(`meta-tags/blog-listing`);
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
  const { data, error } = await fetchFromAPI("blog");

  const { featured_section, popular_blogs_section, all_blogs_section } = data;

  return (
    <>
      <BlogListSection
        variant="blog"
        featured_section={featured_section}
        popular_blogs_section={popular_blogs_section}
        all_blogs_section={all_blogs_section}
      />
    </>
  );
}
