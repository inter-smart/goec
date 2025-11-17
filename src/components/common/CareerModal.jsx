"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Heading } from "../utils/Heading";
import SuccessComp from "./SuccessComp";
import ApplyForm from "../form/ApplyForm";

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
      <DialogContent className="sm:max-w-[576px] xl:max-w-[1060px] 2xl:max-w-[1100px] p-0 rounded-[15px] xl:rounded-[24px] gap-2 2xl:gap-4">
        <DialogHeader className={"sr-only"}>
          <DialogTitle>Apply Now!</DialogTitle>
          <DialogDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, id.
          </DialogDescription>
        </DialogHeader>
        {!isSuccess ? (
          <div className="w-full p-[20px] xl:p-[50px] 2xl:p-[60px]">
            <div className="mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
              <Heading
                as="div"
                size="heading3"
                className="font-medium text-start text-[#030303]"
              >
                Apply Now!
              </Heading>
            </div>
            <ApplyForm careerData={data} onSuccess={handleFormSuccess} />
          </div>
        ) : (
          <SuccessComp />
        )}
      </DialogContent>
    </Dialog>
  );
}
