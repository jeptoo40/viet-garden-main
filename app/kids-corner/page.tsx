"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import SimpleHeroSection from "@/components/kids-corner-hero"
import WhatsAppChat from "@/components/whatsapp-chat"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Gift, Palette, Music, GamepadIcon, Crown } from "lucide-react"

const kidsActivities = [
  { icon: Palette, title: "Art Corner", description: "Transform into your swimming Hobby Here little hero!", image: "/images/kids2.jpg", color: "from-pink-400 to-purple-500", bgColor: "bg-pink-50" },
  { icon: Music, title: "Music & Dance", description: "Have fun Activites here this season!", image: "/images/kids3.jpg", color: "from-orange-400 to-red-500", bgColor: "bg-orange-50" },
  { icon: GamepadIcon, title: "Gaming Zone", description: "come get your fellows here!", image: "/images/kid5.jpg", color: "from-green-400 to-emerald-500", bgColor: "bg-green-50" },
  { icon: Crown, title: "Royal Corner", description: "Prince and princess corner", image: "/images/kid6.jpg", color: "from-yellow-400 to-orange-500", bgColor: "bg-yellow-50" },
  { icon: Heart, title: "Nature Fun", description: "Play here at viet gardens little kido learn about nature!", image: "/images/kid7.jpg", color: "from-blue-400 to-cyan-500", bgColor: "bg-blue-50" },
  { icon: Gift, title: "Surprise Gifts", description: "We have so mush for you come all!", image: "/images/kid8.jpg", color: "from-purple-400 to-pink-500", bgColor: "bg-purple-50" },
]
const kidsMenu = [
  
 
  { 
    name: "Magic Spring Rolls", 
    description: "Mini spring rolls with surprise fillings", 

    image: "/images/magic-spring-rolls.jpg", 
    color: "bg-green-100" 
  },
 
  { 
    name: "Superhero Smoothie", 
    description: "Power-packed fruit smoothie in fun colors", 
    
    image: "/images/superhero-smoothie.jpg", 
    color: "bg-blue-100" 
  },
  { 
    name: "Birthday Cake Bites", 
    description: "Mini cupcakes with colorful sprinkles", 
    
    image: "/images/Birthday Cake Bites.jpg", 
    color: "bg-purple-100" 
  },
]


const funFacts = [
  { emoji: "🦒", fact: "Giraffes are as tall as a two-story house!" },
  { emoji: "🐘", fact: "Elephants can remember their friends for 50 years!" },
  { emoji: "🦁", fact: "Lions sleep for 20 hours every day!" },
  { emoji: "🦓", fact: "Every zebra has unique stripes, just like fingerprints!" },
]

