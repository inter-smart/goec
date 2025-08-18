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

const header = {
  brand: {
    media: {
      type: "image",
      path: "/static/brand.png",
      alt: "logo",
    },
  },
  navigation: {
    about: [
      {
        title: "More about us",
        path: "/about",
      },
      {
        title: "Our Values",
        path: "/about",
      },
      {
        title: "Our Journey",
        path: "/about",
      },
      {
        title: "Meet our team",
        path: "/about",
      },
      {
        title: "Our Associates",
        path: "/about",
      },
      {
        title: "Media & Recognit",
        path: "/about",
      },
    ],
    shop: [
      {
        title: "GO EC Smartcharge",
        path: "/",
      },
      {
        title: "AC chargers",
        path: "/",
      },
      {
        title: "DC chargers",
        path: "/",
      },
    ],
  },
};

const navigationMenuTriggerStyle =
  "text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] leading-none font-normal text-center text-white w-full h-auto p-[5px_10px] xl:p-[10px_15px] xl:p-[15px_20px] bg-transparent rounded-full border border-transparent hover:text-white focus:text-white hover:bg-black/10 focus:bg-black/50 ring-0 hover:border-white/10 data-[state=open]:border-white/10 data-[state=open]:hover:bg-black/10 data-[state=open]:text-white data-[state=open]:focus:bg-black/10 data-[state=open]:bg-black/10";

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
        <div className="w-full h-px absolute z-0 inset-x-0 mx-auto -bottom-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container">
          <div className="flex justify-between">
            <div>
              <Image
                src="/images/header-logo.svg"
                alt="logo"
                width={90}
                height={45}
                className="w-[80px] xl:w-[90px]"
              />
            </div>
            <div className="flex items-center space-x-[20px] xl:space-x-[25px] 2xl:space-x-[35px]">
              <div>
                <NavigationMenu viewport={false}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle}
                      >
                        <Link href="/">Home</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={navigationMenuTriggerStyle}
                      >
                        Company
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <MegaNavigationMenuContent />
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={navigationMenuTriggerStyle}
                      >
                        Invest in GO EC
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <MegaNavigationMenuContent />
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={navigationMenuTriggerStyle}
                      >
                        Solutions
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <MegaNavigationMenuContent />
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
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
                <button className="text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] leading-none font-normal text-center text-white w-full flex items-center justify-center ">
                  <Image
                    src="/images/header-hamburger.svg"
                    alt="hamburger"
                    width={24}
                    height={10}
                    className="w-[15px] xl:w-[20px] 2xl:w-[24px] mr-[6px] xl:mr-[10px] 2xl:mr-[12px]"
                  />
                  <span>Menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}

function MegaNavigationMenuContent() {
  return (
    <div className="w-full min-w-[668px] bg-white rounded-[25px] p-[]">
      <div>mega</div>
    </div>
  );
}
