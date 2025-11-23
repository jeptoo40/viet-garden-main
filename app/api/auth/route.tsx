import { NextResponse } from "next/server";
import { pool } from "../db";
import bcrypt from "bcryptjs"; // Use bcryptjs for easier compatibility
import jwt from "jsonwebtoken";

// POST /api/auth
export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password are required" },
        { status: 400 }
      );
    }

    // Check if admin exists by username
    const [rows]: any = await pool.query(
      "SELECT * FROM admins WHERE username = ?",
      [username]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }

    const admin = rows[0];

    // Compare passwords
    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }

    // Sign JWT
    const token = jwt.sign(
      { id: admin.id, username: admin.username, email: admin.email, role: admin.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    // Return admin info + token
    return NextResponse.json({
      message: "Login successful",
      token,
      admin: {
        id: admin.id,
        name: admin.name,
        username: admin.username,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
