'use client';

import React, { useState } from 'react';

const ContactPage = () => {
const [form, setForm] = useState({ name: '', email: '', message: '' });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
console.log('Form submitted:', form);
alert('Thank you for reaching out! We will get back to you shortly.');
setForm({ name: '', email: '', message: '' });
};

return (
<div className="max-w-3xl mx-auto px-4 py-12">
<h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
<p className="text-center text-gray-600 mb-10">
Have questions about the ₹60,000 membership or our nationwide events? Fill out the form and we'll reach out!
</p>
<form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6">
    <div>
      <label className="block mb-2 font-semibold text-gray-700" htmlFor="name">
        Name
      </label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#ffb74d]"
        placeholder="Your full name"
      />
    </div>

    <div>
      <label className="block mb-2 font-semibold text-gray-700" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#ffb74d]"
        placeholder="you@example.com"
      />
    </div>

    <div>
      <label className="block mb-2 font-semibold text-gray-700" htmlFor="message">
        Message
      </label>
      <textarea
        name="message"
        rows={5}
        value={form.message}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#ffb74d]"
        placeholder="Let us know how we can help you"
      />
    </div>

    <button
      type="submit"
      className="bg-[#ffb74d] hover:bg-[#ffa726] text-white font-bold py-3 px-6 rounded-full transition duration-300"
    >
      Send Message
    </button>
  </form>
</div>
);
};

export default ContactPage;