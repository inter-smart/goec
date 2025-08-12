const sizes = {
  text1:
    "text-[12px] sm:text-[14px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[26px] leading-normal font-normal",
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
