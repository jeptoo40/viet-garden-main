"use client";

import { useEffect, useState } from "react";

type Reservation = {
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

export default function AdminReservationsPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const res = await fetch("/api/admin/reservations");
      const data = await res.json();
      setReservations(data);
    };
    fetchReservations();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Reservations</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Phone</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Time</th>
              <th className="py-2 px-4">Guests</th>
              <th className="py-2 px-4">Occasion</th>
              <th className="py-2 px-4">Requests</th>
              <th className="py-2 px-4">Created At</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((r) => (
              <tr key={r.id} className="border-b">
                <td className="py-2 px-4">{r.name}</td>
                <td className="py-2 px-4">{r.email}</td>
                <td className="py-2 px-4">{r.phone}</td>
                <td className="py-2 px-4">{r.date}</td>
                <td className="py-2 px-4">{r.time}</td>
                <td className="py-2 px-4">{r.guests}</td>
                <td className="py-2 px-4">{r.occasion}</td>
                <td className="py-2 px-4">{r.special_requests}</td>
                <td className="py-2 px-4">{new Date(r.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
