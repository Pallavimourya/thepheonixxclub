import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    await connectDB();

    // Await cookies() before using .get()
    const cookieStore = await cookies();
    const userData = cookieStore.get('user');
    if (!userData) {
      return NextResponse.json(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      );
    }

    const { id } = JSON.parse(userData.value);
    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Invalid user data' },
        { status: 401 }
      );
    }

    const user = await User.findById(id).select('-password');
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        membershipStatus: user.membershipStatus,
        membershipType: user.membershipType,
        joinDate: user.joinDate,
        lastLogin: user.lastLogin,
      },
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
} 