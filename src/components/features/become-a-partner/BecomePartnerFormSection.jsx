import BecomePartnerForm from "@/components/form/BecomePartnerForm";
import RecaptchaProvider from "@/components/layout/CaptchaWrapper";

export default function BecomePartnerFormSection() {
  return (
    <>
      <section className="w-full h-auto block pb-[40px] sm:pb-[60px] xl:pb-[120px] 2xl:pb-[140px]">
        <div className="container">
          <div className="w-full h-auto bg-white rounded-[15px] xl:rounded-[30px] mt-[-50px] sm:mt-[-60px] xl:mt-[-100px] 2xl:mt-[-120px] p-[20px] sm:p-[30px] xl:p-[55px] 2xl:p-[70px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] relative z-0">
            <RecaptchaProvider>
              <BecomePartnerForm />
            </RecaptchaProvider>
          </div>
        </div>
      </section>
    </>
  );
}
