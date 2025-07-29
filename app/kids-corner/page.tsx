"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import SimpleHeroSection from "@/components/simple-hero-section"
import WhatsAppChat from "@/components/whatsapp-chat"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Gift, Palette, Music, GamepadIcon, Crown } from "lucide-react"

const kidsActivities = [
  {
    icon: Palette,
    title: "Face Painting Magic",
    description: "Transform into your favorite animal or superhero!",
    image: "/placeholder.svg?height=300&width=400&text=Kids+Face+Painting+Fun",
    color: "from-pink-400 to-purple-500",
    bgColor: "bg-pink-50",
  },
  {
    icon: Music,
    title: "African Drumming",
    description: "Learn traditional African rhythms and make music!",
    image: "/placeholder.svg?height=300&width=400&text=Kids+African+Drumming",
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: GamepadIcon,
    title: "Garden Treasure Hunt",
    description: "Explore our magical gardens and find hidden treasures!",
    image: "/placeholder.svg?height=300&width=400&text=Kids+Garden+Adventure",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Crown,
    title: "Princess & Prince Corner",
    description: "Dress up like royalty with our costume collection!",
    image: "/placeholder.svg?height=300&width=400&text=Kids+Dress+Up+Corner",
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Heart,
    title: "Animal Friends Zone",
    description: "Meet our friendly garden animals and learn about nature!",
    image: "/placeholder.svg?height=300&width=400&text=Kids+With+Animals",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Gift,
    title: "Craft Workshop",
    description: "Create amazing crafts to take home as memories!",
    image: "/placeholder.svg?height=300&width=400&text=Kids+Craft+Workshop",
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50",
  },
]

