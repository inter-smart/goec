import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";
import Link from "next/link";

const footerData = {
  subscription: {
    title: "Let's conquer the EV boom together",
  },

  address: [
    {
      title: "Address - India",
      description:
        "GO EC Auto tech Pvt Ltd, 7th floor, KB Square Vytilla, Kochi, Kerala- 682019",
      email: null,
      phone_number: "+91 944 753 6644",
    },
    {
      title: "Address - UAE",
      description:
        "P5-ELOB Office No. E-42 G-21 Hamriyah, Free Zone, shariah United Arab Emirates",
      email: null,
      phone_number: "+91 944 753 6644",
    },
  ],
  navigation: [
    {
      title: "Company",
      item_navigation: [
        {
          url: "/about",
          label: "About us",
        },
        {
          url: "/contact",
          label: "Contact us",
        },
        {
          url: "/privacy",
          label: "Privacy policy",
        },
        {
          url: "/terms",
          label: "Terms & Conditions",
        },
      ],
    },
    {
      title: "Resources",
      item_navigation: [
        {
          url: "/blog",
          label: "Blog",
        },
        {
          url: "/",
          label: "How to charge",
        },
        {
          url: "/blog",
          label: "News",
        },
        {
          url: "/",
          label: "Help centre",
        },
      ],
    },
    {
      title: "Misc",
      item_navigation: [
        {
          url: "/",
          label: "GOEC application",
        },
        {
          url: "/",
          label: "Solutions",
        },
        {
          url: "/blog",
          label: "Shop",
        },
        {
          url: "/",
          label: "Apply for charging station",
        },
      ],
    },
    {
      title: "Discover",
      item_navigation: [
        {
          url: "/",
          label: "Explore chargers",
        },
        {
          url: "/",
          label: "Partner with us",
        },
        {
          url: "/career",
          label: "Careers",
        },
      ],
    },
  ],
  app_download: {
    title: "Download App",
    button: [
      {
        media: {
          type: "image",
          path: "/images/app-store.svg",
          alt: "ios",
        },
        type: "ios",
        url: "#",
      },
      {
        media: {
          type: "image",
          path: "/images/play-store.svg",
          alt: "android",
        },
        type: "android",
        url: "#",
      },
    ],
  },
  copyright: "© 2025 GOEC Pvt Ltd  All rights reserved",
  social_link: [
    {
      url: "/",
      media: {
        type: "image",
        path: "/images/icon-linkedin.svg",
        alt: "linkedin",
      },
    },
    {
      url: "/",
      media: {
        type: "image",
        path: "/images/icon-behance.svg",
        alt: "behance",
      },
    },
    {
      url: "/",
      media: {
        type: "image",
        path: "/images/icon-x.svg",
        alt: "behance",
      },
    },
    {
      url: "/",
      media: {
        type: "image",
        path: "/images/icon-dribble.svg",
        alt: "behance",
      },
    },
    {
      url: "/",
      media: {
        type: "image",
        path: "/images/icon-instagram.svg",
        alt: "behance",
      },
    },
    {
      url: "/",
      media: {
        type: "image",
        path: "/images/icon-facebook.svg",
        alt: "behance",
      },
    },
    {
      url: "/",
      media: {
        type: "image",
        path: "/images/icon-youtube.svg",
        alt: "behance",
      },
    },
  ],
};

const placeholders = [
  "Enter your mail id",
  "Enter your mail id",
  "Enter your mail id",
];

