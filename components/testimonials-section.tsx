"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Wedding Client",
    avatar: "/placeholder.svg?height=80&width=80&text=SJ",
    rating: 5,
    text: "Viet Gardens made our wedding day absolutely magical. The attention to detail, the exquisite food, and the stunning garden setting created memories we'll cherish forever. The staff went above and beyond to ensure everything was perfect.",
    event: "Wedding Celebration",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Corporate Client",
    avatar: "/placeholder.svg?height=80&width=80&text=MC",
    rating: 5,
    text: "We've hosted multiple corporate events at Viet Gardens, and each time has exceeded our expectations. The fusion of Vietnamese and Kenyan cuisine is exceptional, and the professional service makes every event seamless.",
    event: "Corporate Retreat",
  },
  {
    id: 3,
    name: "Grace Wanjiku",
    role: "Regular Diner",
    avatar: "/placeholder.svg?height=80&width=80&text=GW",
    rating: 5,
    text: "This is our family's favorite restaurant in Machakos. The authentic Vietnamese flavors combined with the warm Kenyan hospitality create an dining experience like no other. The ambiance is simply breathtaking.",
    event: "Family Dining",
  },
  {
    id: 4,
    name: "David Mwangi",
    role: "Birthday Client",
    avatar: "/placeholder.svg?height=80&width=80&text=DM",
    rating: 5,
    text: "Celebrated my 40th birthday here and it was phenomenal! The team helped plan every detail perfectly. The food presentation was artistic, and the garden setting provided the perfect backdrop for our celebration.",
    event: "Birthday Party",
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-red-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <Star className="w-6 h-6 text-yellow-500 fill-current" />
            <Star className="w-6 h-6 text-yellow-500 fill-current mx-2" />
            <Star className="w-6 h-6 text-yellow-500 fill-current" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            What Our Guests
            <span className="block bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who have experienced the magic of Viet
            Gardens
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  {/* Quote Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Quote className="w-10 h-10 text-white" />
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-xl text-gray-700 leading-relaxed italic mb-8 max-w-3xl mx-auto">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  {/* Event Badge */}
                  <div className="inline-block bg-gradient-to-r from-red-100 to-pink-100 text-red-700 px-6 py-2 rounded-full text-sm font-semibold mb-8">
                    {testimonials[currentTestimonial].event}
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    width={60}
                    height={60}
                    className="rounded-full shadow-lg"
                  />
                  <div className="text-left">
                    <div className="font-bold text-gray-800 text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-red-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
