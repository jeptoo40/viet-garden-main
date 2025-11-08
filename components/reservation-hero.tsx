"use client"

import { Button } from "@/components/ui/button"

import Image from "next/image"

export default function ReservationHero() {
  return (
    <section className="relative h-[600px] bg-gray-900">
      {/* Background image */}
      <Image
        src="/images/reservation.jpg" // replace with your image
        alt="Reservation Hero"
        fill
        className="object-cover w-full h-full brightness-95"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 lg:px-20">
      
        <p className="text-lg lg:text-2xl text-white mb-8 max-w-xl">
          Secure your spot for gym sessions, conference rooms, or special events. Fast, easy, and convenient booking!
        </p>
       
      </div>
    </section>
  )
}
