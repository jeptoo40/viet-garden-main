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
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        title="CONTACT US"
        subtitle="Get in touch with us for reservations, events, or any inquiries"
        backgroundImage="/placeholder.svg?height=800&width=1400&text=Contact+Us"
        showNavigation={false}
      />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Send us a Message</h2>
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
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
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

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us how we can help you..."
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    We'd love to hear from you! Whether you have questions about our menu, want to make a reservation,
                    or are planning a special event, our team is here to help.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-gray-800 mb-2">Address</h3>
                          <p className="text-gray-600">
                            Viet Gardens Restaurant
                            <br />
                            Tala, Machakos County
                            <br />
                            Kenya
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                          <p className="text-gray-600">+254 700 000 000</p>
                          <p className="text-gray-600">+254 711 000 000</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                          <p className="text-gray-600">info@vietgardens.co.ke</p>
                          <p className="text-gray-600">reservations@vietgardens.co.ke</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Clock className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-gray-800 mb-2">Operating Hours</h3>
                          <div className="space-y-1 text-gray-600">
                            <p>Monday - Thursday: 8:00 AM - 9:00 PM</p>
                            <p>Friday - Saturday: 8:00 AM - 10:00 PM</p>
                            <p>Sunday: 9:00 AM - 9:00 PM</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Social Media */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                      >
                        <Facebook size={20} />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                      >
                        <Twitter size={20} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Find Us</h2>
            <p className="text-xl text-gray-600">Located in the heart of Tala, Machakos County</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive map would be embedded here</p>
                    <p className="text-sm text-gray-500 mt-2">Tala, Machakos County, Kenya</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </main>
  )
}
