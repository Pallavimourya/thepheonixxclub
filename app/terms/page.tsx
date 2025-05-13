'use client';

import React from 'react';
import Link from 'next/link';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 text-center">Terms of Service</h1>
          
          <div className="bg-white rounded-xl p-8 shadow-lg space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-indigo-900">Welcome to The Party! 🎉</h2>
              <p className="text-gray-700">
                By joining The Phoenixx Club, you're agreeing to these terms. Don't worry, we keep it simple and fun - 
                just like our events! Here's what you need to know:
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">Membership Rules 🎭</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Be awesome and respectful to fellow members</li>
                <li>Keep your membership details confidential</li>
                <li>Follow event guidelines and dress codes</li>
                <li>Have fun responsibly (we're all about good vibes!)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">Event Policies 🎪</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>RSVP early to secure your spot (we're popular!)</li>
                <li>No-shows might affect future event access</li>
                <li>Event details are for members only</li>
                <li>Photos may be taken (let us know if you prefer privacy)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">Payment Terms 💳</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Membership fees are non-refundable</li>
                <li>Payments are processed securely</li>
                <li>Special events may have additional costs</li>
                <li>Keep your payment info updated</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">Code of Conduct 🤝</h3>
              <p className="text-gray-700">
                We're all about creating a positive, inclusive environment. This means:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Treat everyone with respect</li>
                <li>No harassment or discrimination</li>
                <li>Keep the party vibes positive</li>
                <li>Report any issues to our team</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">Contact Us 📱</h3>
              <p className="text-gray-700">
                Questions about our terms? We're here to help! Reach out to us at{' '}
                <a href="mailto:thephoenixxclub@gmail.com" className="text-pink-600 hover:text-pink-700">
                  thephoenixxclub@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 