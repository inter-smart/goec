import FindChargingHeroSection from "@/components/features/find-charging-station/FindChargingHeroSection";
import FindChargingResultSection from "@/components/features/find-charging-station/FindChargingResultSection";

import { fetchFromAPI } from "@/lib/api";

const header_data = {
  background_media: {
    mobile: {
      type: "image",
      path: "/images/chargingStations-hero-1.jpg",
      alt: "hero",
    },
    desktop: {
      type: "image",
      path: "/images/chargingStations-hero-1.jpg",
      alt: "hero",
    },
  },
  title: "Find Your Nearest EV <br /> Charging Station in Seconds",
  description: null,
};

export default async function Page({ searchParams }) {
  // Extract pagination and filter parameters
  const page = searchParams?.page || 1;
  const limit = searchParams?.limit || 7;
  const search = searchParams?.search || "";
  const location_id = searchParams?.location_id || "";
  const charger_type_id = searchParams?.charger_type_id || "";
  const power_id = searchParams?.power_id || "";
  const socket_type_id = searchParams?.socket_type_id || "";

  // Build query string
  const queryParams = new URLSearchParams();
  queryParams.set("page", page);
  queryParams.set("limit", limit);
  if (search) queryParams.set("search", search);
  if (location_id) queryParams.set("location_id", location_id);
  if (charger_type_id) queryParams.set("charger_type_id", charger_type_id);
  if (power_id) queryParams.set("power_id", power_id);
  if (socket_type_id) queryParams.set("socket_type_id", socket_type_id);

  const { data, error } = await fetchFromAPI(
    `charging-station?${queryParams.toString()}`
  );

  const { banner_section, search_section, stations_section } = data;

  // Build current filters object to pass to the form
  const currentFilters = {
    search,
    socket_type_id,
    charger_type_id,
    power_id,
  };
  const pagination = stations_section?.pagination || {
    total: 0,
    currentPage: 1,
    perPage: 7,
    totalPages: 1,
  };

  return (
    <>
      <FindChargingHeroSection banner_section={banner_section || header_data} />
      <FindChargingResultSection
        stations={stations_section}
        searchSection={search_section}
        pagination={pagination}
        currentFilters={currentFilters}
      />
      {/* <HeroWithCard /> */}
      {/* <ChargingStationList /> */}
    </>
  );
}
