import Image from "next/image";
import { Heading } from "../utils/Heading";
import { Search, ChevronDown } from "lucide-react";

export default function HeroWithCard({ children }) {
  return (
    <>
      <section className="w-full h-auto min-h-[468px] xl:min-h-[540px] 2xl:min-h-[620px] 3xl:min-h-[768px] mb-[150px] flex items-start bg-black py-[calc(40px+var(--header-y))_40px] sm:py-[calc(60px+var(--header-y))_60px] xl:py-[calc(100px+var(--header-y))_100px] 2xl:py-[calc(120px+var(--header-y))_120px] relative z-0">
        <picture className="absolute -z-2 inset-0">
          <source media="(max-width: 640px)" srcSet={"/images/find-charger-banner.png"} />
          <Image
            src={"/images/find-charger-banner.png"}
            alt={"Test"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            className="-z-2 object-cover pointer-events-none"
          />
        </picture>
        <div className="container">
          <Heading
            as="h1"
            className=" text-center text-[50px] text-transparent bg-linear-to-r from-[#999] via-50% via-white to-white bg-clip-text mx-auto lg:max-w-[660px]"
          >
            Find Your Nearest EV Charging Station in Seconds
          </Heading>
          <div className="bg-white z-10 relative rounded-[24px] shadow-xl xl:p-[28px] p-6 mb-[0px]  bottom-[-200px] left-0 right-0 mx-auto">
            <div className="mb-8">
              <Heading as="h2" size="heading3" className="text-black text-center">
                Search Charging Stations
              </Heading>
            </div>

            <div className="space-y-6">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by Cities"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filter Dropdowns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Socket Type Dropdown */}
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer">
                    <option value="">Socket type</option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                    <option value="ccs">CCS</option>
                    <option value="chademo">CHAdeMO</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>

                {/* Charger Type Dropdown */}
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer">
                    <option value="">Charger type</option>
                    <option value="ac">AC Charger</option>
                    <option value="dc">DC Fast Charger</option>
                    <option value="supercharger">Supercharger</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>

                {/* Power Dropdown */}
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer">
                    <option value="">Power</option>
                    <option value="7kw">7 kW</option>
                    <option value="22kw">22 kW</option>
                    <option value="50kw">50 kW</option>
                    <option value="150kw">150 kW</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