export default function Footer({ data = footerData }) {
  return (
    <footer className="w-full p-[10px] sm:p-[15px] xl:p-[20px] bg-[#1e1e1e]">
      <div className="w-full border border-white/30 rounded-[16px]">
        <div className="container">
          <div className="flex flex-wrap items-center my-[20px] sm:my-[30px] xl:my-[40px] 2xl:my-[50px] 3xl:my-[60px]">
            <div className="flex-1">
              <Heading
                as="h2"
                size="heading2"
                className="text-white xl:max-w-[468px] 2xl:max-w-[420px]"
              >
                {data?.subscription?.title}
              </Heading>
            </div>
            <div className="w-[320px] xl:w-[500px] 2xl:w-[576px] 3xl:w-[740px]">
              <PlaceholdersAndVanishInput placeholders={placeholders} />
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-[16px] pt-[15px] sm:pt-[20px] xl:pt-[30px] 2xl:pt-[40px] ">
          <div className="container">
            <div className="flex flex-wrap py-[15px] sm:py-[20px] xl:py-[30px] 2xl:py-[40px] ">
              <div className="w-full sm:w-1/3 xl:w-[445px] 2xl:w-[540px] 3xl:w-[660px]">
                <div className="w-[168px] sm:w-[220px] xl:w-[220px] 2xl:w-[276px] 3xl:w-[340px]">
                  <Image
                    src="/images/footer-logo.svg"
                    alt="footer-logo"
                    width={340}
                    height={170}
                    className="w-full h-full"
                  />
                </div>
              </div>
              {data?.address?.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/3 xl:w-[calc((100%-445px)/2)] 2xl:w-[calc((100%-540px)/2)] 3xl:w-[calc((100%-660px)/2)]"
                >
                  <div className="w-full">
                    <Heading
                      as="div"
                      size="heading6"
                      className="font-medium text-black mb-[10px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                    >
                      {item?.title}
                    </Heading>
                    <div className="text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-tight font-normal text-[#373737] mb-[10px] xl:mb-[15px] 2xl:mb-[20px] max-w-[75%]">
                      {item?.description}
                    </div>
                    <div className="text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-tight font-normal text-[#373737] mb-[10px] xl:mb-[15px] 2xl:mb-[20px] flex transition hover:text-primary">
                      <Image
                        src="/images/footer-call.svg"
                        alt="icon-call"
                        width={15}
                        height={15}
                        className="w-[15px] mr-[6px] xl:mr-[10px]"
                      />
                      <a href={`tel:${item?.phone_number}`}>
                        {item?.phone_number}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr />
            <div className="flex flex-wrap py-[15px] sm:py-[20px] xl:py-[30px] 2xl:py-[40px]">
              {data?.navigation?.map((item, index) => (
                <div key={"navigation" + index} className="w-full sm:w-1/5 xl:w-[calc((100%-160px)/4)] 2xl:w-[calc((100%-180px)/4)]">
                  <div>
                    <Heading
                      as="h6"
                      size="heading6"
                      className="font-medium text-black mb-[10px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                    >
                      {item?.title}
                    </Heading>
                    <div>
                      {item?.item_navigation?.map((linkItem, index) => (
                        <div
                          key={"item_navigation" + index}
                          className="mb-[10px]"
                        >
                          <Link
                            href={linkItem?.url}
                            className="text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-tight font-normal text-[#373737] mb-[10px] xl:mb-[15px] 2xl:mb-[20px] transition hover:text-primary"
                          >
                            {linkItem?.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="w-full sm:w-1/5 xl:w-[160px] 2xl:w-[180px]">
                <div>
                  <Heading
                    as="h6"
                    size="heading6"
                    className="font-medium text-black mb-[10px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                  >
                    {data?.app_download?.title}
                  </Heading>
                  <div className="flex flex-wrap flex-col space-y-[4px] xl:space-y-[8px] 2xl:space-y-[12px]">
                    {data?.app_download?.button.map((item, index) => (
                      <div key={"app_download" + index}>
                        <a
                          href={item?.link}
                          className="w-[100px] xl:w-[130px] 2xl:w-[150px] 3xl:w-[170px] h-auto block transition hover:scale-105"
                        >
                          <Image
                            src={item?.media?.path}
                            alt={item?.media?.alt}
                            width={140}
                            height={50}
                            className="w-full h-full"
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-wrap justify-between py-[15px] sm:py-[20px] xl:py-[30px] 2xl:py-[40px]">
              <div>
                <div className="text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-tight font-normal text-[#373737]">
                  {data?.copyright}
                </div>
              </div>
              <div className="flex flex-wrap items-center space-x-[15px] xl:space-x-[20px] 2xl:space-x-[30px]">
                {data?.social_link.map((item, index) => (
                  <div key={"app_download" + index}>
                    <a
                      href={item?.link}
                      className="w-[20px] xl:w-[20px] 2xl:w-[25px] h-auto aspect-square block cursor-pointer transition hover:scale-105"
                    >
                      <Image
                        src={item?.media?.path}
                        alt={item?.media?.alt}
                        width={40}
                        height={40}
                        className="w-full h-full"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
