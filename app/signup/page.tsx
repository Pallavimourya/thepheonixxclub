'use client';

import React, { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear messages when user starts typing
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Please enter a valid 10-digit phone number');
      setIsLoading(false);
      return;
    }

    try {
      const result = await signup({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      if (result.success) {
        setSuccess(result.message);
        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
        });
        // Redirect to signin after 2 seconds
        setTimeout(() => {
          router.push('/signin');
        }, 2000);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <Image
              src="/logo.png"
              alt="The Phoenixx Club"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-3xl font-bold text-white">Join The Club</h2>
          <p className="mt-2 text-gray-300">Create your exclusive account</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          {error && (
            <div className="mb-6 bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-6 bg-green-500/20 border border-green-500/50 text-green-200 px-4 py-3 rounded-xl text-sm">
              {success}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                placeholder="Confirm your password"
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-white/20 bg-white/5 text-amber-500 focus:ring-amber-500"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                I agree to the{' '}
                <a href="#" className="text-amber-500 hover:text-amber-400">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-amber-500 hover:text-amber-400">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Already have an account?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/signin"
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 