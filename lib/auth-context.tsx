'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  membershipStatus: string;
  membershipType: string;
  joinDate: string;
  lastLogin: string;
}

interface AuthContextType {
  user: User | null;
  signup: (userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
  }) => Promise<{ success: boolean; message: string }>;
  signin: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  signout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const signup = async (userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
  }) => {
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          firstName: userData.firstName.trim(),
          lastName: userData.lastName.trim(),
          email: userData.email.trim(),
          phone: userData.phone.trim(),
          password: userData.password,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Signup failed');
      }

      return {
        success: true,
        message: 'Account created successfully! Please sign in.'
      };
    } catch (error) {
      console.error('Signup error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'An error occurred during signup'
      };
    }
  };

  const signin = async (email: string, password: string) => {
    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      setUser(data.user);
      localStorage.setItem('user', JSON.stringify(data.user));
      router.push('/dashboard');

      return {
        success: true,
        message: 'Successfully signed in'
      };
    } catch (error) {
      console.error('Signin error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'An error occurred during sign in'
      };
    }
  };

  const signout = async () => {
    try {
      await fetch('/api/auth/signout', {
        method: 'POST',
      });
    } catch (error) {
      console.error('Signout error:', error);
    } finally {
      setUser(null);
      localStorage.removeItem('user');
      router.push('/auth/signin');
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 