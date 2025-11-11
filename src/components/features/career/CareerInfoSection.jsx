import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";

export default function CareerInfoSection() {
  return (
    <section className="w-full h-auto block py-[20px] sm:py-[40px_30px] xl:py-[60px_60px] 2xl:py-[80px_70px] mt-(--header-y)">
      <div className="w-full px-4 max-w-full sm:max-w-[576px] lg:max-w-[768px] xl:max-w-[840px] 2xl:max-w-[1000px] 3xl:max-w-[1260px] mx-auto">
        <div className="w-full mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Insights</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blogs</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Recent blogs</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>India prioritising EV</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </section>
  );
}
