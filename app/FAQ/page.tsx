'use client';

import React, { useState } from 'react';

const faqs = [
{
question: 'What is the one-time registration fee for?',
answer:
'The ₹5000 one-time registration fee secures your official entry into our exclusive community and ensures priority updates about upcoming events across India.',
},
{
question: 'What does the ₹55,000 annual membership include?',
answer:
'It includes full access to all major events we organize throughout the year, networking opportunities, premium content, and exclusive member-only perks.',
},
{
question: 'How many events can I attend in a year?',
answer:
'You can attend up to 8 major events in one year as part of your membership.',
},
{
question: 'Where are the events organized?',
answer:
'Events are organized all over India including major cities like Delhi, Mumbai, Bangalore, Hyderabad, and more. You’ll receive all event details directly.',
},
{
question: 'Is the membership renewable every year?',
answer:
'Yes, the membership is valid for one year and can be renewed annually for continued access to all benefits and events.',
},
];

const FAQPage = () => {
const [activeIndex, setActiveIndex] = useState<number | null>(null);

const toggleIndex = (index: number) => {
setActiveIndex(index === activeIndex ? null : index);
};

return (
<div className="max-w-3xl mx-auto px-4 py-12">
<h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
<div className="space-y-4">
{faqs.map((faq, index) => (
<div key={index} className="border border-gray-200 rounded-lg shadow-md">
<button
onClick={() => toggleIndex(index)}
className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#ffb74d] rounded-t-lg font-medium text-gray-800"
>
{faq.question}
</button>
{activeIndex === index && (
<div className="px-6 py-4 text-gray-600 bg-gray-50 rounded-b-lg">{faq.answer}</div>
)}
</div>
))}
</div>
</div>
);
};

export default FAQPage;