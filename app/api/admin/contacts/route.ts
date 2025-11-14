import { NextResponse } from "next/server";
import { pool } from "@/app/api/db";

export async function GET() {
  try {
    const [rows] = await pool.query(
      `SELECT id, name, email, phone, subject, message, created_at
       FROM contacts
       ORDER BY created_at DESC`
    );

    return NextResponse.json({
      success: true,
      contacts: rows,
    });
  } catch (error) {
    console.error("ADMIN CONTACTS API ERROR:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
