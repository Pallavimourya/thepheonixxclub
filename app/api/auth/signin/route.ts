import { NextResponse } from 'next/server';
import { verifyPassword } from '@/lib/user-store';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectDB();

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Return user data without password
    const { password: _, ...userWithoutPassword } = user.toObject();
    
    return NextResponse.json({
      success: true,
      message: 'Successfully signed in',
      user: {
        id: user._id.toString(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        membershipStatus: user.membershipStatus,
        membershipType: user.membershipType,
        joinDate: user.joinDate.toISOString(),
        lastLogin: user.lastLogin.toISOString()
      }
    });
  } catch (error) {
    console.error('Signin error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'An error occurred during sign in'
      },
      { status: 500 }
    );
  }
} 