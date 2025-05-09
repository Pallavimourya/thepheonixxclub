import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';

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

const CSV_FILE_PATH = path.join(process.cwd(), 'data', 'users.csv');

async function readUsers(): Promise<User[]> {
  try {
    const fileContent = await fs.readFile(CSV_FILE_PATH, 'utf-8');
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });
    return records as User[];
  } catch (error) {
    console.error('Error reading users:', error);
    return [];
  }
}

async function writeUsers(users: User[]): Promise<void> {
  try {
    const csv = stringify(users, {
      header: true,
      columns: {
        id: 'id',
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        phone: 'phone',
        password: 'password',
        createdAt: 'createdAt',
        membershipStatus: 'membershipStatus',
        membershipType: 'membershipType',
        joinDate: 'joinDate',
        lastLogin: 'lastLogin',
      },
    });
    await fs.writeFile(CSV_FILE_PATH, csv);
  } catch (error) {
    console.error('Error writing users:', error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const users = await readUsers();

    // Check for unique email
    if (users.some(user => user.email === body.email)) {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 }
      );
    }

    // Check for unique phone number
    if (users.some(user => user.phone === body.phone)) {
      return NextResponse.json(
        { error: 'Phone number already exists' },
        { status: 400 }
      );
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      password: body.password,
      createdAt: new Date().toISOString(),
      membershipStatus: 'pending',
      membershipType: 'standard',
      joinDate: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    };

    users.push(newUser);
    await writeUsers(users);

    return NextResponse.json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const password = searchParams.get('password');

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const users = await readUsers();
    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Update last login
    user.lastLogin = new Date().toISOString();
    await writeUsers(users);

    // Return user data without password
    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error('Error authenticating user:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
} 