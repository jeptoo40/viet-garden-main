"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

type Booking = {
  id: number;
  created_at: string;
};

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

export default function AdminDashboard() {
  const [bookingsCount, setBookingsCount] = useState(0);
  const [menuItems, setMenuItems] = useState(34);
  const [teamMembers, setTeamMembers] = useState(8);
  const [revenue, setRevenue] = useState(25000);
  const [chartData, setChartData] = useState([]);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const loadData = async () => {
      // Fetch Bookings
      const bookingsRes = await fetch("/api/bookings");
      const bookings: Booking[] = await bookingsRes.json();
      setBookingsCount(bookings.length);

      // Format Monthly Chart
      const grouped: any = {};
      bookings.forEach((b) => {
        const month = new Date(b.created_at).toLocaleString("default", { month: "short" });
        grouped[month] = (grouped[month] || 0) + 1;
      });

      setChartData(
        Object.keys(grouped).map((month) => ({
          month,
          bookings: grouped[month],
        }))
      );

      // Fetch messages
      const messagesRes = await fetch("/api/messages");
      const msgData = await messagesRes.json();
      setMessages(msgData);
    };

    loadData();
  }, []);

  return (
    <div className="p-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      {/* LEFT MAIN SECTION */}
      <div className="lg:col-span-3 space-y-8">
        <h1 className="text-3xl font-bold"></h1>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          <Card className="bg-blue-100">
            <CardContent className="text-center p-5">
              <h2 className="text-3xl font-bold">{bookingsCount}</h2>
              <p className="text-gray-600">New Bookings</p>
            </CardContent>
          </Card>

          <Card className="bg-yellow-100">
            <CardContent className="text-center p-5">
              <h2 className="text-3xl font-bold">{menuItems}</h2>
              <p className="text-gray-600">Menu Items</p>
            </CardContent>
          </Card>

          <Card className="bg-purple-100">
            <CardContent className="text-center p-5">
              <h2 className="text-3xl font-bold">{teamMembers}</h2>
              <p className="text-gray-600">Team Members</p>
            </CardContent>
          </Card>

          <Card className="bg-red-100">
            <CardContent className="text-center p-5">
              <h2 className="text-3xl font-bold">KSh {revenue.toLocaleString()}</h2>
              <p className="text-gray-600">Monthly Revenue</p>
            </CardContent>
          </Card>

        </div>

        {/* Monthly Bookings Graph */}
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">Monthly Bookings</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="bookings" stroke="#2563eb" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

     

    </div>
  );
}
