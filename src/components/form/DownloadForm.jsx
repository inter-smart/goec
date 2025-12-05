"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ActionButton } from "../utils/Button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fetchFromAPI, MEDIA_URL } from "@/lib/api";
import { toast } from "sonner";

import {
  validateSecurity,
  validateNotOnlySpecialChars,
  validateNotEmpty,
  validateNotOnlyWhitespace,
  validateMessageLength,
  validateSingleCharacter,
} from "@/lib/validations";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const formSchema = z.object({
 firstName: z
  .string()
  .transform((val) => val?.trim() || "")
  .refine(validateNotEmpty, "Name is required")
  .refine(validateNotOnlyWhitespace, "Name cannot be only whitespace")
  .refine((val) => val.length <= 255, "Name is too long")
  .refine(validateSecurity, "Invalid characters detected")
  .refine(validateNotOnlySpecialChars, "Name cannot contain only special characters")
  .refine((val) => !/\d/.test(val), "Name cannot contain numbers")
  .refine(
    (val) => /^[a-zA-Z\u00C0-\u017F\u0100-\u024F\u1E00-\u1EFF\u0900-\u097F\s'\-]+$/u.test(val),
    "Name can only contain letters, spaces, hyphens, and apostrophes"
  )
  .refine(
    (val) => !/\s{2,}/.test(val.trim()),
    "Name cannot contain multiple consecutive spaces"
  ),

lastName: z
  .string()
  .transform((val) => val?.trim() || "")
  .refine(validateNotEmpty, "Last name is required")
  .refine(validateNotOnlyWhitespace, "Last name cannot be only whitespace")
  .refine((val) => val.length <= 255, "Last name is too long")
  .refine(validateSecurity, "Invalid characters detected")
  .refine((val) => !/\d/.test(val), "Name cannot contain numbers")
  .refine(validateNotOnlySpecialChars, "Last name cannot contain only special characters")
  .refine((val) => !/\d/.test(val), "Last name cannot contain numbers")
  .refine(
    (val) => /^[a-zA-Z\u00C0-\u017F\u0100-\u024F\u1E00-\u1EFF\u0900-\u097F\s'\-]+$/u.test(val),
    "Last name can only contain letters, spaces, hyphens, and apostrophes"
  )
  .refine(
    (val) => !/\s{2,}/.test(val.trim()),
    "Last name cannot contain multiple consecutive spaces"
  ),
  email: z
    .string()
    .email("Please enter a valid email address")
    .transform((val) => val?.trim().toLowerCase() || "")
    .refine(validateNotEmpty, "Email is required")
    .refine(validateNotOnlyWhitespace, "Email cannot be only whitespace")
    .refine(validateSecurity, "Invalid characters detected")
    .refine((val) => val.length <= 256, "Email is too long")
    .refine((val) => val.includes("@"), "Email must contain @ symbol")
    .refine((val) => {
      const parts = val.split("@");
      return parts.length === 2 && parts[1].length > 0;
    }, "Email must have a valid domain"),
    phone: z
    .string()
    .transform((val) => val?.trim() || "")
    .refine(validateNotEmpty, "Phone number is required")
    .refine(validateNotOnlyWhitespace, "Phone number cannot be only whitespace")
    .refine(validateSecurity, "Invalid characters detected")
    .refine((val) => /^[\d\s\(\)\-\+]+$/.test(val), "Phone number contains invalid characters")
    .refine((val) => {
      const cleaned = val.replace(/[\s\(\)\-\+]/g, "");
      return cleaned.length >= 5 && cleaned.length <= 15;
    }, "Phone number must be between 5-15 digits")
    .refine((val) => {
      const cleaned = val.replace(/[\s\(\)\-\+]/g, "");
      return /^\d+$/.test(cleaned);
    }, "Phone number must contain valid digits")
    .refine((val) => {
      const cleaned = val.replace(/[\s\(\)\-\+]/g, "");
      return !/^0+$/.test(cleaned);
    }, "Phone number cannot be all zeros")
    .refine((val) => {
      // Reject multiple consecutive + signs
      return !/\+{2,}/.test(val);
    }, "Invalid phone number format"),

  state_id: z.string().optional(),
  city_id: z.string().optional(),
});

const labelStyle = `
  text-[10px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal text-[#373737]
`
  .replace(/\s+/g, " ")
  .trim();

const inputStyle = `
  text-[10px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal text-[#373737] placeholder:text-[#a9a9a9] w-full !h-[35px] xl:!h-[40px] 2xl:!h-[45px] bg-white border-[#a2a2a2] px-[15px] 2xl:px-[20px] focus:outline-none focus:ring-0 focus-visible:ring-1 focus-visible:border-transparent
  selection:bg-black selection:text-white appearance-none rounded-[7px] 2xl:rounded-[10px]
`
  .replace(/\s+/g, " ")
  .trim();

export default function DownloadForm({ onSuccess }) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      state_id: "",
      city_id: "",
    },
  });

  // Fetch states on component mount
  useEffect(() => {
    const fetchStates = async () => {
      setLoadingStates(true);
      try {
        const { data, error } = await fetchFromAPI("location/states");

        if (error) return console.error("Error fetching states:", error);

        setStates(data);
      } catch (error) {
        console.error("Error fetching states:", error);
      } finally {
        setLoadingStates(false);
      }
    };

    fetchStates();
  }, []);

  // Watch state field to fetch cities when state changes
  const selectedStateId = form.watch("state_id");

  useEffect(() => {
    if (selectedStateId) {
      const fetchCities = async () => {
        setLoadingCities(true);
        setCities([]);
        form.setValue("city_id", ""); // Reset city when state changes

        try {
          const { data, error } = await fetchFromAPI(`location/cities/${selectedStateId}`);
          if (error) return console.error("Error fetching cities:", error);

          setCities(data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        } finally {
          setLoadingCities(false);
        }
      };

      fetchCities();
    } else {
      setCities([]);
      form.setValue("city_id", "");
    }
  }, [selectedStateId, form]);

  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      const recaptchaToken = await executeRecaptcha("brochureenquiry");
      const payload = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone_number: values.phone,
        recaptcha_token: recaptchaToken,
      };

      // Only append if values exist
      if (values.state_id) payload.state_id = values.state_id;
      if (values.city_id) payload.city_id = values.city_id;

      const { data, error } = await fetchFromAPI("brochure-enquiry", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (!error && data) {
        toast.success("Brochure enquiry submitted successfully!");
        // Reset form
        form.reset({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          state_id: "",
          city_id: "",
        });

        // Call the success callback to show success screen
        if (onSuccess) {
          onSuccess();
        }
      } else {
        // Display validation errors if available
        if (data && data.errors && Array.isArray(data.errors)) {
          const errorMessages = data.errors.map((err) => err.msg || err.message).join("\n");
          toast.error(`Validation errors:\n${errorMessages}`);
        } else if (data && data.message) {
          toast.error(data.message);
        } else {
          toast.error("Failed to submit enquiry. Please check your information and try again.");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                  <Input type="text" placeholder="Enter first name" className={inputStyle} {...field} />
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
                <FormLabel className={labelStyle}>Last name*</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter last name" className={inputStyle} {...field} />
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
                  <Input type="email" placeholder="Enter email id" className={inputStyle} {...field} />
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
                  <Input type="tel" placeholder="Enter phone number" className={inputStyle} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state_id"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel className={labelStyle}>State</FormLabel>
                <Select onValueChange={field.onChange} value={field.value} disabled={loadingStates}>
                  <FormControl>
                    <SelectTrigger size="none" className={inputStyle}>
                      <SelectValue placeholder={loadingStates ? "Loading states..." : "Select state"} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state.id} value={state.id.toString()}>
                        {state.name}
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
            name="city_id"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel className={labelStyle}>City</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!selectedStateId || loadingCities}>
                  <FormControl>
                    <SelectTrigger size="none" className={inputStyle}>
                      <SelectValue placeholder={loadingCities ? "Loading cities..." : !selectedStateId ? "Select state first" : "Select city"} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.id} value={city.id.toString()}>
                        {city.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full flex">
            <ActionButton
              size={"lg"}
              variant={"blue"}
              className="max-w-[90px] sm:max-w-[100px] xl:max-w-[120px] 2xl:max-w-[140px] rounded-[8px] mt-[10px] xl:mt-[15px] 2xl:mt-[20px] ml-auto"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </ActionButton>
          </div>
        </div>
      </form>
    </Form>
  );
}
