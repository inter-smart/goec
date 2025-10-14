import StationCard from "./StationCard";

const stationsData = {
  stations: [
    {
      id: 1,
      title: "ECM 25kW",
      media: {
        path: "/images/charging-station.png",
        alt: "Stations",
      },
      features: ["Access to core features", "Email support", "Single user access", "5 GB storage"],
    },
    {
      id: 2,
      title: "ECM 50kW",
      media: {
        path: "/images/charging-station.png",
        alt: "Stations",
      },
      features: ["Access to core features", "Email support", "Single user access", "5 GB storage"],
    },
    {
      id: 3,
      title: "ECM 75kW",
      media: {
        path: "/images/charging-station.png",
        alt: "Stations",
      },
      features: ["Access to core features", "Email support", "Single user access", "5 GB storage"],
    },
    {
      id: 4,
      title: "ECM 100kW",
      media: {
        path: "/images/charging-station.png",
        alt: "Stations",
      },
      features: ["Access to core features", "Email support", "Single user access", "5 GB storage"],
    },
    {
      id: 5,
      title: "ECM 120kW",
      media: {
        path: "/images/charging-station.png",
        alt: "Stations",
      },
      features: ["Access to core features", "Email support", "Single user access", "5 GB storage"],
    },
    {
      id: 6,
      title: "ECM 150kW",
      media: {
        path: "/images/charging-station.png",
        alt: "Stations",
      },
      features: ["Access to core features", "Email support", "Single user access", "5 GB storage"],
    },
    {
      id: 7,
      title: "ECM 175kW",
      media: {
        path: "/images/charging-station.png",
        alt: "Stations",
      },
      features: ["Access to core features", "Email support", "Single user access", "5 GB storage"],
    },
    {
      id: 8,
      title: "ECM 200kW",
      media: {
        path: "/images/charging-station.png",
        alt: "Stations",
      },
      features: ["Access to core features", "Email support", "Single user access", "5 GB storage"],
    },
    {
      id: 9,
      title: "ECM Super Station",
      isSuper: true,
      media: {
        path: "/images/charging-station-super.png",
        alt: "Stations",
      },
      features: ["Access to core features", "Email support", "Single user access", "5 GB storage"],
    },
  ],

  button: {
    label: "Book Now",
    link: "/charging-stations",
  },
};

export default function StationsList({ data }) {
  return (
    <div className="w-full flex flex-wrap mx-[-4px] sm:mx-[-6px] xl:mx-[-10px] 2xl:mx-[-12px] [&>*]:p-[4px] sm:[&>*]:p-[6px] xl:[&>*]:p-[10px] 2xl:[&>*]:p-[12px]">
      {stationsData?.stations?.map((station) => (
        <div key={station.id} className={station.isSuper ? "w-full" : "w-full sm:w-1/2"}>
          <StationCard data={station} btn={stationsData.button} />
        </div>
      ))}
    </div>
  );
}
