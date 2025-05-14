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
                By using The Phoenixx Club services, you're agreeing to these terms. Don't worry, we keep it simple and fun - 
                just like our events! Here's what you need to know:
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">Club Rules 🎭</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Be awesome and respectful to fellow attendees</li>
                <li>Keep event details confidential</li>
                <li>Follow event guidelines and dress codes</li>
                <li>Have fun responsibly (we're all about good vibes!)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">Event Policies 🎪</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>RSVP early to secure your spot (we're popular!)</li>
                <li>No-shows might affect future event access</li>
                <li>Event details are confidential</li>
                <li>Photos may be taken (let us know if you prefer privacy)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">Safety & Security 🛡️</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>We prioritize your safety at all events</li>
                <li>Follow venue safety guidelines</li>
                <li>Report any concerns to our staff</li>
                <li>Emergency procedures will be shared at events</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-900">Changes to Terms 📝</h3>
              <p className="text-gray-700">
                We may update these terms occasionally. We'll notify you of any significant changes. 
                Continued use of our services means you accept the updated terms.
              </p>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600">
                Questions about our terms? {' '}
                <Link href="/contact" className="text-pink-500 hover:text-pink-600 font-semibold">
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 