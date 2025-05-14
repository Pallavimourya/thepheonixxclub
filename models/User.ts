import mongoose, { Document } from 'mongoose';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  membershipType: 'basic' | 'premium' | 'vip';
  membershipStatus: 'active' | 'inactive' | 'pending';
  password: string;
  joinDate?: Date;
  lastLogin?: Date;
}

export interface IUserDocument extends IUser, Document {}

const userSchema = new mongoose.Schema<IUserDocument>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  membershipStatus: {
    type: String,
    enum: ['active', 'inactive', 'pending'],
    default: 'pending'
  },
  membershipType: {
    type: String,
    enum: ['basic', 'premium', 'vip'],
    default: 'basic'
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create index for phone since email is already indexed via unique: true
userSchema.index({ phone: 1 });

// Delete the model if it exists to prevent OverwriteModelError
const User = mongoose.models.User || mongoose.model<IUserDocument>('User', userSchema);

export default User; 