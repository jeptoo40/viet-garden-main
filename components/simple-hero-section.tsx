"use client"

import Image from "next/image"

interface SimpleHeroSectionProps {
  title?: string
  subtitle?: string
  backgroundImage?: string
}

export default function SimpleHeroSection({
  title = "VIET GARDENS",
  subtitle,
  backgroundImage = "/placeholder.svg?height=800&width=1400&text=Restaurant",
}: SimpleHeroSectionProps) {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Viet Gardens"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl opacity-90 font-light">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
