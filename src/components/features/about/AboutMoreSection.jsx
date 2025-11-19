"use client";

import parse from "html-react-parser";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import { Text } from "@/components/utils/Text";
import { ActionButton } from "@/components/utils/Button";
import Link from "next/link";
import CountUp from "react-countup";
import { MEDIA_URL } from "@/lib/api";

const aboutMoreData = {
  media: {
    type: "image",
    path: "/images/about-about_more-1.jpg",
    alt: "about",
  },
  title: "Learn more about us",
  description:
    "<p>GO EC PVT LTD is on a mission to build the foundation for the EV Revolution in India. We're strategically placing electric vehicle chargers nationwide, making it convenient for EV drivers to travel long distances without the fear of running out of battery power.</p><br /><p>Partnering with a variety of businesses we're installing chargers in their properties. As our network of charging stations expands, the EV market in India is surging, reducing concerns about charging accessibility and driving increased EV adoption..</p>",
  button: {
    type: "primary",
    label: "Get connected now",
    link: "#about-form",
  },
  mission: {
    title: "Our Mission",
    description:
      "<p>Our mission is to develop a highly successful and profitable electric vehicle charging station business with the state of an art facility and technology; a business that will meet the needs of our clients and supersede their expectations.</p>",
  },
  vision: {
    title: "Our Vision",
    description:
      "<p>Our vision is to operate a chain of EV Charging Stations across India and positioning GOEC as an authentic player in the EV industry by offering the best service to the end-user with guaranteed quality.</p>",
  },
  partner: {
    title: "100+ Partners",
    item_partner: [
      {
        media: {
          type: "image",
          path: "/images/about-about_partner-3.png",
          alt: "partners",
        },
      },
      {
        media: {
          type: "image",
          path: "/images/about-about_partner-1.png",
          alt: "partners",
        },
      },
      {
        media: {
          type: "image",
          path: "/images/about-about_partner-3.png",
          alt: "partners",
        },
      },
      {
        media: {
          type: "image",
          path: "/images/about-about_partner-4.png",
          alt: "partners",
        },
      },
      {
        media: {
          type: "image",
          path: "/images/about-about_partner-5.png",
          alt: "partners",
        },
      },
    ],
  },
  charging_station: {
    title: "Leading the game",
    count: {
      title: "Charging Stations",
      value: "1000",
      sufix: "+",
    },
  },
};

export default function AboutMoreSection({ data = aboutMoreData, aboutMore, partners, mission, vision, leadingTheGame  }) {
  console.log(aboutMore)
  return (
    <section id="about-more" className="w-full h-auto block py-[20px] sm:py-[60px] xl:py-[100px] 2xl:py-[140px] bg-[#fafafa]">
      <div className="container">
        <div className="flex flex-wrap mx-[-10px] sm:mx-[-10px] xl:mx-[-10px] 2xl:mx-[-30px] [&>*]:p-[10px] sm:[&>*]:p-[20px_10px] xl:[&>*]:p-[30px_10px] 2xl:[&>*]:p-[40px_15px]">
          <div className="w-full sm:w-1/2">
            <div>
              <Heading
                as="h2"
                size={"heading2"}
                className="text-[#303030] mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]"
              >
                {aboutMore?.title}
              </Heading>
              <Text
                as="div"
                size={"text2"}
                className="text-[#303030] mb-[20px] sm:mb-[30px] xl:mb-[40px] 2xl:mb-[60px]"
              >
                {parse(aboutMore?.description)}
              </Text>
              <div>
                <ActionButton
                  size={"lg"}
                  variant={"blue"}
                  className="w-[130px] sm:w-[140px] xl:w-[160px] 2xl:w-[200px] 3xl:w-[220px]"
                  asChild
                >
                  <Link href={data?.button?.link}>{data?.button?.label}</Link>
                </ActionButton>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="w-full aspect-[576/476] rounded-[20px] xl:rounded-[25px] overflow-hidden bg-black relative z-0">
              <Image
                src={`${MEDIA_URL}${aboutMore?.media?.media_path}`}
                alt={aboutMore?.media?.media_alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
                className="-z-1 object-cover transition hover:scale-105"
                
                
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="mb-[10px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[25px]">
              <div className="w-full flex flex-wrap items-center justify-between bg-white border border-[#f0f0f0] rounded-[20px] xl:rounded-[25px] overflow-hidden p-[15px] sm:p-[20px] xl:p-[30px] 2xl:p-[40px] ">
                <ul className="flex flex-wrap gap-[4px] xl:gap-[6px] 2xl:gap-[10px] ">
                  {partners?.partners_list
                    ?.slice(0, 5)
                    .map((item, index) => {
                      const scales = [
                        "scale-70",
                        "scale-100",
                        "scale-80",
                        "scale-105",
                        "scale-60",
                      ];

                      return (
                        <li
                          key={index}
                          className={`
                     origin-top-center
                     ${scales[index] || "scale-80"}`}
                        >
                          <Image
                            src={`${MEDIA_URL}${item?.media?.media_path}`}
                            alt={item?.media?.media_alt}
                            width={60}
                            height={60}
                            className="w-[30px] xl:w-[50px] 2xl:w-[55px] aspect-square object-cover border border-white shadow-[0_10px_10px_0_rgba(0,0,0,0.2)] rounded-full transition hover:scale-105"
                          />
                        </li>
                      );
                    })}
                </ul>
                <div>
                  <Heading
                    as={"h5"}
                    size={"heading5"}
                    className="font-medium text-[#959595]"
                  >
                    {partners?.partners_count}+ partners
                  </Heading>
                </div>
              </div>
            </div>
            <div>
              <MiViCard
                title={mission?.title}
                description={mission?.description}
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="mb-[10px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[25px]">
              <MiViCard
                title={vision?.title}
                description={vision?.description}
              />
            </div>
            <div>
              <div className="w-full flex flex-wrap items-center justify-between bg-white border border-[#f0f0f0] rounded-[20px] xl:rounded-[25px] overflow-hidden p-[15px] sm:p-[20px] xl:p-[30px] 2xl:p-[40px] ">
                <div>
                  <Heading
                    as={"h5"}
                    size={"heading5"}
                    className="font-medium text-[#959595]"
                  >
                    {leadingTheGame?.title}
                  </Heading>
                </div>
                <div>
                  <div className="w-full h-auto block">
                    <div className="text-[16px] sm:text-[20px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] leading-none font-semibold text-right whitespace-nowrap text-ellipsis text-[#030303]">
                      <CountUp
                        end={parseInt(leadingTheGame?.count)}
                        duration={2.75}
                        separator=","
                        suffix={leadingTheGame?.count?.sufix || "+"}
                        enableScrollSpy
                      />
                    </div>
                    <Text
                      as="div"
                      size="text2"
                      className="whitespace-nowrap text-ellipsis text-[#030303] overflow-hidden"
                    >
                      {leadingTheGame?.sub_title}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiViCard({ title, description }) {
  return (
    <div className="w-full block bg-white border border-[#f0f0f0] rounded-[20px] xl:rounded-[25px] overflow-hidden p-[15px] sm:p-[20px] xl:p-[30px] 2xl:p-[40px] ">
      <Heading
        as="h4"
        size="heading4"
        className="font-medium text-[#303030] mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]"
      >
        {title}
      </Heading>
      <Text as="div" size={"text2"} className="text-[#373737]">
        {parse(description)}
      </Text>
    </div>
  );
}
