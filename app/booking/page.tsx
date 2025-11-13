"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppChat from "@/components/whatsapp-chat";
import BookingsHero from "@/components/booking-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    specialRequests: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/admin/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Thank you! Your booking has been submitted.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "",
          occasion: "",
          specialRequests: "",
        });
      } else {
        alert("Failed to submit booking: " + result.error);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen">
      <Header />
      <BookingsHero
        title="BOOK YOUR TABLE"
        subtitle="Reserve your spot at Viet Gardens today"
        backgroundImage="/images/booking-hero.jpg"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Book Your Table</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll confirm your booking within 24 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Reservation Form */}
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Select onValueChange={(value) => handleInputChange("time", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                               "7:00 AM",
                               "8:30 AM",
                               "9:00 AM",
                               "10:30 AM",
                               "11:00 AM",
                               
                              "12:00 PM",
                              "12:30 PM",
                              "1:00 PM",
                              "1:30 PM",
                              "2:00 PM",
                              "6:00 PM",
                              "6:30 PM",
                              "7:00 PM",
                              "7:30 PM",
                              "8:00 PM",
                            ].map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="guests">Number of Guests *</Label>
                        <Select onValueChange={(value) => handleInputChange("guests", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "Guest" : "Guests"}
                              </SelectItem>
                            ))}
                            <SelectItem value="10+">10+ Guests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="occasion">Occasion</Label>
                        <Select onValueChange={(value) => handleInputChange("occasion", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select occasion" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="casual">Casual Dining</SelectItem>
                            <SelectItem value="birthday">Birthday</SelectItem>
                            <SelectItem value="anniversary">Anniversary</SelectItem>
                            <SelectItem value="business">Business Meeting</SelectItem>
                            <SelectItem value="celebration">Celebration</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requests">Special Requests</Label>
                      <Textarea
                        id="requests"
                        placeholder="Any dietary restrictions, seating preferences, or special requests..."
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg"
                    >
                      {loading ? "Submitting..." : "Submit Booking"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Right: Contact Info + Booking Info */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Phone className="w-5 h-5 text-red-500" />
                        <div>
                          <p className="font-medium text-gray-800">Phone / WhatsApp</p>
                          <p className="text-gray-600">
                            <a
                              href="https://wa.me/254702871104"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              +254702871104
                            </a>{" "}
                            /{" "}
                            <a
                              href="https://wa.me/0738658772"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              0738658772
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Mail className="w-5 h-5 text-red-500" />
                        <div>
                          <p className="font-medium text-gray-800">Email</p>
                          <p className="text-gray-600">
                            <a href="mailto:Reservations@vietgardens.co.ke" className="hover:underline">
                              Reservations@vietgardens.co.ke
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <MapPin className="w-5 h-5 text-red-500" />
                        <div>
                          <p className="font-medium text-gray-800">Location</p>
                          <p className="text-gray-600">Tala, Machakos County, Kenya</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </main>
  );
}
