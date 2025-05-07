'use client';

import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-[#0a1433] mb-8">🧿 About Us – The Phoenixx Club</h1>

          <p className="text-gray-700 mb-6">
            The Phoenixx Club is a dynamic community built on the foundation of friendship, growth, and shared values. We are committed to creating a positive space where members can connect, celebrate, and contribute to personal and collective development.
          </p>

          <p className="text-gray-700 mb-6">
            We believe in rising together — just like the Phoenix — and creating opportunities for learning, bonding, and celebration through engaging activities and events.
          </p>

          <div className="bg-[#0a1433] text-white p-6 rounded-xl mb-8">
            <p className="text-lg italic">
              "Rise. Connect. Celebrate."
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0a1433] mb-4">🎯 Our Purpose</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Foster strong friendships and meaningful connections</li>
              <li>Host engaging events, gatherings, and celebrations</li>
              <li>Promote personal growth, creativity, and positivity</li>
              <li>Create a welcoming environment for all age groups</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0a1433] mb-4">🎉 What We Do</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Festive and cultural celebrations</li>
              <li>Workshops and creative sessions</li>
              <li>Social get-togethers and fun games</li>
              <li>Fitness, wellness, and lifestyle events</li>
              <li>Community building and bonding</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0a1433] mb-4">📞 Get in Touch</h2>
            <div className="space-y-2">
              <p className="text-gray-700">📧 thephoenixxclub@gmail.com</p>
              <p className="text-gray-700">📞 +91-9977334588</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
