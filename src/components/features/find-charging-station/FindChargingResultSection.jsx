"use client";
import SearchStationForm from "@/components/form/SearchStationForm";
import { Heading } from "@/components/utils/Heading";
import parse from "html-react-parser";
import { useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Image from "next/image";

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

const local_data = {
  title: "Showing results for <span>Kochi</span>",
  items: [
    {
      link: "/find-charging-stations/1",
      station: "Kochi Metro, Ernakulam",
      location: "Ernakulam, Kochi, 682011",
      power: "40 KW",
      socket_type: "ICE 25123",
      charger_type: "DC",
      button: {
        link: "",
        label: "Direction",
      },
    },
    {
      link: "/find-charging-stations/1",
      station: "GO EC, Pnampolly Nagar, Kochi",
      location: "Panampally Nagar, Kochi, 682036",
      power: "60 KW",
      socket_type: "ICE 26196",
      charger_type: "AC, DC",
      button: {
        link: "",
        label: "Direction",
      },
    },
    {
      link: "/find-charging-stations/1",
      station: "High Court, Kochi",
      location: "High Court Junction, Kochi, 682031",
      power: "80 KW",
      socket_type: "ICE 27145",
      charger_type: "AC, DC",
      button: {
        link: "",
        label: "Direction",
      },
    },
    {
      link: "/find-charging-stations/1",
      station: "Cochin Shipyard, Kochi",
      location: "Cochin Shipyard Road, Kochi, 682015",
      power: "100 KW",
      socket_type: "ICE 28167",
      charger_type: "AC",
      button: {
        link: "",
        label: "Direction",
      },
    },
    {
      link: "/find-charging-stations/1",
      station: "High Court, Kochi",
      location: "High Court Junction, Kochi, 682031",
      power: "80 KW",
      socket_type: "ICE 27145",
      charger_type: "AC, DC",
      button: {
        link: "",
        label: "Direction",
      },
    },
    {
      link: "/find-charging-stations/1",
      station: "Cochin International Airport",
      location: "Nedumbassery, Kochi, 683111",
      power: "120 KW",
      socket_type: "ICE 30101",
      charger_type: "AC, DC",
      button: {
        link: "",
        label: "Direction",
      },
    },
    {
      link: "/find-charging-stations/1",
      station: "Fort Kochi Beach",
      location: "Fort Kochi, Kochi, 682001",
      power: "30 KW",
      socket_type: "ICE 29189",
      charger_type: "DC",
      button: {
        link: "",
        label: "Direction",
      },
    },
    {
      link: "/find-charging-stations/1",
      station: "Cochin Shipyard, Kochi",
      location: "Cochin Shipyard Road, Kochi, 682015",
      power: "100 KW",
      socket_type: "ICE 28167",
      charger_type: "AC",
      button: {
        link: "",
        label: "Direction",
      },
    },
    {
      link: "/find-charging-stations/1",
      station: "High Court, Kochi",
      location: "High Court Junction, Kochi, 682031",
      power: "80 KW",
      socket_type: "ICE 27145",
      charger_type: "AC, DC",
      button: {
        link: "",
        label: "Direction",
      },
    },
    {
      link: "/find-charging-stations/1",
      station: "Cochin Shipyard, Kochi",
      location: "Cochin Shipyard Road, Kochi, 682015",
      power: "100 KW",
      socket_type: "ICE 28167",
      charger_type: "AC",
      button: {
        link: "",
        label: "Direction",
      },
    },
  ],
};

const textStyle = `
  text-[9px] sm:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-tight font-medium text-[#030303]
`
  .replace(/\s+/g, " ")
  .trim();
export default function FindChargingResultSection({
  stations = { list: [] },
  searchSection = { filters: {} },
  pagination = { total: 0, currentPage: 1, perPage: 7, totalPages: 1 },
  currentFilters = {},
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paginationRef = useRef(null);

  // Use server-side pagination data
  const resultItems = stations?.list || [];
  const currentPage = pagination?.currentPage || 1;
  const totalPages = pagination?.totalPages || 1;
  const total = pagination?.total || 0;
  const perPage = pagination?.perPage || 7;

  // Calculate display indices
  const indexOfFirstItem = (currentPage - 1) * perPage;
  const indexOfLastItem = Math.min(indexOfFirstItem + perPage, total);

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
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page.toString());
      router.push(`?${params.toString()}`);

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
    <section className="w-full h-auto block">
      <div className="container">
        <div className="w-full h-auto bg-white rounded-[15px] xl:rounded-[30px] mt-[-50px] sm:mt-[-60px] xl:mt-[-100px] 2xl:mt-[-120px] p-[15px] sm:p-[20px] xl:p-[30px] 2xl:p-[40px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] relative z-0">
          <Heading
            as="h3"
            size="heading3"
            className="text-center text-[#030303] mb-[10px] xl:mb-[20px] 2xl:mb-[30px]"
          >
            {searchSection?.title
              ? parse(searchSection.title)
              : "Find Charging Stations"}
          </Heading>
          <SearchStationForm
            filters={searchSection?.filters}
            currentFilters={currentFilters}
          />
        </div>
      </div>
      <div className="w-full py-[30px_40px] sm:py-[40px_60px] xl:py-[70px_100px] 2xl:py-[90px_120px]">
        <div className="container">
          {currentFilters?.search && (
            <Heading
              as="div"
              size="none"
              className="text-[12px] sm:text-[14px] lg:text-[18px] xl:text-[22px] 2xl:text-[26px] 3xl:text-[32px] leading-tight font-normal text-[#353535] [&>span]:text-[#030303] [&>span]:font-medium mb-[15px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]"
            >
              Showing results for <span>{currentFilters.search}</span>
            </Heading>
          )}
          <div className="w-full max-sm:overflow-x-auto">
            {resultItems.length > 0 ? (
              <div className="w-full min-w-[468px]">
                <div className="flex max-xl:px-[10px] [&>*]:p-[5px] xl:[&>*]:p-[15px_20px] 2xl:[&>*]:p-[20px_30px] ">
                  {[
                    "Station",
                    "Location",
                    "Power",
                    "Socket Type",
                    "Charger Type",
                    "",
                  ].map((item, index) => (
                    <div
                      key={"title-item" + index}
                      className={cn(
                        textStyle,
                        "text-normal text-[#a9a9a9] w-2/12"
                      )}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                {resultItems.map((item, index) => (
                  <div
                    key={"station-row-" + index}
                    className={
                      "flex flex-wrap items-center max-xl:px-[10px] [&>*]:p-[5px] sm:[&>*]:p-[5px] xl:[&>*]:p-[15px_20px] 2xl:[&>*]:p-[20px_30px] border-1 border-[#f0f0f0] bg-white rounded-[15px] xl:rounded-[24px] overflow-hidden my-[5px] xl:my-[10px] hover:shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] transition duration-300"
                    }
                  >
                    <div className={cn(textStyle, "w-2/12 sm:w-2/12")}>
                      <Link href={`/find-charging-stations/${item?.slug}`}>
                        {item?.station}
                      </Link>
                    </div>
                    <div className={cn(textStyle, "w-2/12 sm:w-2/12")}>
                      {item?.location}
                    </div>
                    <div className={cn(textStyle, "w-2/12 sm:w-2/12")}>
                      {item?.power}
                    </div>
                    <div className={cn(textStyle, "w-2/12 sm:w-2/12")}>
                      {item?.socket_type}
                    </div>
                    <div className={cn(textStyle, "w-2/12 sm:w-2/12")}>
                      {item?.charger_type}
                    </div>
                    <div className={cn(textStyle, "w-2/12 sm:w-2/12")}>
                      <a
                        href={item?.location_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0055e0] hover:[&>img]:[filter:brightness(0)_saturate(100%)_invert(19%)_sepia(98%)_saturate(4315%)_hue-rotate(213deg)_brightness(93%)_contrast(102%)] transition flex"
                      >
                        <Image
                          src="/images/icon-direction.svg"
                          alt="direction"
                          width={30}
                          height={30}
                          className="w-[12px] xl:w-[16px] aspect-square mr-1 inline-block transition"
                        />
                        Direction
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full text-center py-[40px] xl:py-[60px]">
                <p
                  className={cn(
                    textStyle,
                    "text-[14px] xl:text-[18px] text-[#7b7b75]"
                  )}
                >
                  No charging stations found matching your criteria. Please try
                  adjusting your filters.
                </p>
              </div>
            )}
          </div>

          {resultItems.length > 0 && (
            <div className="flex justify-between items-center gap-[20px] mt-[20px] xl:mt-[30px] 2xl:mt-[40px] max-sm:flex-col">
              <div>
                <div className={cn(textStyle, "text-[#7b7b75]")}>
                  Showing {indexOfFirstItem + 1} to {indexOfLastItem} of {total}{" "}
                  charging stations
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
          )}
        </div>
      </div>
    </section>
  );
}
