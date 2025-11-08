"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroSlides = [
  {
    image:  "/images/3.jpg", 
    title: "WELCOME TO VIET GARDENS",
    subtitle: "Where Heritage Meets Kenyan Soul",
    description: "Experience an extraordinary culinary journey in our enchanting garden oasis",
  },
  {
    image: "/images/1.jpg",
    title: "AUTHENTIC VIETNAMESE CUISINE",
    subtitle: "Crafted by Master Chefs",
    description: "Traditional recipes passed down through generations, prepared with locally sourced ingredients",
  },
  
  {
    image:   "/images/2.jpeg",
    title: "UNFORGETTABLE CELEBRATIONS",
    subtitle: "Your Dreams, Our Canvas",
    description: "From intimate gatherings to grand celebrations, we create moments that last a lifetime",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }


  
  return (
    <section className="relative h-[700px] overflow-hidden"   >
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            quality={100}
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="space-y-8 animate-fade-in-up">
              {/* Decorative Line */}
              <div className="flex items-center space-x-4">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-red-500"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-12 h-px bg-gradient-to-r from-red-500 to-transparent"></div>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-5xl lg:text-8xl font-bold text-white tracking-wider leading-none">
                  {heroSlides[currentSlide].title.split(" ").map((word, index) => (
                    <span
                      key={index}
                      className="inline-block"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: "slideInFromBottom 0.8s ease-out forwards",
                      }}
                    >
                      {word}&nbsp;
                    </span>
                  ))}
                </h1>

                {/* Subtitle */}
                <h2 className="text-2xl md:text-3xl text-red-400 font-light italic opacity-90">
                  {heroSlides[currentSlide].subtitle}
                </h2>

                {/* Description */}
                <p className="text-xl text-gray-200 font-light max-w-2xl leading-relaxed">
                  {heroSlides[currentSlide].description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Button className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-105 border-2 border-red-600">
                  <span className="mr-2">EXPLORE MENU</span>
                  <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Button>

 

              </div>
            </div>git add 
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
        {/* Slide Indicators */}
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-red-500 scale-125" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          {isAutoPlaying ? <div className="w-2 h-2 bg-white rounded-full"></div> : <Play className="w-4 h-4 ml-0.5" />}
        </button>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300 group"
      >
        <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300 group"
      >
        <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
      </button>
    </section>
  )
}
