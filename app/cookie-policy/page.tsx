'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieBanner = () => {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    setAccepted(true);
    localStorage.setItem('cookieConsent', 'true');
  };

  if (accepted) return null;

  return (
    <div style={styles.cookieBanner}>
      <div>
        <h3>Cookie Policy</h3>
        <p>
          We use cookies to improve your experience on our site. By continuing to use our website, you consent to our use of cookies. 
          <Link href="/cookie-policy" style={styles.link}>Learn More</Link>
        </p>
      </div>
      <button onClick={handleAccept} style={styles.acceptButton}>Accept</button>
    </div>
  );
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-[#0a1433] mb-8">🍪 Cookie Policy</h1>

          <p className="text-gray-700 mb-6">
            This Cookie Policy explains how The Phoenixx Club uses cookies.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-[#0a1433] mb-4">What Are Cookies?</h2>
              <p className="text-gray-700">
                Cookies are small files stored on your device that help improve your experience on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0a1433] mb-4">Types of Cookies We Use</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Essential Cookies: Enable core features like login and form submissions.</li>
                <li>Performance Cookies: Help us understand how visitors interact (via analytics).</li>
                <li>Functionality Cookies: Store your preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0a1433] mb-4">Managing Cookies</h2>
              <p className="text-gray-700">
                You can disable cookies via your browser settings, but some features may not function properly.
              </p>
            </section>
          </div>
        </div>
      </div>
      <CookieBanner />
    </div>
  );
}

const styles = {
  cookieBanner: {
    position: 'fixed' as const,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center' as const,
    display: 'flex' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    zIndex: 9999,
  },
  link: {
    color: '#6ACFC7',
    textDecoration: 'underline',
  },
  acceptButton: {
    backgroundColor: '#6ACFC7',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
  },
};
