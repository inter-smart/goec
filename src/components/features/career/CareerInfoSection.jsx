export default function CareerInfoSection() {
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[60px] xl:py-[120px] 2xl:py-[140px] ">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center mb-[15px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px] max-sm:flex-col">
          <div className="flex-1 max-sm:mb-[20px]">
            <Heading as="h3" size="heading3" className="text-[#030303]">
              {parse(data?.title)}
            </Heading>
          </div>
          <div>
            <div className="[--bx-xy:35px] sm:[--bx-xy:45px] xl:[--bx-xy:55px] 2xl:[--bx-xy:60px] flex gap-x-[6px] xl:gap-x-[8px] 2xl:gap-x-[10px]">
              <button
                onClick={scrollPrev}
                disabled={!scrollPrev}
                aria-label="Previous slide"
                className={`w-[var(--bx-xy)] h-auto aspect-square cursor-pointer rounded-full transition ${
                  !scrollPrev
                    ? "bg-primary-200 cursor-not-allowed opacity-50"
                    : "bg-white hover:bg-gradient-to-r hover:from-[#0f51a9] hover:via-[#0055e0] hover:to-[#0f51a9] hover:[&>img]:brightness-100 hover:[&>img]:invert"
                }`}
              >
                <Image
                  src="/images/icon-swiper-nav.svg"
                  alt="Previous"
                  width={60}
                  height={60}
                  className="w-full h-full block"
                />
              </button>

              <button
                onClick={scrollNext}
                disabled={!scrollNext}
                aria-label="Next slide"
                className={`w-[var(--bx-xy)] h-auto aspect-square cursor-pointer rounded-full transition ${
                  !scrollNext
                    ? "bg-primary-200 cursor-not-allowed opacity-50"
                    : "bg-white hover:bg-gradient-to-r hover:from-[#0f51a9] hover:via-[#035be9] hover:to-[#0f51a9] hover:[&>img]:brightness-100 hover:[&>img]:invert"
                }`}
              >
                <Image
                  src="/images/icon-swiper-nav.svg"
                  alt="Previous"
                  width={60}
                  height={60}
                  className="w-full h-full block rotate-180"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
