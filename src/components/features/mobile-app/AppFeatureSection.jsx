import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import parse from "html-react-parser";

const AppFeatureData = {
  title: "Features to elevate your charging experience",
  description: "",
  item_feature: [
    {
      media: null,
      rating: 5,
      title: "<h4>Start & Stop</br>Charging</h4>",
      description: "Effortless ",
    },
    {
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
      media: {
        type: "image",
        path: "/images/app-app_feature-2.png",
        alt: "feature",
      },
      rating: 5,
      title: "Chargers",
      description: "Locate",
    },
    {
      media: null,
      rating: 5,
      title: null,
      description: "Endless more features",
    },
    {
      media: null,
      rating: 5,
      title: "<h4>Reserve your </br> Charger</h4>",
      description: "Skip the waiting",
    },
    {
      media: null,
      rating: 5,
      title: "<h4>View Charging </br> Progress</h4>",
      description: "Monitor your Sessions",
    },
  ],
};

export default function AppFeatureSection({ data = AppFeatureData }) {
  // ✅ Group features in sets of 2
  const grouped = [];
  for (let i = 0; i < data.item_feature.length; i += 2) {
    grouped.push(data.item_feature.slice(i, i + 2));
  }

  return (
    <section className="w-full h-auto block py-[20px_40px] sm:py-[30px_60px] xl:py-[60px_100px] 2xl:py-[70px_140px]">
      <div className="w-[95%] sm:max-w-[860px] lg:max-w-[1080px] xl:max-w-[1220px] 2xl:max-w-[1380] 3xl:max-w-[1820px] mx-auto">
        <Heading
          as="h2"
          size="heading2"
          className="text-center text-[#030303] max-w-[468px] xl:max-w-[500px] 2xl:max-w-[600px] mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px] mx-auto"
        >
          {data?.title}
        </Heading>
        {/* <div className="flex flex-wrap mx-[-5px] xl:mx-[-10px] 2xl:mx-[-15px] [&>*]:p-[5px] xl:[&>*]:p-[10px] 2xl:[&>*]:p-[15px]">
          {data?.item_feature?.map((item, index) => (
            <div key={"feature" + index} className="w-full 3xs:w-1/2 sm:w-1/3">
              <div className="w-full h-full bg-[#21bfed]">aa</div>
            </div>
          ))}
        </div> */}

        <div className="flex flex-wrap mx-[-5px] xl:mx-[-10px] 2xl:mx-[-15px] [&>*]:p-[5px] xl:[&>*]:p-[10px] 2xl:[&>*]:p-[15px]">
          {grouped.map((group, groupIndex) => (
            <div
              key={`feature-group-${groupIndex}`}
              className="w-full 3xs:w-1/2 sm:w-1/3"
            >
              {group.map((item, itemIndex) => {
                const isEvenGroup = (groupIndex + 1) % 2 === 0;
                const height = isEvenGroup
                  ? itemIndex === 0
                    ? "sm:h-[940px] xl:h-[540px] 2xl:h-[940px] 3xl:h-[940px]"
                    : "sm:h-[160px] xl:h-[120px] 2xl:h-[160px] 3xl:h-[160px]"
                  : "sm:h-[500px] xl:h-[340px] 2xl:h-[500px] 3xl:h-[500px]";

                return (
                  <div
                    key={`feature-${itemIndex}`}
                    className={cn(
                      "w-full py-[5px] xl:py-[10px] 2xl:py-[15px]",
                      height
                    )}
                  >
                    <div className="w-full h-full bg-transparent bg-gradient-to-br from-[#030303] to-[#21bfed] rounded-[20px] xl:rounded-[25px] p-[20px_10px] sm:p-[40px_20px] xl:p-[60px_40px] 2xl:p-[80px_50px] 3xl:p-[100px_50px] flex justify-center">
                      <div>
                        <Text
                          as="div"
                          size="text2"
                          className="font-medium text-center text-[#ced1d0] mb-[4px] xl:mb-[6px] 2xl:mb-[10px]"
                        >
                          {/* {parse(item?.description)} */}
                          {item?.description}
                        </Text>
                        {item?.title && (
                          <Heading
                            as="div"
                            size="heading4"
                            className="text-center text-white mb-[15px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]"
                          >
                            {parse(item?.title)}
                          </Heading>
                        )}
                        {item?.media && (
                          <Image
                            src={item?.media?.path}
                            alt={item?.media?.alt}
                            width={260}
                            height={360}
                            className="w-full h-auto block mx-auto"
                          />
                        )}
                      </div>
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
