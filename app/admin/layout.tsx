import React from "react";
import Link from "next/link";
import Image from "next/image"; // import Image from Next.js
import {
   
    FaUsers,       // added
    FaCog,         // added
    FaSignOutAlt
  } from "react-icons/fa";
import { FaClipboardList, FaEnvelope, FaCalendar, FaHome } from "react-icons/fa";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <aside className="w-64 bg-gray-800 text-white flex flex-col items-center">
      {/* Logo */}
      <div className="mt-6 mb-8 w-16 h-16 rounded-full overflow-hidden border-2 border-white">
        <Image
          src="/images/viet trace.jpg"   // your logo in public folder
          alt="Viet Gardens Logo"
          width={64}
          height={64}
          className="object-cover"
        />
      </div>

         {/* Navigation */}
         <nav className="flex-1 px-6 py-6 space-y-2">
          <Link
            href="#"
            className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FaHome className="mr-4 text-lg" />
            Dashboard
          </Link>

          <Link
            href="/admin/bookings"
            className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FaClipboardList className="mr-4 text-lg" />
            Bookings
          </Link>

          <Link
            href="/admin/reservations"
            className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FaCalendar className="mr-4 text-lg" />
            Reservations
          </Link>

          <Link
            href="/admin/customers"
            className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FaUsers className="mr-4 text-lg" />
            Customers
          </Link>

          <Link
            href="/admin/contacts"
            className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FaEnvelope className="mr-4 text-lg" />
            Contact Messages
          </Link>

          <Link
            href="/admin/settings"
            className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FaCog className="mr-4 text-lg" />
            Settings
          </Link>
        </nav>

        {/* Divider */}
        <div className="border-t border-gray-800 my-4"></div>

        {/* Footer / Logout */}
        <div className="px-6 pb-6">
          <button className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-lg py-2 font-semibold">
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        <header className="h-16 bg-white flex items-center px-6 shadow-sm">
          <h1 className="text-xl font-medium">Admin Panel</h1>
        </header>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
