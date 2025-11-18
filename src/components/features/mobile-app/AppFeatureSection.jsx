"use client";
import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import parse from "html-react-parser";
import { Rating } from "react-simple-star-rating";
import { MEDIA_URL } from "@/lib/api";


const bgImages = [
  "/images/mobileapp-app_feature-1.jpg",
  "/images/mobileapp-app_feature-2.jpg",
  "/images/mobileapp-app_feature-3.jpg",
  "/images/mobileapp-app_feature-4.jpg",
  "/images/mobileapp-app_feature-5.jpg",
  "/images/mobileapp-app_feature-6.jpg",
];

export default function AppFeatureSection({ title, list }) {
  // ✅ Group features in sets of 2
  const grouped = [];
  for (let i = 0; i < list?.length; i += 2) {
    grouped.push(list?.slice(i, i + 2));
  }



  console.log(grouped)
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
                        item?.media_path
                          ? "p-[20px_10px_0] sm:p-[40px_20px_0] xl:p-[60px_40px_0] 2xl:p-[60px_50px_0] 3xl:p-[80px_50px_0] justify-between"
                          : "p-[20px_10px] sm:p-[40px_20px] xl:p-[60px_40px] 2xl:p-[60px_50px] 3xl:p-[80px_50px] justify-center"
                      )}
                    >
                      <Image
                        src={bgImages[groupIndex * 2 + itemIndex]} // pick static image by index
                        alt={`feature-bg-${groupIndex * 2 + itemIndex + 1}`}
                        width={568}
                        height={800}
                        className="w-full h-full absolute -z-1 inset-0"
                      />
                      <div>
                        {groupIndex === 0 && itemIndex === 1 && (
                          <div className="w-full h-auto flex justify-center">
                            <Rating
                              readonly
                              size={20}
                              className="[&_svg]:inline-block"
                              fillColor="#ffd24f"
                              initialValue={5}
                            />
                          </div>
                        )}

                        {item?.title && (
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
                            {item?.title}
                          </Text>
                        )}
                        {item?.highlight_title && (
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
                            {parse(item?.highlight_title)}
                          </Heading>
                        )}
                      </div>
                      {item?.media?.media_path && (
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
                            src={`${MEDIA_URL}${item?.media?.media_path}`}
                            alt={item?.media?.media_alt}
                            width={260}
                            height={360}
                            className="w-full max-w-full h-auto max-h-full block mx-auto hover:scale-105 transition"
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
