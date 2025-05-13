import { NextResponse } from 'next/server';
import { hashPassword } from '@/lib/user-store';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, password } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !password) {
      return NextResponse.json(
        { 
          success: false,
          error: 'All fields are required',
          message: 'Please fill in all required fields'
        },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { 
          success: false,
          error: 'User already exists',
          message: 'An account with this email already exists'
        },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create new user
    const user = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Account created successfully! Please sign in.',
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
    console.error('Signup error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'An error occurred during signup'
      },
      { status: 500 }
    );
  }
} 