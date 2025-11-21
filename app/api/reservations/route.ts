import { NextResponse } from "next/server";
import { pool } from "../db";

interface ReservationBody {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
  occasion?: string;
  special_requests?: string;
}

// -------------------- GET ALL --------------------
export async function GET() {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM reservations ORDER BY created_at DESC"
    );
    return NextResponse.json({ success: true, reservations: rows });
  } catch (error) {
    console.error("GET /reservations error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch reservations" }, { status: 500 });
  }
}

// -------------------- CREATE --------------------
export async function POST(req: Request) {
  try {
    const body: ReservationBody = await req.json();
    const {
      name,
      email,
      phone,
      date,
      time,
      guests,
      occasion,
      special_requests,
    } = body;

    const values = [
      name ?? null,
      email ?? null,
      phone ?? null,
      date ?? null,
      time ?? null,
      guests ?? null,
      occasion ?? null,
      special_requests ?? null,
    ];

    await pool.execute(
      "INSERT INTO reservations (name, email, phone, date, time, guests, occasion, special_requests) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      values
    );

    return NextResponse.json({ success: true, msg: "Reservation created" });
  } catch (error) {
    console.error("POST /reservations error:", error);
    return NextResponse.json({ success: false, error: "Failed to create reservation" }, { status: 500 });
  }
}

// -------------------- UPDATE --------------------
export async function PUT(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ success: false, error: "Missing reservation id" }, { status: 400 });

    const body: ReservationBody = await req.json();
    const {
      name,
      email,
      phone,
      date,
      time,
      guests,
      occasion,
      special_requests,
    } = body;

    const values = [
      name ?? null,
      email ?? null,
      phone ?? null,
      date ?? null,
      time ?? null,
      guests ?? null,
      occasion ?? null,
      special_requests ?? null,
      id,
    ];

    await pool.execute(
      "UPDATE reservations SET name=?, email=?, phone=?, date=?, time=?, guests=?, occasion=?, special_requests=? WHERE id=?",
      values
    );

    return NextResponse.json({ success: true, msg: "Reservation updated" });
  } catch (error) {
    console.error("PUT /reservations error:", error);
    return NextResponse.json({ success: false, error: "Failed to update reservation" }, { status: 500 });
  }
}

// -------------------- DELETE --------------------
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ success: false, error: "Missing reservation id" }, { status: 400 });

    await pool.execute("DELETE FROM reservations WHERE id=?", [id]);

    return NextResponse.json({ success: true, msg: "Reservation deleted" });
  } catch (error) {
    console.error("DELETE /reservations error:", error);
    return NextResponse.json({ success: false, error: "Failed to delete reservation" }, { status: 500 });
  }
}
