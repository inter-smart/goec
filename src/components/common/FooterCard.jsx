import Image from "next/image";
import React from "react";

export default function FooterCard() {
  return (
    <section className="w-full lg:max-w-[calc(100%-80px)] mx-auto pb-[20px] max-w-[calc(100%-20px)] my-[100px_140px] relative rounded-[24px] overflow-hidden">
      <Image
        src="/images/Footer_background.jpg"
        alt="footer-card-bg"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 80vw"
        className="object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0055E0] via-[#003894] to-[#003894] opacity-70 z-10" />
      {/* Content Container */}
      <div className="relative z-20 p-[20px] lg:p-[40px] xl:p-[80px] flex flex-col md:flex-row items-start sm:items-center justify-between lg:gap-[140px] gap-8">
        {/* Text Content */}
        <div className="text-white max-w-[802px]">
          <h2 className="text-[25px] lg:text-[30px] xl:text-[40px] mb-[16px] font-medium leading-tight">
            Wish to know more about GO EC?
          </h2>
          <p className="text-[#CED1D0] xl:text-[20px] text-[16px] leading-tight">
            Uncover the art of strategic planning and decision-making in the
            business world. Entrepreneurial insights reveals down the importance
            of having a well-thought-out strategy.
          </p>
        </div>
        {/* CTA Button */}
        <div className="flex-shrink-0 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-white text-[14px] md:text-[16px] lg:text-[18px] text-[#0C030A] font-semibold xl:p-[25.5px_80px] p-[10px_20px] rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
