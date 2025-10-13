import React from "react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, } from "@/components/ui/Breadcrumb";

export function BreadCrumb({ items = [] }) {
    return (
        <div className="">
            <Breadcrumb>
                <BreadcrumbList
                    className=""
                >
                    {items.map((item, index) => (
                        <React.Fragment key={item.label}>
                            <BreadcrumbItem
                                className={"lg:text-[18px] text-[14px] leading-[1] font-medium font-base1 text-[#0055E0]"}
                            >
                                {item.href && !item.isCurrent ? (
                                    <BreadcrumbLink href={item.href}
                                    >{item.label}</BreadcrumbLink>
                                ) : (
                                    <BreadcrumbLink aria-current={item.isCurrent ? "page" : undefined}>
                                        {item.label}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {index !== items.length - 1 && (
                                <BreadcrumbSeparator
                                className="text-[#0055E0]"
                                >
                                   /
                                </BreadcrumbSeparator>
                            )}
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}