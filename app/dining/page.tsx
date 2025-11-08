"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import SimpleHeroSection from "@/components/simple-hero-section"
import FloatingFoodImages from "@/components/floating-food-images"
import WhatsAppChat from "@/components/whatsapp-chat"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Star, Utensils, Leaf } from "lucide-react"

const featuredDishes = [
  {
    image: "/images/food1.jpeg",
    title: "",
    description: "Dine with the best.",
  },
  {
    image: "/images/food3.jpg",
    title: "",
    description: "Delicious cooked with love.",
  },
  {
    image: "/images/food4.jpeg",
    title: "",
    description: "cooked with the best  .",
  },
]

export default function DiningPage() {
  const [autoImage, setAutoImage] = useState(0)
  const [manualImage, setManualImage] = useState(0)

  // Auto-switching image
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoImage((prev) => (prev + 1) % featuredDishes.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <SimpleHeroSection
        title=""
        subtitle="Experience the fusion of Vietnamese and Kenyan flavors"
        backgroundImage="/images/dining2.jpg"
      />

      {/* Floating Food Images Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Our Culinary Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our menu celebrates the rich culinary traditions of Vietnam while incorporating the vibrant flavors of Kenya
            </p>

            <a
          href="/contact"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
        >
          Contact Us 
        </a>

          </div>
          <FloatingFoodImages />
        </div>
      </section>

      {/* Explore Our Culinary Delights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full">
              <img
                src="/images/Fried-Chicken.jpg"
                alt="Featured Dish"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                Explore Our Culinary Delights
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our menu celebrates the rich culinary traditions of Vietnam while incorporating the vibrant flavors of Kenya.
                Each dish is thoughtfully prepared by our master chefs using the freshest ingredients.
                <br /><br />
                From delectable appetizers to mouthwatering desserts, we ensure every bite tells a story of authenticity, passion,
                and creativity. Immerse yourself in a dining experience where taste meets artistry.
              </p>
              <p className="text-lg text-gray-500">
                Whether dining with friends, family, or colleagues, our dishes are designed to delight and leave lasting memories.
              </p>

              <a
          href="/reservations"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
        >
          Reserve Now 
        </a>

            </div>
          </div>
        </div>
      </section>

      {/* Auto-Switching Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                A Feast for the Eyes and Palate
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Immerse yourself in a visual journey of our culinary creations.  
                While our chefs craft each dish with care and authenticity, the presentation is equally important.  
                From vibrant appetizers to exquisite desserts, our menu is designed to delight both your taste buds and your eyes.
              </p>
              <p className="text-lg text-gray-500">
                Scroll through our featured dishes to see the artistry, color, and passion behind every creation.
              </p>
            </div>
            <div className="w-full h-96 relative">
              <img
                src={featuredDishes[autoImage].image}
                alt={`Dish ${autoImage + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-lg transition-all duration-700"
              />
            </div>
          </div>
        </div>
        <a
          href="/booking"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
        >
          Book Now 
        </a>

      </section>

     

     
      <Footer />
      <WhatsAppChat />
    </main>
  )
}
