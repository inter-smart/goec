import ChargingStationForm from "@/components/form/ChargingStationForm";
import { Heading } from "@/components/utils/Heading";

export default function BecomePartnerFormSection() {
  return (
    <>
      <section className="w-full h-auto block pb-[40px] sm:pb-[60px] xl:pb-[120px] 2xl:pb-[140px]">
        <div className="container">
          <div className="w-full h-auto bg-white rounded-[15px] xl:rounded-[30px] mt-[-50px] sm:mt-[-60px] xl:mt-[-100px] 2xl:mt-[-120px] p-[15px] sm:p-[20px] xl:p-[30px] 2xl:p-[40px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] relative z-0">
            <Heading
              as="h3"
              size="heading3"
              className="text-center text-[#030303] mb-[10px] xl:mb-[20px] 2xl:mb-[30px]"
            >
              Search Charging Stations
            </Heading>
            <ChargingStationForm />
          </div>
        </div>
      </section>
    </>
  );
}
