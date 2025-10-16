"use client";

import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import JobCard from "./JobCard";


const departments = [
  { label: "All positions", count: 21 },
  { label: "Engineering", count: 8 },
  { label: "Design", count: 2 },
  { label: "Sales", count: 7 },
  { label: "Marketing", count: 3 },
];

const jobCards = Array(6).fill({
  title: "Senior Sales Consultant – DACH Region",
  location: "Remote",
  type: "Full Time",
  posted: "Posted 15 days ago",
});

const tripData = {
  media: {
    type: "video",
    path: "/videos/trip-bg.mp4",
    alt: "trip",
  },
  title: "Make every ride smoother, <span>greener</span> & smarter.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.",
  button: {
    link: "/",
    label: "Plan a trip now",
  },
};

export default function CareersPage({ makeRideMedia = tripData }) {
  const [selected, setSelected] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div className="w-full">
      {/* Top Banner Image */}
      <div className="container mx-auto">

      <div className="relative w-full aspect-[7/2] mt-[-12%]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full aspect-[7/2] overflow-hidden rounded-[10px] lg:rounded-[24px] z-0">
          <picture className="absolute inset-0 -z-10">
            <source
              media="(max-width: 640px)"
              srcSet="/images/hero-banner-1.jpg"
            />
            <Image
              src="/images/hero-banner-1.jpg"
              alt="hero"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </picture>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full my-[40px] lg:my-[100px] xl:my-[125px] 2xl:my-[140px] 3xl:my-[186px] mx-auto">
        {/* Header with Search */}
        <div className="flex flex-col sm:flex-row items-start md:items-center justify-between mb-8 gap-4 xl:mb-[80px] 3xl:mb-[106px]">
          <Heading as={"h1"} size={"heading1"} className="text-[#030303]">
            Current Openings
          </Heading>
          <div className="w-full bg-[#F0F0F0] rounded-full max-w-[250px] lg:max-w-[285px] xl:max-w-[355px] 2xl:max-w-[400px] 3xl:max-w-[500px] px-[16px] py-[12px] flex items-center gap-[12px]">
            <Search />
            <input
              type="text"
              className=" w-full text-sm focus:outline-none text-[#A9A9A9] text-[18px]"
              onChange={(e) => handleChange(e)}
              placeholder="Search jobs..."
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Sidebar */}
          <aside className="lg:w-[288px] flex-shrink-0 ">
            <ul className="sticky top-20">
              {departments.map((dep, index) => (
                <div
                  key={dep.label}
                  onClick={() => handleSelect(index)}
                  className={`flex justify-between items-center text-sm py-2.5 px-3 rounded-md cursor-pointer transition-colors ${
                    index === selected ? "text-[#0055E0]" : "text-[#030303]"
                  }`}
                >
                  <Text as="p" size="text2" className="flex items-center">
                    {/* Fixed width space for icon */}
                    <span className="w-4 flex justify-center">
                      {index === selected && <FaCaretRight />}
                    </span>

                    <span className="ml-2 mr-1">{dep.label}</span>
                    <span>({dep.count})</span>
                  </Text>
                </div>
              ))}
            </ul>
          </aside>

          {/* Job Listings */}
          <section className="flex-1">
            <div className="space-y-4">
              {jobCards.map((job, i) => (
                <div
                  key={i}
                  className="bg-[#FCFCFC] group border border-[#F0F0F0] rounded-[32px] p-[32px] hover:shadow-lg transition-all duration-200"
                >
                  <JobCard job={job} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      </div>
    </div>
  );
}
