"use client";

import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout"; 

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

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("/api/admin/contacts");
        const data = await res.json();
        if (data.success) setContacts(data.contacts);
      } catch (err) {
        console.error("Failed to fetch contacts:", err);
      }
    };
    fetchContacts();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>

      {contacts.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {contacts.map((msg) => (
            <div key={msg.id} className="p-4 border rounded-lg bg-gray-50">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{msg.name}</span>
                <span className="text-sm text-gray-500">
                  {new Date(msg.created_at).toLocaleString()}
                </span>
              </div>
              <div className="mb-1"><strong>Email:</strong> {msg.email}</div>
              <div className="mb-1"><strong>Phone:</strong> {msg.phone}</div>
              <div className="mb-1"><strong>Subject:</strong> {msg.subject}</div>
              <div><strong>Message:</strong> {msg.message}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
