'use client';

import React from 'react';

const BenefitPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Membership Benefits</h1>

      <div className="bg-white shadow-lg rounded-xl p-8 space-y-6">
        <div className="border-l-4 border-green-500 pl-4">
          <h2 className="text-2xl font-semibold">One-Time Registration</h2>
          <p className="text-gray-700 mt-2">
            ₹5000 only — this one-time fee secures your entry into our exclusive network of passionate members.
          </p>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h2 className="text-2xl font-semibold">Annual Membership</h2>
          <p className="text-gray-700 mt-2">
            ₹55,000 per year — enjoy complete access to all community events, collaborations, and premium features.
          </p>
        </div>

        <div className="border-l-4 border-yellow-500 pl-4">
          <h2 className="text-2xl font-semibold">Nationwide Events</h2>
          <p className="text-gray-700 mt-2">
            We organize events all across India — whether it's Delhi, Mumbai, Chennai, or beyond. You'll always stay informed about upcoming opportunities.
          </p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <h2 className="text-2xl font-semibold">Annual Event Access</h2>
          <p className="text-gray-700 mt-2">
            Each member is eligible to attend 8 major events throughout the year. Make connections, learn, and grow!
          </p>
        </div>

      </div>
    </div>
  );
};

export default BenefitPage;
