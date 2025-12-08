"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
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
import { fetchFromAPI, postWithFileAPI } from "@/lib/api";
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

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/png",
  "image/jpeg",
];

// ✅ Complete validation schema with all form fields
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
    .refine((val) => !/\d/.test(val), "Name cannot contain numbers")

    .refine((val) => !val || validateNotEmpty(val), "Last name is required")
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
      "Last name contains invalid characters or potential security risk"
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

  designation: z.string().optional(),
  experience: z.string().min(1, "Experience is required"),
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
    // min 2 characters required
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
  attachment: z
    .any()
    .refine((file) => file instanceof File, {
      message: "Attachment is required.",
    })
    .refine((file) => file?.size <= MAX_FILE_SIZE, {
      message: "File size must be less than 2 MB.",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file?.type), {
      message: "Invalid file type. Allowed: pdf, doc, docx, png, jpeg.",
    }),
});

// ✅ Shared styles
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

const textareaStyle = `
  ${inputStyle} min-h-[60px] xl:min-h-[80px] 2xl:min-h-[120px] py-[15px] 2xl:py-[20px]
`
  .replace(/\s+/g, " ")
  .trim();

export default function ApplyForm({ careerData }) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Complete default values matching schema
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      designation: "",
      experience: "",
      state_id: "",
      city_id: "",
      additionalInformation: "",
      attachment: null,
    },
  });

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

  // Fetch states on component mount
  useEffect(() => {
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

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("attachment", file, { shouldValidate: true });
      setUploadedFile(file);
    }
  };

  // Handle file removal
  const handleFileRemove = () => {
    setUploadedFile(null);
    setFileError("");
    form.setValue("attachment", null);
  };

  // Handle form submission
  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      const recaptchaToken = await executeRecaptcha("careerenquiry");
      const formData = new FormData();

      // Append text fields with correct backend field names
      formData.append("first_name", values.firstName);
      formData.append("last_name", values.lastName || "");
      formData.append("email_id", values.email);
      formData.append("phone_number", values.phone);
      formData.append("recaptcha_token", recaptchaToken);

      // Only append if values exist
      if (careerData?.category?.title)
        formData.append("designation", careerData.category.title);
      if (values.experience) formData.append("experience", values.experience);
      if (values.state_id) formData.append("state_id", values.state_id);
      if (values.city_id) formData.append("city_id", values.city_id);
      if (careerData?.title) formData.append("job_title", careerData.title);
      formData.append(
        "additional_information",
        values.additionalInformation || ""
      );

      // Append file if exists
      if (uploadedFile) {
        formData.append("attachment", uploadedFile);
      }

      const { data, error } = await postWithFileAPI("career-enquiry", formData);

      if (!error && data) {
        toast.success("Application submitted successfully!");
        form.reset({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          designation: "",
          experience: "",
          state_id: "",
          city_id: "",
          additionalInformation: "",
          attachment: null,
        });
        setUploadedFile(null);
      } else {
        // Display validation errors if available
        if (data && data.errors && Array.isArray(data.errors)) {
          const errorMessages = data.errors
            .map((err) => err.msg || err.message)
            .join("\n");
          toast.error(`Validation errors:\n${errorMessages}`);
        } else if (data && data.message) {
          toast.error(data.message);
        } else {
          toast.error(
            "Failed to submit application. Please check your information and try again."
          );
        }
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
            name="designation"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel className={labelStyle}>Designation</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={careerData?.category?.title ?? ""}
                    readOnly
                    className={inputStyle + " cursor-not-allowed bg-gray-100"}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel className={labelStyle}>Experience</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your total experience"
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
                          loadingStates ? "Loading..." : "Select state"
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
                  disabled={!selectedStateId || loadingCities}
                >
                  <FormControl>
                    <SelectTrigger size="none" className={inputStyle}>
                      <SelectValue
                        placeholder={
                          !selectedStateId
                            ? "Select state first"
                            : loadingCities
                              ? "Loading..."
                              : "Select city"
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
                  Add an attachment
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
                          Add an attachment
                        </span>

                        <span className="text-[10px] xl:text-[12px] 2xl:text-[14px] text-[#373737]">
                          &nbsp;Max. 2 MB. (Type: pdf, doc, png, jpeg, docx)
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
