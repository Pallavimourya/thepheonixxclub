'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-[#0a1433] mb-8">🔒 Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Effective Date: May 7, 2025</p>

          <p className="text-gray-700 mb-6">
            Welcome to The Phoenixx Club. This Privacy Policy explains how we collect, use, and protect your personal information.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-[#0a1433] mb-4">1. Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Personal Details: Name, email address, phone number when you join or contact us.</li>
                <li>Event Info: Details when registering for events or private sessions.</li>
                <li>Device & Usage Info: IP address, browser type, visited pages.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0a1433] mb-4">2. How We Use Your Data</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>To manage your account and memberships.</li>
                <li>To organize and communicate about events.</li>
                <li>To provide customer support.</li>
                <li>To improve our services and website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0a1433] mb-4">3. Sharing Your Data</h2>
              <p className="text-gray-700 mb-4">We do not sell or rent your data. We may share with:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Event partners or hosts (with consent).</li>
                <li>Service providers (email tools, analytics).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0a1433] mb-4">4. Cookies</h2>
              <p className="text-gray-700">
                We use cookies to enhance user experience and gather analytics. See our{' '}
                <Link href="/cookie-policy" className="text-[#0a1433] hover:text-[#ffb74d]">
                  Cookie Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0a1433] mb-4">5. Your Rights</h2>
              <p className="text-gray-700 mb-4">You can:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Request access or deletion of your data.</li>
                <li>Opt out of marketing emails.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0a1433] mb-4">6. Contact</h2>
              <p className="text-gray-700 mb-2">If you have questions, contact us at:</p>
              <div className="space-y-2">
                <p className="text-gray-700">📧 thephoenixxclub@gmail.com</p>
                <p className="text-gray-700">📞 +91-9977334588</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 