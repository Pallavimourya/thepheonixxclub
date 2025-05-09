'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Phone validation using a regular expression for valid phone numbers
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    setIsLoading(true);

    try {
      await signup({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      router.push('/');
    } catch (err) {
      setError('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-2xl shadow-xl border border-gray-100 p-8">
        <div className="flex flex-col items-center mb-6">
          <Image src="/logo.png" alt="The Phoenixx Club" width={60} height={60} className="mb-4" />
          <h2 className="text-3xl font-bold text-[#0a1433] text-center">Join The Phoenixx Club</h2>
          <p className="text-gray-500 text-sm text-center mt-2">Be a part of an elite community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <input
              name="firstName"
              type="text"
              required
              placeholder="First Name"
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-[#0a1433] focus:border-[#0a1433] w-full"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              name="lastName"
              type="text"
              required
              placeholder="Last Name"
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-[#0a1433] focus:border-[#0a1433] w-full"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <input
            name="email"
            type="email"
            required
            placeholder="Email address"
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm w-full focus:ring-[#0a1433] focus:border-[#0a1433]"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            name="phone"
            type="text"
            required
            placeholder="Phone number (10 digits)"
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm w-full focus:ring-[#0a1433] focus:border-[#0a1433]"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm w-full focus:ring-[#0a1433] focus:border-[#0a1433]"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            name="confirmPassword"
            type="password"
            required
            placeholder="Confirm Password"
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm w-full focus:ring-[#0a1433] focus:border-[#0a1433]"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#0a1433] hover:bg-[#ffb74d] text-white hover:text-[#0a1433] transition-colors font-semibold py-2 px-4 rounded-lg text-sm disabled:opacity-60"
          >
            {isLoading ? 'Creating account...' : 'Sign up'}
          </button>

          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{' '}
            <Link href="/auth/signin" className="text-[#0a1433] hover:text-[#ffb74d] font-medium">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
