import { NextRequest, NextResponse } from "next/server";
import { pool } from '../db';


export async function POST(req: NextRequest) {
    try {
      const body = await req.json();
  
      const { name, email, phone, date, time, guests, occasion, specialRequests } = body;
  
      if (!name || !email || !phone || !date || !time || !guests) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
  
      // Insert directly without converting date to JS Date()
      const [result] = await pool.query(
        `INSERT INTO reservations 
        (name, email, phone, date, time, guests, occasion, special_requests) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          name,
          email,
          phone,
          date,          // <-- stored as "2025-11-15" EXACTLY
          time,
          guests,
          occasion || null,
          specialRequests || null,
        ]
      );
  
      return NextResponse.json({ success: true, id: result.insertId });
    } catch (err) {
      console.error("Failed to save reservation", err);
      return NextResponse.json({ error: "Failed to save reservation" }, { status: 500 });
    }
  }