export default function KidsCornerPage() {
  const [currentFact, setCurrentFact] = useState(0)
  const [balloons, setBalloons] = useState<Array<{ id: number; x: number; y: number; color: string }>>([])
  const [selectedActivity, setSelectedActivity] = useState<typeof kidsActivities[0] | null>(null)

  useEffect(() => {
    const factInterval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length)
    }, 3000)

    const newBalloons = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: ["red", "blue", "yellow", "green", "pink", "purple"][Math.floor(Math.random() * 6)],
    }))
    setBalloons(newBalloons)

    return () => clearInterval(factInterval)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
      <Header />
      <SimpleHeroSection
        title="🎈 KIDS CORNER 🎈"
        subtitle="Where every day is a magical adventure!"
        backgroundImage="/placeholder.svg?height=800&width=1400&text=Kids+Playing+In+Colorful+Garden"
      />

      {/* Floating Balloons */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {balloons.map((balloon) => (
          <div
            key={balloon.id}
            className={`absolute w-8 h-10 bg-${balloon.color}-400 rounded-full opacity-70 animate-bounce`}
            style={{
              left: `${balloon.x}%`,
              top: `${balloon.y}%`,
              animationDelay: `${balloon.id * 0.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Welcome & Fun Fact */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-gradient-to-r from-rainbow-start to-rainbow-end text-black px-8 py-4 rounded-full text-lg font-bold mb-8 animate-pulse">
                🌟 WELCOME TO THE MOST FUN PLACE EVER! 🌟
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
                Let's Have Fun!
              </h2>
              <p className="text-2xl text-gray-700 max-w-lg leading-relaxed">
                🎪 Come and play in our magical garden where dreams come true! We have games, yummy food, and so many fun things to do! 🎪
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <Card className="bg-gradient-to-r from-yellow-200 to-orange-200 border-4 border-yellow-400 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">{funFacts[currentFact].emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">🤔 Did You Know?</h3>
                  <p className="text-xl text-gray-700 font-medium">{funFacts[currentFact].fact}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-500 bg-clip-text text-transparent mb-8">
              🎮 Super Fun Activities! 🎮
            </h2>
            <p className="text-xl text-gray-700">Choose your adventure and let the fun begin!</p>
          </div>
          <a
          href="/booking"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
        >
          Book Now 
        </a>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kidsActivities.map((activity, index) => {
              const Icon = activity.icon
              return (
                <Card
                  key={index}
                  className={`overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl border-4 border-dashed ${activity.bgColor} group cursor-pointer`}
                  onClick={() => setSelectedActivity(activity)}
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.description}
                      fill
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center shadow-lg animate-bounce`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{activity.description}</p>
                    <div className="mt-4">
                      <Button
                        className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 rounded-full text-lg"
                        onClick={() => setSelectedActivity(activity)}
                      >
                        Let's Play! 🎉
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Modal */}
        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-white rounded-2xl max-w-3xl w-full relative overflow-hidden">
              <button
                className="absolute top-4 right-4 text-gray-800 text-2xl font-bold"
                onClick={() => setSelectedActivity(null)}
              >
                &times;
              </button>
              <Image
                src={selectedActivity.image}
                alt={selectedActivity.description}
                width={1200}
                height={600}
                className="object-cover w-full h-96"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-4 text-gray-800">{selectedActivity.title}</h3>
                <p className="text-gray-700">{selectedActivity.description}</p>
              </div>
            </div>
          </div>
        )}
      </section>
{/* Kids Menu Section */}
<section className="py-20 bg-gradient-to-br from-pink-100 to-purple-100">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Text */}
      <div className="space-y-6">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
          🍽️ Yummy Food Just for Kids! 🍽️
        </h2>
        <p className="text-2xl text-gray-700 leading-relaxed">
    Welcome to a world of flavors and fun! Our kids’ menu is carefully designed to delight little taste buds while keeping nutrition in mind. From colorful noodle soups to magic spring rolls, each meal is packed with exciting shapes, vibrant colors, and wholesome ingredients. Watch your kids’ eyes light up as they explore dishes inspired by their favorite stories, animals, and superheroes. Perfect for little hands and big imaginations, our meals turn lunchtime into an adventure, making every bite a magical experience!  
    Bring your little ones to savor healthy, tasty, and fun meals while they enjoy our playful activities, games, and surprises all around them. Every dish is a celebration of joy, creativity, and flavor!
  </p>
      </div>

      {/* Right: Food Items */}
      <div className="space-y-6">
        {kidsMenu.map((item, index) => (
          <Card
            key={index}
            className="border-4 border-white shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl flex items-center gap-4"
          >
            {/* Image */}
            <div className="w-24 h-24 flex-shrink-0 relative">
              <Image
                src={item.image || "/images/kid5.jpg"} // use actual image if available
                alt={item.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            {/* Text */}
            <CardContent className="p-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{item.name}</h3>
              <p className="text-gray-700 mb-2 text-lg">{item.description}</p>
              <div className="text-xl font-bold text-green-600">{item.price}</div>
              <Button className="mt-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-2 px-6 rounded-full">
                I Want This! 😋
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>
<a
          href="/reservations"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
        >
          Reserve Now 
        </a>

      {/* You can add Interactive Games, Birthday, Safety sections here (reuse your previous code) */}

      <Footer />
      <WhatsAppChat />

      <style jsx>{`
        .rainbow-start {
          --tw-gradient-from: #ff6b6b;
        }
        .rainbow-end {
          --tw-gradient-to: #4ecdc4;
        }
      `}</style>
    </main>
  )
}
