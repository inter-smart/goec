import parse from "html-react-parser";

export default function AppDetailSection({ description }) {
  return (
    <section className="w-full h-auto block py-[40px_20px] sm:py-[60px_30px] xl:py-[100px_60px] 2xl:py-[140px_70px]">
      <div className="container">
        <div className="typography [&_h4]:font-normal max-sm:text-center">{description && parse(description)}</div>
      </div>
    </section>
  );
}
