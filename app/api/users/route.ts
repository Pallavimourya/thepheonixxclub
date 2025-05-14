import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User, { IUser, IUserDocument } from '@/models/User';
import { Types } from 'mongoose';

interface UserLean extends IUser {
  _id: Types.ObjectId;
}

export async function GET() {
  try {
    await connectDB();
    
    // Fetch all users but only return necessary fields
    const users = await User.find({}, {
      firstName: 1,
      lastName: 1,
      email: 1,
      phone: 1,
      membershipType: 1,
      membershipStatus: 1
    }).lean<UserLean[]>();

    // Transform _id to id for frontend consumption
    const members = users.map((user: UserLean) => ({
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      membershipType: user.membershipType,
      membershipStatus: user.membershipStatus
    }));

    return NextResponse.json(members);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch members' },
      { status: 500 }
    );
  }
} 