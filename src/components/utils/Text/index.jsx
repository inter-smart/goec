const sizes = {
  text1:
    "text-[12px] sm:text-[14px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[26px] leading-normal font-medium sm:font-normal",
  text2:
    "text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[24px] leading-normal font-medium sm:font-normal",
  text3:
    "text-[12px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-normal font-medium sm:font-normal",
};

const Text = ({ children, className = "", as, size, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`${className} ${sizes[size]} `} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
