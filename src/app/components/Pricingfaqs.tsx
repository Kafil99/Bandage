import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = Array(5).fill({
    question: "The quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  });

  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold mb-4">Pricing FAQs</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </p>
      </div>

      <div
        className="grid grid-cols-2 gap-x-16 gap-y-8"
        style={{
          gridTemplateColumns: "60% 40%",
        }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${index === 2 ? "col-start-2 row-start-1" : ""} ${
              index === 3 ? "col-start-2" : ""
            }`}
          >
            <button
              className="w-full flex items-center justify-between py-4 text-left"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp
                  className="flex-shrink-0 ml-2 text-blue-400"
                  size={20}
                />
              ) : (
                <ChevronDown
                  className="flex-shrink-0 ml-2 text-blue-400"
                  size={20}
                />
              )}
            </button>

            <div
              id={`faq-${index}`}
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96" : "max-h-0"
              } overflow-hidden`}
            >
              <p className="pr-8 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-gray-600">
          Haven't got your answer?{" "}
          <a className="text-blue-600" href="#contact">
            Contact our support
          </a>
        </p>
      </div>
    </main>
  );
}
