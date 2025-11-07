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
import Image from "next/image";
import { Heading } from "../utils/Heading";
import parse from "html-react-parser";
import { Text } from "../utils/Text";
import DownloadForm from "../form/DownloadForm";
import SuccessComp from "./SuccessComp";

const local_data = {
  media: {
    type: "image",
    path: "/images/brochureModal-1.jpg",
    alt: "brochureModal",
  },
  title: "Download Brochure.",
  description: "<p>Please enter your details to download the brochure.</p>",
  button: null,
};

export default function BrochureModal({ children, data = local_data }) {
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
          <DialogTitle>Download Brochure</DialogTitle>
          <DialogDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, id.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-wrap">
          <div className="w-full sm:w-[168px] xl:w-[400px]">
            <div className="w-full h-[120px] sm:h-full rounded-[15px] xl:rounded-[24px] overflow-hidden bg-[#fcfcfc] border-[2px] xl:border-[4px] border-white">
              <Image
                src={data?.media?.path}
                alt={data?.media?.alt}
                width={460}
                height={620}
                className="w-full h-full block object-cover transition hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full sm:w-[calc(100%_-_168px)] xl:w-[calc(100%_-_400px)] flex items-center">
            {!isSuccess ? (
              <div className="w-full p-[20px] xl:p-[30px] 2xl:p-[40px]">
                <div className="mb-[15px] xl:mb-[20px] 2xl:mb-[20px]">
                  <Heading
                    as="div"
                    size="heading3"
                    className="font-medium text-start text-[#030303] xl:mb-[5px] 2xl:mb-[10px]"
                  >
                    {data?.title}
                  </Heading>
                  <Text as="div" size="text2" className="text-[#373737]">
                    {parse(data?.description)}
                  </Text>
                </div>
                <DownloadForm onSuccess={handleFormSuccess} />
              </div>
            ) : (
              <SuccessComp />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
