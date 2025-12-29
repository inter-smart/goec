"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";
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
import { fetchFromAPI } from "@/lib/api";
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

// Validation schema with state_id and city_id
const formSchema = z.object({
  firstName: z
    .string()
    .transform((val) => val?.trim() || "")
    .refine(validateNotEmpty, "Name is required")
    .refine(validateNotOnlyWhitespace, "Name cannot be only whitespace")
    .refine((val) => val.length <= 255, "Name is too long")
    .refine(validateSecurity, "Invalid characters detected")
    .refine(
      validateNotOnlySpecialChars,
      "Name cannot contain only special characters"
    )
    .refine((val) => !/\d/.test(val), "Name cannot contain numbers")
    .refine(
      (val) =>
        /^[a-zA-Z\u00C0-\u017F\u0100-\u024F\u1E00-\u1EFF\s'\-]+$/u.test(val),
      "Name can only contain letters, spaces, hyphens, and apostrophes"
    ),
  lastName: z
    .string()
    .optional()
    .transform((val) => val?.trim() || "")
    // Only run validations if value is not empty
    .refine((val) => !val || validateNotEmpty(val), "Last name is required")
    .refine((val) => !/\d/.test(val), "Name cannot contain numbers")
    .refine(
      (val) => !val || validateNotOnlyWhitespace(val),
      "Last name cannot be only whitespace"
    )
    .refine(
      (val) => !val || validateSingleCharacter(val),
      "Last name must be at least 2 characters"
    )
    .refine(
      (val) => !val || validateMessageLength(val),
      "Last name is too long (maximum 5000 characters)"
    )
    .refine(
      (val) => !val || validateSecurity(val),
      "Invalid characters or potential security risk detected"
    )
    .refine(
      (val) => !val || validateNotOnlySpecialChars(val),
      "Last name cannot contain only special characters"
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
    .refine(
      (val) => /^[\d\s\(\)\-\+]+$/.test(val),
      "Phone number contains invalid characters"
    )
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
  additionalInformation: z
    .string()
    .optional()
    .transform((val) => val?.trim() || "")
    // Only run validations if value is not empty
    .refine(
      (val) => !val || validateNotEmpty(val),
      "Additional information is required"
    )
    .refine(
      (val) => !val || val.length >= 2,
      "Additional information must be at least 2 characters"
    )
    .refine(
      (val) => !val || validateNotOnlyWhitespace(val),
      "Additional information cannot be only whitespace"
    )
    .refine(
      (val) => !val || validateSingleCharacter(val),
      "Additional information must be at least 2 characters"
    )
    .refine(
      (val) => !val || validateMessageLength(val),
      "Additional information is too long (maximum 5000 characters)"
    )
    .refine(
      (val) => !val || validateSecurity(val),
      "Additional information contains invalid characters or potential security risk"
    )
    .refine(
      (val) => !val || validateNotOnlySpecialChars(val),
      "Additional information cannot contain only special characters"
    ),
});

export default function ChargingStationForm({ variant, chargerId }) {
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
      additionalInformation: "",
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
          const { data, error } = await fetchFromAPI(
            `location/cities/${selectedStateId}`
          );
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

  // Handle form submission
  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      const recaptchaToken = await executeRecaptcha(
        variant === "about" ? "contactenquiry" : "chargersenquiry"
      );
      const payload = {
        first_name: values.firstName,
        last_name: values.lastName || "",
        email_id: values.email,
        phone_number: values.phone,
        additional_information: values.additionalInformation || "",
        recaptcha_token: recaptchaToken,
      };

      // Only append if values exist (avoid sending empty strings for integer fields)
      if (values.state_id) payload.state_id = values.state_id;
      if (values.city_id) payload.city_id = values.city_id;
      if (chargerId) payload.charger_id = chargerId;

      const { data, error, message } = await fetchFromAPI(
        variant === "about" ? "contact-enquiry" : "chargers-enquiry",
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );

      if (!error && data) {
        toast.success(
          variant === "about"
            ? "Enquiry submitted successfully!"
            : "Charger enquiry submitted successfully!"
        );
        form.reset({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          state_id: "",
          city_id: "",
          additionalInformation: "",
        });
      } else {
        toast.error(
          message ||
            "Failed to submit enquiry. Please check your information and try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "An error occurred while submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  // Shared styles
  const labelStyle = cn(
    "text-[10px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal text-[#373737",
    variant === "about" && "text-white"
  );

  const inputStyle = cn(
    "text-[10px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal text-[#373737] placeholder:text-[#a9a9a9] w-full !h-[35px] xl:!h-[40px] 2xl:!h-[45px] bg-white border-[#a2a2a2] px-[15px] 2xl:px-[20px] focus:outline-none focus:ring-0 focus-visible:ring-1 focus-visible:border-transparent selection:bg-black selection:text-white appearance-none rounded-[7px] 2xl:rounded-[10px]",
    variant === "about" &&
      "bg-white/10 border-white/20 text-white placeholder:text-[#a0bae5] data-[placeholder]:text-[#a0bae5] [&_svg]:[filter:_brightness(0)_saturate(100%)_invert(81%)_sepia(16%)_saturate(494%)_hue-rotate(181deg)_brightness(88%)_contrast(92%)]"
  );

  const textareaStyle = cn(
    inputStyle,
    "min-h-[60px] xl:min-h-[80px] 2xl:min-h-[120px] py-[15px] 2xl:py-[20px]"
  );

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
            name="state_id"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel className={labelStyle}>State</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={loadingStates}
                >
                  <FormControl>
                    <SelectTrigger size="none" className={inputStyle}>
                      <SelectValue
                        placeholder={
                          loadingStates ? "Loading states..." : "Select state"
                        }
                      />
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
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={loadingCities || !selectedStateId}
                >
                  <FormControl>
                    <SelectTrigger size="none" className={inputStyle}>
                      <SelectValue
                        placeholder={
                          loadingCities ? "Loading cities..." : "Select city"
                        }
                      />
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

          <FormField
            control={form.control}
            name="additionalInformation"
            render={({ field }) => (
              <FormItem className="w-full sm:w-full">
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

          <div className="w-full flex">
            <ActionButton
              size={"lg"}
              variant={variant === "about" ? "none" : "blue"}
              className={cn(
                "max-w-[90px] sm:max-w-[100px] xl:max-w-[120px] 2xl:max-w-[140px] mt-[10px] xl:mt-[15px] 2xl:mt-[20px] ml-auto",
                variant === "about" && "text-black bg-white",
                "hover:bg-transparent hover:bg-gradient-to-r hover:from-[#2cc59c] hover:via-[#00eea8] hover:to-[#2cc59c] hover:text-white"
              )}
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
