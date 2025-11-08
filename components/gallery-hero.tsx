"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function GalleryHero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/images/gallery-hero.jpg" 
        alt="Gallery Background"
        fill
        className="object-cover opacity-70"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10" />

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
        >
          Explore Our Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl"
        >
          A visual journey of unforgettable memories, events, and breathtaking moments.
        </motion.p>


        <a
          href="/reservations"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
        >
          Reserve Now 📅
        </a>
      </div>
    </section>
  )
}
