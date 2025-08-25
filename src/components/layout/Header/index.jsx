"use client";
import { useState } from "react";
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
              link: "/about",
            },
            {
              label: "Our Values",
              link: "/about",
            },
            {
              label: "Our Journey",
              link: "/about",
            },
            {
              label: "Meet our team",
              link: "/about",
            },
            {
              label: "Our Associates",
              link: "/about",
            },
            {
              label: "Media & Recognit",
              link: "/about",
            },
          ],
        },
        {
          label: "About us",
          link: "/about",
          item_about: [
            {
              label: "More about us",
              link: "/about",
            },
            {
              label: "Our Values",
              link: "/about",
            },
            {
              label: "Our Journey",
              link: "/about",
            },
            {
              label: "Meet our team",
              link: "/about",
            },
            {
              label: "Our Associates",
              link: "/about",
            },
            {
              label: "Media & Recognit",
              link: "/about",
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
  "text-[16px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] leading-none font-normal text-center text-white w-full h-auto p-[5px_10px] xl:p-[10px_15px] xl:p-[15px_20px] bg-transparent rounded-full border border-transparent hover:text-white focus:text-white hover:bg-black/10 focus:bg-black/50 ring-0 hover:border-white/10 data-[state=open]:border-white/10 data-[state=open]:hover:bg-black/10 data-[state=open]:text-white data-[state=open]:focus:bg-black/10 data-[state=open]:bg-black/10";

export default function Header() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

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
        className={`w-full h-[var(--header-y)] fixed z-50 top-0 inset-x-0 border-b border-white/10 dark:bg-black bg-[#030303]/10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm flex items-center *:
          ${visible && "bg-[#030303]/20"}
          `}
      >
        <div className="w-full h-px absolute z-0 inset-x-0  -bottom-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-10" />
        <div className="container">
          <div className="flex justify-between">
            <div className="w-[80px] xl:w-[90px] 2xl:w-[100px]">
              <Image
                src="/images/header-logo.svg"
                alt="logo"
                width={90}
                height={45}
                className="w-full h-full"
              />
            </div>
            <div className="flex items-center space-x-[20px] xl:space-x-[25px] 2xl:space-x-[35px]">
              <div className="hidden lg:block">
                <MegaNavigationMenubar />
              </div>
              <div>
                <ActionButton
                  size={"none"}
                  className="text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] leading-none font-normal text-center w-full  min-w-[145px] 2xl:min-w-[180px] 3xl:min-w-[200px] h-[40px] xl:h-[45px] 2xl:h-[48px] p-2 rounded-full bg-white/20 hover:bg-white/30"
                >
                  Download App
                </ActionButton>
              </div>
              <div>
                <Sheet>
                  <SheetTrigger>
                    <div className="text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] leading-none font-normal text-center text-white w-full flex items-center justify-center ">
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
                  <SheetContent className="w-[368px] bg-[#030303]">
                    <SheetHeader>
                      <SheetTitle className={"sr-only"}>navigations</SheetTitle>
                      <SheetDescription className={"sr-only"}>
                        go ec navigations
                      </SheetDescription>
                      <div className="lg:hidden">
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
  return (
    <NavigationMenu viewport={false} className={"max-w-full justify-normal"}>
      <NavigationMenuList
        className={
          "max-lg:flex-col max-lg:items-start max-lg:gap-[20px] max-lg:py-[20px]"
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
          <NavigationMenuContent>
            <MegaNavigationMenuContent />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={navigationMenuTriggerStyle}>
            Invest in GO EC
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <MegaNavigationMenuContent />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={navigationMenuTriggerStyle}>
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <MegaNavigationMenuContent />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MegaNavigationMenuContent(data = headerData.navigation.item_company) {
  console.log(data);

  return (
    <div className="w-full min-w-[468px] xl:min-w-[576px] 2xl:min-w-[640px] 3xl:min-w-[768px] bg-white rounded-[25px] xl:rounded-[30px] overflow-hidden">
      <div className="flex flex-wrap">
        <div className="w-full xl:w-[35%]">
          <div className="flex flex-col p-10">
            {data?.map((item, index) => (
              <div key={index} className="mb-[15px]">
                <Heading as="h3" size="heading3">
                  {item?.label}
                </Heading>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full xl:w-[65%]">
          <div className="w-full h-full bg-white">sdffdfs</div>
        </div>
      </div>
    </div>
  );
}
