"use client";

import React, { useEffect, useState } from "react";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-4">{children}</div>
    </div>
  );
};

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [filtered, setFiltered] = useState<ContactMessage[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<ContactMessage | null>(null);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/contacts");
      const data = await res.json();
      if (data.success) {
        setContacts(data.contacts);
        setFiltered(data.contacts);
      }
    } catch (err) {
      console.error("Failed to fetch contacts:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔎 Search Filter
  useEffect(() => {
    setFiltered(
      contacts.filter((c) =>
        `${c.name} ${c.email} ${c.subject} ${c.message}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    );
  }, [search, contacts]);

  // 🗑 Delete Message
  const deleteMessage = async (id: number) => {
    if (!confirm("Delete this message?")) return;

    try {
      const res = await fetch(`/api/admin/contacts/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        setContacts((prev) => prev.filter((msg) => msg.id !== id));
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <AdminLayout>
      <div className="p-4">

        <h2 className="text-3xl font-bold mb-4">Contact Messages</h2>

        {/* 🔎 Search */}
        <input
          type="text"
          placeholder="Search messages..."
          className="w-full p-2 border rounded-lg mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* ⏳ Loading State */}
        {loading && <p>Loading messages...</p>}

        {/* 📨 Empty State */}
        {!loading && filtered.length === 0 && (
          <p>No messages found.</p>
        )}

        {/* 📋 Messages Table */}
        {!loading && filtered.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Email</th>
                  <th className="p-2 text-left">Subject</th>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((msg) => (
                  <tr key={msg.id} className="border-b">
                    <td className="p-2">{msg.name}</td>
                    <td className="p-2">{msg.email}</td>
                    <td className="p-2">{msg.subject}</td>
                    <td className="p-2">
                      {new Date(msg.created_at).toLocaleString()}
                    </td>

                    <td className="p-2 text-center space-x-2">
                      {/* 👀 View */}
                      <button
                        onClick={() => setSelected(msg)}
                        className="px-3 py-1 bg-blue-600 text-white rounded"
                      >
                        View
                      </button>

                      {/* 🗑 Delete */}
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}

        {/* 👁 View Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-96 shadow-xl">

              <h3 className="text-xl font-bold mb-3">Message Details</h3>

              <p><strong>Name:</strong> {selected.name}</p>
              <p><strong>Email:</strong> {selected.email}</p>
              <p><strong>Phone:</strong> {selected.phone}</p>
              <p><strong>Subject:</strong> {selected.subject}</p>
              <p className="mt-2"><strong>Message:</strong> {selected.message}</p>

              <button
                onClick={() => setSelected(null)}
                className="mt-4 w-full bg-gray-700 text-white py-2 rounded-lg"
              >
                Close
              </button>

            </div>
          </div>
        )}

      </div>
    </AdminLayout>
  );
}
