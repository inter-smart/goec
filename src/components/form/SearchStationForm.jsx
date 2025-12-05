"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
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
  search: z.string().optional(), // Made optional - users can filter without searching
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
  text-[10px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal text-[#373737] placeholder:text-[#a9a9a9] w-full !h-[35px] xl:!h-[40px] 2xl:!h-[45px] bg-[#f6f6f6] border-[#f0f0f0] px-[15px] 2xl:px-[20px] focus:outline-none focus:ring-0 focus-visible:ring-1 focus-visible:border-transparent
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

  // Auto-submit function to apply filters
  const applyFilters = useCallback((filterUpdates = {}) => {
    const params = new URLSearchParams(searchParams.toString());

    // Reset to page 1 when filters change
    params.set('page', '1');

    // Get current form values and merge with updates
    const currentValues = form.getValues();
    const values = { ...currentValues, ...filterUpdates };

    // Set search keyword
    if (values.search && values.search.trim()) {
      params.set('search', values.search.trim());
    } else {
      params.delete('search');
    }

    // Set filter parameters
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

    // Navigate with new parameters
    router.push(`/ev-charging-stations?${params.toString()}`);
  }, [router, searchParams, form]);

  // Handle form submission (for Enter key on search input)
  function onSubmit(values) {
    applyFilters(values);
  }

  // Watch search field and apply debounced auto-search
  const searchValue = form.watch("search");

  useEffect(() => {
    // Set up debounce timer for automatic search
    const timer = setTimeout(() => {
      if (searchValue !== currentFilters.search) {
        applyFilters({ search: searchValue });
      }
    }, 600); // 600ms delay after user stops typing

    // Cleanup function to cancel previous timer
    return () => clearTimeout(timer);
  }, [searchValue]); // eslint-disable-line react-hooks/exhaustive-deps

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
                  <Search className="text-[#a9a9a9] size-3 xl:size-4 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
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
                  onValueChange={(value) => {
                    field.onChange(value);
                    applyFilters({ socketType: value });
                  }}
                  value={field.value}
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
                  onValueChange={(value) => {
                    field.onChange(value);
                    applyFilters({ chargerType: value });
                  }}
                  value={field.value}
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
                  onValueChange={(value) => {
                    field.onChange(value);
                    applyFilters({ powerType: value });
                  }}
                  value={field.value}
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
