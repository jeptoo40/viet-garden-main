"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

// Define types
type Booking = {
  id: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  special_requests: string;
  created_at: string;
};

type DashboardMetrics = {
  newBookings: number;
  upcomingEvents: number;
  menuItems: number;
  teamMembers: number;
  monthlyRevenue: number;
};

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    newBookings: 0,
    upcomingEvents: 0,
    menuItems: 0,
    teamMembers: 0,
    monthlyRevenue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch bookings
    const fetchBookings = async () => {
      try {
        const res = await fetch("/admin/bookings");
        const data = await res.json();
        setBookings(data);

        // Set dashboard metrics
        setMetrics({
          newBookings: data.length,
          upcomingEvents: 12, // replace with actual data if available
          menuItems: 34,      // replace with actual data if available
          teamMembers: 8,     // replace with actual data if available
          monthlyRevenue: 25000, // replace with actual revenue
        });
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-10 space-y-8">
      <h1 className="text-3xl font-bold">Admin Panel</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <Card className="bg-blue-100">
          <CardContent className="text-center">
            <h2 className="text-2xl font-bold">{metrics.newBookings}</h2>
            <p className="text-gray-700">New Bookings</p>
          </CardContent>
        </Card>

        <Card className="bg-green-100">
          <CardContent className="text-center">
            <h2 className="text-2xl font-bold">{metrics.upcomingEvents}</h2>
            <p className="text-gray-700">Upcoming Events</p>
          </CardContent>
        </Card>

        <Card className="bg-yellow-100">
          <CardContent className="text-center">
            <h2 className="text-2xl font-bold">{metrics.menuItems}</h2>
            <p className="text-gray-700">Menu Items</p>
          </CardContent>
        </Card>

        <Card className="bg-purple-100">
          <CardContent className="text-center">
            <h2 className="text-2xl font-bold">{metrics.teamMembers}</h2>
            <p className="text-gray-700">Team Members</p>
          </CardContent>
        </Card>

        <Card className="bg-red-100">
          <CardContent className="text-center">
            <h2 className="text-2xl font-bold">${metrics.monthlyRevenue}</h2>
            <p className="text-gray-700">Monthly Revenue</p>
          </CardContent>
        </Card>
      </div>

      {/* Bookings Table */}
      <div className="overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4">Bookings</h2>
        {loading ? (
          <p>Loading bookings...</p>
        ) : (
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Phone</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Time</th>
                <th className="py-2 px-4 border-b">Guests</th>
                <th className="py-2 px-4 border-b">Occasion</th>
                <th className="py-2 px-4 border-b">Special Requests</th>
                <th className="py-2 px-4 border-b">Created At</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="text-center">
                  <td className="py-2 px-4 border-b">{booking.id}</td>
                  <td className="py-2 px-4 border-b">{booking.name}</td>
                  <td className="py-2 px-4 border-b">{booking.email}</td>
                  <td className="py-2 px-4 border-b">{booking.phone}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(booking.date).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b">{booking.time}</td>
                  <td className="py-2 px-4 border-b">{booking.guests}</td>
                  <td className="py-2 px-4 border-b">{booking.occasion}</td>
                  <td className="py-2 px-4 border-b">{booking.special_requests}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(booking.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
