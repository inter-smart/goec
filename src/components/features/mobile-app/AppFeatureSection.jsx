"use client";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import parse from "html-react-parser";
import { Rating } from "react-simple-star-rating";
import { MEDIA_URL } from "@/lib/api";

const local_data = {
  title: "Features to elevate your charging experience",
  description: "",
  item_feature: [
    {
      bg_media: {
        type: "image",
        path: "/images/mobileapp-app_feature-1.jpg",
        alt: "feature",
      },
      media: null,
      rating: null,
      title: "<h4>Start & Stop</br>Charging</h4>",
      description: "Effortless ",
    },
    {
      bg_media: {
        type: "image",
        path: "/images/mobileapp-app_feature-2.jpg",
        alt: "feature",
      },
      media: {
        type: "image",
        path: "/images/app-app_feature-1.svg",
        alt: "feature",
      },
      rating: 5,
      title: "Pay with ease",
      description: null,
    },
    {
      bg_media: {
        type: "image",
        path: "/images/mobileapp-app_feature-3.jpg",
        alt: "feature",
      },
      media: {
        type: "image",
        path: "/images/app-app_feature-2.png",
        alt: "feature",
      },
      rating: null,
      title: "Chargers",
      description: "Locate",
    },
    {
      bg_media: {
        type: "image",
        path: "/images/mobileapp-app_feature-4.jpg",
        alt: "feature",
      },
      media: null,
      rating: null,
      title: null,
      description: "Endless more features",
    },
    {
      bg_media: {
        type: "image",
        path: "/images/mobileapp-app_feature-5.jpg",
        alt: "feature",
      },
      media: null,
      rating: null,
      title: "<h4>Reserve your </br> Charger</h4>",
      description: "Skip the waiting",
    },
    {
      bg_media: {
        type: "image",
        path: "/images/mobileapp-app_feature-6.jpg",
        alt: "feature",
      },
      media: null,
      rating: null,
      title: "<h4>View Charging </br> Progress</h4>",
      description: "Monitor your Sessions",
    },
  ],
};

