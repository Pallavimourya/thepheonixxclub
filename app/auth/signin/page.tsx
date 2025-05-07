'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signin } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await signin(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <Image src="/logo.png" alt="The Phoenixx Club" width={60} height={60} className="mb-3" />
          <h2 className="text-2xl font-bold text-[#0a1433]">Sign in to your account</h2>
          <p className="mt-1 text-sm text-gray-500">Welcome back to The Phoenixx Club</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="space-y-1">
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-[#0a1433] focus:border-[#0a1433]"
              placeholder="you@example.com"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-[#0a1433] focus:border-[#0a1433]"
              placeholder="••••••••"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <Link href="/auth/forgot-password" className="text-[#0a1433] hover:text-[#ffb74d]">
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 bg-[#0a1433] text-white text-sm font-medium rounded-lg hover:bg-[#ffb74d] hover:text-[#0a1433] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>

          <div className="text-center text-sm">
            <Link href="/auth/signup" className="text-[#0a1433] hover:text-[#ffb74d]">
              Don&apos;t have an account? Apply for membership
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
} 