import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function GET() {
  try {
    // Test database connection
    await connectDB();
    
    // Get user count
    const userCount = await User.countDocuments();
    
    return NextResponse.json({
      status: 'success',
      message: 'MongoDB connection successful',
      userCount
    });
  } catch (error) {
    console.error('Database connection test failed:', error);
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Database connection failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 