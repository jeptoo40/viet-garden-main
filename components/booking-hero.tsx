"use client"

import Image from "next/image"
import React from "react"

type BookingsHeroProps = {
  title?: string
  subtitle?: string
  backgroundImage?: string
}

export default function BookingsHero({
  title = "Book Your Experience",
  subtitle = "Reserve your table or event space with ease",
  backgroundImage = "/images/booking-hero.jpg",
}: BookingsHeroProps) {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Bookings Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* overlay */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-6">
          {subtitle}
        </p>
       
      </div>
    </section>
  )
}
