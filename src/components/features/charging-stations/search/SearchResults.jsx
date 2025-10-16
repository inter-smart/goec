import React from "react";
import { Navigation } from "lucide-react";

const ChargingStationList = () => {
  const stationsData = [
    {
      id: 1,
      station: "Kochi Metro, Ernakulam",
      location: "Ernakulam, Kochi, 682011",
      power: "40 KW",
      socketType: "ICE 25123",
      chargerType: "DC",
    },
    {
      id: 2,
      station: "GO EC, Pnampally Nagar, Kochi",
      location: "Panampally Nagar, Kochi, 682036",
      power: "60 KW",
      socketType: "ICE 26196",
      chargerType: "AC, DC",
    },
    {
      id: 3,
      station: "High Court, Kochi",
      location: "High Court Junction, Kochi, 682031",
      power: "80 KW",
      socketType: "ICE 27145",
      chargerType: "AC, DC",
    },
    {
      id: 4,
      station: "MG Road Metro, Kochi",
      location: "MG Road, Kochi, 682016",
      power: "50 KW",
      socketType: "ICE 25789",
      chargerType: "DC",
    },
    {
      id: 5,
      station: "Kakkanad InfoPark, Kochi",
      location: "InfoPark Phase 1, Kakkanad, 682030",
      power: "120 KW",
      socketType: "ICE 28456",
      chargerType: "AC, DC",
    },
  ];

  return (
    <div className="container ">
      <div className="w-full  py-8 px-4">
        <div className="mb-[32px]">
          <h6 className="text-black text-[24px] text-start">
            Showing results for <span className="font-bold">Kochi</span>
          </h6>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white  overflow-hidden">
            {/* Update the table element */}
            <table className="w-full border-separate border- border-spacing-y-4">
              <thead>
                <tr className="text-left">
                  <th className="pb-2 px-6 text-sm font-medium text-gray-500">Station</th>
                  <th className="pb-2 px-6 text-sm font-medium text-gray-500">Location</th>
                  <th className="pb-2 px-6 text-sm font-medium text-gray-500">Power</th>
                  <th className="pb-2 px-6 text-sm font-medium text-gray-500">Socket Type</th>
                  <th className="pb-2 px-6 text-sm font-medium text-gray-500">Charger Type</th>
                  <th className="pb-2 px-6"></th>
                </tr>
              </thead>
              <tbody>
                {stationsData.map((station) => (
                  <tr key={station.id} className="bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow border border-[#F0F0F0]">
                    <td className="py-5 px-6 text-sm text-gray-900">{station.station}</td>
                    <td className="py-5 px-6 text-sm text-gray-600">{station.location}</td>
                    <td className="py-5 px-6 text-sm text-gray-900 font-medium">{station.power}</td>
                    <td className="py-5 px-6 text-sm text-gray-900">{station.socketType}</td>
                    <td className="py-5 px-6 text-sm text-gray-900">{station.chargerType}</td>
                    <td className="py-5 px-6 rounded-r-xl">
                      <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                        <Navigation size={16} />
                        Direction
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargingStationList;
