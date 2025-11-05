import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import parse from "html-react-parser";

const local_data = {
  title: "Key Benefits of <br /> GO EC Smart Card",
  description: "",
  items: [
    {
      title: "<h3>Hassle-Free <br /> Payments</h3>",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. Viverra aenean cursus arcu arcu tortor tellus. Accumsan nisl risus consequat ut ornare. Etiam volutpat aliquam.</p>",
    },
    {
      title: "<h3>Recharge & <br /> Manage via App</h3>",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. Viverra aenean cursus arcu arcu tortor tellus. Accumsan nisl risus consequat ut ornare. Etiam volutpat aliquam.</p>",
    },
    {
      title: "<h3>Secure & <br /> Contactless</h3>",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. Viverra aenean cursus arcu arcu tortor tellus. Accumsan nisl risus consequat ut ornare. Etiam volutpat aliquam.</p>",
    },
    {
      title: "<h3>Universal <br/> Compatibility</h3>",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. Viverra aenean cursus arcu arcu tortor tellus. Accumsan nisl risus consequat ut ornare. Etiam volutpat aliquam.</p>",
    },
  ],
};

export default function KeyBenefitSection({ title, values = local_data?.items }) {
  return (
    <section className="w-full h-auto block py-[20px_30px] sm:py-[30px_60px] xl:py-[60px_100px] 2xl:py-[70px_120px]">
      <div className="container">
        <Heading
          as="h2"
          size="heading2"
          className="text-center text-[#030303] max-w-[468px] xl:max-w-[420px] 2xl:max-w-[576px] mb-[20px] sm:mb-[30px] xl:mb-[40px] 2xl:mb-[60px] 3xl:mb-[80px] mx-auto"
        >
          {title && parse(title)}
        </Heading>
        <div className="flex flex-wrap mx-[-4px] xl:mx-[-10px] 3xl:mx-[-15px] [&>*]:p-[4px] xl:[&>*]:p-[10px] 3xl:[&>*]:p-[15px]">
          {values?.map((item, index) => (
            <div key={"keybenefits" + index} className="w-full sm:w-1/2">
              <div
                className={cn(
                  "group w-full h-full min-h-[140px] sm:min-h-[220px] xl:min-h-[290px] 2xl:min-h-[340px] 3xl:min-h-[420px] bg-black rounded-[20px] xl:rounded-[25px] overflow-hidden relative z-0 flex flex-col justify-between p-[20px] sm:p-[25px] xl:p-[35px] 2xl:p-[45px] 3xl:p-[50px]"
                )}
              >
                <Image
                  src={"/images/nfccard-key_benefit-bg2.png"}
                  alt={"nfccard-key_benefit-bg2"}
                  width={600}
                  height={800}
                  className="w-full h-full absolute -z-1 inset-0 opacity-20 transition duration-500 ease-in-out group-hover:opacity-10 group-hover:scale-105"
                />
                <Image
                  src={"/images/nfccard-key_benefit-bg.jpg"}
                  alt={"nfccard-key_benefit-bg"}
                  width={600}
                  height={800}
                  className="w-full h-full absolute -z-2 inset-0 opacity-80 transition duration-500 ease-in-out group-hover:opacity-100"
                />
                {item?.title && (
                  <Heading as="div" size="heading3" className="text-white">
                    {parse(item?.title)}
                  </Heading>
                )}

                {item?.description && (
                  <Text as="div" size="text2" className="text-[#e6e6e6] mb-[4px] xl:mb-[6px] 2xl:mb-[10px]">
                    {parse(item?.description)}
                  </Text>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
