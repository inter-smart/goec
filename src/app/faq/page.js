import FaqHeroSection from "@/components/features/faq/FaqHeroSection";
import FaqInfoSection from "@/components/features/faq/FaqInfoSection";

const local_data = {
  banner_section: {
    media: {
      mobile: {
        media_path: "/images/faq-hero-1.jpg",
        media_alt: "hero",
      },
      desktop: {
        media_path: "/images/faq-hero-1.jpg",
        media_alt: "hero",
      },
    },
    title: "Frequently Asked <br /> Questions",
  },
  categories: {
    list: [
      {
        id: 1,
        title: "General FAQ",
      },
      {
        id: 2,
        title: "GO EC App",
      },
      {
        id: 3,
        title: "How to Charge",
      },
    ],
  },
  faqs: {
    list: [
      {
        category: 1,
        question:
          "Can I reserve a charging slot in advance, and how do I do so?",
        answer:
          "You can apply for a student visa by submitting your university offer letter, financial documents, and valid passport through the visa portal of the respective country.",
      },
      {
        category: 1,
        question:
          "Does GOEC offer an automatic stop feature once charging is finished?",
        answer:
          "Yes, When the charging is finished, the power will be turned off automatically, so there is no need to worry about the battery overheating.",
      },
      {
        category: 1,
        question: "Do DC chargers charge more quickly than AC?",
        answer:
          "Yes, When the charging is finished, the power will be turned off automatically, so there is no need to worry about the battery overheating.",
      },
      {
        category: 1,
        question: "Does GOEC provide fast charging facility?",
        answer:
          "Yes, When the charging is finished, the power will be turned off automatically, so there is no need to worry about the battery overheating.",
      },
      {
        question: "How am I going to pay for the charge?",
        answer:
          "Yes, When the charging is finished, the power will be turned off automatically, so there is no need to worry about the battery overheating.",
        category: 2,
      },
      {
        category: 2,
        question: "What types of payment methods are accepted for charging?",
        answer:
          "Yes, When the charging is finished, the power will be turned off automatically, so there is no need to worry about the battery overheating.",
      },
      {
        category: 2,
        question: "Are there any membership discounts for frequent users?",
        answer:
          "Yes, When the charging is finished, the power will be turned off automatically, so there is no need to worry about the battery overheating.",
      },
      {
        category: 2,
        question:
          "How long does it typically take to charge an electric vehicle?",
        answer:
          "Yes, When the charging is finished, the power will be turned off automatically, so there is no need to worry about the battery overheating.",
      },
      {
        category: 2,
        question: "What are the advantages of using a public charging station?",
        answer:
          "Yes, When the charging is finished, the power will be turned off automatically, so there is no need to worry about the battery overheating.",
      },
      {
        category: 3,
        question:
          "33 What are the advantages of using a public charging station?",
        answer:
          "Yes, When the charging is finished, the power will be turned off automatically, so there is no need to worry about the battery overheating.",
      },
      {
        category: 3,
        question:
          "33 What are the advantages of using a public charging station?",
        answer:
          "Yes, When the charging is finished, the power will be turned off automatically, so there is no need to worry about the battery overheating.",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <FaqHeroSection data={local_data?.banner_section} />
      <FaqInfoSection
        categories={local_data?.categories}
        faq_items={local_data?.faqs}
      />
    </>
  );
}
