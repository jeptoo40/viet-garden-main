import { NextResponse } from "next/server";
import { pool } from "../db";
import bcrypt from "bcryptjs";

// GET ALL ADMINS
export async function GET() {
  try {
    const [rows] = await pool.execute("SELECT id, name, email, role, created_at FROM admins ORDER BY created_at DESC");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching admins:", error);
    return NextResponse.json({ error: "Failed to fetch admins" }, { status: 500 });
  }
}

// ADD NEW ADMIN
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, role } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.execute(
      "INSERT INTO admins (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, role || "admin"]
    );

    return NextResponse.json({ message: "Admin created" });
  } catch (error) {
    console.error("Error creating admin:", error);
    return NextResponse.json({ error: "Failed to create admin" }, { status: 500 });
  }
}

// DELETE ADMIN
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing admin ID" }, { status: 400 });

    await pool.execute("DELETE FROM admins WHERE id = ?", [id]);

    return NextResponse.json({ message: "Admin deleted" });
  } catch (error) {
    console.error("Error deleting admin:", error);
    return NextResponse.json({ error: "Failed to delete admin" }, { status: 500 });
  }
}
