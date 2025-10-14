import React from 'react';

export default function FooterCard() {
  return (
    <section className="w-full lg:max-w-[calc(100%-80px)] mx-auto pb-[20px] max-w-[calc(100%-20px)] py-12">
        <div className="relative rounded-[24px] sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#0055E0] via-[#003894] to-[#003894] p-[40px] lg:p-[80px]">
          
          {/* Content Container */}
          <div className="relative z-20 flex flex-col md:flex-row items-start sm:items-center justify-between lg:gap-[140px] gap-8">
            {/* Text Content */}
            <div className="text-white max-w-[802px]">
              <h2 className="text-[24px] md:text-[40px] mb-[16px] font-medium leading-tight">
                Wish to know more about GO EC?
              </h2>
              <p className="text-[#CED1D0] lg:text-[20px] text-[16px] leading-tight">
                Uncover the art of strategic planning and decision-making in the business world. 
                Entrepreneurial insights reveals down the importance of having a well-thought-out strategy.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white text-[14px] md:text-[16px] lg:text-[18px] text-[#0C030A] font-semibold lg:p-[25.5px_80px] p-[10px_20px] rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap">
                Get in touch
              </button>
            </div>
          </div>
      </div>
    </section>
  );
}