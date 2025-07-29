import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Star, Clock, Users } from "lucide-react"

const achievements = [
  { icon: Award, number: "50+", label: "Awards Won" },
  { icon: Star, number: "4.9", label: "Rating" },
  { icon: Clock, number: "10+", label: "Years Experience" },
  { icon: Users, number: "10K+", label: "Happy Customers" },
]

export default function WelcomeSection() {
  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-100/30 to-pink-100/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-blue-100/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Wine bottle image with enhanced styling */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              {/* Decorative Elements */}
              <div className="absolute -top-12 -left-12 w-24 h-24 border-2 border-red-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-red-200/40 to-pink-200/40 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full blur-lg"></div>

              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-purple-50 rounded-3xl opacity-50"></div>
                <Image
                  src="/placeholder.svg?height=600&width=400&text=Premium+Wine+Bottle+with+Fresh+Ingredients"
                  alt="Premium wine bottle with fresh ingredients"
                  width={400}
                  height={600}
                  className="relative z-10 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                  quality={95}
                />

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  Chef's Special
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Decorative Badge */}
            <div className="inline-block">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider shadow-lg">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                  CELEBRATION OF UNIQUE BLEND OF CULTURES
                </span>
              </div>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-none">
                <span className="block">Welcome to</span>
                <span className="block bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Viet Garden
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl text-gray-600">Tala</span>
              </h2>
            </div>

            {/* Elegant Subtitle */}
            <p className="text-2xl md:text-3xl text-gray-600 italic leading-relaxed font-light relative">
              <span className="absolute -left-4 top-0 text-6xl text-red-200 font-serif">"</span>A world of exquisite
              tastes and unforgettable moments.
              <span className="absolute -right-2 bottom-0 text-6xl text-red-200 font-serif">"</span>
            </p>

            {/* Enhanced Description */}
            <div className="space-y-4">
              <div className="w-20 h-px bg-gradient-to-r from-red-500 to-transparent"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                At Viet Gardens, we take pride in creating a warm and inviting atmosphere, where you can relish the
                fusion of Kenyan hospitality and exceptional gastronomy. Join us on a gastronomic journey that
                harmonizes the spirit of Kenya with the artistry of our chefs.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 text-lg font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-105 rounded-full">
                <span className="mr-2">EXPLORE OUR MENU</span>
                <div className="w-0 group-hover:w-5 transition-all duration-300 overflow-hidden">→</div>
              </Button>

              <Button
                variant="outline"
                className="group border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-10 py-4 text-lg font-semibold tracking-wide transition-all duration-300 hover:shadow-xl rounded-full bg-transparent"
              >
                MAKE RESERVATION
              </Button>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-gray-200">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon size={20} className="text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
