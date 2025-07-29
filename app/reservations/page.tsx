"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WhatsAppChat from "@/components/whatsapp-chat"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    specialRequests: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Reservation submitted:", formData)
    alert("Thank you! Your reservation request has been submitted. We'll contact you shortly to confirm.")
  }

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        title="MAKE A RESERVATION"
        subtitle="Book your table for an unforgettable dining experience"
        backgroundImage="/placeholder.svg?height=800&width=1400&text=Restaurant+Interior"
        showNavigation={false}
      />

      {/* Reservation Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Reserve Your Table</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll confirm your reservation within 24 hours
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Reservation Form */}
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
                            <SelectItem value="12:00">12:00 PM</SelectItem>
                            <SelectItem value="12:30">12:30 PM</SelectItem>
                            <SelectItem value="13:00">1:00 PM</SelectItem>
                            <SelectItem value="13:30">1:30 PM</SelectItem>
                            <SelectItem value="14:00">2:00 PM</SelectItem>
                            <SelectItem value="18:00">6:00 PM</SelectItem>
                            <SelectItem value="18:30">6:30 PM</SelectItem>
                            <SelectItem value="19:00">7:00 PM</SelectItem>
                            <SelectItem value="19:30">7:30 PM</SelectItem>
                            <SelectItem value="20:00">8:00 PM</SelectItem>
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

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                      Submit Reservation Request
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Phone className="w-5 h-5 text-red-500" />
                        <div>
                          <p className="font-medium text-gray-800">Phone</p>
                          <p className="text-gray-600">+254 700 000 000</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Mail className="w-5 h-5 text-red-500" />
                        <div>
                          <p className="font-medium text-gray-800">Email</p>
                          <p className="text-gray-600">reservations@vietgardens.co.ke</p>
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

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Operating Hours</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-800">Monday - Thursday</span>
                        <span className="text-gray-600">8:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-800">Friday - Saturday</span>
                        <span className="text-gray-600">8:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-800">Sunday</span>
                        <span className="text-gray-600">9:00 AM - 9:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Reservation Policy</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Reservations are confirmed within 24 hours</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Please arrive within 15 minutes of your reservation time</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cancellations must be made at least 2 hours in advance</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Large groups (10+) may require a deposit</span>
                      </li>
                    </ul>
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
  )
}
