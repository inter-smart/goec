export default function NewsDetails() {
  const desc = `Embark on a journey of discovery as we navigate the intricacies of entrepreneurship. 
From the initial spark of an idea to the establishment and growth of your business, Entrepreneurial Insights provides a compass for emerging entrepreneurs, offering valuable perspectives to help you chart a successful course. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.`;

  return (
    <div>
      <div className="text-[32px] font-medium text-[#373737] leading-tight mb-[24px] lg:mb-[32px]">Navigating the Entrepreneurial Journey</div>
      <p className="text-[#373737] text-[14px] lg:text-[18px] mb-[24px]">{desc}</p>
    </div>
  );
}
