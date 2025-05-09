'use client';

import React, { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signin } = useAuth();
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

    try {
      const result = await signin(formData.email, formData.password);

      if (result.success) {
        setSuccess(result.message);
        // Clear form
        setFormData({
          email: '',
          password: '',
        });
        // Redirect to dashboard after 1 second
        setTimeout(() => {
          router.push('/dashboard');
        }, 1000);
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
          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
          <p className="mt-2 text-gray-300">Sign in to your exclusive account</p>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-white/5 text-amber-500 focus:ring-amber-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="text-amber-500 hover:text-amber-400">
                  Forgot your password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Don't have an account?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/signup"
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 