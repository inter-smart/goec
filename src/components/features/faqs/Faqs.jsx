"use client";

import { ActionButton } from "@/components/utils/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FaqItems from "./FaqItems";
import { useState } from "react";

const categories = [
  {
    id: 1,
    title: "General",
  },
  {
    id: 2,
    title: "Billing",
  },
  {
    id: 3,
    title: "Payment",
  },
  {
    id: 4,
    title: "Account",
  },
  {
    id: 5,
    title: "Security",
  },
  {
    id: 6,
    title: "Support",
  },
  {
    id: 7,
    title: "Other",
  },
];

const faqs = [
  // General
  {
    id: 1,
    categoryId: 1,
    question: "What is your service about?",
    answers: "Our service provides solutions to help users manage their tasks efficiently and stay organized.",
  },
  {
    id: 2,
    categoryId: 1,
    question: "How can I contact support?",
    answers: "You can contact our support team via email, chat, or phone, and we aim to respond within 24 hours.",
  },

  // Billing
  {
    id: 3,
    categoryId: 2,
    question: "How do I update my billing information?",
    answers: "You can update your billing details from your account settings under the Billing section.",
  },
  {
    id: 4,
    categoryId: 2,
    question: "When will I be billed?",
    answers: "Billing occurs on a monthly basis, on the same day you initially subscribed to the service.",
  },

  // Payment
  {
    id: 5,
    categoryId: 3,
    question: "Which payment methods are accepted?",
    answers: "We accept credit cards, debit cards, and digital wallets like PayPal and Google Pay.",
  },
  {
    id: 6,
    categoryId: 3,
    question: "Can I get a refund?",
    answers: "Refunds are available under our refund policy. Contact support with your request for evaluation.",
  },

  // Account
  {
    id: 7,
    categoryId: 4,
    question: "How do I reset my password?",
    answers: "Go to the login page, click on 'Forgot Password', and follow the instructions to reset your password.",
  },
  {
    id: 8,
    categoryId: 4,
    question: "How can I delete my account?",
    answers: "You can request account deletion by contacting our support team. Please note this action is irreversible.",
  },
];

export default function Faqs() {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id);

  const handleCategory = (id) => {
    setActiveCategory(id);
  };

  const filteredFaqs = faqs.filter((faq) => faq?.categoryId === activeCategory);

  return (
    <section className="container my-[70px] sm:my-[140px] xl:my-[124px]">
      <div className="w-full flex flex-col gap-3 sm:gap-[24px] sm:flex-row">
        <div className="min-w-[280px] xl:min-w-[248px] 2xl:min-w-[280px] 3xl:min-w-[373px] hidden sm:flex ">
          <div className="w-full flex flex-col items-center gap-1">
            {categories?.map((category) => (
              <button
                key={category?.id}
                type="button"
                onClick={() => handleCategory(category?.id)}
                className={` rounded-[16px] text-[12px]  w-full  px-[24px] py-[22px] ${activeCategory === category?.id ? "bg-gradient-to-r from-[#0f51a9] via-[#0055e0] to-[#0f51a9] text-white" : "bg-white text-black"} `}
              >
                <div className="flex items-center  gap-2 ">
                  <p className="sm:text-[12px] lg:text-[14px] xl:text-[20px] 2xl:text-[16px] 3xl:text-[20px] leading-none font-medium">
                    {category?.title}
                  </p>
                  <div className="flex flex-1 justify-end">{activeCategory === category?.id && <ArrowRight className="w-4 h-4" />}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="w-full flex items-center gap-1 sm:hidden overflow-x-auto pb-2">
            {categories?.map((category) => (
              <button
                key={category?.id}
                type="button"
                onClick={() => handleCategory(category?.id)}
                className={`max-w-[150px] 3xs:max-w-[160px] sm:max-w-[200px] xl:max-w-[220px] 2xl:max-w-[240px] rounded-[16px] text-[12px]  w-full  px-[24px] py-[6px] sm:py-[22px] ${activeCategory === category?.id ? "bg-gradient-to-r from-[#0f51a9] via-[#0055e0] to-[#0f51a9] text-white" : "bg-white text-black"} `}
              >
                <div className="flex items-center  gap-2 sm:text-[12px] xl:text-[20px] 2xl:text-[16px] 3xl:text-[20px] leading-none font-medium">
                  <p>{category?.title}</p>
                  <div className="hidden sm:flex flex-1 justify-end">{activeCategory === category?.id && <ArrowRight className="w-4 h-4" />}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 ">
          <FaqItems data={filteredFaqs} key={filteredFaqs?.[0]?.id} />
        </div>
      </div>
    </section>
  );
}
