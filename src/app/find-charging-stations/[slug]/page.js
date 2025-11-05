import ConnectSection from "@/components/features/blog/ConnectSection";
import DetailHeroSection from "@/components/features/find-charging-station/DetailHeroSection";
import DetailInfoSection from "@/components/features/find-charging-station/DetailInfoSection";
import DetailReviewSection from "@/components/features/find-charging-station/DetailReviewSection";

const local_data = {
  enquiry_data: {
    title: "Want to own your own charging station? ",
    description:
      "<p>Take the leap and invest in your very own charging station today! Join the green revolution and power up your future.</p>",
    button: {
      link: "/",
      label: "Get connected now",
    },
  },
};

export default function Page() {
  return (
    <>
      <DetailHeroSection />
      <DetailInfoSection />
      <DetailReviewSection />
      <ConnectSection data={local_data?.enquiry_data} />
    </>
  );
}
