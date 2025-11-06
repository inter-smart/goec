"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { X, Upload } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ActionButton } from "../utils/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Image from "next/image";

// ✅ Complete validation schema with all form fields
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().optional(),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." }),
  state: z.string().optional(),
  city: z.string().optional(),
  pincode: z.string().optional(),
  whatYouAre: z.string().optional(),
  additionalInformation: z.string().optional(),
  attachment: z.any().optional(),
});

// ✅ Shared styles
const labelStyle = `
  text-[10px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal text-[#373737]
`
  .replace(/\s+/g, " ")
  .trim();

const inputStyle = `
  text-[10px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal text-[#373737] placeholder:text-[#a9a9a9] w-full !h-[35px] xl:!h-[40px] 2xl:!h-[50px] bg-white border-[#a2a2a2] px-[15px] 2xl:px-[20px] focus:outline-none focus:ring-0 focus-visible:ring-1 focus-visible:border-transparent
  selection:bg-black selection:text-white appearance-none rounded-[7px] 2xl:rounded-[10px]
`
  .replace(/\s+/g, " ")
  .trim();

const textareaStyle = `
  ${inputStyle} min-h-[60px] xl:min-h-[80px] 2xl:min-h-[120px] py-[15px] 2xl:py-[20px]
`
  .replace(/\s+/g, " ")
  .trim();

export default function BecomePartnerForm() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileError, setFileError] = useState("");

  // ✅ Complete default values matching schema
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      pincode: "",
      whatYouAre: "",
      additionalInformation: "",
      attachment: null,
    },
  });

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      setFileError("File size must not exceed 10 MB");
      return;
    }

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/png",
      "image/jpeg",
    ];
    if (!allowedTypes.includes(file.type)) {
      setFileError("Only PDF, DOC, DOCX, PNG, and JPEG files are allowed");
      return;
    }

    setFileError("");
    setUploadedFile(file);
    form.setValue("attachment", file);
  };

  // Handle file removal
  const handleFileRemove = () => {
    setUploadedFile(null);
    setFileError("");
    form.setValue("attachment", null);
  };

  // Handle form submission
  function onSubmit(values) {
    console.log("Form submitted:", values);
    // Add your form submission logic here
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-1 xl:-mx-2 [&>*]:p-1 xl:[&>*]:p-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel className={labelStyle}>First name*</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter first name"
                    className={inputStyle}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel className={labelStyle}>Last name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter last name"
                    className={inputStyle}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel className={labelStyle}>Email id*</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter email id"
                    className={inputStyle}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel className={labelStyle}>Phone number*</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Enter phone number"
                    className={inputStyle}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel className={labelStyle}>State</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger size="none" className={inputStyle}>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {["state 1", "state 2", "state 3"].map((item, index) => (
                      <SelectItem key={"state" + index} value={item}>
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
            name="city"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel className={labelStyle}>City</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger size="none" className={inputStyle}>
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {["city 1", "city 2", "city 3"].map((item, index) => (
                      <SelectItem key={"city" + index} value={item}>
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
            name="pincode"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel className={labelStyle}>Pincode</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter pincode"
                    className={inputStyle}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whatYouAre"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel className={labelStyle}>
                  Business / Individual
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger size="none" className={inputStyle}>
                      <SelectValue placeholder="Select what you are" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {["Business", "Individual"].map((item, index) => (
                      <SelectItem key={"type" + index} value={item}>
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
            name="additionalInformation"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className={labelStyle}>
                  Additional information
                </FormLabel>
                <FormControl>
                  <Textarea
                    className={textareaStyle}
                    placeholder="Add additional enquiry or notes"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="attachment"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className={cn(labelStyle, "sr-only")}>
                  Add an attachment*
                </FormLabel>
                <FormControl>
                  <div className="max-w-full space-y-2">
                    {!uploadedFile ? (
                      <label
                        htmlFor="file-upload"
                        className={`${inputStyle} text-[#030303] !px-0 flex flex-wrap items-center cursor-pointer hover:border-[#737373] transition-colors`}
                      >
                        <Image
                          src="/images/icon-attachment.svg"
                          alt="icon-attachment"
                          width={20}
                          height={20}
                          className="w-[15px] xl:w-[20px]"
                        />
                        <span className={cn(labelStyle, "font-medium")}>
                          Add an attachment*
                        </span>

                        <span className="text-[10px] xl:text-[12px] 2xl:text-[14px] text-[#373737]">
                          &nbsp;Max. 10 MB. (Type: pdf, doc, png, jpeg, docx)
                        </span>
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx,.png,.jpeg,.jpg"
                          onChange={handleFileChange}
                        />
                      </label>
                    ) : (
                      <div
                        className={`${inputStyle} break-all flex flex-wrap items-center justify-between !bg-gray-50`}
                      >
                        <span className="line-clamp-1 max-w-[70%] flex-1 pr-2">
                          {uploadedFile.name}
                        </span>
                        <button
                          type="button"
                          onClick={handleFileRemove}
                          className="text-red-500 hover:text-red-700 transition-colors flex-shrink-0"
                        >
                          <X className="size-3 xl:size-4" />
                        </button>
                      </div>
                    )}
                    {fileError && (
                      <p className="text-[9px] sm:text-[10px] xl:text-[11px] 2xl:text-[12px] text-red-500">
                        {fileError}
                      </p>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full flex">
            <ActionButton
              size={"lg"}
              variant={"blue"}
              className="max-w-[90px] sm:max-w-[100px] xl:max-w-[120px] 2xl:max-w-[140px] mt-[10px] xl:mt-[15px] 2xl:mt-[20px] ml-auto"
              type="submit"
            >
              Submit
            </ActionButton>
          </div>
        </div>
      </form>
    </Form>
  );
}
