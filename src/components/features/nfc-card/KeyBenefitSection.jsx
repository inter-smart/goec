const local_data = {
  title: "Key Benefits of GO EC Smart Card",
  description: "",
  items: [
    {
      title: "Hassle-Free Payments",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. Viverra aenean cursus arcu arcu tortor tellus. Accumsan nisl risus consequat ut ornare. Etiam volutpat aliquam.</p>",
    },
    {
      title: "Recharge & Manage via App",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. Viverra aenean cursus arcu arcu tortor tellus. Accumsan nisl risus consequat ut ornare. Etiam volutpat aliquam.</p>",
    },
    {
      title: "Secure & Contactless",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. Viverra aenean cursus arcu arcu tortor tellus. Accumsan nisl risus consequat ut ornare. Etiam volutpat aliquam.</p>",
    },
    {
      title: "Universal Compatibility",
      description:
        "<p>Lorem ipsum dolor sit amet consectetur. Viverra aenean cursus arcu arcu tortor tellus. Accumsan nisl risus consequat ut ornare. Etiam volutpat aliquam.</p>",
    },
  ],
};

export default function KeyBenefitSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block py-[20px_30px] sm:py-[30px_60px] xl:py-[60px_80px] 2xl:py-[70px_100px]">
      <div className="container">
        <Heading
          as="h2"
          size="heading2"
          className="text-center text-[#030303] max-w-[468px] xl:max-w-[500px] 2xl:max-w-[600px] mb-[20px] sm:mb-[30px] xl:mb-[40px] 2xl:mb-[60px] 3xl:mb-[80px] mx-auto"
        >
          {data?.title}
        </Heading>
        <div className="flex flex-wrap 3xs:mx-[-4px] xl:mx-[-10px] 3xl:mx-[-15px] 3xs:[&>*]:p-[4px] xl:[&>*]:p-[10px] 3xl:[&>*]:p-[15px]">
          {data?.items?.map((item, index) => (
            <div key={"keybenefits" + index} className="w-full sm:w-1/2">
              <div
                className={cn(
                  "group w-full h-full bg-black rounded-[20px] xl:rounded-[25px] overflow-hidden relative z-0 flex flex-col justify-between p-[15px_10px] sm:p-[20px] xl:p-[30px] 2xl:p-[40px] 3xl:p-[50px]"
                )}
              >
                <Image
                  src={"/images/nfccard-key_benefit-bg.jpg"}
                  alt={"nfccard-key_benefit-bg"}
                  width={600}
                  height={800}
                  className="w-full h-full absolute -z-1 inset-0"
                />
                {item?.title && (
                  <Heading
                    as="div"
                    size="heading3"
                    className="font-semibold text-center text-transparent bg-clip-text bg-linear-to-r from-white via-white/60 to-white/40 group-hover:bg-linear-90 group-hover:from-[#14eaa7] group-hover:via-[#2bc69c] group-hover:to-[#0d52b4] transition"
                  >
                    {parse(item?.title)}
                  </Heading>
                )}

                {item?.description && (
                  <Text
                    as="div"
                    size="text2"
                    className="font-medium text-center text-[#ced1d0] mb-[4px] xl:mb-[6px] 2xl:mb-[10px]"
                  >
                    {item?.description}
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
