"use client";

import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";

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

const emptyForm: Reservation = {
  id: 0,
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "",
  occasion: "",
  special_requests: "",
  created_at: "",
};

export default function AdminReservationsPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [editMode, setEditMode] = useState(false);
  const [open, setOpen] = useState(false);

  // Load data
  const fetchReservations = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/reservations");
    const data = await res.json();
    setReservations(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  // Input handler
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Save (POST / PUT)
  const saveReservation = async () => {
    const method = editMode ? "PUT" : "POST";
    const url = editMode
      ? `/api/admin/reservations?id=${form.id}`
      : "/api/admin/reservations";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setOpen(false);
      setForm(emptyForm);
      setEditMode(false);
      fetchReservations();
    }
  };

  // Delete reservation
  const deleteReservation = async (id: number) => {
    if (!confirm("Delete this reservation?")) return;

    const res = await fetch(`/api/admin/reservations?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) fetchReservations();
  };

  // Open edit modal
  const startEdit = (r: Reservation) => {
    setForm(r);
    setEditMode(true);
    setOpen(true);
  };

  // Open create modal
  const startCreate = () => {
    setForm(emptyForm);
    setEditMode(false);
    setOpen(true);
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Reservations</h1>
          <button
            onClick={startCreate}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add Reservation
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Phone</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Time</th>
                <th className="py-2 px-4">Guests</th>
                <th className="py-2 px-4">Occasion</th>
                <th className="py-2 px-4">Requests</th>
                <th className="py-2 px-4">Created At</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={10} className="text-center p-4">
                    Loading...
                  </td>
                </tr>
              ) : reservations.length === 0 ? (
                <tr>
                  <td colSpan={10} className="text-center p-4">
                    No reservations found.
                  </td>
                </tr>
              ) : (
                reservations.map((r) => (
                  <tr key={r.id} className="border-b">
                    <td className="py-2 px-4">{r.name}</td>
                    <td className="py-2 px-4">{r.email}</td>
                    <td className="py-2 px-4">{r.phone}</td>
                    <td className="py-2 px-4">{r.date}</td>
                    <td className="py-2 px-4">{r.time}</td>
                    <td className="py-2 px-4">{r.guests}</td>
                    <td className="py-2 px-4">{r.occasion}</td>
                    <td className="py-2 px-4">{r.special_requests}</td>
                    <td className="py-2 px-4">
                      {new Date(r.created_at).toLocaleString()}
                    </td>
                    <td className="py-2 px-4 space-x-2">
                      <button
                        onClick={() => startEdit(r)}
                        className="px-3 py-1 bg-green-500 text-white rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteReservation(r.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {open && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">
                {editMode ? "Edit Reservation" : "New Reservation"}
              </h2>

              <div className="grid gap-3">
                <input
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
                <input
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
                <input
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  />
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  />
                </div>

                <input
                  name="guests"
                  placeholder="Guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />

                <input
                  name="occasion"
                  placeholder="Occasion"
                  value={form.occasion}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />

                <textarea
                  name="special_requests"
                  placeholder="Special Requests"
                  value={form.special_requests}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />

                <button
                  onClick={saveReservation}
                  className="w-full bg-blue-600 text-white p-2 rounded"
                >
                  {editMode ? "Save Changes" : "Create Reservation"}
                </button>

                <button
                  onClick={() => setOpen(false)}
                  className="w-full border border-gray-500 p-2 rounded mt-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
