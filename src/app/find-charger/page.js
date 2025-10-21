import HeroWithCard from "@/components/common/HeroWithCard";
import ChargingStationList from "@/components/features/charging-stations/search/SearchResults";
import { Heading } from "@/components/utils/Heading";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <HeroWithCard />
      <ChargingStationList />
    </>
  );
}
