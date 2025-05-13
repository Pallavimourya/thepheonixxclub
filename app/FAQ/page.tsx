'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is included in the membership?',
    answer: 'The ₹60,000 annual membership includes access to all exclusive events, networking opportunities, and VIP benefits throughout the year.'
  },
  {
    question: 'Where are the events organized?',
    answer: "Events are organized all over India including major cities like Delhi, Mumbai, Bangalore, Hyderabad, and more. You will receive all event details directly."
  },
  {
    question: 'How many events can I attend in a year?',
    answer: 'You can attend up to 8 major events in one year as part of your membership.'
  },
  {
    question: 'Is the membership renewable every year?',
    answer: 'Yes, the membership is valid for one year and can be renewed annually for continued access to all benefits and events.'
  }
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-indigo-900 mb-12 text-center">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-indigo-900">{faq.question}</span>
                <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;