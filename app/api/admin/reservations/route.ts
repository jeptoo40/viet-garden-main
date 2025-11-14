import { NextRequest, NextResponse } from "next/server";
import { pool } from "../../db";


export async function GET(req: NextRequest) {
  try {
    const [rows] = await pool.query(
      `SELECT id, name, email, phone, date, time, guests, occasion, special_requests, created_at
       FROM reservations ORDER BY created_at DESC`
    );

    return NextResponse.json(rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch reservations" }, { status: 500 });
  }
}