export default function AppFeatureSection({ title, list }) {
  // ✅ Group features in sets of 2
  const grouped = [];
  for (let i = 0; i < list?.length; i += 2) {
    grouped.push(list?.slice(i, i + 2));
  }

  return (
    <section className="w-full h-auto block py-[20px_30px] sm:py-[30px_60px] xl:py-[60px_80px] 2xl:py-[70px_100px]">
      <div className="w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto">
        <Heading
          as="h2"
          size="heading2"
          className="text-center text-[#030303] max-w-[468px] xl:max-w-[500px] 2xl:max-w-[600px] mb-[20px] sm:mb-[30px] xl:mb-[40px] 2xl:mb-[60px] 3xl:mb-[80px] mx-auto"
        >
          {title}
        </Heading>

        <div className="flex flex-wrap 3xs:mx-[-4px] xl:mx-[-10px] 3xl:mx-[-15px] 3xs:[&>*]:p-[4px] xl:[&>*]:p-[10px] 3xl:[&>*]:p-[15px]">
          {grouped.map((group, groupIndex) => (
            <div
              key={`feature-group-${groupIndex}`}
              className="w-full 3xs:w-1/3 sm:w-1/3"
            >
              {group.map((item, itemIndex) => {
                const isEvenGroup = (groupIndex + 1) % 2 === 0;
                const height = isEvenGroup
                  ? itemIndex === 0
                    ? "h-[240px] sm:h-[340px] xl:h-[540px] 2xl:h-[600px] 3xl:h-[720px]"
                    : "h-[80px] sm:h-[100px] xl:h-[120px] 2xl:h-[160px] 3xl:h-[215px]"
                  : "h-[160px] sm:h-[220px] xl:h-[340px] 2xl:h-[380px] 3xl:h-[468px]";

                return (
                  <div
                    key={`feature-${itemIndex}`}
                    className={cn(
                      "w-full py-[4px] xl:py-[10px] 3xl:py-[15px]",
                      height
                    )}
                  >
                    <div
                      className={cn(
                        "group w-full h-full bg-transparent bg-gradient-to-br from-[#030303] to-[#21bfed] rounded-[20px] xl:rounded-[25px] overflow-hidden relative z-0 flex flex-col",
                        item?.media
                          ? "p-[20px_10px_0] sm:p-[40px_20px_0] xl:p-[60px_40px_0] 2xl:p-[60px_50px_0] 3xl:p-[80px_50px_0] justify-between"
                          : "p-[20px_10px] sm:p-[40px_20px] xl:p-[60px_40px] 2xl:p-[60px_50px] 3xl:p-[80px_50px] justify-center"
                      )}
                    >
                      <Image
                        src={`${MEDIA_URL}${item?.image_one_path}`}
                        alt={item?.title}
                        width={568}
                        height={800}
                        className="w-full h-full absolute -z-1 inset-0"
                      />
                      <div>
                        {item?.image_two_path && (
                          <div className="w-full h-auto flex justify-center">
                            <Rating
                              readonly
                              size={20}
                              className="[&_svg]:inline-block"
                              fillColor="#ffd24f"
                              initialValue={parseInt(item?.rating)}
                            />
                          </div>
                        )}

                        {item?.highlight_title && (
                          <Text
                            as="div"
                            size="text2"
                            className={cn(
                              "font-medium text-center text-[#ced1d0] mb-[4px] xl:mb-[6px] 2xl:mb-[10px]",
                              isEvenGroup
                                ? itemIndex === 1
                                  ? "text-[14px] sm:text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] group-hover:text-transparent bg-clip-text bg-linear-to-r group-hover:bg-linear-90 group-hover:from-[#14eaa7] group-hover:via-[#2bc69c] group-hover:to-[#0d52b4] transition"
                                  : ""
                                : ""
                            )}
                          >
                            {item?.highlight_title}
                          </Text>
                        )}
                        {item?.title && (
                          <Heading
                            as="div"
                            size="heading3"
                            className={cn(
                              "font-semibold text-center text-transparent bg-clip-text bg-linear-to-r from-white via-white/60 to-white/40 group-hover:bg-linear-90 group-hover:from-[#14eaa7] group-hover:via-[#2bc69c] group-hover:to-[#0d52b4] transition",
                              isEvenGroup
                                ? itemIndex === 0
                                  ? "text-[22px] sm:text-[28px] lg:text-[36px] xl:text-[48px] 2xl:text-[56px] 3xl:text-[72px]"
                                  : ""
                                : ""
                            )}
                          >
                            {parse(item?.title)}
                          </Heading>
                        )}
                      </div>
                      {item?.image_one_path && (
                        <div
                          className={cn(
                            "mt-[15px] sm:mt-[20px] xl:mt-[30px] 2xl:mt-[40px]",
                            isEvenGroup
                              ? itemIndex === 0
                                ? "self-stretch"
                                : ""
                              : "self-center"
                          )}
                        >
                          <Image
                            src={`${MEDIA_URL}${item?.image_one_path}`}
                            alt={item?.title}
                            width={260}
                            height={360}
                            className="w-full max-w-full h-auto max-h-full block mx-auto hover:scale-105 transition "
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* {data?.item_feature?.map((item, index) => (
            <div key={"feature" + index} className="w-full 3xs:w-1/2 sm:w-1/3">
              <div className="w-full h-auto block bg-transparent bg-gradient-to-br from-[#030303] to-[#21bfed] rounded-[20px] xl:rounded-[25px] p-[20px_10px] sm:p-[40px_20px] xl:p-[60px_40px] 2xl:p-[80px_50px] 3xl:p-[100px_50px]">
                <div>
                  <Text
                    as="div"
                    size="text2"
                    className="font-medium text-center text-[#ced1d0] mb-[5px] sm:mb-[5px] xl:mb-[10px] 2xl:mb-[15px]"
                  >
                    {item?.description}
                  </Text>
                  <Heading
                    as="h3"
                    size="heading3"
                    className="text-center text-white mb-[15px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]"
                  >
                    {item?.title}
                  </Heading>
                  {item?.media && (
                    <Image
                      src={item?.media?.path}
                      alt={item?.media?.alt}
                      width={320}
                      height={320}
                      className="w-full h-auto block mx-auto"
                    />
                  )}
                </div>
              </div>
            </div>
          ))} */
}
