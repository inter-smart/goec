"use client";
import { useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ActionButton } from "@/components/utils/Button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heading } from "@/components/utils/Heading";
import { generateMediaUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";

const headerData = {
  brand: {
    media: {
      type: "image",
      path: "/static/brand.png",
      alt: "logo",
    },
  },
  navigation: [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Company",
      link: "/about",
      item_company: [
        {
          label: "About us",
          link: "/about",
          item_about: [
            {
              label: "More about us",
              link: "/about#about-more",
            },
            {
              label: "Our Values",
              link: "/about#our-values",
            },
            {
              label: "Our Journey",
              link: "/about#our-journey",
            },
            {
              label: "Meet our team",
              link: "/about#meet-team",
            },

            {
              label: "Our Associates",
              link: "/about#our-associates",
            },
            {
              label: "Media & Recognit",
              link: "/about#media-recognition",
            },
          ],
        },
        {
          label: "About us",
          link: "/about",
          item_about: [
            {
              label: "More about us",
              link: "/about#about-more",
            },
            {
              label: "Our Values",
              link: "/about#our-values",
            },
            {
              label: "Our Journey",
              link: "/about#our-journey",
            },
            {
              label: "Meet our team",
              link: "/about#meet-team",
            },
            {
              label: "Our Associates",
              link: "/about#our-associates",
            },
            {
              label: "Media & Recognit",
              link: "/about#media-recognition",
            },
          ],
        },
        {
          label: "Careers",
          link: "/career",
        },
        {
          label: "Privacy Policy",
          link: "/privacy-policy",
        },
        {
          label: "Terms and conditions",
          link: "/terms-conditions",
        },
      ],
    },
    {
      label: "Invest in GO EC",
      link: "/invest",
    },
    {
      label: "Solutions",
      link: "/solutions",
      item_solution: [
        {
          label: "GOEC Charging Hub",
          link: "/about",
        },
        {
          label: "GOEC Exclusive",
          link: "/about",
        },
        {
          label: "Public Commercial Parking",
          link: "/about",
        },
      ],
    },
  ],
};

const navigationMenuTriggerStyle =
  "text-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] leading-none font-medium lg:font-normal text-start lg:text-center text-white w-full h-auto p-[5px_10px] xl:p-[10px_15px] xl:p-[15px_20px] bg-transparent rounded-full border border-transparent hover:text-white focus:text-white hover:bg-black/10 focus:bg-black/50 ring-0 hover:border-white/10 data-[state=open]:border-white/10 data-[state=open]:hover:bg-black/10 data-[state=open]:text-white data-[state=open]:focus:bg-black/10 data-[state=open]:bg-black/10";

