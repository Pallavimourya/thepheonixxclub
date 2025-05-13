'use client';

import React from 'react';
import { Star, Users, Calendar, Gift, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';

const BenefitPage = () => {
  const benefits = [
    {
      icon: <Star className="w-6 h-6 text-white" />,
      title: "Premium Events",
      description: "Access to 8 exclusive events annually, each crafted to provide unforgettable moments and premium entertainment.",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Elite Network",
      description: "Connect with a curated community of like-minded individuals who share your passion for excellence.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Nationwide Events",
      description: "Events organized across major cities in India, bringing luxury and entertainment closer to you.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Gift className="w-6 h-6 text-white" />,
      title: "VIP Perks",
      description: "Enjoy exclusive benefits, priority access, and special privileges at partner venues and events.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Privacy & Exclusivity",
      description: "Experience events in a discreet environment where your privacy is respected and exclusivity is guaranteed.",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "Premium Experience",
      description: "Every event is crafted to provide the ultimate party experience with luxury touches and premium service.",
      gradient: "from-teal-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Membership Benefits</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Experience the ultimate in luxury entertainment with our exclusive membership benefits
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">Ready to Join?</h2>
            <p className="text-gray-700 mb-8">
              Become a member today and start enjoying exclusive benefits and premium experiences.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-indigo-900 mb-2">₹60,000</div>
              <div className="text-gray-600 mb-6">Annual Membership</div>
              <Link
                href="#membership"
                className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitPage;
