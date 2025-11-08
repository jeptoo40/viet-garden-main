"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function TeamBuildingHero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/t5.jpg"   
          alt="Team Building"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/1 backdrop-blur-[2px]" />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl space-y-6 animate-fade-in-up">
            
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
              Team Building Experiences
            </h1>

            <h2 className="text-2xl md:text-3xl text-red-400 italic">
              Unite • Grow • Celebrate Together
            </h2>

            <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
              Whether corporate retreats, bonding activities, or fun outdoor challenges,
              Viet Gardens provides the perfect green environment for groups to connect
              and build stronger relationships.
            </p>
            <Link href="/reservations" passHref>
    <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
      BOOK WITH US
    </Button>
  </Link>
            

          </div>
        </div>
      </div>
    </section>
  )
}
