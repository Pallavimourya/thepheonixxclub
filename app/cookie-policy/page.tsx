'use client';

import React from 'react';
import Link from 'next/link';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 text-center">Cookie Policy</h1>
          
          <div className="bg-white rounded-xl p-8 shadow-lg space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-indigo-900">Our Cookie Story 🍪</h2>
              <p className="text-gray-700">
                No, we're not talking about the delicious kind! These cookies are tiny pieces of data that help us make your 
                experience at The Phoenixx Club even better. Think of them as your VIP pass to a smoother website experience!
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">What Are Cookies? 🎯</h3>
              <p className="text-gray-700">
                Cookies are like little notes that our website leaves on your device to remember your preferences and make 
                your visit more enjoyable. They help us:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Remember your login status</li>
                <li>Keep track of your preferences</li>
                <li>Make our website faster and more reliable</li>
                <li>Show you content you'll love</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">Types of Cookies We Use 🎨</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Essential Cookies (keeping the party running!)</li>
                <li>Preference Cookies (making it your kind of party)</li>
                <li>Analytics Cookies (helping us throw better parties)</li>
                <li>Marketing Cookies (showing you events you'll love)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">Your Cookie Choices 🎭</h3>
              <p className="text-gray-700">
                You're in control! You can:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Accept all cookies (recommended for the best experience)</li>
                <li>Choose which cookies to accept</li>
                <li>Delete cookies anytime through your browser settings</li>
                <li>Block cookies (though some features might not work)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">Questions? We're Here! 📱</h3>
              <p className="text-gray-700">
                Want to know more about our cookies? Drop us a line at{' '}
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

export default CookiePolicy;
