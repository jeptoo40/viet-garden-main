import { NextRequest, NextResponse } from "next/server";
import { pool } from '../db';

// 🟢 GET all bookings
export async function GET() {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM bookings ORDER BY created_at DESC"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}

// 🟢 POST new booking
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, date, time, guests, occasion, specialRequests } = data;

    await pool.execute(
      `INSERT INTO bookings (name, email, phone, date, time, guests, occasion, special_requests, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
      [name, email, phone, date, time, guests, occasion, specialRequests || ""]
    );

    return NextResponse.json({ message: "Booking saved successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error inserting booking:", error);
    return NextResponse.json({ error: "Failed to save booking" }, { status: 500 });
  }
}
