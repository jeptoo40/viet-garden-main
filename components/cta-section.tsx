"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Phone, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function CTASection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/images/viet1.jpg"
          alt="Restaurant evening ambiance"
          fill
          className="object-cover opacity-50"
        />
       <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>

      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-block">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide">
                  ✨ BOOK YOUR EXPERIENCE TODAY
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Ready for an
                  <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                    Extraordinary
                  </span>
                  Experience?
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Join us at Viet Gardens where every meal is a celebration, every event is unforgettable, and every
                  moment becomes a treasured memory.
                </p>
              </div>

              {/* Contact Options */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-colors">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Book Table</div>
                    <div className="text-gray-400 text-sm">Reserve now</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-colors">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                  <div>
  <div className="text-white font-semibold mb-1">Call Us</div>
  <div className="text-gray-400 text-sm">
    <a
      href="https://wa.me/254738658772"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-green-400 transition"
    >
      +254 738 658 772
    </a>
    
    
  </div>
</div>

                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-colors">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Visit Us</div>
                    <div className="text-gray-400 text-sm">Tala, Machakos</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-full">
                  <span className="mr-2">MAKE RESERVATION</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm rounded-full bg-transparent"
                >
                  VIEW MENU
                </Button>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative">
              {/* Main Image */}
              <div className="">
                <Image
                  src="/images/h16.jpeg"
                  alt="Elegant dining setup"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />

                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform">
                  <div className="text-3xl font-bold text-red-600">4.9⭐</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl transform -rotate-6 hover:-rotate-3 transition-transform">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </section>
  )
}
