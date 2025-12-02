import Error from "@/app/error";
import BlogDetailSection from "@/components/features/blog/BlogDetailSection";
import ConnectSection from "@/components/features/blog/ConnectSection";
import SimilarBlogSection from "@/components/features/blog/SimilarBlogSection";
import { fetchFromAPI } from "@/lib/api";

// const local_data = {
//   timestamp: "2025-08-14T05:00:00.000000Z",
//   media: {
//     type: "image",
//     path: "/images/blogdetail-1.jpg",
//     alt: "news",
//   },
//   category: "Blog",
//   duration: "10 mins read",
//   title:
//     "India is quickly becoming a key investment hub, attracting entrepreneurs to launch their ventures. In line with Vision 2030, the country is prioritising electric vehicle (EV) infrastructure.",
//   description:
//     "<p>Embark on a journey of discovery as we navigate the intricacies of entrepreneurship. From the initial spark of an idea to the establishment and growth of your business, Entrepreneurial Insights provides a compass for emerging entrepreneurs, offering valuable perspectives to help you chart a successful c</p>",
//   sub_description:
//     "<h4>Navigating the Entrepreneurial Journey</h4><p>Embark on a journey of discovery as we navigate the intricacies of entrepreneurship. From the initial spark of an idea to the establishment and growth of your business, Entrepreneurial Insights provides a compass for emerging entrepreneurs, offering valuable perspectives to help you chart a successful course. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p><h4>Innovate or Stagnate: The Power of Entrepreneurial Creativity</h4><p>Dive into the realm of innovation and creativity, where we explore how thinking outside the box can be the catalyst for business success. Learn from the experiences of trailblazing entrepreneurs who have harnessed the power of innovation to propel their ventures forward. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe</p><h4>Strategic Moves: Crafting a Roadmap for Business Success</h4><p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy, offering actionable tips and case studies to inspire strategic thinking in every aspect of your entrepreneurial journey. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. In nibh mauris cursus mattis molestie a iaculis at. Mauris a diam maecenas sed enim ut sem viverra aliquet. Bibendum ut tristique et egestas quis ipsum suspendisse. At risus viverra adipiscing at in tellus integer. Quam quisque id diam vel quam elementum. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Viverra suspendisse potenti nullam ac tortor. Nec sagittis aliquam malesuada bibendum. Aliquam sem fringilla ut morbi tincidunt augue interdum. Aliquet sagittis id consectetur purus. Cursus euismod quis viverra nibh cras pulvinar mattis. Nunc sed blandit libero volutpat sed cras ornare arcu.</p>",
//   similar_data: {
//     title: "Similar Blogs.",
//     item_blog: [
//       {
//         timestamp: "2025-08-14T05:00:00.000000Z",
//         media: {
//           type: "image",
//           path: "/images/blog-1.jpg",
//           alt: "blog",
//         },
//         title: "The Advantages of Having an EV Charging Station in 2025",
//         description:
//           "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
//         button: {
//           link: "/blog/blog-detail",
//           label: "Read now",
//         },
//       },
//       {
//         timestamp: "2025-08-14T05:00:00.000000Z",
//         media: {
//           type: "image",
//           path: "/images/blog-2.jpg",
//           alt: "blog",
//         },
//         title: "Benefit of owning an EV Charging station in 2025",
//         description:
//           "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
//         button: {
//           link: "/blog/blog-detail",
//           label: "Read now",
//         },
//       },
//       {
//         timestamp: "2025-08-14T05:00:00.000000Z",
//         media: {
//           type: "image",
//           path: "/images/blog-3.jpg",
//           alt: "blog",
//         },
//         title: "Things you should to know about the EV Chargers",
//         description:
//           "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
//         button: {
//           link: "/blog/blog-detail",
//           label: "Read now",
//         },
//       },
//       {
//         timestamp: "2025-08-14T05:00:00.000000Z",
//         media: {
//           type: "image",
//           path: "/images/blog-1.jpg",
//           alt: "blog",
//         },
//         title: "The Advantages of Having an EV Charging Station in 2025",
//         description:
//           "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
//         button: {
//           link: "/blog/blog-detail",
//           label: "Read now",
//         },
//       },
//       {
//         timestamp: "2025-08-14T05:00:00.000000Z",
//         media: {
//           type: "image",
//           path: "/images/blog-2.jpg",
//           alt: "blog",
//         },
//         title: "The Advantages of Having an EV Charging Station in 2025",
//         description:
//           "<p>Lorem ipsum dolor sit amet consectetur. At vulputate ridiculus pellentesque sederra a aliquamet ullamcorper purus. </p>",
//         button: {
//           link: "/blog/blog-detail",
//           label: "Read now",
//         },
//       },
//     ],
//     enquiry: {
//       title: "Wish to know more about GO EC?",
//       description:
//         "<p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy.</p>",
//       button: {
//         link: "/",
//         label: "Get in touch",
//       },
//     },
//   },
// };

async function getMetaData() {
  try {
    const { data } = await fetchFromAPI(`meta-tags/terms-and-conditions`);
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
      `${process.env.NEXT_PUBLIC_SITE_URL}/terms-and-conditions`;

    return {
      title: meta?.meta_title || "Terms & Conditions | GO EC",
      description:
        meta?.meta_description ||
        "Read the terms and conditions of GO EC, outlining the rules and regulations for using our services.",
      keywords:
        meta?.meta_keywords || "GO EC, terms and conditions, EV charging, rules",

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
      title: "Terms & Conditions | GO EC",
      description:
        "Read the terms and conditions of GO EC, outlining the rules and regulations for using our services.",
      keywords: "GO EC, terms and conditions, EV charging, rules",
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


export default async function Page({ params }) {
  const { slug } = params;

  const { data, error } = await fetchFromAPI(`blog/${slug}`);

  if (error) {
    return <Error path={`blog/${slug}`} />;
  }
  const { blog_details_section, similar_section, footer_section } = data;
  const isSimiliarBlogExist = similar_section?.list.length > 0;

  return (
    <>
      <BlogDetailSection variant={`blog_details`} data={blog_details_section} />
      {isSimiliarBlogExist && (
        <SimilarBlogSection
          variant={"blog"}
          similar_section={similar_section}
          // footer_section={footer_section}
        />
      )}

      <ConnectSection footer_section={footer_section} />
    </>
  );
}
