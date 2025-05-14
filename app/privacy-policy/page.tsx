'use client';

import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 text-center">Privacy Policy</h1>
          
          <div className="bg-white rounded-xl p-8 shadow-lg space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-indigo-900">Your Privacy Matters to Us! 🛡️</h2>
              <p className="text-gray-700">
                At The Phoenixx Club, we're all about creating amazing experiences while keeping your information safe and secure. 
                Think of us as your trusted friend who knows how to keep a secret! 🤫
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">What We Collect 🎯</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Your name and contact details (so we can invite you to awesome events!)</li>
                <li>Your preferences (to make sure we throw parties you'll love)</li>
                <li>Event attendance history (to improve our events)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">How We Use Your Info 🎉</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>To send you exclusive event invites</li>
                <li>To personalize your club experience</li>
                <li>To keep you updated on upcoming parties</li>
                <li>To improve our events and services</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">Your Rights 📋</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Access your personal data</li>
                <li>Request data correction</li>
                <li>Ask us to delete your data</li>
                <li>Opt-out of communications</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">Data Security 🔒</h3>
              <p className="text-gray-700">
                We use industry-standard security measures to protect your information. Your data is encrypted 
                and stored securely, accessible only to authorized personnel.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">Contact Us 📬</h3>
              <p className="text-gray-700">
                Questions about your privacy? We're here to help! Reach out to us at{' '}
                <Link href="/contact" className="text-pink-500 hover:text-pink-600 font-semibold">
                  Contact Us
                </Link>
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

export default PrivacyPolicy; 