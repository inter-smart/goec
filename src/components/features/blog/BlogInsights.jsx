"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ActionButton } from "@/components/utils/Button";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";

export default function BlogInsights({ type, items, featured }) {
  const router = useRouter();

  return (
    <section className="mt-[100px] lg:mt-[109px] bg-white">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center mb-[24px] lg:py-[6px] lg:mb-[43px]">
          <Heading as={"h1"} size={"heading1"} className="semibold max-sm:mb-[12px] text-[030303]">
            Insights
          </Heading>

          <div className="flex gap-[13px] lg:gap-[18px] justify-center items-center">
            <ActionButton
              className={`px-[35px] py-[6px] lg:px-[47px] lg:py-[8px] rounded-[35px] lg:text-[15px] font-medium ${type == "news" ? "text-black border border-[#F0F0F0]" : "bg-[#0055E0]"} `}
              size={"md"}
              asChild
            >
              <Link href="/blog">Blogs</Link>
            </ActionButton>
            <ActionButton
              className={`px-[35px] py-[6px] lg:px-[47px] lg:py-[8px] rounded-[35px] lg:text-[15px] font-medium  ${type == "news" ? "bg-[#0055E0]" : "text-black border border-[#F0F0F0]"} `}
              size={"md"}
              asChild
            >
              <Link href="/news">News</Link>
            </ActionButton>
          </div>
        </div>

        {/* Content Grid */}
        <div className="w-full flex mt-[50px] gap-[24px]">
          {/* Featured Blog - Takes 2 columns */}
          <div className="flex-1 ">
            <div className="rounded-[12px] 2xl:rounded-[24px] overflow-hidden w-full h-auto cursor-pointer transition-transform duration-300 shadow-md hover:shadow-lg ">
              <div className="w-full h-auto">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={640}
                  height={328}
                  className="w-full object-cover rounded-[12px] 2xl:rounded-[24px]"
                  priority
                />
              </div>

              <div className="h-full flex flex-col justify-center md:m-[18px] lg:m-[22px] xl:m-[32px] 3xl:m-[42px]">
                <Heading as={"h3"} size={"heading3"} className="font-semibold lg:mb-[12px] xl:mb-[16px] ">
                  {featured.title}
                </Heading>
                <Text as={"p"} size={"text2"} className="text-[#373737] lg:mb-[18px] xl:mb-[24px] line-clamp-2">
                  {featured.description}
                </Text>

                {type == "news" ? (
                  <div className="flex flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-[10px] lg:text-[14px] text-[#757575]">
                      <span>{featured.date}</span>
                      <span>•</span>
                      <span>{featured.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="lg:text-[14px] text-black font-semibold">Read More</span>
                      <span>
                        <Image src="/images/read-more-arrow-right.png" alt="arrow-right" width={16} height={16} />
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row justify-between items-center sm:items-center gap-4">
                    <div className="flex items-center gap-[8px]">
                      <div className="relative w-[36px] h-[36px] rounded-full overflow-hidden">
                        <Image
                          src={featured.authorImage}
                          alt={featured.author}
                          width={36}
                          height={36}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <span className="font-medium text-[12px] lg:text-[16px] text-[#030303]">{featured.author}</span>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] lg:text-[14px] text-[#757575]">
                      <span>{featured.date}</span>
                      <span>•</span>
                      <span>{featured.readTime}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Popular Blogs Sidebar */}
          <div className="w-[486px]">
            <h2 className="text-[13px] lg:text-[18px] 3xl:text-[32px] text-black font-medium mt-[10px] lg:mt-[0] mb-[11px] lg:mb-[15px] xl:mb-[20px] 3xl:mb-[24px]">
              {type == "news" ? "Popular News" : "Popular Blogs"}
            </h2>

            <div className="flex flex-col gap-[32px]">
              {items.map((blog) => (
                <>
                  <div key={blog.id} className=" flex xl:gap-[24px]  overflow-hidden  cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="relative w-[130px] xl:w-[180px]  flex-shrink-0 rounded-[12px] lg:rounded-[24px] overflow-hidden ">
                      <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                    </div>

                    <div className="flex-1 flex flex-col justify-between xl:mt-[9px] xl:mb-[9px]">
                      <h3 className="text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] font-medium text-black leading-tight ">{blog.title}</h3>
                      <p className="text-[10px] lg:text-[14px] text-gray-600 xl:mt-[8px] leading-tight line-clamp-2 ">{blog.description}</p>

                      <div className="flex flex-row justify-between items-center  mt-[14px] xl:mt-[16px]">
                        <p className="text-[10px] lg:text-[14px]  text-[#757575] leading-tight">{`${type == "news" ? blog.date : blog.category}.${blog.readTime}`}</p>

                        {type == "news" ? (
                          <div className="flex items-center">
                            <span className="text-[14px] font-normal text-[#757575]">Read More</span>
                            <span className="ml-2">
                              <Image src="/images/read-more-arrow-right.png" alt="arrow-right" width={16} height={16} />
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <span className="text-[14px] font-normal text-[#757575]">{blog.date}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* <hr className="border-t border-gray-300 w-full mt-[16px]" /> */}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
