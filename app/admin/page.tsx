"use client";

import React, { useEffect, useState } from "react";
import AdminLayout from "./layout";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    totalBookings: 0,
    upcomingEvents: 0,
    monthlyRevenue: 0,
    menuItems: 0,
    messagesToday: 0,
  });

  const [bookingsData, setBookingsData] = useState([
    { month: "Jan", bookings: 0, revenue: 0 },
    { month: "Feb", bookings: 0, revenue: 0 },
    { month: "Mar", bookings: 0, revenue: 0 },
    { month: "Apr", bookings: 0, revenue: 0 },
  ]);

  useEffect(() => {
    async function fetchBookings() {
      const res = await fetch("/api/bookings");
      const data = await res.json();

      // Calculate monthly bookings and revenue
      const monthMap: Record<string, { bookings: number; revenue: number }> = {
        Jan: { bookings: 0, revenue: 0 },
        Feb: { bookings: 0, revenue: 0 },
        Mar: { bookings: 0, revenue: 0 },
        Apr: { bookings: 0, revenue: 0 },
      };

      data.forEach((b: any) => {
        const month = new Date(b.date).toLocaleString("default", { month: "short" });
        if (monthMap[month]) {
          monthMap[month].bookings += 1;
          monthMap[month].revenue += Number(b.revenue || 0);
        }
      });

      const chartData = Object.keys(monthMap).map(month => ({
        month,
        bookings: monthMap[month].bookings,
        revenue: monthMap[month].revenue,
      }));

      setBookingsData(chartData);

      setStats(prev => ({
        ...prev,
        totalBookings: data.length,
        monthlyRevenue: data.reduce((sum: number, b: any) => sum + Number(b.revenue || 0), 0),
      }));
    }

    fetchBookings();
  }, []);

  return <AdminLayout stats={stats} bookingsData={bookingsData}>Welcome to your dashboard!</AdminLayout>;
}
