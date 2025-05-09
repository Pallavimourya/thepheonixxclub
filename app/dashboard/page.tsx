'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import Image from 'next/image';
import { Calendar, Mail, Phone, User, Clock, Star } from 'lucide-react';

interface UserData {
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

export default function Dashboard() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const { user, signout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/signin');
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/users?email=${user.email}&password=${user.password}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user, router]);

  const handleSignOut = async () => {
    await signout();
    router.push('/signin');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ffb74d]"></div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Dashboard</h2>
          <p className="text-gray-600">Please try signing in again</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/logo.png" alt="The Phoenixx Club" width={40} height={40} className="mr-3" />
              <span className="text-xl font-bold text-[#0a1433]">The Phoenixx Club</span>
            </div>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 rounded-md bg-[#0a1433] text-white hover:bg-[#162552] transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-[#0a1433] to-[#162552] p-8 text-white">
            <div className="flex items-center">
              <div className="w-24 h-24 rounded-full bg-[#ffb74d] flex items-center justify-center text-[#0a1433] text-3xl font-bold">
                {userData.firstName[0]}
                {userData.lastName[0]}
              </div>
              <div className="ml-6">
                <h1 className="text-3xl font-bold">
                  {userData.firstName} {userData.lastName}
                </h1>
                <p className="text-gray-300 mt-1">Member since {new Date(userData.joinDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-bold text-[#0a1433] mb-6 flex items-center">
                  <User className="w-5 h-5 mr-2" /> Personal Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-3 text-[#ffb74d]" />
                    <span>{userData.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-3 text-[#ffb74d]" />
                    <span>{userData.phone}</span>
                  </div>
                </div>
              </div>

              {/* Membership Information */}
              <div>
                <h2 className="text-xl font-bold text-[#0a1433] mb-6 flex items-center">
                  <Star className="w-5 h-5 mr-2" /> Membership Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <div className="w-5 h-5 mr-3 text-[#ffb74d]">•</div>
                    <span>Status: <span className="font-semibold capitalize">{userData.membershipStatus}</span></span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-5 h-5 mr-3 text-[#ffb74d]">•</div>
                    <span>Type: <span className="font-semibold capitalize">{userData.membershipType}</span></span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 text-[#ffb74d]" />
                    <span>Joined: {new Date(userData.joinDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-3 text-[#ffb74d]" />
                    <span>Last Login: {new Date(userData.lastLogin).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-[#0a1433] mb-6">Upcoming Events</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <p className="text-gray-600">
                  Your upcoming events will appear here. Stay tuned for exclusive club events!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 