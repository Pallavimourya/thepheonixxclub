import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const DATA_FILE = path.join(process.cwd(), 'data', 'users.json');

// Ensure data directory exists
if (!fs.existsSync(path.dirname(DATA_FILE))) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
}

// Initialize users file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({ users: [] }));
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  membershipStatus: 'pending' | 'active' | 'inactive';
  membershipType: 'standard' | 'premium';
  joinDate: string;
  lastLogin: string;
}

function readUsers(): { users: User[] } {
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

function writeUsers(data: { users: User[] }) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Password hashing function
export async function hashPassword(password: string): Promise<string> {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Password verification function
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  const hashedInput = await hashPassword(password);
  return hashedInput === hashedPassword;
}

export async function findUserByEmail(email: string): Promise<User | null> {
  const { users } = readUsers();
  return users.find(user => user.email === email) || null;
}

export async function createUser(userData: Omit<User, 'id' | 'joinDate' | 'lastLogin'>): Promise<User> {
  const { users } = readUsers();
  
  // Check if user already exists
  if (users.some(user => user.email === userData.email)) {
    throw new Error('User already exists');
  }

  const newUser: User = {
    ...userData,
    id: crypto.randomUUID(),
    password: await hashPassword(userData.password),
    joinDate: new Date().toISOString(),
    lastLogin: new Date().toISOString()
  };

  users.push(newUser);
  writeUsers({ users });

  return newUser;
}

export async function updateLastLogin(email: string): Promise<void> {
  const { users } = readUsers();
  const userIndex = users.findIndex(user => user.email === email);
  
  if (userIndex === -1) {
    throw new Error('User not found');
  }

  users[userIndex].lastLogin = new Date().toISOString();
  writeUsers({ users });
} 