import { Heading } from "@/components/utils/Heading";
import { Text } from "@/components/utils/Text";
import parse from "html-react-parser";

const local_data = {
  media: {
    mobile: {
      type: "image",
      path: "/images/invest-1.jpg",
      alt: "invest",
    },
    desktop: {
      type: "image",
      path: "/images/invest-1.jpg",
      alt: "invest",
    },
  },
  title: "How to charge your EV",
  button: {
    link: "/",
    label: "Learn more",
  },
  item_howcharge: [
    {
      id: 1,
      media: {
        type: "image",
        path: "/images/mobileapp-howcharge-1.jpg",
        alt: "mobileapp-howcharge-1",
      },
      title: "Locate Charger",
      description:
        "<p>Locate your nearest charging station from the GO EC app.</p>",
    },
    {
      id: 2,
      media: {
        type: "image",
        path: "/images/mobileapp-howcharge-1.jpg",
        alt: "mobileapp-howcharge-1",
      },
      title: "Connect Charger",
      description:
        "<p>Park your car in the slot and connect the charger to your EV.</p>",
    },
    {
      id: 3,
      media: {
        type: "image",
        path: "/images/mobileapp-howcharge-1.jpg",
        alt: "mobileapp-howcharge-1",
      },
      title: "Start Charging",
      description: "<p>Use the GO EC app / RFID Card to start charging.</p>",
    },
    {
      id: 2,
      media: {
        type: "image",
        path: "/images/mobileapp-howcharge-1.jpg",
        alt: "mobileapp-howcharge-1",
      },
      title: "Payment",
      description:
        "<p>Complete the payment conveniently using the app / RFID Card</p>",
    },
  ],
};

export default function HowChargeSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block py-[40px_20px] sm:py-[60px_30px] xl:py-[100px_60px] 2xl:py-[140px_70px]">
      <div className="container">
        <Heading
          as="h2"
          size="heading2"
          className="text-[#303030] xl:max-w-[568px] 2xl:max-w-[800px]"
        >
          {data?.title}
        </Heading>
        <div className="w-full">
          {data?.item_howcharge?.map((item, index) => (
            <div key={"howcharge" + index}>
              <div className="w-full h-auto flex flex-wrap [&>*]:pt-[15px] sm:[&>*]:pt-[20px] xl:[&>*]:pt-[40px] 2xl:[&>*]:pt-[50px]">
                <div className="w-[60px] xl:w-[80px] 2xl:w-[100px]">
                  <div className="w-full aspect-square rounded-full border border-[#030303] flex items-center justify-center">
                    {item?.id}
                  </div>
                </div>
                <div className="w-[calc(100%-60px)] xl:w-[calc(100%-80px)] 2xl:w-[calc(100%-100px)] pl-[15px] sm:pl-[20px] xl:pl-[40px] 2xl:pl-[50px]">
                  <div className="w-full border-b border-[#f0f0f0] pb-[15px] sm:pb-[20px] xl:pb-[40px] 2xl:pb-[50px] relative z-0">
                    <Heading
                      as="h3"
                      size="heading3"
                      className="text-[#303030] mb-[4px] xl:mb-[6px] 2xl:mb-[10px]"
                    >
                      {item?.title}
                    </Heading>
                    <Text as="div" size="text2" className="text-[#373737]">
                      {parse(item?.description)}
                    </Text>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
