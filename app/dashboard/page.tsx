'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

interface Member {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  membershipType: string;
  membershipStatus: string;
}

export default function DashboardPage() {
  const { user, signout } = useAuth();
  const router = useRouter();
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/auth/signin');
      return;
    }

    const fetchMembers = async () => {
      try {
        const res = await fetch('/api/users');
        const data = await res.json();
        setMembers(data);
      } catch (err) {
        console.error('Error fetching members:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => signout()}
                className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ffb74d] hover:bg-[#ffa726] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffb74d]"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* User Info Section */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Welcome, {user.firstName}!</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="mt-1">{user.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <p className="mt-1">{user.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Membership Status</p>
                <p className="mt-1 capitalize">{user.membershipStatus}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Membership Type</p>
                <p className="mt-1 capitalize">{user.membershipType}</p>
              </div>
            </div>
          </div>

          {/* Members Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-gray-900">👥 Club Members</h2>
              <span className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full">
                Total: {members.length}
              </span>
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ffb74d]"></div>
              </div>
            ) : members.length === 0 ? (
              <p className="text-center text-gray-500">No members found.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="h-10 w-10 rounded-full bg-[#ffb74d] flex items-center justify-center">
                        <span className="text-white font-medium">
                          {member.firstName[0]}{member.lastName[0]}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {member.firstName} {member.lastName}
                        </h3>
                        <p className="text-sm text-gray-500">{member.membershipType}</p>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>{member.email}</p>
                      <p>{member.phone}</p>
                      <p className="capitalize">Status: {member.membershipStatus}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 