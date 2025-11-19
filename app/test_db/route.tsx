import { NextResponse } from "next/server";
import { pool } from "@/app/api/db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT 1 AS test");
    return NextResponse.json({ ok: true, rows });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
