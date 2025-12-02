import { NextResponse } from "next/server";
import { queryWithRetry } from "../db";

export async function GET() {
    try {
        console.log("📨 Fetching messages...");
        const [rows] = await queryWithRetry("SELECT * FROM messages ORDER BY created_at DESC");
        console.log(`✅ Found ${Array.isArray(rows) ? rows.length : 0} messages`);
        return NextResponse.json(rows);
    } catch (error) {
        console.error("❌ Error fetching messages:", error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
