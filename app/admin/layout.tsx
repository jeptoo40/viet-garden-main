"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FaUsers, FaCog, FaSignOutAlt, FaClipboardList, FaEnvelope, FaCalendar, FaHome 
} from "react-icons/fa";

interface AdminLayoutProps {
  children: React.ReactNode;
  adminName: string;
}

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
}

export default function AdminLayout({ children, adminName }: AdminLayoutProps) {
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/admin/contacts");
        const data = await res.json();
        if (data.success) {
          setMessages(data.contacts.slice(0, 5)); // show latest 5 messages
        }
      } catch (err) {
        console.error("Failed to fetch messages:", err);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col items-center">
        <div className="mt-6 mb-8 w-16 h-16 rounded-full overflow-hidden border-2 border-white">
          <Image src="/images/viet trace.jpg" alt="Viet Gardens Logo" width={64} height={64} className="object-cover" />
        </div>

        <nav className="flex-1 px-6 py-6 space-y-2 w-full">
          <Link href="/admin/dashboard" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors">
            <FaHome className="mr-4 text-lg" /> Dashboard
          </Link>
          <Link href="/admin/bookings" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors">
            <FaClipboardList className="mr-4 text-lg" /> Bookings
          </Link>
          <Link href="/admin/reservations" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors">
            <FaCalendar className="mr-4 text-lg" /> Reservations
          </Link>
          <Link href="/admin/contacts" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors">
            <FaEnvelope className="mr-4 text-lg" /> Messages
          </Link>
          <Link href="/admin/settings" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors">
            <FaCog className="mr-4 text-lg" /> Settings
          </Link>
        </nav>

        <div className="border-t border-gray-700 my-4 w-full"></div>

        <div className="px-6 pb-6 w-full">
          <button className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-lg py-2 font-semibold">
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100 overflow-auto">
        {/* Topbar */}
        <header className="h-16 bg-white flex items-center px-6 shadow-sm">
          <h1 className="text-xl font-medium">Welcome, {adminName}</h1>
        </header>

        <main className="flex-1 p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Children content */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow">{children}</div>

            {/* Right Messages Panel */}
            <div className="lg:w-80 w-full bg-white p-4 rounded-lg shadow flex flex-col">
              <h2 className="font-semibold mb-4">Recent Messages</h2>
              <div className="flex-1 overflow-auto space-y-4">
                {messages.length === 0 && <p className="text-gray-500">No messages yet.</p>}
                {messages.map((msg) => (
                  <div key={msg.id} className="p-2 bg-gray-50 rounded-lg flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{msg.name}</span>
                      <span className="text-xs text-gray-500">
                        {new Date(msg.created_at).toLocaleString()}
                      </span>
                    </div>
                    <span className="text-gray-600 text-sm">{msg.message}</span>
                    <button className="mt-2 self-start text-sm text-blue-600 hover:underline">Reply</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
