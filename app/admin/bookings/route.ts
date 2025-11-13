import { NextRequest, NextResponse } from "next/server";
import { pool } from "../../api/db";

// GET all bookings
export async function GET() {
  try {
    const [rows] = await pool.execute("SELECT * FROM bookings ORDER BY created_at DESC");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("DB GET bookings error:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings", details: (error as Error).message },
      { status: 500 }
    );
  }
}

// POST a new booking
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, date, time, guests, occasion, specialRequests } = data;

    const [result] = await pool.execute(
      `INSERT INTO bookings (name, email, phone, date, time, guests, occasion, special_requests, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
      [name, email, phone, date, time, guests, occasion, specialRequests]
    );

    return NextResponse.json({ message: "Booking submitted successfully" });
  } catch (error) {
    console.error("DB POST booking error:", error);
    return NextResponse.json(
      { error: "Failed to submit booking", details: (error as Error).message },
      { status: 500 }
    );
  }
}
