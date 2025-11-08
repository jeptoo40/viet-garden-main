"use client"

import React from "react"

export default function KidsCornerHero() {
  return (
    <section
      className="relative h-[500px] flex items-center justify-center text-center bg-gradient-to-r from-pink-300 to-yellow-300 overflow-hidden"
      style={{
        backgroundImage: "url('/images/kids.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
       
        <p className="mt-4 text-lg md:text-2xl text-white drop-shadow-md">
          Fun, games, and delicious treats for our little guests!
        </p>
      </div>

      {/* Optional floating elements (toys, balloons, etc.) */}
      <img
        src="/images/baloons.jpg"
        alt="Balloon"
        className="absolute top-10 left-10 w-16 animate-bounce"
      />
      <img
        src="/images/toy.jpg"
        alt="Toy"
        className="absolute bottom-10 right-10 w-20 animate-bounce"
      />
    </section>
  )
}
