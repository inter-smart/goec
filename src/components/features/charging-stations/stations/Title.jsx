import { Heading } from "@/components/utils/Heading";

export default function Title({ title }) {
  return (
    <div>
      <Heading as="h2" size={"heading2"} className="text-[#303030] mb-[20px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px]">
        {title}
      </Heading>
    </div>
  );
}
