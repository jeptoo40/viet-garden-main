"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Star, Gift, Cake, Sparkles, Crown } from "lucide-react"

const kidsActivities = [
  {
    icon: Gift,
    title: "Magical Adventures",
    description: "Face painting, balloon animals, and treasure hunts in our enchanted garden!",
    image: "/placeholder.svg?height=200&width=300&text=Kids+Magical+Adventures",
    color: "from-pink-400 to-purple-500",
  },
  {
    icon: Cake,
    title: "Yummy Kids Menu",
    description: "Rainbow pho, animal-shaped nuggets, and magical smoothies!",
    image: "/placeholder.svg?height=200&width=300&text=Colorful+Kids+Food",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Crown,
    title: "Princess & Prince Zone",
    description: "Dress up corner with costumes and royal photo sessions!",
    image: "/placeholder.svg?height=200&width=300&text=Kids+Dress+Up+Zone",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Star,
    title: "Birthday Magic",
    description: "Unforgettable birthday parties with African themes and circus shows!",
    image: "/placeholder.svg?height=200&width=300&text=Kids+Birthday+Party",
    color: "from-blue-400 to-cyan-500",
  },
]

const floatingEmojis = ["🎈", "🎪", "🦁", "🌈", "⭐", "🎨", "🎭", "🎯"]

export default function KidsCornerSection() {
  const [currentEmoji, setCurrentEmoji] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % floatingEmojis.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Floating Emojis */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingEmojis.map((emoji, index) => (
          <div
            key={index}
            className={`absolute text-4xl opacity-20 animate-bounce ${
              index === currentEmoji ? "opacity-60 scale-150" : ""
            } transition-all duration-500`}
            style={{
              left: `${10 + (index % 4) * 25}%`,
              top: `${10 + (index % 3) * 30}%`,
              animationDelay: `${index * 0.3}s`,
              animationDuration: `${2 + Math.random()}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold mb-8 animate-pulse shadow-lg">
            <Sparkles className="inline w-6 h-6 mr-2" />🎪 KIDS CORNER - WHERE MAGIC HAPPENS! 🎪
            <Sparkles className="inline w-6 h-6 ml-2" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Kids Corner
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-gray-700">Where Little Dreams Come True!</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            🌟 A magical world designed just for kids! Safe, fun, and full of amazing adventures that will make every
            child smile from ear to ear! 🌟
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {kidsActivities.map((activity, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-white shadow-xl group"
            >
              <div className="relative h-48">
                <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center shadow-lg animate-bounce group-hover:animate-spin`}
                  >
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Kids Menu Preview */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-dashed border-rainbow mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
              🍽️ Super Yummy Kids Menu! 🍽️
            </h3>
            <p className="text-gray-600 text-lg">Healthy, delicious food that makes kids jump with joy!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl p-6 border-4 border-red-200">
              <div className="text-5xl mb-4">🌈</div>
              <h4 className="font-bold text-gray-800 mb-2 text-lg">Rainbow Pho</h4>
              <p className="text-gray-600 text-sm mb-3">Colorful noodle soup that tastes like magic!</p>
              <p className="text-red-600 font-bold text-xl">KSh 450</p>
            </div>

            <div className="text-center bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 border-4 border-yellow-200">
              <div className="text-5xl mb-4">🦁</div>
              <h4 className="font-bold text-gray-800 mb-2 text-lg">Safari Nuggets</h4>
              <p className="text-gray-600 text-sm mb-3">Chicken nuggets shaped like African animals!</p>
              <p className="text-orange-600 font-bold text-xl">KSh 550</p>
            </div>

            <div className="text-center bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border-4 border-purple-200">
              <div className="text-5xl mb-4">🧁</div>
              <h4 className="font-bold text-gray-800 mb-2 text-lg">Magic Cupcakes</h4>
              <p className="text-gray-600 text-sm mb-3">Cupcakes with surprise colors inside!</p>
              <p className="text-purple-600 font-bold text-xl">KSh 200</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/kids-corner">
              <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-12 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                🎪 Visit Kids Corner! 🎪
              </Button>
            </Link>
          </div>
        </div>

        {/* Special Features */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-4 border-green-300 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">100% Safe & Secure</h3>
              <p className="text-gray-700 text-lg">
                All activities are supervised by trained childcare professionals. Your little ones are in the safest
                hands!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-100 to-cyan-100 border-4 border-blue-300 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Memory Making</h3>
              <p className="text-gray-700 text-lg">
                We capture all the magical moments and send photos to parents so you never miss a smile!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        .border-rainbow {
          border-image: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3) 1;
        }
      `}</style>
    </section>
  )
}
