import { useState } from "react";

const faqs = [
  {
    question: "Is there a refund or return policy?",
    answer: "Yes, we offer a 7-day easy return policy for your convenience.",
  },
  {
    question: "Do you offer any discounts or promotions?",
    answer:
      "Yes, we regularly provide discounts and special promotions to our customers.",
  },
  {
    question: "How often do you release updates or new features?",
    answer:
      "We release new features and updates every month to improve your experience.",
  },
  {
    question: "What are the payment options available?",
    answer:
      "Check your dashboard, the payment currency depends on your location.",
  },
  {
    question: "How do I reset my password if I forget it?",
    answer: "Click on forgot password or reach out to support.",
  },
  {
    question: "How can I cancel my order?",
    answer:
      "Reach out to support with order ID and reason for order cancellations.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl text-blue-700 font-bold mb-8 mt-16">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-3 text-lg font-semibold text-blue-800"
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <p className="text-gray-700 py-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        <p className="text-lg text-blue-700">
          For any other questions, feel free to each out to us at{" "}
          <a href="mailto:worldmart@gmail.com">worldmart@gmail.com</a>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
