import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function POST(request: Request) {
  try {
    console.log('Starting signup process...');
    await dbConnect();
    console.log('Database connected');
    
    const rawBody = await request.text();
    console.log('Raw request body:', rawBody);
    
    let body;
    try {
      body = JSON.parse(rawBody);
    } catch (parseError) {
      console.error('JSON Parse Error:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON format in request body' },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, phone, password } = body;
    console.log('Parsed user data:', { firstName, lastName, email, phone });

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !password) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate password length
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    // Check for existing user
    console.log('Checking for existing user...');
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists');
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Create new user
    console.log('Creating new user...');
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password,
      membershipStatus: 'pending',
      membershipType: 'standard',
      joinDate: new Date(),
      lastLogin: new Date(),
    });
    console.log('User created successfully:', newUser._id);

    // Remove password from response
    const userResponse = newUser.toObject();
    delete userResponse.password;

    return NextResponse.json({ 
      success: true,
      message: 'User created successfully',
      user: userResponse
    });
  } catch (error) {
    console.error('Detailed signup error:', error);
    
    // Handle specific mongoose errors
    if (error instanceof Error) {
      if (error.name === 'ValidationError') {
        console.log('Validation error:', error);
        return NextResponse.json(
          { error: 'Invalid user data' },
          { status: 400 }
        );
      }
      if (error.name === 'MongoServerError' && (error as any).code === 11000) {
        console.log('Duplicate key error:', error);
        return NextResponse.json(
          { error: 'Email already exists' },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
} 