const kidsMenu = [
  {
    name: "Rainbow Pho",
    description: "Colorful noodle soup with fun vegetables",
    price: "KSh 450",
    emoji: "🌈",
    color: "bg-red-100",
  },
  {
    name: "Chicken Nugget Safari",
    description: "Crispy chicken shaped like African animals",
    price: "KSh 550",
    emoji: "🦁",
    color: "bg-yellow-100",
  },
  {
    name: "Magic Spring Rolls",
    description: "Mini spring rolls with surprise fillings",
    price: "KSh 400",
    emoji: "✨",
    color: "bg-green-100",
  },
  {
    name: "Princess Pancakes",
    description: "Heart-shaped pancakes with berry sauce",
    price: "KSh 350",
    emoji: "👑",
    color: "bg-pink-100",
  },
  {
    name: "Superhero Smoothie",
    description: "Power-packed fruit smoothie in fun colors",
    price: "KSh 250",
    emoji: "🦸",
    color: "bg-blue-100",
  },
  {
    name: "Birthday Cake Bites",
    description: "Mini cupcakes with colorful sprinkles",
    price: "KSh 200",
    emoji: "🧁",
    color: "bg-purple-100",
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

  useEffect(() => {
    // Rotate fun facts
    const factInterval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length)
    }, 3000)

    // Generate floating balloons
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
          >
            <div className="w-full h-full rounded-full shadow-lg"></div>
            <div className="absolute top-full left-1/2 w-px h-8 bg-gray-400 transform -translate-x-1/2"></div>
          </div>
        ))}
      </div>

      {/* Welcome Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-rainbow-start to-rainbow-end text-white px-8 py-4 rounded-full text-lg font-bold mb-8 animate-pulse">
              🌟 WELCOME TO THE MOST FUN PLACE EVER! 🌟
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-8">
              Let's Have Amazing Fun!
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              🎪 Come and play in our magical garden where dreams come true! We have games, yummy food, and so many fun
              things to do! 🎪
            </p>
          </div>

          {/* Fun Fact Carousel */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card className="bg-gradient-to-r from-yellow-200 to-orange-200 border-4 border-yellow-400 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">{funFacts[currentFact].emoji}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🤔 Did You Know?</h3>
                <p className="text-xl text-gray-700 font-medium">{funFacts[currentFact].fact}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-8">
              🎮 Super Fun Activities! 🎮
            </h2>
            <p className="text-xl text-gray-700">Choose your adventure and let the fun begin!</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kidsActivities.map((activity, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl border-4 border-dashed ${activity.bgColor} group cursor-pointer`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center shadow-lg animate-bounce`}
                    >
                      <activity.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{activity.description}</p>
                  <div className="mt-4">
                    <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 rounded-full text-lg">
                      Let's Play! 🎉
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kids Menu Section */}
      <section className="py-20 bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-8">
              🍽️ Yummy Food Just for Kids! 🍽️
            </h2>
            <p className="text-xl text-gray-700">Delicious and healthy food that kids absolutely love!</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kidsMenu.map((item, index) => (
              <Card
                key={index}
                className={`${item.color} border-4 border-white shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{item.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.name}</h3>
                  <p className="text-gray-700 mb-4 text-lg">{item.description}</p>
                  <div className="text-3xl font-bold text-green-600 mb-4">{item.price}</div>
                  <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-2 px-6 rounded-full">
                    I Want This! 😋
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Games Section */}
      <section className="py-20 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-8">
              🎯 Interactive Games Zone! 🎯
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-red-200 to-pink-200 border-4 border-red-300 hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🎪</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Circus Show</h3>
                <p className="text-gray-700">Amazing circus performances every weekend!</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-200 to-cyan-200 border-4 border-blue-300 hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Art Studio</h3>
                <p className="text-gray-700">Create beautiful artwork and take it home!</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-200 to-emerald-200 border-4 border-green-300 hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🏰</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Castle Playground</h3>
                <p className="text-gray-700">Climb, slide, and explore our magical castle!</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-200 to-orange-200 border-4 border-yellow-300 hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🎭</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Story Time</h3>
                <p className="text-gray-700">Listen to amazing African fairy tales!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Birthday Party Section */}
      <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
              🎂 Best Birthday Parties Ever! 🎂
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-rainbow-start to-rainbow-end text-white border-8 border-white shadow-2xl">
              <CardContent className="p-12 text-center">
                <div className="text-8xl mb-6">🎉</div>
                <h3 className="text-4xl font-bold mb-6">Make Your Birthday Magical!</h3>
                <p className="text-2xl mb-8 leading-relaxed">
                  🎈 Balloons, games, yummy cake, and all your friends! 🎈
                  <br />🎪 Face painting, treasure hunts, and surprise gifts! 🎪
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-4xl mb-2">🎨</div>
                    <h4 className="font-bold text-xl">Art & Crafts</h4>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-4xl mb-2">🎪</div>
                    <h4 className="font-bold text-xl">Magic Shows</h4>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-4xl mb-2">🎁</div>
                    <h4 className="font-bold text-xl">Surprise Gifts</h4>
                  </div>
                </div>
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-full text-2xl shadow-lg">
                  Plan My Party! 🎉
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety & Parents Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">👨‍👩‍👧‍👦 For Parents 👨‍👩‍👧‍👦</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-green-50 border-2 border-green-200">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-bold text-gray-800 mb-2">100% Safe</h3>
                <p className="text-gray-600">All activities are supervised by trained staff</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-blue-50 border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🥗</div>
                <h3 className="font-bold text-gray-800 mb-2">Healthy Food</h3>
                <p className="text-gray-600">Nutritious meals made with fresh ingredients</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-purple-50 border-2 border-purple-200">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">👩‍🏫</div>
                <h3 className="font-bold text-gray-800 mb-2">Expert Staff</h3>
                <p className="text-gray-600">Trained childcare professionals</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-yellow-50 border-2 border-yellow-200">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-bold text-gray-800 mb-2">Stay Connected</h3>
                <p className="text-gray-600">Photo updates sent to parents</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
