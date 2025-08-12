const sizes = {
  heading1:
    "text-[24px] sm:text-[28px] lg:text-[36px] xl:text-[48px] 2xl:text-[56px] 3xl:text-[72px] leading-tight font-normal",
  heading2:
    "text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[34px] 2xl:text-[40px] 3xl:text-[52px] leading-tight font-normal",
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
