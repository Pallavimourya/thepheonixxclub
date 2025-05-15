'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is The Phoenixx Club?",
      answer: "The Phoenixx Club is an exclusive social club that organizes premium events and gatherings. We focus on creating memorable experiences through luxury entertainment and social connections."
    },
    {
      question: "How many events do you organize?",
      answer: "We organize 8 premium events annually, each with its own unique theme and experience. Our events range from elegant galas to intimate social gatherings."
    },
    {
      question: "Where are your events held?",
      answer: "Our events are organized across major cities in India. The specific venues are carefully selected to provide the best possible experience for our attendees."
    },
    {
      question: "What makes your events special?",
      answer: "Our events are known for their attention to detail, premium experiences, and the opportunity to connect with like-minded individuals. Each event is carefully curated to ensure an unforgettable experience."
    },
    {
      question: "Can I bring guests to the events?",
      answer: "Yes, guests are welcome at our events. However, specific guest policies may vary depending on the event type and venue capacity."
    },
    {
      question: "How can I stay updated about upcoming events?",
      answer: "You can follow us on our social media channels (Instagram and Facebook) or sign up for our newsletter to receive updates about upcoming events."
    },
    {
      question: "What is your dress code?",
      answer: "Our dress code varies by event but generally ranges from smart casual to formal. Specific dress code requirements will be communicated for each event."
    },
    {
      question: "How can I contact The Phoenixx Club?",
      answer: "You can reach us at thephoenixxclub@gmail.com or call us at +91-9977334588. We're always happy to assist you!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Everything you need to know about The Phoenixx Club
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-lg font-semibold text-indigo-900">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-indigo-900 transform transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-48 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">Still Have Questions?</h2>
            <p className="text-gray-700 mb-8">
              We&apos;re here to help! Reach out to us through any of these channels:
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="mailto:thephoenixxclub@gmail.com"
                className="flex items-center text-indigo-900 hover:text-pink-500 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                thephoenixxclub@gmail.com
              </a>
              <a
                href="tel:+919977334588"
                className="flex items-center text-indigo-900 hover:text-pink-500 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91-9977334588
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage; 