export default function Header({ header_section }) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [appDownloadOpen, setAppDownloadOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "w-full h-[var(--header-y)] fixed z-50 top-0 inset-x-0 border-b border-white/10 dark:bg-black bg-[#030303]/10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm flex items-center ",
          visible && "bg-black/80"
        )}
      >
        <div className="w-full h-px absolute z-0 inset-x-0  -bottom-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-10" />
        <div className="container">
          <div className="flex justify-between">
            <div className="w-[80px] xl:w-[90px] 2xl:w-[100px]">
              <Link href="/">
                <Image
                  src={generateMediaUrl(header_section?.logo?.media_path)}
                  alt={header_section?.logo?.media_alt}
                  width={90}
                  height={45}
                  className="w-full h-full"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-[15px] sm:space-x-[20px] xl:space-x-[25px] 2xl:space-x-[35px]">
              <div className="hidden lg:block">
                <MegaNavigationMenubar />
              </div>
              <div>
                <div className="relative z-0">
                  <ActionButton
                    as="div"
                    onClick={() => setAppDownloadOpen(!appDownloadOpen)}
                    size={"none"}
                    className="text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] leading-none font-normal text-center w-full min-w-[110px] sm:min-w-[120px] xl:min-w-[145px] 2xl:min-w-[180px] 3xl:min-w-[200px] h-[40px] xl:h-[45px] 2xl:h-[48px] p-2 rounded-full bg-white/20 hover:bg-white/30"
                  >
                    Download App
                  </ActionButton>
                  {appDownloadOpen && (
                    <div className="absolute z-1 top-[110%] right-0">
                      <AppDownloadDropdown qrData={header_section?.download} />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <Sheet>
                  <SheetTrigger className="">
                    <div className="lg:hidden text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] leading-none font-normal text-center text-white w-full flex items-center justify-center ">
                      <Image
                        src="/images/header-hamburger.svg"
                        alt="hamburger"
                        width={24}
                        height={10}
                        className="w-[15px] xl:w-[20px] 2xl:w-[24px] mr-[6px] xl:mr-[10px] 2xl:mr-[12px]"
                      />
                      <span>Menu</span>
                    </div>
                  </SheetTrigger>
                  <SheetContent className="w-[320px] 3xs:w-[368px] bg-[#030303] max-h-screen overflow-y-scroll border-black">
                    <div className="fixed -z-1 bottom-0 left-0 w-10 h-10 bg-white blur-sm scale-[10] opacity-20" />
                    <SheetHeader>
                      <SheetTitle className={"sr-only"}>navigations</SheetTitle>
                      <SheetDescription className={"sr-only"}>
                        go ec navigations
                      </SheetDescription>
                      <div className="lg:hidden ">
                        <MegaNavigationMenubar />
                      </div>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}

function MegaNavigationMenubar() {
  const company_data = {
    label: "Company",
    sub_item: [
      {
        id: 1,
        label: "About us",
        link: "/about",
        sub_sub_item: [
          {
            label: "More about us",
            link: "/about#about-more",
          },
          {
            label: "Our Values",
            link: "/about#our-values",
          },
          {
            label: "Our Journey",
            link: "/about#our-journey",
          },
          {
            label: "Meet our team",
            link: "/about#meet-team",
          },
          {
            label: "Our Associates",
            link: "/about#our-associates",
          },
          {
            label: "Media & Recognition",
            link: "/about#media-recognition",
          },
        ],
      },
      {
        id: 3,
        label: "Careers",
        link: "/career",
        sub_sub_item: [],
      },
      {
        id: 4,
        label: "Privacy Policy",
        link: "/privacy-policy",
        sub_sub_item: [],
      },
      {
        id: 5,
        label: "Terms and conditions",
        link: "/terms-and-conditions",
        sub_sub_item: [],
      },
    ],
  };
  const invest_data = {
    label: "Invest in GO EC",
    sub_item: [
      {
        id: 1,
        label: "Investment",
        link: "/investment",
      },
      {
        id: 2,
        label: "Merchantile",
        link: "/merchantile",
      },
    ],
  };
  const solution_data = {
    label: "Solutions",
    sub_item: [
      {
        id: 1,
        label: "Find charging stations",
        link: "/find-charging-stations",
      },
      {
        id: 2,
        label: "Charging Hub",
        link: "/charging-stations",
      },
    ],
  };

  return (
    <NavigationMenu
      viewport={false}
      className={"max-w-full justify-normal [&>div]:w-full"}
    >
      <NavigationMenuList
        className={
          "max-lg:flex-col max-lg:items-start max-lg:gap-[20px] max-lg:py-[20px] "
        }
      >
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={navigationMenuTriggerStyle}>
            Company
          </NavigationMenuTrigger>
          <NavigationMenuContent className={"p-0"}>
            <MegaNavigationMenuContent data={company_data} />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={navigationMenuTriggerStyle}>
            Invest in GO EC
          </NavigationMenuTrigger>
          <NavigationMenuContent className={"p-0"}>
            <SmNavigationMenuContent data={invest_data} />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={navigationMenuTriggerStyle}>
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent className={"p-0"}>
            <SmNavigationMenuContent data={solution_data} />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MegaNavigationMenuContent({ data }) {
  const [activeId, setActiveId] = useState(data?.sub_item?.[0]?.id || 1);

  // Filter sub items based on the active category
  const filteredItems = useMemo(() => {
    const activeItem = data?.sub_item?.find((item) => item.id === activeId);
    return activeItem?.sub_sub_item || [];
  }, [data, activeId]);

  return (
    <div className="w-full lg:w-[420px] xl:w-[576px] 2xl:w-[620px] 3xl:w-[668px] bg-white rounded-[15px] 2xl:rounded-[25px] overflow-hidden shadow-lg">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-[168px] xl:w-[200px] 2xl:w-[240px] bg-[#fafafa] p-[8px] xl:p-[10px] 2xl:p-[20px]">
          <div className="flex flex-col">
            {data?.sub_item?.map((item, index) => {
              const hasSubItems =
                item?.sub_sub_item && item.sub_sub_item.length > 0;

              return (
                <div key={"navigation" + index} className="max-lg:mb-[10px]">
                  {hasSubItems ? (
                    <button
                      onClick={() => setActiveId(item.id)}
                      className={cn(
                        "text-[16px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-normal font-normal text-black w-full h-auto flex justify-between items-center p-[6px_10px] xl:p-[8px_15px] 2xl:p-[10px_15px] rounded-[8px] transition-all",
                        activeId === item.id
                          ? "text-white bg-black max-lg:rounded-[8px_8px_0_0]"
                          : "hover:bg-[#e0e0e0]"
                      )}
                    >
                      {item?.label}
                      <Image
                        src="/images/header-arrow.svg"
                        alt="arrow"
                        width={8}
                        height={8}
                        className={cn(
                          "w-[6px] xl:w-[8px] transition",
                          activeId === item.id
                            ? "lg:opacity-100 rotate-0"
                            : "[filter:_brightness(0)_saturate(100%)] lg:opacity-10 -rotate-90"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.link || "#"}
                      className={cn(
                        "text-[16px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-normal font-normal text-black w-full h-auto flex justify-between items-center p-[6px_10px] xl:p-[8px_15px] 2xl:p-[10px_15px] rounded-[8px] transition-all",
                        "hover:bg-[#e0e0e0]"
                      )}
                    >
                      {item?.label}
                    </Link>
                  )}

                  <div
                    className={cn(
                      "lg:hidden ",
                      activeId === item.id ? "h-auto visible" : "h-0 invisible"
                    )}
                  >
                    <div
                      className={cn(
                        "w-full block columns-1 gap-2 p-[10px] bg-black/10 rounded-b-[8px]"
                      )}
                    >
                      {item?.sub_sub_item?.map((subItem, subIndex) => (
                        <div key={subIndex} className="w-full max-w-full">
                          <Link
                            href={subItem.link}
                            className={cn(
                              "text-[14px] leading-normal font-normal truncate text-[#373737] w-full h-auto block p-[4px_10px] rounded-[8px] transition",
                              "hover:bg-[#fafafa] hover:text-[#030303]"
                            )}
                          >
                            {subItem.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full lg:w-[calc(100%_-_168px)] xl:w-[calc(100%_-_200px)] 2xl:w-[calc(100%_-_240px)] p-[8px] xl:p-[10px] 2xl:p-[20px] max-lg:hidden">
          {filteredItems.length > 0 ? (
            <div className="w-full block columns-2 gap-2 2xl:gap-4">
              {filteredItems?.map((item, index) => (
                <div
                  key={index}
                  className="w-full max-w-full mb-[10px] xl:mb-[10px] 2xl:mb-[15px] break-inside-avoid"
                >
                  <Link
                    href={item.link || "#"}
                    className={cn(
                      "text-[14px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-normal font-normal truncate text-[#373737] w-full h-auto block p-[6px_10px] xl:p-[8px_15px] 2xl:p-[10px_15px] rounded-[8px] transition",
                      "hover:bg-[#fafafa] hover:text-[#030303]"
                    )}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-[#999] py-8">
              <p className="text-[14px] xl:text-[14px] 2xl:text-[16px]">
                No sub-items available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SmNavigationMenuContent({ data }) {
  return (
    <div className="w-full lg:w-[200px] xl:w-[220px] 2xl:w-[268px] 3xl:w-[320px] bg-white rounded-[15px] 2xl:rounded-[30px] overflow-hidden p-[10px_5px] 2xl:p-[15px_10px] shadow-lg">
      <div className="w-full block">
        {data?.sub_item?.map((item, index) => (
          <div key={index} className="">
            <Link
              href={item.link || "#"}
              className={cn(
                "text-[14px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-normal font-normal truncate text-[#373737] w-full h-auto block p-[6px_8px] xl:p-[8px_10px] 2xl:p-[10px_20px] rounded-[8px] transition",
                "hover:bg-[#fafafa] hover:text-[#030303]"
              )}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const heroData = {
  media: {
    type: "image",
    path: "/images/app-hero-1.png",
    alt: "hero",
  },
  title: "Get GO EC App Now!",
  button: [
    {
      media: {
        type: "image",
        path: "/images/icon-app_store.svg",
        alt: "app",
      },
      type: "external",
      label: "app store ",
      link: "/",
    },
    {
      media: {
        type: "image",
        path: "/images/icon-play_store.svg",
        alt: "play",
      },
      type: "external",
      label: "play store ",
      link: "/",
    },
  ],
};

function AppDownloadDropdown({ qrData }) {
  return (
    <div className="w-[220px] sm:w-[276px] lg:w-[420px] xl:w-[540px] 2xl:w-[600px] 3xl:w-[640px] bg-white rounded-[15px] 2xl:rounded-[25px] overflow-hidden shadow-lg">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-[calc(100%_-_168px)] xl:w-[calc(100%_-_200px)] 2xl:w-[calc(100%_-_240px)] bg-[#fafafa] p-[15px] xl:p-[20px] 2xl:p-[30px] flex items-center">
          <div>
            <Heading
              as={"div"}
              size="heading4"
              className="line-clamp-3 text-center lg:text-start text-transparent bg-linear-to-r from-[#999] via-50% via-black to-black bg-clip-text xl:max-w-[80%] mb-[15px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]"
            >
              {qrData?.qr_code?.title}
            </Heading>
            <div className="flex space-x-[5px] xl:space-x-[10px] 2xl:space-x-[15px] max-lg:justify-center">
              <ActionButton
                size={"default"}
                className="bg-transparent border-none hover:bg-transparent hover:scale-105 max-w-[90px] sm:max-w-[100px] xl:max-w-[130px] 2xl:max-w-[168px]"
                asChild
              >
                <a
                  href={qrData?.app_store?.link}
                  aria-label="app store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={generateMediaUrl(qrData?.app_store?.media?.media_path)}
                    alt={qrData?.app_store?.media?.media_alt}
                    width={176}
                    height={64}
                  />
                </a>
              </ActionButton>
              <ActionButton
                size={"default"}
                className="bg-transparent border-none hover:bg-transparent hover:scale-105 max-w-[90px] sm:max-w-[100px] xl:max-w-[130px] 2xl:max-w-[168px]"
                asChild
              >
                <a
                  href={qrData?.play_store?.link}
                  aria-label="app store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={generateMediaUrl(
                      qrData?.play_store?.media?.media_path
                    )}
                    alt={qrData?.play_store?.media?.media_alt}
                    width={176}
                    height={64}
                    quality={100}
                  />
                </a>
              </ActionButton>
            </div>
          </div>
        </div>
        <div className="w-[120px] lg:w-[168px] xl:w-[200px] 2xl:w-[240px] mx-auto">
          <Image
            src={generateMediaUrl(qrData?.qr_code?.media?.media_path)}
            alt={qrData?.qr_code?.media?.media_alt}
            width={220}
            height={220}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
