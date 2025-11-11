"use client";
import { Heading } from "@/components/utils/Heading";
import parse from "html-react-parser";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

import { Text } from "@/components/utils/Text";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { FaCaretRight } from "react-icons/fa";
import { ActionButton } from "@/components/utils/Button";

const local_data = {
  title: "Current Openings",
  job_categories: [
    {
      id: 3,
      title: "Sales",
      sort_order: 1,
    },
    {
      id: 2,
      title: "Buisiness",
      sort_order: 1,
    },
  ],
  jobs: [
    {
      id: 1,
      category: 3,
      slug: "react-developer",
      job_experience: "8+ Years",
      job_type: "full-time",
      title: "Senior Sales Consultant - DACH Region",
      description:
        "<p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy,</p>",
    },
    {
      id: 2,
      category: 3,
      slug: "react-developer",
      job_experience: "8+ Years",
      job_type: "full-time",
      title: "Senior Sales Consultant - DACH Region",
      description:
        "<p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy,</p>",
    },
    {
      id: 3,
      category: 3,
      slug: "react-developer",
      job_experience: "8+ Years",
      job_type: "full-time",
      title: "Senior Sales Consultant - DACH Region",
      description:
        "<p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy,</p>",
    },
    {
      id: 4,
      category: 3,
      slug: "react-developer",
      job_experience: "8+ Years",
      job_type: "full-time",
      title: "Senior Sales Consultant - DACH Region",
      description:
        "<p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy,</p>",
    },
    {
      id: 5,
      category: 3,
      slug: "react-developer",
      job_experience: "8+ Years",
      job_type: "full-time",
      title: "Senior Sales Consultant - DACH Region",
      description:
        "<p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy,</p>",
    },
    {
      id: 6,
      category: 3,
      slug: "react-developer",
      job_experience: "8+ Years",
      job_type: "full-time",
      title: "Senior Sales Consultant - DACH Region",
      description:
        "<p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy,</p>",
    },
  ],
};

const departments = [
  { label: "All positions" },
  { label: "Engineering" },
  { label: "Design" },
  { label: "Sales" },
  { label: "Marketing" },
];

