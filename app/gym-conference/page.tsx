"use client"
import { Button } from "@/components/ui/button"

import Header from "@/components/header"
import HeroSection from "@/components/gym-hero"
import WhatsAppChat from "@/components/whatsapp-chat"
import Footer from "@/components/footer"
import Link from "next/link"  
export default function GymConferencePage() {
  return (
    <>
      <Header />
      <HeroSection
        title="GYM & CONFERENCE FACILITIES"
        subtitle="Modern facilities for fitness and business needs"
        backgroundImage="/images/food6.jpg"
        showNavigation={false}
        height="h-[500px]" // Adjusted hero height
      />

     {/* Gym Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-blue-900">Modern Fitness Center</h3>
        <p className="text-gray-600 leading-relaxed">
          Our fully equipped gym features the latest cardio and strength training equipment. Whether you're a beginner or an experienced athlete,
          our facilities cater to all fitness levels. 

          At Viet Gardens, we focus on providing a holistic fitness experience that combines state-of-the-art equipment, professional guidance, and a motivating environment. 
          Join our group classes, enjoy personal training sessions, or explore specialized programs designed to help you achieve your health and fitness goals. 
          We ensure a safe, welcoming, and engaging atmosphere for everyone—from first-time visitors to seasoned athletes. 

          Whether you're looking to build strength, improve endurance, or simply maintain a healthy lifestyle, our modern fitness center has everything you need. 
          With flexible membership plans and dedicated staff, we make staying fit both effective and enjoyable.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700">Cardio machines (treadmills, ellipticals, bikes)</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700">Free weights and resistance equipment</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700">Group fitness classes</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700">Changing rooms and lockers</span>
          </li>
        </ul>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg">
  <Link href="/reservations">Reserve Now </Link>
</Button>
      </div>
      <div className="relative">
        <img src="/images/gym1.jpg" alt="Gym facilities" className="rounded-lg shadow-lg w-full" />
      </div>
    </div>
  </div>
</section>


    {/* Conference Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <img src="/images/conference.jpg" alt="Conference facilities" className="rounded-lg shadow-lg w-full" />
      </div>
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-blue-900">Professional Meeting Spaces</h3>
        <p className="text-gray-600 leading-relaxed">
          Our conference facilities are designed to meet all your business needs, from intimate team meetings to large corporate events. 
          Each room is thoughtfully arranged with modern technology, comfortable seating, and professional ambiance. 
          Attendees can enjoy HD projectors, professional sound systems, high-speed WiFi, and optional catering services. 
          We ensure a seamless and productive experience for every event, making your business gatherings efficient and memorable.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Capacity for 10-100 people</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">HD projectors and screens</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Professional sound systems</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Catering services available</span>
          </li>
        </ul>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg">
  <Link href="/contact">Contact Us</Link>
</Button>
      </div>
    </div>
  </div>
</section>

      <Footer />
      <WhatsAppChat />
    </>
  )
}
