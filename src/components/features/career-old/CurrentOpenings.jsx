"use client";

import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState, useMemo } from "react";
import { FaCaretRight } from "react-icons/fa";
import JobCard from "./JobCard";
import { MEDIA_URL } from "@/lib/api";

const allJobs = [
  {
    title: "Senior Sales Consultant – DACH Region",
    slug: "senior-sales-consultant-dach-region",
    location: "Remote",
    type: "Full Time",
    posted: "Posted 15 days ago",
    position: "Sales",
  },
  {
    title: "Frontend Engineer (React)",
    slug: "frontend-engineer-react",
    location: "Bangalore, India",
    type: "Full Time",
    posted: "Posted 5 days ago",
    position: "Engineering",
  },
  {
    title: "UI/UX Designer",
    slug: "ui-ux-designer",
    location: "Remote",
    type: "Contract",
    posted: "Posted 12 days ago",
    position: "Design",
  },
  {
    title: "Marketing Executive",
    slug: "marketing-executive",
    location: "Mumbai, India",
    type: "Full Time",
    posted: "Posted 9 days ago",
    position: "Marketing",
  },
  {
    title: "Backend Engineer (Node.js)",
    slug: "backend-engineer-nodejs",
    location: "Remote",
    type: "Full Time",
    posted: "Posted 3 days ago",
    position: "Engineering",
  },
  {
    title: "Sales Development Representative",
    slug: "sales-development-representative",
    location: "Remote",
    type: "Full Time",
    posted: "Posted 20 days ago",
    position: "Sales",
  },
];

const departments = [{ label: "All positions" }, { label: "Engineering" }, { label: "Design" }, { label: "Sales" }, { label: "Marketing" }];

export default function CareersPage({
  current_opening,
  desktop_media_path,
  mobile_media_path,
  alt,
  job_categories,
  jobs
}) {
   const [selected, setSelected] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Build dynamic category list
  const departments = useMemo(() => {
    return [{ id: 0, label: "All positions" }, ...job_categories.map((cat) => ({ id: cat.id, label: cat.title }))];
  }, [job_categories]);

  // ✅ Filter jobs by category & search
  const filteredJobs = useMemo(() => {
    const selectedCategory = departments[selected];
    return jobs.filter((job) => {
      const matchesCategory =
        selectedCategory.label === "All positions" || job.category === selectedCategory.id;
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selected, searchTerm, jobs, departments]);

  // ✅ Count jobs for each department
  const departmentCounts = useMemo(() => {
    const counts = {};
    departments.forEach((dep) => {
      if (dep.label === "All positions") {
        counts[dep.label] = jobs.filter((job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase())
        ).length;
      } else {
        counts[dep.label] = jobs.filter(
          (job) =>
            job.category === dep.id &&
            job.title.toLowerCase().includes(searchTerm.toLowerCase())
        ).length;
      }
    });
    return counts;
  }, [departments, jobs, searchTerm]);

  return (
    <div className="w-full">
      {/* Top Banner Image */}
      <div className="container mx-auto">
        <div className="relative w-full aspect-[7/2] mt-[-12%]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full aspect-[7/2] overflow-hidden rounded-[10px] lg:rounded-[24px] z-0">
            <picture className="absolute inset-0 -z-10">
              <source media="(max-width: 640px)" srcSet={`${MEDIA_URL}${mobile_media_path}`} />
              <Image src={`${MEDIA_URL}${desktop_media_path}`} alt={alt} fill sizes="100vw" className="object-cover" />
            </picture>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full my-[40px] lg:my-[100px] xl:my-[125px] 2xl:my-[140px] mx-auto">
          {/* Header with Search */}
          <div className="flex flex-col sm:flex-row items-start md:items-center justify-between mb-8 gap-4 xl:mb-[80px]">
            <Heading as="h1" size="heading1" className="text-[#030303]">
              Current Openings
            </Heading>
            <div className="w-full bg-[#F0F0F0] rounded-full sm:max-w-[355px] px-[16px] py-[12px] flex items-center gap-[12px]">
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

          {/* Content Grid */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Sidebar */}

            {/* Department Dropdown (visible only on small screens) */}
            <div className="sm:hidden mb-4 px-4 py-2.5 rounded-full border border-[#F0F0F0] ">
              <select
                value={selected}white
                onChange={(e) => setSelected(Number(e.target.value))}
                className="w-full rounded-lg bg-white relative outline-none"
              >
                {departments.map((dep, index) => (
                  <option key={dep.label} value={index}>
                    {dep.label} ({departmentCounts[dep.label] || 0})
                  </option>
                ))}
              </select>
            </div>

            <aside className="hidden sm:block lg:w-[288px] flex-shrink-0">
              <ul className="sticky top-20">
                {departments.map((dep, index) => (
                  <div
                    key={dep.label}
                    onClick={() => setSelected(index)}
                    className={`flex justify-between items-center text-sm py-2.5 px-3 rounded-md cursor-pointer transition-colors ${
                      index === selected ? "text-[#0055E0] bg-[#F3F7FF]" : "text-[#030303] hover:bg-gray-50"
                    }`}
                  >
                    <Text as="p" size="text2" className="flex items-center">
                      <span className="w-4 flex justify-center">{index === selected && <FaCaretRight />}</span>
                      <span className="ml-2 mr-1">{dep.label}</span>
                      <span>({departmentCounts[dep.label] || 0})</span>
                    </Text>
                  </div>
                ))}
              </ul>
            </aside>

            {/* Job Listings */}
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
        </div>
      </div>
    </div>
  );
}
