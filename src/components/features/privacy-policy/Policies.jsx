"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronRight } from "lucide-react"; // arrow icon

const policies = [
  { id: 1, title: "Personal identification information" },
  { id: 2, title: "Non-personal identification information" },
  { id: 3, title: "Web browser cookies" },
  { id: 4, title: "How we use collected information" },
  { id: 5, title: "How we protect your information" },
  { id: 6, title: "Sharing your personal information" },
  { id: 7, title: "Third party websites" },
  { id: 8, title: "Changes to this privacy policy" },
  { id: 9, title: "Your acceptance of these terms" },
  { id: 10, title: "Contacting us" },
];

const policyDetails = [
  {
    title: "Personal identification information",
    description:
      "We may collect personal identification information from users in a variety of ways, including when users visit our site, register, place an order, or fill out a form. This information may include name, email address, phone number, and other details as required.",
  },
  {
    title: "Non-personal identification information",
    description:
      "We may collect non-personal identification information about users whenever they interact with our website. This may include the browser name, type of computer, technical information about users' means of connection, such as operating system and internet service providers utilized.",
  },
  {
    title: "Web browser cookies",
    description:
      "Our website may use 'cookies' to enhance the user experience. Users' web browsers place cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browsers to refuse cookies or alert when cookies are being sent.",
  },
  {
    title: "How we use collected information",
    description:
      "We may collect and use users' personal information to improve customer service, personalize user experience, process payments, send periodic emails, or improve our site based on the feedback received.",
  },
  {
    title: "How we protect your information",
    description:
      "We adopt appropriate data collection, storage, and processing practices along with security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and data stored on our site.",
  },
  {
    title: "Sharing your personal information",
    description:
      "We do not sell, trade, or rent users' personal identification information to others. We may share limited information with trusted business partners, affiliates, or advertisers for the purposes outlined above, provided that they agree to keep this information confidential.",
  },
  {
    title: "Third party websites",
    description:
      "Users may find advertising or other content on our site that links to the sites and services of our partners, suppliers, or other third parties. We do not control the content or links that appear on these sites and are not responsible for their practices.",
  },
  {
    title: "Changes to this privacy policy",
    description:
      "We reserve the right to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently check this page for any changes to stay informed.",
  },
  {
    title: "Your acceptance of these terms",
    description:
      "By using this site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our site. Continued use of the site following the posting of changes will be deemed your acceptance of those changes.",
  },
  {
    title: "Contacting us",
    description:
      "If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us through our official communication channels.",
  },
];

export default function Policies() {
  const [activeSection, setActiveSection] = useState(policies[0].id);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute("data-id"));
            setActiveSection(id);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id - 1];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <section className="mt-[140px] mb-[140px]">
      <div className="container flex gap-[64px]">
        {/* Sidebar */}
        <div className="min-h-[350px] min-w-[350px]">
          <div className="flex flex-col gap-[14px] sticky top-[100px]">
            {policies.map((policy) => (
              <div key={policy.id} className="flex items-center gap-3">
                <ChevronRight
                  className={`w-4 h-4 transition-all duration-300 ${activeSection === policy.id ? "text-blue-600 opacity-100" : "opacity-0"}`}
                />
                <button
                  onClick={() => scrollToSection(policy.id)}
                  className={`text-left text-[15px] font-medium transition-all duration-200 ${
                    activeSection === policy.id ? "text-blue-600" : "text-gray-800 hover:text-blue-500"
                  }`}
                >
                  <span>{policy.title}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-[64px] scroll-smooth">
          {policyDetails.map((policy, idx) => (
            <div key={idx} data-id={idx + 1} ref={(el) => (sectionRefs.current[idx] = el)}>
              <h2 className="text-[32px] font-medium text-[#373737] mb-[16px]">{policy.title}</h2>
              <p className="text-[#373737] text-[16px] leading-relaxed">{policy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
