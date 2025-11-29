import { NextResponse } from "next/server";
import { queryWithRetry } from "../db";
import bcrypt from "bcryptjs"; // Use bcryptjs for easier compatibility
import jwt from "jsonwebtoken";

// POST /api/auth
export async function POST(req: Request) {
  console.log("🔐 Auth request received");

  try {
    const { username, password } = await req.json();
    console.log("📝 Login attempt for username:", username);

    if (!username || !password) {
      console.log("❌ Missing credentials");
      return NextResponse.json(
        { message: "Username and password are required" },
        { status: 400 }
      );
    }

    // Check if admin exists by username
    console.log("🔍 Querying database for user:", username);
    const [rows]: any = await queryWithRetry(
      "SELECT * FROM admins WHERE username = ?",
      [username]
    );
    console.log("📊 Query result: Found", rows.length, "user(s)");

    if (rows.length === 0) {
      console.log("❌ User not found in database");
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }

    const admin = rows[0];
    console.log("👤 User found:", { id: admin.id, username: admin.username, role: admin.role });

    // Compare passwords
    console.log("🔑 Comparing passwords...");
    const validPassword = await bcrypt.compare(password, admin.password);
    console.log("🔑 Password valid:", validPassword);

    if (!validPassword) {
      console.log("❌ Invalid password");
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }

    // Sign JWT
    console.log("🎫 Generating JWT token...");
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      console.error("❌ JWT_SECRET is not set!");
      return NextResponse.json({ message: "Server configuration error" }, { status: 500 });
    }

    const token = jwt.sign(
      { id: admin.id, username: admin.username, email: admin.email, role: admin.role },
      jwtSecret,
      { expiresIn: "1h" }
    );
    console.log("✅ JWT token generated successfully");

    // Return admin info + token
    console.log("✅ Login successful for user:", username);

    const response = NextResponse.json({
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

    // Set the token as a cookie for middleware to read
    response.cookies.set("adminToken", token, {
      httpOnly: false, // Allow client-side access
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 3600, // 1 hour (matches JWT expiry)
      path: "/",
    });

    console.log("🍪 Cookie set: adminToken");
    return response;
  } catch (error) {
    console.error("❌ Login error:", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      error,
    });
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
