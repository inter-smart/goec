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
  designation: z.string().optional(),
  experience: z.string().optional(),
  state_id: z.string().optional(),
  city_id: z.string().optional(),
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

export default function ApplyForm({ careerData }) {
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
      console.log("states ", data);

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
  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      const formData = new FormData();

      // Append text fields with correct backend field names
      formData.append("first_name", values.firstName);
      formData.append("last_name", values.lastName || "");
      formData.append("email_id", values.email);
      formData.append("phone_number", values.phone);

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
