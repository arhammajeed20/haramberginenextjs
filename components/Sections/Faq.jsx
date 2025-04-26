"use client";

import { use, useState } from "react";

const faqData = [
  {
    category: "General Questions",
    questions: [
      "What is Harambergine?",
      "What is Harambergine's goal?",
      "Is this a serious project?",
      "Why should I buy this?",
      "Why am I buying this?",
      "Will it be listed?",
      "Should I buy this?",
      "Will this pump?",
    ],
  },
  {
    category: "Token & Presale",
    questions: [
      "Where can I buy HBE tokens?",
      "How long will the presale last?",
      "When will I receive my tokens?",
    ],
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 bg-gradient-to-b from-purple-950 to-black"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-white">Frequently Asked </span>
            <span className="text-yellow-500">Questions</span>
          </h2>
          <div className="space-y-8">
            {faqData.map((section, sectionIdx) => (
              <div
                key={sectionIdx}
                className="rounded-lg border-2 text-card-foreground shadow-[0_5px_15px_rgba(128,0,255,0.3)] bg-purple-900/20 border-purple-700"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-6">
                    {section.category}
                  </h3>
                  <div className="w-full">
                    {section.questions.map((question, idx) => {
                      const questionIndex = `${sectionIdx}-${idx}`;
                      const isOpen = openIndex === questionIndex;
                      return (
                        <div
                          key={questionIndex}
                          className="border-b border-purple-800"
                        >
                          <button
                            type="button"
                            onClick={() => toggleQuestion(questionIndex)}
                            className="flex w-full items-center justify-between py-4 transition-all hover:underline text-white text-left font-medium"
                          >
                            {question}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`h-4 w-4 shrink-0 transition-transform duration-200 text-gray-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </button>
                          {isOpen && (
                            <div className="overflow-hidden text-sm text-gray-300 pb-4">
                              <p>
                                This is a placeholder answer for: "{question}".
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
