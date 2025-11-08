import { Button } from "@/components/ui/button"

import Link from "next/link"
import Image from "next/image";
import { Utensils, Calendar, Users, Award, Heart, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"


export default function FeaturesSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-red-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-br from-purple-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left: Text Content */}
      <div>
        {/* Decorative Line-Dot-Line */}
        <div className="flex items-center mb-8">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-red-500"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full mx-4"></div>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-red-500"></div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Always Choose
          <span className="block bg-gradient-to-r from-red-600 to-darkblue-600 bg-clip-text text-transparent">
            Viet Gardens
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
  Experience the perfect blend of authentic cuisine, exceptional service, and memorable moments in our enchanting garden setting. 
  Whether you're planning an intimate dinner, a family celebration, or a corporate event, Viet Gardens provides a serene and elegant atmosphere 
  that turns every gathering into a cherished memory. Our culinary team crafts exquisite dishes using the freshest ingredients, while our 
  dedicated staff ensures every detail is perfectly attended to. Come and enjoy an unforgettable experience where flavor, ambiance, and 
  hospitality meet in perfect harmony.
</p>


        {/* Optional Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
        

          <Button asChild variant="outline" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-10 py-4 text-lg font-semibold rounded-full">
            <Link href="/kids-corner">KIDS CORNER</Link>
          </Button>
        </div>
      </div>

      {/* Right: Hero Image */}
      <div className="relative w-full h-96 lg:h-[500px]">
        <Image
          src="/images/viet-garden-hero.jpg"
          alt="Viet Gardens"
          fill
          className="object-cover rounded-xl shadow-lg"
          priority
        />
      </div>

    </div>
  </div>
</section>



    


        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-block bg-gradient-to-r from-red-50 to-pink-50 rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Get Ready to Experience The Best</h3>
            <p className="text-gray-600 mb-8 max-w-md">
              Join thousands of satisfied customers who have made Viet Gardens their preferred destination
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="group border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-10 py-4 text-lg font-semibold tracking-wide transition-all duration-300 hover:shadow-xl rounded-full bg-transparent">
    <Link href="/gallery">
    EXPLORE
    </Link>
  </Button>
              <Button asChild variant="outline" className="group border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-10 py-4 text-lg font-semibold tracking-wide transition-all duration-300 hover:shadow-xl rounded-full bg-transparent">
    <Link href="/contact">
      SEND A MESSAGE
    </Link>
  </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
