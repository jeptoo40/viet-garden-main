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

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [adminName, setAdminName] = useState("Admin");

  useEffect(() => {
    // Get username from localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setAdminName(storedUsername);
    }

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

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    // Clear cookie (by setting it to expire in the past)
    document.cookie = "adminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";

    // Redirect to login
    window.location.href = "/login";
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white flex flex-col items-center 
          transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:inset-auto
        `}
      >
        <div className="mt-6 mb-8 w-16 h-16 rounded-full overflow-hidden border-2 border-white">
          <Image src="/images/viet trace.jpg" alt="Viet Gardens Logo" width={64} height={64} className="object-cover" />
        </div>

        <nav className="flex-1 px-6 py-6 space-y-2 w-full">
          <Link href="/admin/dashboard" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors" onClick={() => setIsSidebarOpen(false)}>
            <FaHome className="mr-4 text-lg" /> Dashboard
          </Link>
          <Link href="/admin/bookings" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors" onClick={() => setIsSidebarOpen(false)}>
            <FaClipboardList className="mr-4 text-lg" /> Bookings
          </Link>
          <Link href="/admin/reservations" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors" onClick={() => setIsSidebarOpen(false)}>
            <FaCalendar className="mr-4 text-lg" /> Reservations
          </Link>
          <Link href="/admin/contacts" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors" onClick={() => setIsSidebarOpen(false)}>
            <FaEnvelope className="mr-4 text-lg" /> Messages
          </Link>
          <Link href="/admin/settings" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors" onClick={() => setIsSidebarOpen(false)}>
            <FaCog className="mr-4 text-lg" /> Settings
          </Link>
        </nav>

        <div className="border-t border-gray-700 my-4 w-full"></div>

        <div className="px-6 pb-6 w-full">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-lg py-2 font-semibold"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white flex items-center px-6 shadow-sm justify-between lg:justify-start">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 mr-4"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <h1 className="text-xl font-medium truncate">Welcome, {adminName}</h1>
        </header>

        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Children content */}
            <div className="flex-1 bg-white p-4 lg:p-6 rounded-lg shadow min-w-0">{children}</div>

            {/* Right Messages Panel */}
            <div className="lg:w-80 w-full bg-white p-4 rounded-lg shadow flex flex-col h-fit">
              <h2 className="font-semibold mb-4">Recent Messages</h2>
              <div className="flex-1 overflow-auto space-y-4 max-h-[500px]">
                {messages.length === 0 && <p className="text-gray-500">No messages yet.</p>}
                {messages.map((msg) => (
                  <div key={msg.id} className="p-2 bg-gray-50 rounded-lg flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium truncate max-w-[120px]">{msg.name}</span>
                      <span className="text-xs text-gray-500 whitespace-nowrap">
                        {new Date(msg.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <span className="text-gray-600 text-sm line-clamp-2">{msg.message}</span>
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
