"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const foodImages = [
  {
    src: "/images/food1.jpg",
    alt: "African Chicken Stew",
   
  },
  { src: "/images/food2.jpg", alt: "Grilled Goat Meat",},
  { src: "/images/food3.jpg", alt: "Vietnamese Pho",  },
  { src: "/images/food4.jpg", alt: "Nyama Choma", },
  { src:"/images/food5.jpg", alt: "Fish Curry",  },
  { src: "/images/food6.jpg", alt: "Spring Rolls",  },
]

export default function FloatingFoodImages() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % foodImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-96 overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-200 to-orange-200"></div>
      </div>

      {/* Floating Food Images */}
      {foodImages.map((food, index) => (
        <div
          key={index}
          className={`absolute transition-all duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 scale-100" : "opacity-30 scale-75"
          }`}
          style={{
            left: `${20 + (index % 3) * 30}%`,
            top: `${20 + (index % 2) * 40}%`,
            transform: `rotate(${index * 15 - 30}deg)`,
            animationDelay: `${index * 0.2}s`,
          }}
        >
          <div className="bg-white rounded-2xl p-4 shadow-2xl hover:scale-110 transition-transform duration-300">
            <Image
              src={food.src || "/placeholder.svg"}
              alt={food.alt}
              width={120}
              height={120}
              className="rounded-xl mb-2"
            />
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-800">{food.alt}</p>
              <p className="text-red-600 font-bold">{food.price}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Delicious Cuisine</h3>
          <p className="text-gray-600">Vietnamese & African Fusion</p>
        </div>
      </div>
    </div>
  )
}
