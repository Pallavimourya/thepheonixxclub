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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 shadow-lg border-b border-indigo-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Title */}
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="The Phoenixx Club"
                width={50}
                height={50}
                className="mr-3 drop-shadow-glow animate-pulse"
              />
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-xl tracking-widest animate-glow">
                  The Phoenixx Club
                </span>
                <span className="text-amber-200 text-xs">Luxury, Laughter and Legacy</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["Home", "Events", "Gallery", "Membership", "Community", "About"].map((item, index) => (
                <Link
                  key={index}
                  href={item === "Home" ? "/" : item === "About" ? "/about" : `#${item.toLowerCase()}`}
                  className="text-white font-semibold hover:text-amber-200 transition-all duration-300 hover:scale-110"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/auth/signin"
                className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all font-bold backdrop-blur-sm"
              >
                Login
              </Link>
              <Link
          href="#membership"
          className="px-4 py-2 rounded-full bg-yellow-300 text-pink-800 hover:bg-white hover:text-pink-600 transition-all font-bold shadow-md animate-bounce"
        >
          Join Now
        </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Mobile Dropdown */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-indigo-900/95 backdrop-blur-sm border border-indigo-200/20 rounded-lg shadow-lg z-50 py-2 space-y-2">
                  {["Home", "Events", "Gallery", "Membership", "Community", "About", "FAQ", "Benefits"].map((item, index) => (
                    <Link
                      key={index}
                      href={item === "Home" ? "/" : item === "About" ? "/about" : item === "FAQ" ? "/FAQ" : item === "Benefits" ? "/benefit" : `#${item.toLowerCase()}`}
                      className="block px-4 py-2 text-white hover:text-amber-200 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                  <hr className="border-indigo-200/20" />
                  <Link
                    href="/auth/signin"
                    className="block px-4 py-2 text-white hover:text-amber-200 transition font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="#membership"
                    className="block px-4 py-2 text-amber-200 hover:text-white transition font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join Now
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] overflow-hidden">
          {/* Background with Parallax Effect */}
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
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
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative h-full">
            <div className="container mx-auto px-4 h-full">
              <div className="grid lg:grid-cols-2 gap-8 items-center h-full py-12">
                {/* Left Column - Main Content */}
                <div className="text-left space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/40 to-purple-500/40 backdrop-blur-sm border border-amber-200/20 shadow-[0_0_15px_rgba(0,0,0,0.5)] animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                      <span className="text-amber-200 text-sm font-medium">Join the Party! Limited Spots Available</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                      <span className="block">Where Fun Meets</span>
                      <span className="block mt-2 bg-gradient-to-r from-pink-500 via-amber-200 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] animate-gradient">
                        Elite Social Life
                      </span>
                    </h1>
                    <p className="text-lg text-slate-200 max-w-lg leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                      Experience the most exclusive parties, meet amazing people, and create unforgettable memories. Your VIP journey starts here! 🎉
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="#membership"
                      className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_20px_rgba(255,0,128,0.5)] transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center">
                        Join the Party
                        <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </Link>
                    <Link
                      href="#events"
                      className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border border-amber-200/20 hover:bg-white/20 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_20px_rgba(255,215,0,0.3)]"
                    >
                      <span className="flex items-center">
                        See What's Hot
                        <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>

                  {/* Quick Stats */}
            
                </div>

                {/* Right Column - Feature Card */}
                <div className="hidden lg:block">
                  <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(255,0,128,0.3)] transition-all duration-300">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center animate-pulse">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">VIP Access</h3>
                          <p className="text-slate-200">Exclusive parties & events</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center animate-pulse">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Elite Network</h3>
                          <p className="text-slate-200">Connect with amazing people</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center animate-pulse">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Party Calendar</h3>
                          <p className="text-slate-200">8 epic events annually</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-16 bg-gradient-to-b from-slate-50 to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-indigo-900 mb-4 tracking-wide uppercase">Upcoming Events</h2>
              <p className="text-slate-700 max-w-2xl mx-auto text-lg">
                Join us for our exclusive events throughout the year. We organize 8 premium events annually for our
                members.
              </p>
            </div>

            {/* Featured Event */}
            <div className="mb-16 bg-white rounded-xl overflow-hidden shadow-2xl border border-indigo-200">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto relative">
                  <Image
                    src="https://images.unsplash.com/photo-1721133073235-e4b5facb27fa?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Upcoming Event"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 bg-indigo-900 text-white px-3 py-1 rounded-md font-bold">
                    FEATURED EVENT
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-indigo-900 px-3 py-1 rounded-md font-bold flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Coming Soon</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="inline-block bg-indigo-100 text-indigo-900 px-3 py-1 rounded-md text-sm font-medium mb-4">
                    Upcoming Event
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-900 mb-3">Coming Soon</h3>
                  <div className="flex items-center text-slate-700 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Date Not Declared</span>
                  </div>
                  <div className="flex items-center text-slate-700 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Venue Not Declared</span>
                  </div>
                  <p className="text-slate-700 mb-6">
                    Details of our upcoming event will be revealed soon. Stay tuned for exciting announcements!
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="text-indigo-900 font-bold">Exclusive to Members</div>
                    <Link
                      href="/auth/signup"
                      className="px-6 py-3 rounded-md bg-indigo-900 text-white hover:bg-indigo-800 transition-all duration-300 text-sm font-bold flex items-center"
                    >
                      Become a Member <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Section */}
        <section id="membership" className="py-16 bg-gradient-to-b from-slate-50 to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-indigo-900 mb-4 tracking-wide uppercase">Join the Party! 🎉</h2>
              <p className="text-slate-700 max-w-2xl mx-auto text-lg">
                Get ready for the most exclusive social experiences in town. Your VIP journey awaits!
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-2xl overflow-hidden shadow-2xl border border-pink-200/20 membership-card hover:shadow-[0_8px_32px_rgba(255,0,128,0.2)] transition-all duration-300">
                {/* Header */}
                <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-8 text-center">
                  <div className="inline-block bg-white/20 backdrop-blur-sm text-[#FFD700] px-4 py-1 rounded-full text-sm font-bold mb-4 tracking-widest animate-pulse">
                    VIP ACCESS
                  </div>
                  <h3 className="text-3xl font-extrabold text-white mb-2">The Phoenixx Club</h3>
                  <p className="text-white/80">Where Every Night is a Celebration! ✨</p>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div>
                      <div className="mb-8">
                        <h4 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center">
                          <Star className="w-6 h-6 text-pink-500 mr-2" /> Party Perks
                        </h4>
                        <ul className="space-y-4">
                          {[
                            "8 exclusive parties & events annually",
                            "Meet amazing people & make new friends",
                            "Bring your VIP friends to special events",
                            "Priority access to all club events"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-3">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-slate-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center">
                          <Star className="w-6 h-6 text-pink-500 mr-2" /> VIP Benefits
                        </h4>
                        <ul className="space-y-4">
                          {[
                            "Exclusive partner discounts & offers",
                            "Private member-only communications",
                            "Personal party concierge service",
                            "Host your own exclusive events"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-3">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-slate-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8">
                      <div className="space-y-6 mb-8">
                        <h3 className="text-xl font-bold text-indigo-900">Legal</h3>
                        <ul className="space-y-2">
                          <li>
                            <Link href="/privacy-policy" className="text-slate-700 hover:text-pink-600 transition-colors">
                              Privacy Policy
                            </Link>
                          </li>
                          <li>
                            <Link href="/terms" className="text-slate-700 hover:text-pink-600 transition-colors">
                              Terms of Service
                            </Link>
                          </li>
                          <li>
                            <Link href="/cookie-policy" className="text-slate-700 hover:text-pink-600 transition-colors">
                              Cookie Policy
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-6 mb-8">
                        <div className="flex items-center text-slate-700">
                          <Calendar className="w-5 h-5 text-pink-500 mr-3" />
                          <span>Valid for 1 year of epic parties</span>
                        </div>
                        <div className="flex items-center text-slate-700">
                          <Users className="w-5 h-5 text-pink-500 mr-3" />
                          <span>Only 100 VIP spots available</span>
                        </div>
                        <div className="flex items-center text-slate-700">
                          <Clock className="w-5 h-5 text-pink-500 mr-3" />
                          <span>Unlimited party access</span>
                        </div>
                      </div>

                      <Link
                        href="/auth/signup"
                        className="block w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center font-bold hover:shadow-[0_4px_20px_rgba(255,0,128,0.5)] transition-all duration-300 text-lg mb-4"
                      >
                        Join the Party Now! 🎉
                      </Link>
                      <p className="text-center text-sm text-slate-500">
                        Questions? <a href="mailto:thephoenixxclub@gmail.com" className="text-pink-500 hover:underline">thephoenixxclub@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-16 bg-gradient-to-b from-slate-50 to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-indigo-900 mb-4">Meet Your Party Squad! 🎉</h2>
              <p className="text-slate-700 max-w-2xl mx-auto">
                Join our vibrant community of fun-loving, social butterflies who know how to party in style!
              </p>
            </div>

            {/* Community Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 community-stats">
              <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl p-8 text-center shadow-lg border border-pink-200/20 hover:shadow-[0_8px_32px_rgba(255,0,128,0.2)] transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Party People</h3>
                <p className="text-slate-600">
                  Connect with a fun-loving community of social butterflies who know how to have a good time!
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-xl p-8 text-center shadow-lg border border-purple-200/20 hover:shadow-[0_8px_32px_rgba(128,0,255,0.2)] transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Epic Events</h3>
                <p className="text-slate-600">
                  8 amazing parties per year, each with its own unique theme and unforgettable experiences!
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-xl p-8 text-center shadow-lg border border-indigo-200/20 hover:shadow-[0_8px_32px_rgba(0,0,255,0.2)] transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">VIP Experience</h3>
                <p className="text-slate-600">
                  Every event is crafted to provide the ultimate party experience with premium vibes and luxury touches!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-b from-indigo-50 to-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-indigo-900 mb-4">Why Join The Phoenixx Club?</h2>
              <p className="text-slate-700 max-w-2xl mx-auto">
                Discover the benefits that make our club the premier destination for those seeking luxury, excellence, and
                legacy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100 hover:border-indigo-200 transition-all duration-300 feature-card">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-indigo-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Exclusive Networking</h3>
                <p className="text-slate-600">
                  Connect with influential professionals, entrepreneurs, and like-minded individuals in a curated
                  environment.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100 hover:border-indigo-200 transition-all duration-300 feature-card">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-indigo-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Premium Events</h3>
                <p className="text-slate-600">
                  Attend carefully curated events ranging from elegant galas to intimate workshops, all designed to create
                  memorable experiences.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100 hover:border-indigo-200 transition-all duration-300 feature-card">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-indigo-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Exclusive Perks</h3>
                <p className="text-slate-600">
                  Enjoy special privileges, priority access, and unique benefits with our partner brands and venues.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100 hover:border-indigo-200 transition-all duration-300 feature-card">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-indigo-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Personalized Experience</h3>
                <p className="text-slate-600">
                  Receive tailored recommendations and concierge services that cater to your preferences and lifestyle.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100 hover:border-indigo-200 transition-all duration-300 feature-card">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-indigo-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Privacy & Exclusivity</h3>
                <p className="text-slate-600">
                  Enjoy a discreet environment where your privacy is respected and exclusivity is guaranteed.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100 hover:border-indigo-200 transition-all duration-300 feature-card">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-indigo-900"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Growth Opportunities</h3>
                <p className="text-slate-600">
                  Access workshops, seminars, and mentorship programs designed to help you grow personally and
                  professionally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Meet Our Founders
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                The visionaries behind The Phoenixx Club, bringing luxury and entertainment to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
              {/* Founder 1 */}
              <div className="group lg:col-span-1 transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-pink-500/50 transition-all duration-300">
                  <div className="relative w-40 h-40 mx-auto mb-6 rounded-xl overflow-hidden">
                    <Image
                      src="/images/founders/img1.jpg"
                      alt="Rahul Sharma"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      style={{ objectPosition: 'center 30%' }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">Nipun & Prachi Agrawal</h3>
                  <p className="text-pink-300 text-center text-sm">Founder</p>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="group lg:col-span-1 transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-pink-500/50 transition-all duration-300">
                  <div className="relative w-40 h-40 mx-auto mb-6 rounded-xl overflow-hidden">
                    <Image
                      src="/images/founders/img2.jpg"
                      alt="Shikhar & Nikita Goyal"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      style={{ objectPosition: 'center 25%' }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">Shikhar & Nikita Goyal</h3>
                  <p className="text-pink-300 text-center text-sm">Founder</p>
                </div>
              </div>

              {/* Founder 3 */}
              <div className="group lg:col-span-1 transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-pink-500/50 transition-all duration-300">
                  <div className="relative w-40 h-40 mx-auto mb-6 rounded-xl overflow-hidden">
                    <Image
                      src="/images/founders/img3.jpg"
                      alt="Arjun Mehta"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">Raghav & Purva Bagdi</h3>
                  <p className="text-pink-300 text-center text-sm">Founder</p>
                </div>
              </div>

              {/* Founder 4 */}
              <div className="group lg:col-span-1 transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-pink-500/50 transition-all duration-300">
                  <div className="relative w-40 h-40 mx-auto mb-6 rounded-xl overflow-hidden">
                    <Image
                      src="/images/founders/img4.jpg"
                      alt="Ananya Singh"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      style={{ objectPosition: 'center 25%' }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">Anshul & Kratika Singhal</h3>
                  <p className="text-pink-300 text-center text-sm">Founder</p>
                </div>
              </div>

              {/* Founder 5 */}
              <div className="group lg:col-span-1 transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-pink-500/50 transition-all duration-300">
                  <div className="relative w-40 h-40 mx-auto mb-6 rounded-xl overflow-hidden">
                    <Image
                      src="/images/founders/img5.jpg"
                      alt="Vikram Malhotra"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      style={{ objectPosition: 'center 30%' }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">Vaibhav & Trupti Singhal</h3>
                  <p className="text-pink-300 text-center text-sm">Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-12 bg-gradient-to-b from-slate-50 to-indigo-50 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-indigo-900 mb-3">Gallery</h2>
              <p className="text-slate-700 max-w-2xl mx-auto">
                Capturing moments from our exclusive events
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {/* Gallery Image 1 */}
              <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item border border-indigo-100 hover:border-indigo-200 transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=3538&auto=format&fit=crop"
                  alt="Luxury Gala"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Luxury Gala</span>
                </div>
              </div>

              {/* Gallery Image 2 */}
              <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item border border-indigo-100 hover:border-indigo-200 transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1605744435823-b88e4e9bc044?q=80&w=3540&auto=format&fit=crop"
                  alt="Cocktail Evening"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Cocktail Evening</span>
                </div>
              </div>

              {/* Gallery Image 3 */}
              <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item border border-indigo-100 hover:border-indigo-200 transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=3540&auto=format&fit=crop"
                  alt="VIP Lounge"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">VIP Lounge</span>
                </div>
              </div>

              {/* Gallery Image 4 */}
              <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item border border-indigo-100 hover:border-indigo-200 transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=3540&auto=format&fit=crop"
                  alt="Exclusive Event"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Exclusive Event</span>
                </div>
              </div>

              {/* Gallery Image 5 */}
              <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item border border-indigo-100 hover:border-indigo-200 transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=3000&auto=format&fit=crop"
                  alt="Wine Tasting"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Wine Tasting</span>
                </div>
              </div>

              {/* Additional Images (shown when showMoreImages is true) */}
              {showMoreImages && (
                <>
                  {/* Gallery Image 6 */}
                  <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item border border-indigo-100 hover:border-indigo-200 transition-all duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1623281722102-1bde4c57c90c?q=80&w=3088&auto=format&fit=crop"
                      alt="Business Mixer"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Business Mixer</span>
                    </div>
                  </div>

                  {/* Gallery Image 7 */}
                  <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item border border-indigo-100 hover:border-indigo-200 transition-all duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=3540&auto=format&fit=crop"
                      alt="Art Night"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Art Night</span>
                    </div>
                  </div>

                  {/* Gallery Image 8 */}
                  <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item border border-indigo-100 hover:border-indigo-200 transition-all duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=3540&auto=format&fit=crop"
                      alt="Summer Gala"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Summer Gala</span>
                    </div>
                  </div>

                  {/* Gallery Image 9 */}
                  <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item border border-indigo-100 hover:border-indigo-200 transition-all duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=3538&auto=format&fit=crop"
                      alt="Charity Ball"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Charity Ball</span>
                    </div>
                  </div>

                  {/* Gallery Image 10 */}
                  <div className="group relative overflow-hidden rounded-lg aspect-square gallery-item border border-indigo-100 hover:border-indigo-200 transition-all duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1605744435823-b88e4e9bc044?q=80&w=3540&auto=format&fit=crop"
                      alt="New Year's Eve"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">New Year's Eve</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => setShowMoreImages(!showMoreImages)}
                className="inline-flex items-center px-6 py-2 rounded-md bg-indigo-900 text-white hover:bg-indigo-800 transition-colors text-sm"
              >
                {showMoreImages ? 'Show Less' : 'View More'}
                <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${showMoreImages ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-b from-indigo-900 via-purple-900 to-slate-900 border-t border-pink-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 footer-content">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <Image src="/logo.png" alt="The Phoenixx Club" width={60} height={60} className="mr-3 drop-shadow-glow animate-pulse" />
                <div className="flex flex-col">
                  <span className="text-[#FFD700] font-bold text-xl tracking-wider">The Phoenixx Club</span>
                  <span className="text-gray-300 text-xs">Luxury, Laughter and Legacy</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Join India's most exclusive social club for premium entertainment and networking experiences.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61575687517147" className="text-gray-400 hover:text-[#E91E63] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/thephoenixxclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-400 hover:text-[#E91E63] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="mailto:thephoenixxclub@gmail.com" className="text-gray-400 hover:text-[#E91E63] transition-colors">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path d="M2 6.5V17.5C2 18.328 2.672 19 3.5 19H20.5C21.328 19 22 18.328 22 17.5V6.5C22 5.672 21.328 5 20.5 5H3.5C2.672 5 2 5.672 2 6.5ZM20.5 6L12 11.25L3.5 6H20.5ZM3 7.465L12 12.25L21 7.465V16.535L12 11.75L3 16.535V7.465Z"></path>
                 </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#FFD700] uppercase tracking-wider mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-[#E91E63] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-[#E91E63] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/benefit" className="text-gray-300 hover:text-[#E91E63] transition-colors">
                    Benefits
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#FFD700] uppercase tracking-wider mb-4">Membership</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#membership" className="text-gray-300 hover:text-[#E91E63] transition-colors">
                    Join Now
                  </Link>
                </li>
                <li>
                  <Link href="/benefit" className="text-gray-300 hover:text-[#E91E63] transition-colors">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="/FAQ" className="text-gray-300 hover:text-[#E91E63] transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-[#E91E63] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#FFD700] uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:thephoenixxclub@gmail.com"
                    className="inline-flex items-center text-gray-300 hover:text-[#E91E63] transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    thephoenixxclub@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919977334588"
                    className="inline-flex items-center text-gray-300 hover:text-[#E91E63] transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    +91-9977334588
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-pink-500/20 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} The Phoenixx Club. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#E91E63] transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#E91E63] transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-[#E91E63] transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}