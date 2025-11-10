"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

// ✅ Fixed validation schema to match actual form fields
const formSchema = z.object({
  search: z.string().min(1, {
    message: "Please enter a location to search.",
  }),
  socketType: z.string().optional(),
  chargerType: z.string().optional(),
  powerType: z.string().optional(),
});

// ✅ Shared styles
const labelStyle = `
  text-[10px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal text-[#373737]
`
  .replace(/\s+/g, " ")
  .trim();

const inputStyle = `
  text-[10px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal text-[#373737] placeholder:text-[#a9a9a9] w-full !h-[35px] xl:!h-[40px] 2xl:!h-[50px] bg-[#f6f6f6] border-[#f0f0f0] px-[15px] 2xl:px-[20px] focus:outline-none focus:ring-0 focus-visible:ring-1 focus-visible:border-transparent
  selection:bg-black selection:text-white appearance-none rounded-full
`
  .replace(/\s+/g, " ")
  .trim();

const textareaStyle = `
  ${inputStyle} min-h-[60px] xl:min-h-[80px] 2xl:min-h-[120px] py-[15px] 2xl:py-[20px]
`
  .replace(/\s+/g, " ")
  .trim();

export default function SearchStationForm({filters, currentFilters = {}}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ✅ Fixed default values to match schema and pre-fill with current filters
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: currentFilters.search || "",
      socketType: currentFilters.socket_type_id || "",
      chargerType: currentFilters.charger_type_id || "",
      powerType: currentFilters.power_id || "",
    },
  });

  // Handle form submission
  function onSubmit(values) {
    console.log("Form submitted:", values);

    // Build query parameters
    const params = new URLSearchParams(searchParams.toString());

    // Reset to page 1 when new search is performed
    params.set('page', '1');

    // Set search keyword
    if (values.search && values.search.trim()) {
      params.set('search', values.search.trim());
    } else {
      params.delete('search');
    }

    // Set filter parameters (using the correct parameter names)
    if (values.socketType) {
      params.set('socket_type_id', values.socketType);
    } else {
      params.delete('socket_type_id');
    }

    if (values.chargerType) {
      params.set('charger_type_id', values.chargerType);
    } else {
      params.delete('charger_type_id');
    }

    if (values.powerType) {
      params.set('power_id', values.powerType);
    } else {
      params.delete('power_id');
    }

    // Navigate to the same page with new query parameters
    router.push(`/find-charging-stations?${params.toString()}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-1 xl:-mx-2 [&>*]:p-1 xl:[&>*]:p-2">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className={"sr-only"}>Search</FormLabel>
                <div className="relative z-0">
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Kochi"
                      className={cn(inputStyle, "pl-8 xl:pl-10 2xl:pl-12")}
                      {...field}
                    />
                  </FormControl>
                  <Search className="text-[#200e32] size-3 xl:size-4 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="socketType"
            render={({ field }) => (
              <FormItem className="w-full xs:w-1/3">
                <FormLabel className={"sr-only"}>Socket Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger size="none" className={inputStyle}>
                      <SelectValue placeholder="Select socket type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {filters?.socket_types?.map((item) => (
                      <SelectItem key={"socket-item-" + item.id} value={String(item.id)}>
                        {item.type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="chargerType"
            render={({ field }) => (
              <FormItem className="w-full xs:w-1/3">
                <FormLabel className={"sr-only"}>Charger Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger size="none" className={inputStyle}>
                      <SelectValue placeholder="AC, DC" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {filters?.charger_types?.map((item) => (
                      <SelectItem key={"charger-item-" + item.id} value={String(item.id)}>
                        {item.type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="powerType"
            render={({ field }) => (
              <FormItem className="w-full xs:w-1/3">
                <FormLabel className={"sr-only"}>Power Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger size="none" className={inputStyle}>
                      <SelectValue placeholder="100 KW" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {filters?.power_options?.map((item) => (
                      <SelectItem key={"power-item-" + item.id} value={String(item.id)}>
                        {item.power}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
