"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/contact-hero"
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        alert(data.error || "Failed to send message.");
        return;
      }
  
      alert("Your message has been sent successfully!");
  
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  
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
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Send us a Message</h2>
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
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Get in Touch</h2>

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
  <CardContent className="p-6 space-y-6">

    {/* Phone */}
    <div className="flex items-start space-x-4">
      <Phone className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
      <div>
        <h3 className="font-bold text-gray-800 mb-2">Phone</h3>

        {/* Click to Call */}
        <a href="tel:+254702871104" className="text-gray-600 hover:text-red-500 block">
          +254 702 871 104
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/254738658772"
          target="_blank"
          className="text-gray-600 hover:text-green-600 block"
        >
          0738 658 772 (WhatsApp)
        </a>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-start space-x-4">
      <Mail className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
      <div>
        <h3 className="font-bold text-gray-800 mb-2">Email</h3>

        {/* Click to Email */}
        <a
          href="mailto:Reservations@vietgardens.co.ke"
          className="text-gray-600 hover:text-blue-600"
        >
          Reservations@vietgardens.co.ke
        </a>
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

               
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Map Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      
      <p className="text-blue-900 text-lg max-w-2xl mx-auto">
    
        Viet Gardens is conveniently located in Tala, Machakos County. Use the map below to get directions directly to our venue.
      </p>
    </div>

    <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63789.16089684292!2d37.31760280875395!3d-1.317469100000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18256ed0e7b8e8f7%3A0x9e4002c7eab05d9!2sViet%20Gardens%20Tala!5e0!3m2!1sen!2ske!4v1708602512345!5m2!1sen!2ske"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

      <Footer />
      <WhatsAppChat />
    </main>
  )
}
