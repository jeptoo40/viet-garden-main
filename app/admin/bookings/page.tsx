"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AdminBookings() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<any | null>(null);

  const emptyForm = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    specialRequests: "",
  };

  const [form, setForm] = useState(emptyForm);

  // LOAD BOOKINGS
  const fetchBookings = async () => {
    const res = await fetch("/api/bookings");
    const data = await res.json();
    setBookings(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // HANDLE INPUT CHANGE
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SAVE (CREATE OR UPDATE)
  const saveBooking = async () => {
    const method = editMode ? "PUT" : "POST";
    const url = editMode ? `/api/bookings?id=${selectedBooking.id}` : "/api/bookings";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setOpen(false);
      setForm(emptyForm);
      setEditMode(false);
      fetchBookings();
    }
  };

  // DELETE BOOKING
  const deleteBooking = async (id: number) => {
    if (!confirm("Are you sure you want to delete this booking?")) return;
    
    const res = await fetch(`/api/bookings?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) fetchBookings();
  };

  // OPEN EDIT MODAL
  const openEdit = (booking: any) => {
    setSelectedBooking(booking);
    setForm(booking);
    setEditMode(true);
    setOpen(true);
  };

  return (
    <main className="p-10">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Bookings Management</h1>

        <Button
          onClick={() => {
            setEditMode(false);
            setForm(emptyForm);
            setOpen(true);
          }}
        >
          Add Booking
        </Button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="grid gap-6">
          {bookings.map((b) => (
            <Card key={b.id} className="shadow">
              <CardContent className="p-6 space-y-2">
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold">{b.name}</h2>
                  <div className="space-x-2">
                    <Button size="sm" onClick={() => openEdit(b)}>Edit</Button>
                    <Button size="sm" variant="destructive" onClick={() => deleteBooking(b.id)}>
                      Delete
                    </Button>
                  </div>
                </div>

                <p><strong>Email:</strong> {b.email}</p>
                <p><strong>Phone:</strong> {b.phone}</p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <p><strong>Date:</strong> {b.date}</p>
                  <p><strong>Time:</strong> {b.time}</p>
                  <p><strong>Guests:</strong> {b.guests}</p>
                  <p><strong>Occasion:</strong> {b.occasion}</p>
                </div>

                {b.specialRequests && (
                  <p className="pt-4">
                    <strong>Special Requests:</strong> {b.specialRequests}
                  </p>
                )}

                <p className="text-sm text-gray-500 pt-4">
                  <strong>Created:</strong>{" "}
                  {new Date(b.created_at).toLocaleString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editMode ? "Edit Booking" : "Add Booking"}</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
            <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <Input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />

            <div className="grid grid-cols-2 gap-4">
              <Input name="date" type="date" value={form.date} onChange={handleChange} />
              <Input name="time" type="time" value={form.time} onChange={handleChange} />
            </div>

            <Input name="guests" placeholder="Guests" value={form.guests} onChange={handleChange} />

            <Input name="occasion" placeholder="Occasion" value={form.occasion} onChange={handleChange} />

            <Textarea
              name="specialRequests"
              placeholder="Special Requests"
              value={form.specialRequests}
              onChange={handleChange}
            />

            <Button onClick={saveBooking}>{editMode ? "Save Changes" : "Create Booking"}</Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
