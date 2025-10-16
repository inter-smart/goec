import AllNews from "@/components/features/news/AllNews";
import InsightsSection from "@/components/features/news/InsightsSection";

export default function Page() {
  return (
    <>
      <div className="container">
        <InsightsSection />
        <AllNews />
      </div>
    </>
  );
}
