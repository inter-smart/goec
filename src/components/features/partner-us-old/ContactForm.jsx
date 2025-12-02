"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only digits"),
  state: z.string().min(1, "Please select a state"),
  city: z.string().min(1, "Please select a city"),
  additionalInfo: z.string().optional(),
});

export default function ContactForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      additionalInfo: "",
    },
  });

  const onSubmit = (data) => {
    // console.log("Form submitted:", data);
    reset();
  };

  return (
    <div className="w-full max-w-4xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* First Name and Last Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white text-sm mb-2">First name</label>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Enter first name"
                  className="w-full px-4 py-3 bg-transparent border border-[rgba(255,255,255,0.16)] rounded-[8px] text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 transition-colors"
                  aria-invalid={!!errors.firstName}
                />
              )}
            />
            {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>}
          </div>
          <div>
            <label className="block text-white text-sm mb-2">Last name</label>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Enter last name"
                  className="w-full px-4 py-3 bg-transparent border border-[rgba(255,255,255,0.16)] rounded-[8px] text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 transition-colors"
                  aria-invalid={!!errors.lastName}
                />
              )}
            />
            {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>}
          </div>
        </div>

        {/* Email and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white text-sm mb-2">Email id</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-4 py-3 bg-transparent border border-[rgba(255,255,255,0.16)] rounded-[8px] text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 transition-colors"
                  aria-invalid={!!errors.email}
                />
              )}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-white text-sm mb-2">Phone number</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-3 bg-transparent border border-[rgba(255,255,255,0.16)] rounded-[8px] text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 transition-colors"
                  aria-invalid={!!errors.phone}
                />
              )}
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        {/* State and City Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white text-sm mb-2">State</label>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className="w-full px-4 py-3 bg-transparent border border-[rgba(255,255,255,0.16)] rounded-[8px] text-white/50  focus:outline-none focus:border-white/60 transition-colors appearance-none cursor-pointer data-[state=open]:text-white data-[placeholder]:text-white/50 [&>svg]:fill-[rgba(255,255,255,0.6)]"
                    aria-invalid={!!errors.state}
                  >
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent className="bg-blue-900 border-white/20">
                    <SelectItem value="state1" className="text-white">
                      State 1
                    </SelectItem>
                    <SelectItem value="state2" className="text-white">
                      State 2
                    </SelectItem>
                    <SelectItem value="state3" className="text-white">
                      State 3
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state.message}</p>}
          </div>
          <div>
            <label className="block text-white text-sm mb-2">City</label>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className="w-full px-4 py-3 bg-transparent border border-[rgba(255,255,255,0.16)] rounded-[8px] text-white/50 focus:outline-none focus:border-white/60 transition-colors appearance-none cursor-pointer data-[state=open]:text-white data-[placeholder]:text-white/50 [&>svg]:fill-[rgba(255,255,255,0.6)]"
                    aria-invalid={!!errors.city}
                  >
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent className="bg-blue-900 border-white/20">
                    <SelectItem value="city1" className="text-white">
                      City 1
                    </SelectItem>
                    <SelectItem value="city2" className="text-white">
                      City 2
                    </SelectItem>
                    <SelectItem value="city3" className="text-white">
                      City 3
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city.message}</p>}
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <label className="block text-white text-sm mb-2">Additional information</label>
          <Controller
            name="additionalInfo"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                placeholder="Add additional notes"
                rows={10}
                className="w-full min-h-[152px] px-4 py-3 bg-transparent border border-[rgba(255,255,255,0.16)] rounded-[8px] text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 transition-colors resize-none"
              />
            )}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-1 sm:pt-4">
          <button
            type="submit"
            className="px-12 py-3 bg-white text-[#030303] font-medium rounded-full transition-all duration-500 hover:bg-gradient-to-r hover:from-[#2CC59C] hover:via-[#00EEA8] hover:to-[#2CC59C] hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
