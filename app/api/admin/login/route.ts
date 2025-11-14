import { NextResponse } from "next/server";
import { pool } from "@/app/api/db";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const [rows]: any = await pool.query(
      "SELECT id, username, password_hash FROM admins WHERE username = ?",
      [username]
    );



    
    if (!rows.length) {
      return NextResponse.json({ success: false, message: "Invalid username or password" }, { status: 401 });
    }

    const admin = rows[0];

    const match = await bcrypt.compare(password, admin.password_hash);

    if (!match) {
      return NextResponse.json({ success: false, message: "Invalid username or password" }, { status: 401 });
    }

    // For simplicity, we'll return a dummy token (you can replace with JWT or next-auth later)
    return NextResponse.json({ success: true, adminId: admin.id, username: admin.username });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
