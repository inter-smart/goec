import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";

const footerData = {
  subscription: {
    title: "Let's conquer the EV boom together",
  },
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
                className="text-white xl:max-w-[468px]"
              >
                {data?.subscription?.title}
              </Heading>
            </div>
            <div className="w-[320px] xl:w-[468px] 2xl:w-[520px]">
              <PlaceholdersAndVanishInput placeholders={placeholders} />
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-[16px]">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="">
                <div className="w-[168px] sm:w-[220px] xl:w-[260px] 2xl:w-[340px]">
                  <Image
                    src="/images/footer-logo.svg"
                    alt="footer-logo"
                    width={340}
                    height={170}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
