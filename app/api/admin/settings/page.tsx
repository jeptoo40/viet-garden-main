"use client";

import React from "react";
import AdminLayout from "@/components/AdminLayout";

export default function AdminSettingsPage() {
  return (
    <AdminLayout adminName="Admin">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <p>Here you can manage your admin settings.</p>
    </AdminLayout>
  );
}