export default function CareerListSection({ data = local_data }) {
  const [selected, setSelected] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const categoriesWithAll = useMemo(
  () => [{ id: 0, title: "All positions" }, ...data.job_categories],
  [data.job_categories]
);

  const allJobs = data.jobs;

  // 🧮 Filter jobs based on search & department
const filteredJobs = useMemo(() => {
  const activeCategory = categoriesWithAll[selected];

  return allJobs.filter((job) => {
    const matchesCategory =
      activeCategory.title === "All positions" ||
      job.category === activeCategory.title ||
      job.category === activeCategory.id;

    const matchesSearch = job.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });
}, [selected, searchTerm, allJobs, categoriesWithAll]);


const departmentCounts = useMemo(() => {
  const counts = {};

  counts["All positions"] = allJobs.filter((job) =>
    job.title?.toLowerCase().includes(searchTerm.toLowerCase())
  ).length;

  data.job_categories.forEach((cat) => {
    counts[cat.title] = allJobs.filter(
      (job) =>
        (job.category === cat.title || job.category === cat.id) &&
        job.title?.toLowerCase().includes(searchTerm.toLowerCase())
    ).length;
  });

  return counts;
}, [allJobs, searchTerm, data.job_categories]);

  return (
    <section className="w-full h-auto block py-[30px] sm:py-[60px] xl:py-[120px] 2xl:py-[140px]">
      <div className="container">
        <div className="flex flex-wrap justify-between mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px]">
          <div className="flex-1 max-sm:mb-[15px]">
            <Heading
              as="h2"
              size="heading2"
              className="text-[#030303] max-sm:text-center"
            >
              {parse(data?.title)}
            </Heading>
          </div>
          <div className="w-full lg:w-[368px] xl:w-[420px] 2xl:w-[576px] 3xl:w-[640px] max-sm:mx-auto max-sm:text-center">
            <div className="w-full bg-[#f0f0f0] rounded-full px-[16px] py-[12px] flex items-center gap-[12px]">
              <Search />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search jobs..."
                className="w-full text-xs focus:outline-none text-[#030303] placeholder:text-[#A9A9A9]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap flex-col sm:flex-row gap-6">
          <div className="sm:hidden mb-4 px-4 py-2.5 rounded-full border border-[#F0F0F0] ">
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="w-full rounded-lg bg-white relative outline-none"
            >
              {categoriesWithAll?.map((dep, index) => (
                <option key={dep.id} value={index}>
                  {dep.title} ({departmentCounts[dep.title] || 0})
                </option>
              ))}
            </select>
          </div>

          <aside className="hidden sm:block lg:w-[288px] flex-shrink-0">
            <ul className="sticky top-20">
              {categoriesWithAll?.map((dep, index) => (
                <div
                  key={dep.id}
                  onClick={() => setSelected(index)}
                  className={`flex justify-between items-center text-sm py-2.5 px-3 rounded-md cursor-pointer transition-colors ${
                    index === selected
                      ? "text-[#0055E0] bg-[#F3F7FF]"
                      : "text-[#030303] hover:bg-gray-50"
                  }`}
                >
                  <Text as="div" size="text2" className="flex items-center">
                    <span className="w-4 flex justify-center">
                      {index === selected && <FaCaretRight />}
                    </span>
                    <span className="ml-2 mr-1">{dep.title}</span>
                    <span>({departmentCounts[dep.title] || 0})</span>
                  </Text>
                </div>
              ))}
            </ul>
          </aside>

          <section className="flex-1">
            {filteredJobs.length === 0 ? (
              <p className="text-gray-500">No jobs found.</p>
            ) : (
              <div className="space-y-4">
                {filteredJobs.map((job, i) => (
                  <div
                    key={i}
                    className="bg-[#FCFCFC] group border border-[#F0F0F0] rounded-[32px] p-[32px] hover:shadow-lg transition-all duration-200"
                  >
                    <JobCard job={job} />
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        {/* <div className="flex justify-between items-center gap-[20px] mt-[20px] xl:mt-[30px] 2xl:mt-[40px] max-sm:flex-col">
          <div>
            <div
              className={cn(
                "text-[9px] sm:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-tight font-medium text-[#7b7b75]",
                ""
              )}
            >
              Showing {indexOfFirstItem + 1} to{" "}
              {Math.min(indexOfLastItem, resultItems.length)} of{" "}
              {resultItems.length} recent orders
            </div>
          </div>

          {totalPages > 1 && (
            <div ref={paginationRef}>
              <Pagination className={"justify-end"}>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage - 1);
                      }}
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>

                  {getPageNumbers().map((page, index) => (
                    <PaginationItem key={index}>
                      {page === "ellipsis-start" || page === "ellipsis-end" ? (
                        <PaginationEllipsis />
                      ) : (
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page);
                          }}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage + 1);
                      }}
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div> */}
      </div>
    </section>
  );
}

function JobCard({ job }) {
  return (
    <div className="w-full h-auto block">
      <Heading
        as={"h3"}
        size={"heading3"}
        className="text-[#030303] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
      >
        {job.title}
      </Heading>
      <Text
        as={"div"}
        size={"text1"}
        className="[&>p,&]:line-clamp-2 text-[#757575] mb-[10px] xl:mb-[20px] 2xl:mb-[30px]"
      >
        {parse(job.description)}
      </Text>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex-1 flex flex-wrap gap-[4px] sm:gap-[6px] 2xl:gap-[8px]">
          <IconCard
            src="/images/career-time.svg"
            alt="experience"
            title={job?.job_type}
          />
          <IconCard
            src="/images/career-exp.svg"
            alt="experience"
            title={job?.experience>0 ? job?.experience + "+ years": "fresher"}
          />
        </div>
        <div>
          <ActionButton
            variant="link"
            size="lg"
            className="text-black hover:[>svg]:translate-x-1"
            asChild
          >
            <Link href={`/career/${job.slug}`}>
              Read More
              <Image
                src="/images/Arrow.png"
                alt="arrow"
                width={18}
                height={18}
              />
              {/* <svg
                width="32"
                height="8"
                viewBox="0 0 32 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-[10px] sm:size-[15px] xl:size-[20px] 3xl:size-[25px]"
              >
                <path
                  d="M32 3.84766L25.3333 -0.00134566V7.69666L32 3.84766ZM0 3.84766L0 4.51432L26 4.51432V3.84766V3.18099L0 3.18099L0 3.84766Z"
                  fill="#151515"
                />
                <mask id="path-2-inside-1_1293_11217" fill="white">
                  <path d="M30.6874 3.67877C30.7281 3.52226 30.8242 3.38586 30.958 3.29497C31.0917 3.20408 31.2539 3.16489 31.4144 3.18472C31.5749 3.20454 31.7227 3.28202 31.8303 3.40272C31.9379 3.52342 31.998 3.67912 31.9993 3.84082C32.0007 4.00252 31.9432 4.15919 31.8376 4.28166C31.732 4.40414 31.5855 4.48406 31.4254 4.50654C31.2653 4.52903 31.1024 4.49255 30.9672 4.40389C30.8319 4.31523 30.7335 4.18045 30.6903 4.02463L30.7478 4.00867C30.7872 4.15054 30.8768 4.27326 30.9999 4.35398C31.123 4.4347 31.2713 4.46791 31.4171 4.44744C31.5629 4.42697 31.6963 4.3542 31.7924 4.24269C31.8885 4.13118 31.9409 3.98854 31.9396 3.84131C31.9384 3.69409 31.8837 3.55233 31.7858 3.44243C31.6878 3.33254 31.5532 3.262 31.4071 3.24395C31.261 3.2259 31.1133 3.26157 30.9915 3.34433C30.8697 3.42708 30.7822 3.55127 30.7452 3.69377L30.6874 3.67877Z" />
                </mask>
                <path
                  d="M30.6874 3.67877C30.7281 3.52226 30.8242 3.38586 30.958 3.29497C31.0917 3.20408 31.2539 3.16489 31.4144 3.18472C31.5749 3.20454 31.7227 3.28202 31.8303 3.40272C31.9379 3.52342 31.998 3.67912 31.9993 3.84082C32.0007 4.00252 31.9432 4.15919 31.8376 4.28166C31.732 4.40414 31.5855 4.48406 31.4254 4.50654C31.2653 4.52903 31.1024 4.49255 30.9672 4.40389C30.8319 4.31523 30.7335 4.18045 30.6903 4.02463L30.7478 4.00867C30.7872 4.15054 30.8768 4.27326 30.9999 4.35398C31.123 4.4347 31.2713 4.46791 31.4171 4.44744C31.5629 4.42697 31.6963 4.3542 31.7924 4.24269C31.8885 4.13118 31.9409 3.98854 31.9396 3.84131C31.9384 3.69409 31.8837 3.55233 31.7858 3.44243C31.6878 3.33254 31.5532 3.262 31.4071 3.24395C31.261 3.2259 31.1133 3.26157 30.9915 3.34433C30.8697 3.42708 30.7822 3.55127 30.7452 3.69377L30.6874 3.67877Z"
                  fill="#151515"
                  stroke="#151515"
                  strokeWidth="0.115942"
                  mask="url(#path-2-inside-1_1293_11217)"
                />
              </svg> */}
            </Link>
          </ActionButton>
        </div>
      </div>
    </div>
  );
}

function IconCard({ src, alt, title }) {
  return (
    <div>
      <div className="w-full h-auto p-[5px_10px] xl:p-[10px_15px] rounded-[15px] xl:rounded-[24px] flex flex-wrap gap-[5px] xl:gap-[10px] border-1 border-[#eee] transition hover:border-[#0048bf]">
        <Image src={src} alt={alt || "specs"} width={20} height={20} />
        <div className="text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-normal font-normal text-[#373737]">
          {title}
        </div>
      </div>
    </div>
  );
}
