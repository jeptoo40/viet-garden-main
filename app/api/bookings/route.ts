import { NextResponse } from "next/server";
import { pool } from "../db";

// GET ALL BOOKINGS
export async function GET() {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM `bookings` ORDER BY `created_at` DESC"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}

// CREATE BOOKING
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, guests, occasion, specialRequests } = body;

    await pool.execute(
      "INSERT INTO `bookings` (`name`, `email`, `phone`, `date`, `time`, `guests`, `occasion`, `specialRequests`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [name, email, phone, date, time, guests, occasion, specialRequests]
    );

    return NextResponse.json({ message: "Booking created" });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}

// UPDATE BOOKING
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Missing booking ID" }, { status: 400 });
    }

    const body = await request.json();
    const { name, email, phone, date, time, guests, occasion, specialRequests } = body;

    await pool.execute(
      "UPDATE `bookings` SET `name`=?, `email`=?, `phone`=?, `date`=?, `time`=?, `guests`=?, `occasion`=?, `specialRequests`=? WHERE `id`=?",
      [name, email, phone, date, time, guests, occasion, specialRequests, id]
    );

    return NextResponse.json({ message: "Booking updated" });
  } catch (error) {
    console.error("Error updating booking:", error);
    return NextResponse.json({ error: "Failed to update booking" }, { status: 500 });
  }
}

// DELETE BOOKING
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Missing booking ID" }, { status: 400 });
    }

    await pool.execute("DELETE FROM `bookings` WHERE `id`=?", [id]);

    return NextResponse.json({ message: "Booking deleted" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    return NextResponse.json({ error: "Failed to delete booking" }, { status: 500 });
  }
}
