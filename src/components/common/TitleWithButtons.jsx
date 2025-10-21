import { Heading } from "../utils/Heading";

export default function TitleWithButtons({ type, title, btnText1, btnText2 }) {
  const activeItem = type === "news" ? "News" : "Blogs";

  return (
    <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center mb-[24px] lg:py-[6px] lg:mb-[43px]">
      <Heading as={"h1"} size={"heading1"} className="semibold max-sm:mb-[12px] text-[030303]">
        {title}
      </Heading>

      <div className="flex gap-[13px] lg:gap-[18px] justify-center items-center">
        <ActionButton
          className={`px-[35px] py-[6px] lg:px-[47px] lg:py-[8px] rounded-[35px] lg:text-[15px] font-medium bg-[#0055E0]`}
          size={"md"}
          asChild
        >
          <Link href="/blog">{btnText1}</Link>
        </ActionButton>
        <ActionButton
          className={`px-[35px] py-[6px] lg:px-[47px] lg:py-[8px] rounded-[35px] lg:text-[15px]   text-black border border-[#F0F0F0] duration-300`}
          size={"md"}
          asChild
        >
          <Link href="/news">{btnText2}</Link>
        </ActionButton>
      </div>
    </div>
  );
}
