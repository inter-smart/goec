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

// Validation schema with state_id and city_id
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
  state_id: z.string().optional(),
  city_id: z.string().optional(),
  additionalInformation: z.string().optional(),
});

export default function ChargingStationForm({ variant, chargerId }) {
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
      const payload = {
        first_name: values.firstName,
        last_name: values.lastName || "",
        email_id: values.email,
        phone_number: values.phone,
        additional_information: values.additionalInformation || "",
      };

      // Only append if values exist (avoid sending empty strings for integer fields)
      if (values.state_id) payload.state_id = values.state_id;
      if (values.city_id) payload.city_id = values.city_id;
      if (chargerId) payload.charger_id = chargerId;

      const { data, error } = await fetchFromAPI(variant === "about" ? "contact-enquiry" : "charger-enquiry", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (!error && data) {
        toast.success(variant === "about" ? "Enquiry submitted successfully!" : "Charger enquiry submitted successfully!");
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
        toast.error("Failed to submit enquiry. Please check your information and try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form. Please try again.");
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
    "text-[10px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal text-[#373737] placeholder:text-[#a9a9a9] w-full !h-[35px] xl:!h-[40px] 2xl:!h-[50px] bg-white border-[#a2a2a2] px-[15px] 2xl:px-[20px] focus:outline-none focus:ring-0 focus-visible:ring-1 focus-visible:border-transparent selection:bg-black selection:text-white appearance-none rounded-[7px] 2xl:rounded-[10px]",
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
                  defaultValue={field.value}
                  disabled={loadingStates}
                >
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={loadingCities || !selectedStateId}
                >
                  <FormControl>
                    <SelectTrigger size="none" className={inputStyle}>
                      <SelectValue placeholder={loadingCities ? "Loading cities..." : "Select city"} />
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
                variant === "about" && "text-black bg-white"
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
