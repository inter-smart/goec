"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import { Heading } from "../utils/Heading";
import SuccessComp from "./SuccessComp";
import ApplyForm from "../form/ApplyForm";
import RecaptchaProvider from "../layout/CaptchaWrapper";

export default function CareerModal({ children, data }) {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSuccess = () => {
    setIsSuccess(true);
  };

  const handleDialogChange = (open) => {
    // Reset success state when dialog closes
    if (!open) {
      setIsSuccess(false);
    }
  };

  return (
    <Dialog className="p-0" onOpenChange={handleDialogChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogPortal>
        <DialogOverlay className={"bg-black/40 backdrop-blur-[4px]"} />
        <DialogContent className="sm:max-w-[576px] xl:max-w-[820px] 2xl:max-w-[1024px] p-0 rounded-[15px] xl:rounded-[24px] gap-2 2xl:gap-4">
          <DialogHeader className={"sr-only"}>
            <DialogTitle>Apply Now!</DialogTitle>
            <DialogDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              id.
            </DialogDescription>
          </DialogHeader>
          {!isSuccess ? (
            <div className="w-full p-[20px] xl:p-[40px] 2xl:p-[60px] max-h-[85vh] overflow-y-auto">
              <div className="mb-[15px] xl:mb-[20px] 2xl:mb-[30px]">
                <Heading
                  as="div"
                  size="heading4"
                  className="font-medium text-start text-[#030303]"
                >
                  Apply Now!
                </Heading>
              </div>
              <RecaptchaProvider>
                <ApplyForm careerData={data} onSuccess={handleFormSuccess} />
              </RecaptchaProvider>
            </div>
          ) : (
            <SuccessComp />
          )}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
