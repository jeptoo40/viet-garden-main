"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log("🔐 Login response:", { status: res.status, data });

      if (!res.ok) {
        console.log("❌ Login failed:", data.message);
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // Save token
      console.log("💾 Saving token to localStorage");
      localStorage.setItem("token", data.token);
      console.log("✅ Token saved successfully");
      console.log("📦 Token contents:", { token: data.token?.substring(0, 20) + "..." });

      // Redirect to dashboard using window.location for reliable navigation
      console.log("🔄 Redirecting to /admin/dashboard");

      // Use window.location.href for a hard redirect
      window.location.href = "/admin/dashboard";

    } catch (err) {
      console.error("❌ Unexpected error:", err);
      setError("Server error");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg p-8 rounded-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>

        {error && (
          <p className="mb-4 text-red-600 bg-red-100 p-2 rounded text-sm">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Username</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
