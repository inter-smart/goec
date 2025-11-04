"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
  electricType: z.string().optional(),
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

export default function SearchStationForm() {
  // ✅ Fixed default values to match schema
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
      socketType: "",
      electricType: "",
      powerType: "",
    },
  });

  // Handle form submission
  function onSubmit(values) {
    console.log("Form submitted:", values);
    // Add your form submission logic here
    // Example: API call, toast notification, etc.
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
                      className={cn(inputStyle, "pl-10")}
                      {...field}
                    />
                  </FormControl>
                  <Search className="text-[#200e32] size-4 absolute left-4 top-1/2 -translate-y-1/2" />
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
                    {["ICE 25123 1", "ICE 25123 2", "ICE 25123 3"].map(
                      (item, index) => (
                        <SelectItem key={"socket-item" + index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
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
                    {["AC", "DC", "AC, DC"].map((item, index) => (
                      <SelectItem key={"charger-item" + index} value={item}>
                        {item}
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
                    {["25 KW", "50 KW", "75 KW", "100 KW"].map(
                      (item, index) => (
                        <SelectItem key={"power-item" + index} value={item}>
                          {item}
                        </SelectItem>
                      )
                    )}
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
