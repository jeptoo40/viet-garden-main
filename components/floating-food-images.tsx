"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const foodImages = [
  {
    src: "/images/food1.jpg",
    alt: "African Chicken Stew",
   
  },
  { src: "/images/food2.jpg", alt: "Grilled Goat Meat",},
  { src: "/images/food3.jpg", alt: "kenyan Pho",  },
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


<section className="py-12 bg-gray-50 text-center relative z-[999]">
  <div className="container mx-auto px-4 relative z-[999]">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
      Download Our Menu
    </h2>

    <p className="text-lg text-gray-600 mb-6">
      Explore our full range of culinary delights.
    </p>

    <a
  href="https://drive.google.com/uc?export=download&id=1HMgmfxJ-r9HHzLFhyei12J0W9W0Z8yQ_"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-[999] inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
>
  Download Menu
</a>

  </div>
</section>






     
    </div>
  )
}
