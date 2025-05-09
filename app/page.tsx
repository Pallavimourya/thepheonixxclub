'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, MapPin, Star, Users, ArrowRight, Clock, Check } from "lucide-react"
import { useAuth } from '@/lib/auth-context';
import { initAnimations } from '@/lib/animations';

export default function Home() {
  const { user } = useAuth();
  const [showMoreImages, setShowMoreImages] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Luxury Club Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1605744435823-b88e4e9bc044?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Luxury Event"
    },
    {
      src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Exclusive Party"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    initAnimations();
  }, []);

  const handleSlideClick = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image src="/logo.png" alt="The Phoenixx Club" width={50} height={50} className="mr-3" />
              <div className="flex flex-col">
                <span className="text-[#0a1433] font-bold text-xl">The Phoenixx Club</span>
                <span className="text-gray-500 text-xs">Luxury, Laughter and Legacy</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-[#0a1433] hover:text-[#ffb74d] font-medium">
                Home
              </Link>
              <Link href="#events" className="text-[#0a1433] hover:text-[#ffb74d] font-medium">
                Events
              </Link>
              <Link href="#gallery" className="text-[#0a1433] hover:text-[#ffb74d] font-medium">
                Gallery
              </Link>
              <Link href="#membership" className="text-[#0a1433] hover:text-[#ffb74d] font-medium">
                Membership
              </Link>
              <Link href="#community" className="text-[#0a1433] hover:text-[#ffb74d] font-medium">
                Community
              </Link>
              <Link href="/about" className="text-[#0a1433] hover:text-[#ffb74d] font-medium">
                About
              </Link>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/auth/signin"
                className="px-4 py-2 rounded-md bg-[#0a1433] text-white hover:bg-[#162552] transition-colors"
              >
                Login
              </Link>
              <Link
                href="#membership"
                className="px-4 py-2 rounded-md bg-[#ffb74d] text-[#0a1433] hover:bg-[#ffa726] transition-colors"
              >
                Join Now
              </Link>
            </div>
            <button className="md:hidden text-[#0a1433]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={handleSlideClick}
                style={{ cursor: 'pointer' }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-2xl mx-auto text-center hero-content">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Ignite the Night with Phoenixx Events
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience luxury, laughter and legacy with the most exclusive club events in the city.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center hero-buttons">
              <Link
                href="#membership"
                className="px-8 py-3 rounded-md bg-[#ffb74d] text-[#0a1433] font-bold hover:bg-[#ffa726] transition-colors flex items-center justify-center gsap-button-1"
              >
                Join Now <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#events"
                className="px-8 py-3 rounded-md bg-transparent border-2 border-white text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center gsap-button-2"
              >
                Upcoming Events <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Slideshow Section */}
      

      {/* Events Section */}
      <section id="events" className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a1433] mb-4">Our Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us for our exclusive events throughout the year. We organize 8 premium events annually for our
              members.
            </p>
          </div>

          {/* Featured Event */}
          <div className="mb-16 bg-white rounded-xl overflow-hidden shadow-xl border-2 border-[#ffb74d]">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto relative">
                <Image
                  src="https://images.unsplash.com/photo-1721133073235-e4b5facb27fa?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Luxury Event"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1433] to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 bg-[#ffb74d] text-[#0a1433] px-3 py-1 rounded-md font-bold">
                  FEATURED EVENT
                </div>
                <div className="absolute bottom-4 left-4 bg-white text-[#0a1433] px-3 py-1 rounded-md font-bold flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Coming Soon</span>
                </div>
              </div>
              <div className="p-8">
                <div className="inline-block bg-[#0a1433]/10 text-[#0a1433] px-3 py-1 rounded-md text-sm font-medium mb-4">
                  Inaugural Event
                </div>
                <h3 className="text-2xl font-bold text-[#0a1433] mb-3">Summer Gala Night</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>June 15, 2025 • 8:00 PM</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Grand Ballroom, Luxury Hotel</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Join us for our first exclusive event - an unforgettable night of elegance, entertainment, and
                  exclusive networking. This inaugural gala will set the standard for all future Phoenixx Club events.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-[#0a1433] font-bold">Exclusive to Members</div>
                  <Link
                    href="/auth/signup"
                    className="px-6 py-3 rounded-md bg-[#ffb74d] text-[#0a1433] hover:bg-[#ffa726] transition-colors text-sm font-bold flex items-center"
                  >
                    Become a Member <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Event Calendar */}
          {/* <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-xl font-bold text-[#0a1433] mb-6 text-center">2025 Event Calendar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-gray-200 rounded-lg p-4 text-center hover:border-[#ffb74d] transition-colors">
                <div className="text-lg font-bold text-[#0a1433] mb-1">Q1</div>
                <div className="text-sm text-gray-600 mb-3">January - March</div>
                <div className="text-[#ffb74d] font-medium">2 Exclusive Events</div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center hover:border-[#ffb74d] transition-colors">
                <div className="text-lg font-bold text-[#0a1433] mb-1">Q2</div>
                <div className="text-sm text-gray-600 mb-3">April - June</div>
                <div className="text-[#ffb74d] font-medium">2 Exclusive Events</div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center hover:border-[#ffb74d] transition-colors">
                <div className="text-lg font-bold text-[#0a1433] mb-1">Q3</div>
                <div className="text-sm text-gray-600 mb-3">July - September</div>
                <div className="text-[#ffb74d] font-medium">2 Exclusive Events</div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center hover:border-[#ffb74d] transition-colors">
                <div className="text-lg font-bold text-[#0a1433] mb-1">Q4</div>
                <div className="text-sm text-gray-600 mb-3">October - December</div>
                <div className="text-[#ffb74d] font-medium">2 Exclusive Events</div>
              </div>
            </div>
            <div className="text-center text-gray-600 mt-6">
              Event details will be provided to members as each event approaches.
            </div>
          </div> */}

          <div className="text-center">
            {/* <Link
              href="/auth/signup"
              className="inline-flex items-center px-6 py-3 rounded-md bg-[#0a1433] text-white hover:bg-[#162552] transition-colors"
            >
              Join to Access All Events <ArrowRight className="ml-2 h-5 w-5" />
            </Link> */}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a1433] mb-4">Exclusive Membership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Join our elite community and unlock a world of luxury experiences, networking opportunities, and exclusive events.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#ffb74d]/20 membership-card">
              {/* Membership Header */}
              <div className="bg-gradient-to-r from-[#0a1433] to-[#162552] p-8 text-center">
                <div className="inline-block bg-[#ffb74d] text-[#0a1433] px-4 py-1 rounded-full text-sm font-bold mb-4">
                  PREMIUM MEMBERSHIP
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">The Phoenixx Club</h3>
                <p className="text-gray-300">Elevate Your Social Experience</p>
              </div>

              {/* Membership Content */}
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Left Column - Benefits */}
                  <div>
                    <div className="mb-8">
                      <h4 className="text-2xl font-bold text-[#0a1433] mb-6 flex items-center">
                        <Star className="w-6 h-6 text-[#ffb74d] mr-2" /> Membership Benefits
                      </h4>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mr-3">
                            <Check className="w-4 h-4 text-[#ffb74d]" />
                          </div>
                          <span className="text-gray-700">Access to all 8 exclusive events per year</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mr-3">
                            <Check className="w-4 h-4 text-[#ffb74d]" />
                          </div>
                          <span className="text-gray-700">Premium networking with elite professionals</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mr-3">
                            <Check className="w-4 h-4 text-[#ffb74d]" />
                          </div>
                          <span className="text-gray-700">Complimentary guest passes for select events</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mr-3">
                            <Check className="w-4 h-4 text-[#ffb74d]" />
                          </div>
                          <span className="text-gray-700">Priority access to limited-capacity events</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-[#0a1433] mb-6 flex items-center">
                        <Star className="w-6 h-6 text-[#ffb74d] mr-2" /> Additional Perks
                      </h4>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mr-3">
                            <Check className="w-4 h-4 text-[#ffb74d]" />
                          </div>
                          <span className="text-gray-700">Exclusive partner benefits and discounts</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mr-3">
                            <Check className="w-4 h-4 text-[#ffb74d]" />
                          </div>
                          <span className="text-gray-700">Access to members-only communication channels</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mr-3">
                            <Check className="w-4 h-4 text-[#ffb74d]" />
                          </div>
                          <span className="text-gray-700">Personalized concierge service</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mr-3">
                            <Check className="w-4 h-4 text-[#ffb74d]" />
                          </div>
                          <span className="text-gray-700">Opportunity to host club events</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Pricing & CTA */}
                  <div className="bg-gray-50 rounded-xl p-8">
                    <div className="mb-8">
                      <div className="text-4xl font-bold text-[#0a1433] mb-2">₹55,000</div>
                      <div className="text-gray-600">Annual Membership</div>
                      <div className="text-sm text-gray-500 mt-2">+ ₹5,000 one-time registration</div>
                    </div>

                    <div className="space-y-6 mb-8">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-5 h-5 text-[#ffb74d] mr-3" />
                        <span>Valid for one calendar year</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Users className="w-5 h-5 text-[#ffb74d] mr-3" />
                        <span>Limited memberships available</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-5 h-5 text-[#ffb74d] mr-3" />
                        <span>Access to all 8 annual events</span>
                      </div>
                    </div>

                    <Link
                      href="/auth/signup"
                      className="block w-full py-4 rounded-xl bg-[#0a1433] text-white text-center font-bold hover:bg-[#162552] transition-colors text-lg mb-4"
                    >
                      Apply for Membership
                    </Link>
                    <p className="text-center text-sm text-gray-500">
                      For inquiries: <a href="mailto:thephoenixxclub@gmail.com" className="text-[#0a1433] hover:underline">thephoenixxclub@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a1433] mb-4">Our Community</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our growing community of elite professionals and entrepreneurs who value meaningful connections and
              exclusive experiences.
            </p>
          </div>

          {/* Community Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 community-stats">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#ffb74d]" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1433] mb-2">Exclusive Network</h3>
              <p className="text-gray-600">
                Connect with a carefully curated community of successful professionals and entrepreneurs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-[#ffb74d]" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1433] mb-2">Premium Events</h3>
              <p className="text-gray-600">
                8 meticulously planned events per year, each offering unique experiences and networking opportunities.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#ffb74d]" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1433] mb-2">Luxury Experience</h3>
              <p className="text-gray-600">
                Every detail is crafted to provide a premium experience that reflects our commitment to excellence.
              </p>
            </div>
          </div>

          {/* Member Profiles */}
          {/* <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0a1433] text-center mb-8">Our Distinguished Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 bg-[#0a1433]/90 relative flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#ffb74d] flex items-center justify-center text-[#0a1433] text-3xl font-bold">
                    E
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-[#0a1433] text-xl mb-1">Entrepreneurs</h4>
                  <p className="text-gray-600 mb-4">
                    Visionary business leaders who are shaping industries and creating new opportunities.
                  </p>
                  <div className="flex justify-center">
                    <div className="inline-block bg-[#0a1433]/10 text-[#0a1433] px-3 py-1 rounded-full text-sm font-medium">
                      30% of our community
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 bg-[#0a1433]/90 relative flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#ffb74d] flex items-center justify-center text-[#0a1433] text-3xl font-bold">
                    P
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-[#0a1433] text-xl mb-1">Professionals</h4>
                  <p className="text-gray-600 mb-4">
                    Accomplished executives and experts from various industries seeking valuable connections.
                  </p>
                  <div className="flex justify-center">
                    <div className="inline-block bg-[#0a1433]/10 text-[#0a1433] px-3 py-1 rounded-full text-sm font-medium">
                      45% of our community
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 bg-[#0a1433]/90 relative flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#ffb74d] flex items-center justify-center text-[#0a1433] text-3xl font-bold">
                    I
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-[#0a1433] text-xl mb-1">Influencers</h4>
                  <p className="text-gray-600 mb-4">
                    Thought leaders and innovators who are driving change and setting new standards.
                  </p>
                  <div className="flex justify-center">
                    <div className="inline-block bg-[#0a1433]/10 text-[#0a1433] px-3 py-1 rounded-full text-sm font-medium">
                      25% of our community
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Founding Members */}
          {/* <div className="bg-white rounded-xl p-8 shadow-xl border border-[#ffb74d] max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0a1433] text-center mb-6">Founding Members Opportunity</h3>
            <p className="text-gray-600 text-center mb-8">
              We're currently accepting applications for our exclusive founding members. As a founding member, you'll
              enjoy special privileges and help shape the future of The Phoenixx Club.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-[#0a1433] mb-3 flex items-center">
                  <Star className="w-5 h-5 text-[#ffb74d] mr-2" /> Founding Member Benefits
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#ffb74d] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Lifetime recognition as a founding member</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#ffb74d] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Input on future club events and initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#ffb74d] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Special recognition at club events</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-[#0a1433] mb-3 flex items-center">
                  <Star className="w-5 h-5 text-[#ffb74d] mr-2" /> Limited Availability
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#ffb74d] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Only 50 founding memberships available</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#ffb74d] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Application and interview process required</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#ffb74d] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Standard membership fees apply</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 rounded-md bg-[#0a1433] text-white hover:bg-[#162552] transition-colors"
              >
                Apply for Founding Membership <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a1433] mb-4">Why Join The Phoenixx Club?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the benefits that make our club the premier destination for those seeking luxury, laughter, and
              legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg feature-card">
              <div className="w-12 h-12 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-[#ffb74d]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0a1433] mb-2">Exclusive Networking</h3>
              <p className="text-gray-600">
                Connect with influential professionals, entrepreneurs, and like-minded individuals in a curated
                environment.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg feature-card">
              <div className="w-12 h-12 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-[#ffb74d]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0a1433] mb-2">Premium Events</h3>
              <p className="text-gray-600">
                Attend carefully curated events ranging from elegant galas to intimate workshops, all designed to create
                memorable experiences.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg feature-card">
              <div className="w-12 h-12 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-[#ffb74d]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0a1433] mb-2">Exclusive Perks</h3>
              <p className="text-gray-600">
                Enjoy special discounts, priority access, and unique benefits with our partner brands and venues.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg feature-card">
              <div className="w-12 h-12 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-[#ffb74d]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0a1433] mb-2">Personalized Experience</h3>
              <p className="text-gray-600">
                Receive tailored recommendations and concierge services that cater to your preferences and lifestyle.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-6 shadow-lg feature-card">
              <div className="w-12 h-12 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-[#ffb74d]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0a1433] mb-2">Privacy & Exclusivity</h3>
              <p className="text-gray-600">
                Enjoy a discreet environment where your privacy is respected and exclusivity is guaranteed.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-6 shadow-lg feature-card">
              <div className="w-12 h-12 rounded-full bg-[#ffb74d]/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-[#ffb74d]"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0a1433] mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                Access workshops, seminars, and mentorship programs designed to help you grow personally and
                professionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-12 bg-[#0a1433] relative">
  <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover opacity-5"></div>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12"> */}
      {/* Left Side - Call to Action */}
      {/* <div className="text-center lg:text-left max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Join The Phoenixx Club</h2>
        <p className="text-lg text-gray-300 mb-6">
          Be part of an exclusive community with access to events, collaborations, and more.
        </p>
        <Link
          href="/auth/signup"
          className="px-6 py-2 rounded-md bg-[#ffb74d] text-[#0a1433] font-bold hover:bg-[#ffa726] transition-colors"
        >
          Join Now
        </Link>
      </div> */}

      {/* Right Side - Wider Contact Form */}
      {/* <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-[700px]">
        <h3 className="text-xl font-semibold text-[#0a1433] mb-4">Contact Us</h3>
        <form action="#" method="POST" className="space-y-4">
          <div className="flex space-x-6">
            <div className="flex-1">
              <label className="block text-[#0a1433] font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full border border-gray-300 rounded-md p-3"
                placeholder="Your Name"
              />
            </div>
            <div className="flex-1">
              <label className="block text-[#0a1433] font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full border border-gray-300 rounded-md p-3"
                placeholder="you@example.com"
              />
            </div>
          </div> */}

          {/* <div>
            <label className="block text-[#0a1433] font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={3}
              required
              className="w-full border border-gray-300 rounded-md p-3"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-2 bg-[#ffb74d] text-[#0a1433] font-bold rounded-md hover:bg-[#ffa726] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section> */}

      {/* Party Gallery Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0a1433] mb-3">Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Moments from our exclusive events
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Gallery Image 1 */}
            <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=3538&auto=format&fit=crop"
                alt="Luxury Gala"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Luxury Gala</span>
              </div>
            </div>

            {/* Gallery Image 2 */}
            <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item">
              <Image
                src="https://images.unsplash.com/photo-1605744435823-b88e4e9bc044?q=80&w=3540&auto=format&fit=crop"
                alt="Cocktail Evening"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Cocktail Evening</span>
              </div>
            </div>

            {/* Gallery Image 3 */}
            <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item">
              <Image
                src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=3540&auto=format&fit=crop"
                alt="VIP Lounge"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">VIP Lounge</span>
              </div>
            </div>

            {/* Gallery Image 4 */}
            <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item">
              <Image
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=3540&auto=format&fit=crop"
                alt="Exclusive Party"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Exclusive Party</span>
              </div>
            </div>

            {/* Gallery Image 5 */}
            <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item">
              <Image
                src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=3000&auto=format&fit=crop"
                alt="Wine Tasting"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Wine Tasting</span>
              </div>
            </div>

            {/* Additional Images (shown when showMoreImages is true) */}
            {showMoreImages && (
              <>
                {/* Gallery Image 6 */}
                <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item">
                  <Image
                    src="https://images.unsplash.com/photo-1623281722102-1bde4c57c90c?q=80&w=3088&auto=format&fit=crop"
                    alt="Business Mixer"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Business Mixer</span>
                  </div>
                </div>

                {/* Gallery Image 7 */}
                <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item">
                  <Image
                    src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=3540&auto=format&fit=crop"
                    alt="Art Night"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Art Night</span>
                  </div>
                </div>

                {/* Gallery Image 8 */}
                <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item">
                  <Image
                    src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=3540&auto=format&fit=crop"
                    alt="Summer Gala"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Summer Gala</span>
                  </div>
                </div>

                {/* Gallery Image 9 */}
                <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item">
                  <Image
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=3538&auto=format&fit=crop"
                    alt="Charity Ball"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Charity Ball</span>
                  </div>
                </div>

                {/* Gallery Image 10 */}
                <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item">
                  <Image
                    src="https://images.unsplash.com/photo-1605744435823-b88e4e9bc044?q=80&w=3540&auto=format&fit=crop"
                    alt="New Year's Eve"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">New Year's Eve</span>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setShowMoreImages(!showMoreImages)}
              className="inline-flex items-center px-6 py-2 rounded-md bg-[#0a1433] text-white hover:bg-[#162552] transition-colors text-sm"
            >
              {showMoreImages ? 'Show Less' : 'View More'}
              <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${showMoreImages ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 footer-content">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <Image src="/logo.png" alt="The Phoenixx Club" width={60} height={60} className="mr-3" />
                <span className="text-[#0a1433] font-bold text-xl">The Phoenixx Club</span>
              </div>
              <p className="text-gray-600 mb-4">Luxury, Laughter and Legacy</p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61575687517147" className="text-gray-400 hover:text-[#ffb74d]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/thephoenixxclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-400 hover:text-[#ffb74d]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="mailto:thephoenixxclub@gmail.com" className="text-gray-400 hover:text-[#ffb74d]">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path d="M2 6.5V17.5C2 18.328 2.672 19 3.5 19H20.5C21.328 19 22 18.328 22 17.5V6.5C22 5.672 21.328 5 20.5 5H3.5C2.672 5 2 5.672 2 6.5ZM20.5 6L12 11.25L3.5 6H20.5ZM3 7.465L12 12.25L21 7.465V16.535L12 11.75L3 16.535V7.465Z"></path>
                 </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0a1433] uppercase tracking-wider mb-4">Membership</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#membership" className="text-gray-600 hover:text-[#ffb74d]">
                    Join Now
                  </Link>
                </li>
                <li>
                  <Link href="/benefit" className="text-gray-600 hover:text-[#ffb74d]">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="/FAQ" className="text-gray-600 hover:text-[#ffb74d]">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0a1433] uppercase tracking-wider mb-4">Events</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#ffb74d]">
                    Calendar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#ffb74d]">
                    Past Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#ffb74d]">
                    Host an Event
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#ffb74d]">
                    Private Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0a1433] uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-2">
               
                <li className="text-gray-600">thephoenixxclub@gmail.com</li>
                <li className="text-gray-600">+91-9977334588</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} The Phoenixx Club. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-[#0a1433] text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-[#0a1433] text-sm">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-gray-500 hover:text-[#0a1433] text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
