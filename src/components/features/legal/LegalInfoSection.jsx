"use client";
import { Text } from "@/components/utils/Text";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import parse from "html-react-parser";
import { renderHtml } from "@/components/utils/parseHtml";

export default function LegalInfoSection({ data, variant }) {
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState("");
  const contentRef = useRef(null);

  const description = data;

  useEffect(() => {
    if (!description || !contentRef.current) return;

    // Wait for content to be rendered
    const timer = setTimeout(() => {
      try {
        const contentElement = contentRef.current;
        const headings = contentElement.querySelectorAll(
          "h1, h2, h3, h4, h5, h6"
        );
        const tocList = [];

        headings.forEach((heading, idx) => {
          // Add ID to heading if it doesn't have one
          if (!heading.id) {
            heading.id = `toc-heading-${idx}`;
          }

          const level = parseInt(heading.tagName.replace("H", ""), 10);

          tocList.push({
            id: heading.id,
            text: heading.textContent
              .trim()
              .toLowerCase()
              .replace(/\b\w/g, (char) => char.toUpperCase()),
            level,
          });
        });

        setToc(tocList);

        // Set initial active heading
        if (tocList.length > 0) {
          setActiveId(tocList[0].id);
        }
      } catch (error) {
        console.error("Error parsing content:", error);
        setToc([]);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [description]);

  useEffect(() => {
    if (toc.length === 0) return;

    const handleScroll = () => {
      try {
        const scrollPosition = window.scrollY + 200; // Offset for header

        // Find which heading is currently in view
        let currentActiveId = toc[0].id;

        for (let i = toc.length - 1; i >= 0; i--) {
          const element = document.getElementById(toc[i].id);
          if (element) {
            const elementTop = element.offsetTop;
            if (scrollPosition >= elementTop) {
              currentActiveId = toc[i].id;
              break;
            }
          }
        }

        setActiveId(currentActiveId);
      } catch (error) {
        console.error("Error in scroll handler:", error);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toc]);

  const handleTocClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      const headerOffset = 100; // Adjust based on your header height
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update active ID immediately
      setActiveId(id);
    }
  };

  return (
    <section className="w-full h-auto block py-[40px] sm:py-[60px] xl:py-[100px] 2xl:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap sm:mx-[-20px] xl:mx-[-30px] 2xl:mx-[-40px] sm:[&>*]:px-[20px] xl:[&>*]:px-[30px] 2xl:[&>*]:px-[40px]">
          {variant === "privacy-policy" && (
            <div className="w-full h-full sm:w-[220px] xl:w-[368px] 2xl:w-[440px] sticky top-[var(--header-y)] self-start max-sm:hidden">
              <nav className="w-full h-auto">
                {toc.length > 0 ? (
                  <ul className="block">
                    {toc.map((item) => (
                      <li
                        key={item.id}
                        className="w-full my-[15px] xl:my-[20px] 2xl:my-[30px]"
                      >
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => handleTocClick(e, item.id)}
                          className={cn(
                            "text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[18px] leading-tight line-clamp-1 w-full h-auto flex items-center gap-[4px] xl:gap-[8px] transition-all duration-300",
                            activeId === item.id
                              ? "font-semibold text-[#0055e0]"
                              : "font-medium text-[#373737] hover:text-[#0055e0]"
                          )}
                        >
                          <svg
                            width="7"
                            height="7"
                            viewBox="0 0 7 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={cn(
                              "size-[6px] xl:size-[8px] block transition ease-in",
                              activeId === item.id ? "visible" : "invisible"
                            )}
                          >
                            <path
                              d="M5.73207 2.59636C6.33621 2.93619 6.33621 3.806 5.73207 4.14583L1.32294 6.62596C0.730403 6.95927 -0.00173616 6.53107 -0.00173616 5.85123V0.890958C-0.00173616 0.211112 0.730404 -0.217078 1.32294 0.116224L5.73207 2.59636Z"
                              fill="#030303"
                            />
                            <path
                              d="M5.73207 2.59636C6.33621 2.93619 6.33621 3.806 5.73207 4.14583L1.32294 6.62596C0.730403 6.95927 -0.00173616 6.53107 -0.00173616 5.85123V0.890958C-0.00173616 0.211112 0.730404 -0.217078 1.32294 0.116224L5.73207 2.59636Z"
                              fill="#0055e0"
                            />
                          </svg>
                          <span className="max-w-[calc(100%_-_16px)]">
                            {item.text}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Text
                    as="p"
                    size="text1"
                    className="text-center text-[#757575] py-4"
                  >
                    No headings found
                  </Text>
                )}
              </nav>
            </div>
          )}

          <div
            className={cn(
              "w-full",
              variant === "privacy-policy" &&
                "sm:w-[calc(100%-220px)] xl:w-[calc(100%-368px)] 2xl:w-[calc(100%-440px)]"
            )}
          >
            <div
              ref={contentRef}
              className="typography [&,_&>p]:text-[#373737] [&>p]:mb-[15px] xl:[&>p]:mb-[20px] 2xl:[&>p]:mb-[30px]"
            >
              {renderHtml(description.content)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
