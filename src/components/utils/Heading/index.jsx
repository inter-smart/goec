const sizes = {
  heading1:
    "text-[22px] sm:text-[28px] lg:text-[36px] xl:text-[48px] 2xl:text-[56px] 3xl:text-[72px] leading-tight font-normal",
  heading2:
    "text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[42px] 2xl:text-[46px] 3xl:text-[52px] leading-tight font-medium",
  heading3:
    "text-[16px] sm:text-[20px] lg:text-[26px] xl:text-[34px] 2xl:text-[40px] 3xl:text-[48px] leading-tight font-normal",
  heading4:
    "text-[14px] sm:text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] leading-tight font-normal",
  heading5:
    "text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[26px] leading-tight font-normal",
  heading6:
    "text-[12px] sm:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-tight font-normal",
};

const Heading = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
