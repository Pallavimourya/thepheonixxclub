'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Users, Calendar, MapPin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">About The Phoenixx Club</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Where luxury meets entertainment, and every moment becomes a celebration of life's finest experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">Our Story</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                The Phoenixx Club was born from a vision to create an exclusive social haven where like-minded individuals could come together to celebrate life's finest moments. We believe in creating unforgettable experiences that blend luxury, entertainment, and meaningful connections.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our club is more than just a venue – it's a vibrant community where members can enjoy premium events, forge lasting friendships, and create memories that last a lifetime. With our carefully curated events and premium services, we ensure that every moment spent with us is nothing short of extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-indigo-900 mb-12 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Premium Events</h3>
              <p className="text-gray-600">
                Experience 8 exclusive events annually, each crafted to provide unforgettable moments and premium entertainment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Elite Network</h3>
              <p className="text-gray-600">
                Connect with a curated community of like-minded individuals who share your passion for excellence.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Nationwide Presence</h3>
              <p className="text-gray-600">
                Events organized across major cities in India, bringing luxury and entertainment closer to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">Join Our Exclusive Community</h2>
            <p className="text-gray-700 mb-8">
              Become part of The Phoenixx Club and experience a world of luxury, entertainment, and meaningful connections.
            </p>
            <Link
              href="#membership"
              className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
