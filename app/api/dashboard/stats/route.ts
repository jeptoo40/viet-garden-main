import { NextResponse } from "next/server";
import { queryWithRetry } from "../../db";

export async function GET() {
    try {
        console.log("📊 Fetching dashboard stats...");

        // 1. Get Bookings Count
        const [bookingsRows]: any = await queryWithRetry("SELECT COUNT(*) as count FROM bookings");
        const bookingsCount = bookingsRows[0].count;

        // 2. Get Menu Items Count
        const [menuRows]: any = await queryWithRetry("SELECT COUNT(*) as count FROM menu_items");
        const menuItemsCount = menuRows[0].count;

        // 3. Get Team Members Count
        const [teamRows]: any = await queryWithRetry("SELECT COUNT(*) as count FROM team_members");
        const teamMembersCount = teamRows[0].count;

        // 4. Get Total Revenue
        const [revenueRows]: any = await queryWithRetry("SELECT SUM(total_amount) as total FROM orders");
        const revenue = revenueRows[0].total || 0;

        console.log("✅ Stats fetched:", { bookingsCount, menuItemsCount, teamMembersCount, revenue });

        return NextResponse.json({
            bookings: bookingsCount,
            menuItems: menuItemsCount,
            teamMembers: teamMembersCount,
            revenue: revenue
        });

    } catch (error) {
        console.error("❌ Error fetching dashboard stats:", error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
