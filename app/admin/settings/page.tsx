"use client";

import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Admin {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: string;
}

export default function AdminsPage() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });
  const [loading, setLoading] = useState(false);

  // Fetch all admins
  const fetchAdmins = async () => {
    try {
      const res = await fetch("/api/settings");
      const data = await res.json();
      setAdmins(data);
    } catch (error) {
      console.error("Failed to fetch admins:", error);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  // Add a new admin
  const handleAddAdmin = async () => {
    if (!form.name || !form.email || !form.password)
      return alert("All fields are required.");
    setLoading(true);
    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setForm({ name: "", email: "", password: "", role: "admin" });
        fetchAdmins();
      } else {
        const error = await res.json();
        alert(error.error || "Failed to add admin");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
    setLoading(false);
  };

  // Delete an admin
  const handleDeleteAdmin = async (id: number) => {
    if (!confirm("Are you sure you want to delete this admin?")) return;
    try {
      const res = await fetch(`/api/admins?id=${id}`, { method: "DELETE" });
      if (res.ok) fetchAdmins();
      else alert("Failed to delete admin");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-blue-900">Admin Management</h1>

        {/* Add Admin Form */}
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-lg font-semibold">Add New Admin</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <Input
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <Input
                placeholder="Password"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <select
                className="p-2 border rounded"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
              >
                <option value="admin">Admin</option>
                <option value="superadmin">Superadmin</option>
              </select>
            </div>
            <Button onClick={handleAddAdmin} disabled={loading}>
              {loading ? "Adding..." : "Add Admin"}
            </Button>
          </CardContent>
        </Card>

        {/* Existing Admins List */}
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-lg font-semibold">Existing Admins</h2>
            {admins.length === 0 ? (
              <p>No admins found.</p>
            ) : (
              <ul className="space-y-2">
                {admins.map((admin) => (
                  <li
                    key={admin.id}
                    className="flex justify-between items-center bg-gray-100 p-3 rounded"
                  >
                    <div>
                      <p className="font-medium">{admin.name}</p>
                      <p className="text-sm text-gray-600">
                        {admin.email} | {admin.role}
                      </p>
                    </div>
                    <Button
                      variant="destructive"
                      onClick={() => handleDeleteAdmin(admin.id)}
                    >
                      Delete
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
