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
import { useMemo, useState, useRef } from "react";
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
    {
      id: 7,
      category: 3,
      slug: "react-developer",
      job_experience: "8+ Years",
      job_type: "full-time",
      title: "Senior Sales Consultant - DACH Region",
      description:
        "<p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy,</p>",
    },
    {
      id: 8,
      category: 3,
      slug: "react-developer",
      job_experience: "8+ Years",
      job_type: "full-time",
      title: "Senior Sales Consultant - DACH Region",
      description:
        "<p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy,</p>",
    },
    {
      id: 9,
      category: 3,
      slug: "react-developer",
      job_experience: "8+ Years",
      job_type: "full-time",
      title: "Senior Sales Consultant - DACH Region",
      description:
        "<p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy,</p>",
    },
    {
      id: 10,
      category: 3,
      slug: "react-developer",
      job_experience: "8+ Years",
      job_type: "full-time",
      title: "Senior Sales Consultant - DACH Region",
      description:
        "<p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy,</p>",
    },
    {
      id: 11,
      category: 3,
      slug: "react-developer",
      job_experience: "8+ Years",
      job_type: "full-time",
      title: "Senior Sales Consultant - DACH Region",
      description:
        "<p>Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy,</p>",
    },
    {
      id: 12,
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
  const [currentPage, setCurrentPage] = useState(1);
  const paginationRef = useRef(null);

  const itemsPerPage = 4;
  const allJobs = data.jobs;

  // 🧮 Filter jobs based on search & department
  const filteredJobs = useMemo(() => {
    const activeDepartment = departments[selected].label;
    return allJobs.filter((job) => {
      const matchesDepartment =
        activeDepartment === "All positions" ||
        job.position === activeDepartment;
      const matchesSearch = job.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesDepartment && matchesSearch;
    });
  }, [selected, searchTerm, allJobs]);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [selected, searchTerm]);

  const departmentCounts = useMemo(() => {
    const counts = {};

    departments.forEach((dep) => {
      if (dep.label === "All positions") {
        counts[dep.label] = allJobs.filter((job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase())
        ).length;
      } else {
        counts[dep.label] = allJobs.filter(
          (job) =>
            job.position === dep.label &&
            job.title.toLowerCase().includes(searchTerm.toLowerCase())
        ).length;
      }
    });

    return counts;
  }, [searchTerm, allJobs]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("ellipsis-start");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("ellipsis-end");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);

      setTimeout(() => {
        if (paginationRef.current) {
          const offset = 150;
          const elementPosition =
            paginationRef.current.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  return (
    <section className="w-full h-auto block py-[40px] sm:py-[60px] xl:py-[120px] 2xl:py-[140px]">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center mb-[15px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px] max-sm:flex-col">
          <div className="flex-1 max-sm:mb-[20px]">
            <Heading as="h2" size="heading2" className="text-[#030303]">
              {parse(data?.title)}
            </Heading>
          </div>
          <div className="w-[268px] sm:w-[320px] xl:w-[360px] 2xl:w-[468px] 3xl:w-[520px]">
            <div className="w-full bg-[#f0f0f0] rounded-full p-[6px_10px] xl:p-[10px_15px] 2xl:p-[12px_20px] flex items-center gap-[10px]">
              <Search className="size-[15px] xl:size-[18px] 2xl:size-[22px]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search jobs..."
                className="text-[10px] sm:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-normal font-normal text-black placeholder:text-[#a9a9a9] w-full focus:outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap flex-col sm:flex-row gap-[15px] xl:gap-[20px] 2xl:gap-[30px]"
          ref={paginationRef}
        >
          <div className="sm:hidden w-full max-w-[268px] mb-4 p-2 rounded-full border border-[#F0F0F0] mx-auto">
            <select
              value={selected}
              onChange={(e) => setSelected(Number(e.target.value))}
              className="text-[12px] w-full rounded-lg bg-white relative outline-none"
            >
              {departments.map((dep, index) => (
                <option key={dep.label} value={index}>
                  {dep.label} ({departmentCounts[dep.label] || 0})
                </option>
              ))}
            </select>
          </div>

          <aside className="hidden sm:block w-[220px] xl:w-[260px] 2xl:w-[368px] flex-shrink-0">
            <ul className="sticky top-[var(--header-y)]">
              {departments.map((dep, index) => (
                <div
                  key={dep.label}
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
                    <span className="ml-2 mr-1">{dep.label}</span>
                    <span>({departmentCounts[dep.label] || 0})</span>
                  </Text>
                </div>
              ))}
            </ul>
          </aside>

          <section className="flex-1">
            {currentItems.length === 0 ? (
              <p className="text-sm text-center text-gray-500">
                No jobs found.
              </p>
            ) : (
              <div className="space-y-2 xl:space-y-4">
                {currentItems.map((job, i) => (
                  <div key={job.id || i}>
                    <JobCard job={job} />
                  </div>
                ))}
              </div>
            )}

            {filteredJobs.length > 0 && (
              <div className="mt-2">
                <div className="flex justify-between items-center gap-[20px] mt-[20px] xl:mt-[30px] 2xl:mt-[40px] max-sm:flex-col">
                  <div>
                    <div
                      className={cn(
                        "text-[9px] sm:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-tight font-medium text-[#7b7b75]",
                        ""
                      )}
                    >
                      Showing {indexOfFirstItem + 1} to{" "}
                      {Math.min(indexOfLastItem, filteredJobs.length)} of{" "}
                      {filteredJobs.length} jobs
                    </div>
                  </div>

                  {totalPages > 1 && (
                    <div>
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
                              {page === "ellipsis-start" ||
                              page === "ellipsis-end" ? (
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
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}

function JobCard({ job }) {
  return (
    <div className="w-full h-auto block bg-[#FCFCFC] group border border-[#F0F0F0] rounded-[15px] xl:rounded-[30px] p-[15px] sm:p-[20px] xl:p-[30px] hover:shadow-lg transition-all duration-200">
      <Heading
        as={"h3"}
        size={"none"}
        className="text-[14px] sm:text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[42px] leading-tight font-normal text-[#030303] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
      >
        {job.title}
      </Heading>
      <Text
        as={"div"}
        size={"text2"}
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
            title={job?.job_experience}
          />
        </div>
        <div>
          <ActionButton
            variant="link"
            size="lg"
            className="text-black !h-auto hover:[>svg]:translate-x-1"
            asChild
          >
            <Link href={`/career/${job.slug}`}>
              Read More
              <Image
                src="/images/Arrow.png"
                alt="arrow"
                width={18}
                height={18}
                className="w-[15px] xl:w-[18px]"
              />
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
      <div className="w-full h-auto p-[4px_10px] xl:p-[6px_15px] rounded-[15px] xl:rounded-[24px] flex flex-wrap gap-[5px] xl:gap-[10px] border-1 border-[#eee] transition hover:border-black/20">
        <Image
          src={src}
          alt={alt || "specs"}
          width={20}
          height={20}
          className="w-[12px] sm:w-[15px] xl:w-[20px]"
        />
        <div className="text-[10px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-normal font-normal text-[#373737]">
          {title}
        </div>
      </div>
    </div>
  );
}
