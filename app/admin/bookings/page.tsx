"use client";
import React, { useEffect, useState } from "react";

interface Booking {
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
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("/api/bookings"); // ✅ correct endpoint
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  if (loading) return <p className="text-gray-600 p-4">Loading bookings...</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Bookings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">Name</th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">Email</th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">Phone</th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">Date</th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">Time</th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">Guests</th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">Occasion</th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">Requests</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{b.name}</td>
                <td className="px-4 py-2">{b.email}</td>
                <td className="px-4 py-2">{b.phone}</td>
                <td className="px-4 py-2">{new Date(b.date).toLocaleDateString()}</td>
                <td className="px-4 py-2">{b.time}</td>
                <td className="px-4 py-2">{b.guests}</td>
                <td className="px-4 py-2">{b.occasion}</td>
                <td className="px-4 py-2">{b.special_requests || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
