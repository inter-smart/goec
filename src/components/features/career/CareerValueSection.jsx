import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import parse from "html-react-parser";
import Image from "next/image";

const local_data = {
  media: null,
  title: "Values & Benefits",
  description:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae.</p>",
  ideas: [
    {
      title: "Innovative Way of Thinking",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. In risus sit non aliquet.</p>",
    },
    {
      title: "Comprehensive Health Plans",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. In risus sit non aliquet.</p>",
    },
    {
      title: "Exciting and Challenging Work",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. In risus sit non aliquet.</p>",
    },
    {
      title: "Flexibility and Autonomy",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. In risus sit non aliquet.</p>",
    },
    {
      title: "Opportunities for Career Growth",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. In risus sit non aliquet.</p>",
    },
    {
      title: "Potential for Stock Options",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. In risus sit non aliquet.</p>",
    },
  ],
};

export default function CareerValueSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[60px] xl:py-[120px] 2xl:py-[140px] bg-[#0048bf] overflow-hidden relative z-0">
      <Image
        src="/images/career-value-bg.jpg"
        alt="career-value-bg"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
        className="-z-1 object-cover"
      />
      <div className="container">
        <div className="flex flex-wrap mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px]">
          <div className="flex-1 max-sm:mb-[15px]">
            <Heading
              as="h3"
              size="heading3"
              className="text-white max-sm:text-center"
            >
              {data?.title}
            </Heading>
          </div>
          <div className="w-full lg:w-[368px] xl:w-[420px] 2xl:w-[576px] 3xl:w-[640px] max-sm:mx-auto max-sm:text-center">
            <Text as="div" size="text2" className="text-[#ced1c0]">
              {parse(data?.description)}
            </Text>
          </div>
        </div>

        <div className="flex flex-wrap mx-[-5px] xl:mx-[-10px] 2xl:mx-[-12px] [&>*]:p-[5px] xl:[&>*]:p-[10px] 2xl:[&>*]:p-[12px]">
          {data?.ideas?.map((item, index) => (
            <div key={"blogs" + index} className="w-full xs:w-1/2 lg:w-1/3">
              <div className="group w-full h-full min-h-[176px] sm:min-h-[268px] xl:min-h-[330px] 3xl:min-h-[500px] flex flex-col justify-between border border-[#f0f0f0]/20 rounded-[20px] xl:rounded-[25px] overflow-hidden bg-white/4 p-[15px] sm:p-[20px] xl:p-[30px] 2xl:p-[40px] relative z-0 shadow-md backdrop-blur-sm">
                <Image
                  src="/images/about-value_card-bg.png"
                  alt="about-value-bg"
                  width={139}
                  height={278}
                  className="w-[80px] xl:w-[100px] 2xl:w-[140px] absolute -z-1 top-[40%] right-0 -translate-y-1/2 opacity-5 transition duration-300 group-hover:scale-105 group-hover:opacity-10"
                />
                <Heading
                  as="h3"
                  size="heading3"
                  className="font-medium text-white xl:max-w-[90%] mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]"
                >
                  {item?.title}
                </Heading>
                <Text as="div" size={"text2"} className="text-[#ced1d0]">
                  {parse(item?.description)}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
