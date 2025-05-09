'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  createdAt: string;
  membershipStatus: string;
  membershipType: string;
  joinDate: string;
  lastLogin: string;
}

interface AuthContextType {
  user: User | null;
  signup: (userData: Partial<User>) => Promise<{ success: boolean; message: string }>;
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
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signup = async (userData: Partial<User>) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.error || 'Failed to create account'
        };
      }

      return {
        success: true,
        message: 'Account created successfully! Please sign in.'
      };
    } catch (error) {
      console.error('Signup error:', error);
      return {
        success: false,
        message: 'An error occurred during signup'
      };
    }
  };

  const signin = async (email: string, password: string) => {
    try {
      const response = await fetch(`/api/users?email=${email}&password=${password}`);
      const data = await response.json();
      
      if (!response.ok) {
        return {
          success: false,
          message: data.error || 'Invalid credentials'
        };
      }

      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      router.push('/dashboard');
      
      return {
        success: true,
        message: 'Signed in successfully!'
      };
    } catch (error) {
      console.error('Signin error:', error);
      return {
        success: false,
        message: 'An error occurred during sign in'
      };
    }
  };

  const signout = async () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/signin');
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