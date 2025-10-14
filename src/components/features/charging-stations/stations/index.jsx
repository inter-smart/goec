import StationsList from "./StationsList";
import Title from "./Title";

export default function Stations({ data }) {
  return (
    <section className="w-full h-auto block py-[20px] sm:py-[60px] xl:py-[100px] 2xl:py-[140px] bg-[#fafafa]">
      <div className="container">
        <Title title={data?.title} />
        <StationsList />
      </div>
    </section>
  );
}
