'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ActionButton } from '@/components/utils/Button';



// Blog data
const blogs = [
  {
    id: 1,
    title: "Understanding the Basics of EV Charging",
    description: "Uncover the art of strategic planning & decision-making in the business world.",
    image: "/images/Blog_1.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "16 Sep, 2025",
    slug: "understanding-basics-ev-charging"
  },
  {
    id: 2,
    title: "Public EV Charging Etiquette",
    description: "Uncover the art of strategic planning & decision-making in the business world.",
    image: "/images/Blog_1.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "16 Sep, 2025",
    slug: "public-ev-charging-etiquette"
  },
  {
    id: 3,
    title: "Home EV Charger Installation Guide",
    description: "Uncover the art of strategic planning & decision-making in the business world.",
    image: "/images/Blog_1.png",
    category: "Blog",
    readTime: "10 mins read",
    date: "16 Sep, 2025",
    slug: "home-ev-charger-installation-guide"
  }
];

const featuredBlog = {
  id: 0,
  title: "Here are some important things you should know about EV chargers,...",
  description: "Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strate...",
  author: "Mary Freund",
  authorImage: "/images/Blog_1.png",
  date: "21 January, 2025",
  readTime: "10 mins read",
  image: "/images/Blog_1.png",
  category: "Blog",
  slug: "important-things-about-ev-chargers"
};

export default function BlogInsights() {
  const [activeTab, setActiveTab] = useState('blogs');
  const router = useRouter();

  const handleBlogClick = (slug) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <section className="mt-[100px] px-[24px] lg:px-[120px] lg:mt-[152px] bg-white">
      <div className="mx-auto">
        {/* Header */}
        <div className="block xs:flex justify-between items-center">
          <h1 className="text-2xl md:text-[56px] font-[600] text-black">Insights</h1>
          
          <div className="flex gap-[24px] justify-center items-center">
            <ActionButton
              className={`px-[50px] sm:px-[66px] py-[11px] rounded-[48px] font-medium bg-[#0055E0]`}
              size={"md"}
              asChild
            >
               <Link href="/blogs">Blogs</Link>
            </ActionButton>
            <ActionButton
              className={`px-[50px] md:px-[66px] py-[11px] rounded-[48px] transition-all text-black border border-[#F0F0F0] duration-300 font-medium`}
              size={"md"}
            asChild
            >
                <Link href="/news">News</Link>
            </ActionButton>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:flex gap-[24px] mt-[60px] mb-[30px] md:mb-[60px] w-full">
          {/* Featured Blog - Takes 2 columns */}
          <div className="lg:w-[690px] lg:h-[598px] w-full">
            <div
              // onClick={() => handleBlogClick(featuredBlog.slug)}
              className="rounded-[24px] overflow-hidden w-full h-auto lg:w-[690px] lg:h-[598px] cursor-pointer transition-transform duration-300 shadow-md hover:shadow-xl"
            >
              <div className="relative w-full h-[328px] lg:w-[690px] lg:h-[328px]">
                <Image
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  fill
                  className="object-cover rounded-[24px]"
                  priority
                />
              </div>
              
              <div className='p-[12px] md:p-[32px]'>
                <h2 className="text-[20px] lg:text-[36px] font-medium mb-[16px] text-black leading-snug">
                  {featuredBlog.title}
                </h2>
                <p className="text-[#373737] text-[12px] mb-[24px] line-clamp-2 leading-snug">
                  {featuredBlog.description}
                </p>
                
                <div className="flex flex-row justify-between items-center sm:items-center gap-4">
                  <div className="flex items-center gap-[8px]">
                  <div className="relative w-[36px] h-[36px] rounded-full overflow-hidden">
                      <Image
                        src={featuredBlog.authorImage}
                        alt={featuredBlog.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium text-[12px] lg:text-[16px] text-[#030303]">{featuredBlog.author}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[10px] lg:text-[14px] text-[#757575]">
                    <span>{featuredBlog.date}</span>
                    <span>•</span>
                    <span>{featuredBlog.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Popular Blogs Sidebar */}
          <div className="lg:max-w-[486px]">
            <h2 className="text-[32px] lg:text-[24px] font-medium mb-[20px] text-black">Popular Blogs</h2>
            
            <div className="flex flex-col gap-[32px]">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  // onClick={() => handleBlogClick(blog.slug)}
                  className="flex gap-[12px] lg:gap-[24px] rounded-[12px] shadow-sm lg:roudned-[24px] overflow-hidden cursor-pointer transition-transform duration-300 hover:translate-x-1 hover:shadow-md"
                >
                  <div className="relative w-[130px] h-[115px] lg:w-[180px] lg:h-[161px] flex-shrink-0 rounded-[12px] lg:rounded-[24px] overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-[12px] lg:rounded-[24px]"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between p-[8px] lg:p-[11px]">
                    <div>
                      <h3 className="text-base font-medium mb-[8px] text-[16px] md:text-[18px] lg:text-[20px] text-black leading-tight line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-[10px] lg:text-[16px] text-gray-600 mb-2 leading-tight line-clamp-2">
                        {blog.description}
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center text-[10px] md:text-[12px] lg:text-[14px] text-gray-500">
                      <span>{blog.category} • {blog.readTime}</span>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Alternative: If you want to use Server Components with client interactivity
// Create a separate client component for the tabs:

// components/TabButtons.tsx
export function TabButtons() {
  const [activeTab, setActiveTab] = useState('blogs');
  
  return (
    <div className="flex gap-4">
      <button
        onClick={() => setActiveTab('blogs')}
        className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
          activeTab === 'blogs'
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-transparent text-black hover:bg-blue-600 hover:text-white'
        }`}
      >
        Blogs
      </button>
      <button
        onClick={() => setActiveTab('news')}
        className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
          activeTab === 'news'
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-transparent text-black hover:bg-blue-600 hover:text-white'
        }`}
      >
        News
      </button>
    </div>
  );
}

// Usage in layout or page:
// import BlogInsights from '@/components/BlogInsights';
// 
// export default function InsightsPage() {
//   return <BlogInsights />;
// }