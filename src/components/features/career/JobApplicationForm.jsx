"use client";
import { useForm } from "react-hook-form";
import { X, Upload, AlertCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { Heading } from "@/components/utils/Heading";
import { ActionButton } from "@/components/utils/Button";
import Image from "next/image";

export default function JobApplicationForm({ isOpen, onClose }) {
  const modalRef = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      designation: "",
      experience: "",
      state: "",
      city: "",
      additionalInfo: "",
      attachment: null,
    },
  });

  const selectedState = watch("state");
  const attachment = watch("attachment");

  const designations = [
    "Marketing Intern",
    "Software Engineer",
    "Product Manager",
    "UI/UX Designer",
    "Data Analyst",
  ];

  const states = ["Kerala", "Tamil Nadu", "Karnataka", "Maharashtra", "Delhi"];

  const cities = {
    Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
    Karnataka: ["Bangalore", "Mysore", "Mangalore", "Hubli"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    Delhi: ["New Delhi", "Dwarka", "Rohini", "Saket"],
  };

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll - multiple approaches
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.documentElement.style.overflow = "hidden";
    } else {
      // Re-enable body scroll
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.paddingRight = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.paddingRight = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("attachment", file);
    }
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Application submitted successfully!");
    reset();
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      reset();
      onClose();
    }
  };

  if (!isOpen) return null;

  // Common styles
  const labelClass =
    "block text-sm text-[#373737] text-[#373737] text-[10px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[24px] mb-[8px]";
  const inputClass =
    "w-full p-[10px_12px] xl:p-[12px_14px] 2xl:p-[14px_16px] 3xl:p-[17px_22px] border border-[#A2A2A2] rounded-[8px] text-[#A9A9A9] focus:outline-none transition-all duration-200";
  const inputErrorClass = "border-red-500";

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault();
        }
      }}
      style={{ overflow: "hidden", position: "fixed" }}
    >
      <div
        ref={modalRef}
        className="relative w-full h-full lg:max-h-[90vh] flex flex-col overflow-hidden sm:max-w-[600px] lg:max-w-[697px] xl:max-w-[872px] 2xl:max-w-[980px] 3xl:max-w-[1307px] bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header */}
        <div className="relative flex-shrink-0 bg-white  p-[40px_40px_30px_40px] lg:p-[46px_46px_30px_46px] xl:p-[57px_57px_30px_57px] 2xl:p-[64px_64px_40px_64px] 3xl:p-[86px_86px_30px_86px]">
          <button
            type="button"
            className="absolute top-[28px] right-[28px] text-gray-400 hover:text-gray-600 transition-colors duration-200"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex justify-between items-center">
            <Heading
              as={"h2"}
              size={"heading2"}
              className="text-2xl sm:text-3xl font-bold text-gray-900"
            >
              Apply Now!
            </Heading>
          </div>
        </div>

        {/* Scrollable Content */}
        <div
          className="flex-1"
          style={{
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 px-[40px] lg:px-[46px] xl:px-[57px] 2xl:px-[64px] 3xl:px-[86px] pb-[40px] lg:pb-[46px] xl:pb-[57px] 2xl:pb-[64px] 3xl:pb-[86px]"
          >
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className={labelClass}>First name</label>
                <input
                  type="text"
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: { value: 2, message: "Minimum 2 characters" },
                  })}
                  placeholder="Enter first name"
                  className={`${inputClass} ${errors.firstName ? inputErrorClass : ""}`}
                />

                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />{" "}
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClass}>Last name</label>
                <input
                  type="text"
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: { value: 2, message: "Minimum 2 characters" },
                  })}
                  placeholder="Enter last name"
                  className={`${inputClass} ${errors.lastName ? inputErrorClass : ""}`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />{" "}
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className={labelClass}>Email id</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Enter email"
                  className={`${inputClass} ${errors.email ? inputErrorClass : ""}`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClass}>Phone number</label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter 10 digit phone number",
                    },
                  })}
                  placeholder="Enter phone number"
                  className={`${inputClass} ${errors.phone ? inputErrorClass : ""}`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Designation and Experience */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className={labelClass}>Designation</label>
                <select
                  {...register("designation", {
                    required: "Please select a designation",
                  })}
                  className={`${inputClass} ${errors.designation ? inputErrorClass : ""}`}
                >
                  <option value="">Select designation</option>
                  {designations.map((designation) => (
                    <option key={designation} value={designation}>
                      {designation}
                    </option>
                  ))}
                </select>
                {errors.designation && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />{" "}
                    {errors.designation.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClass}>Experience</label>
                <input
                  type="text"
                  {...register("experience")}
                  placeholder="Enter your total experience"
                  className={inputClass}
                />
              </div>
            </div>

            {/* State and City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className={labelClass}>State</label>
                <select
                  {...register("state", {
                    required: "Please select a state",
                    onChange: () => setValue("city", ""),
                  })}
                  className={`${inputClass} ${errors.state ? inputErrorClass : ""}`}
                >
                  <option value="">Select state</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.state.message}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClass}>City</label>
                <select
                  {...register("city", { required: "Please select a city" })}
                  disabled={!selectedState}
                  className={`${inputClass} ${errors.city ? inputErrorClass : ""}`}
                >
                  <option value="">Select city</option>
                  {selectedState &&
                    cities[selectedState]?.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
                {errors.city && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.city.message}
                  </p>
                )}
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <label className={labelClass}>Additional information</label>
              <textarea
                {...register("additionalInfo")}
                rows={4}
                placeholder="Add additional notes"
                className={inputClass}
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="flex items-center cursor-pointer">
                <Image
                  src="/images/FIle_Attachment.png"
                  alt="upload"
                  width={15}
                  height={15}
                  className="mr-2"
                  onClick={() => fileInputRef.current.click()}
                  style={{ cursor: "pointer" }}
                  priority
                />
                <span className="text-[#030303] font-medium">
                  Add an attachment*
                </span>
                <span className="text-[#373737] text-sm ml-2">
                  Max. 10 MB. (Type: pdf, doc, png, jpeg, docx)
                </span>
                <input
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <ActionButton
                variant={"blue"}
                size={"lg"}
                type="submit"
                className="max-w-[240px]"
              >
                Submit
              </ActionButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
