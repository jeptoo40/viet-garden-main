"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function GymHero() {
  return (
    <section className="relative h-[600px] bg-gray-900">
      <Image
        src="/images/gym.jpg"
        alt="Gym Hero"
        fill
        className="object-cover w-full h-full brightness-75"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 lg:px-20">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          🏋️‍♂️ State-of-the-Art Gym
        </h1>
        <p className="text-lg lg:text-xl text-white mb-6 max-w-xl">
          Train hard, stay fit, and feel energized! Our modern gym offers full equipment, personal trainers, and group classes for all levels.
        </p>
       

        <a
          href="/booking"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
        >
          Book Now 
        </a>
      </div>
    </section>
  )
}
