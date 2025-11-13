import { NextResponse } from 'next/server';
import { pool } from '../db';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ message: 'Username and password are required' }, { status: 400 });
    }

    // Query by username
    const [rows]: any = await pool.query('SELECT * FROM admins WHERE username = ?', [username]);

    if (rows.length === 0) {
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
    }

    const admin = rows[0];

    // Plain password comparison for now
    if (admin.password !== password) {
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
    }

    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    );

    return NextResponse.json({
      message: 'Login successful',
      token,
      admin: { id: admin.id, username: admin.username },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
