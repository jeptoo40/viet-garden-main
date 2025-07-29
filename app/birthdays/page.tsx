import Header from "@/components/header"
import SimpleHeroSection from "@/components/simple-hero-section"
import WhatsAppChat from "@/components/whatsapp-chat"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, Cake, Music, Camera, BombIcon as Balloon, Star } from "lucide-react"

const birthdayPackages = [
  {
    name: "African Kids Birthday",
    guests: "Up to 20 kids",
    price: "KSh 25,000",
    features: [
      "African-themed decorations",
      "Traditional African birthday cake",
      "Kids entertainment with African drums",
      "Traditional games and storytelling",
      "African-themed goodie bags",
      "2-hour venue use",
    ],
  },
  {
    name: "Adult African Celebration",
    guests: "Up to 50 guests",
    price: "KSh 45,000",
    features: [
      "Elegant African decorations",
      "Custom African-inspired birthday cake",
      "DJ services with African music",
      "3-course dinner with local dishes",
      "Photography with African backdrop",
      "4-hour venue use",
    ],
  },
  {
    name: "Milestone African Celebration",
    guests: "Up to 100 guests",
    price: "KSh 85,000",
    features: [
      "Premium African-themed decorations",
      "Multi-tier African cake design",
      "Live African entertainment",
      "Full dinner buffet with fusion menu",
      "Bar service with local drinks",
      "Photography & videography",
      "6-hour venue use",
    ],
  },
]

const africanCakeImages = [
  {
    src: "/placeholder.svg?height=250&width=250&text=African+Traditional+Cake",
    alt: "Traditional African Birthday Cake",
  },
  { src: "/placeholder.svg?height=250&width=250&text=African+Safari+Cake", alt: "Safari Themed Birthday Cake" },
  { src: "/placeholder.svg?height=250&width=250&text=African+Drum+Cake", alt: "African Drum Shaped Cake" },
  { src: "/placeholder.svg?height=250&width=250&text=African+Sunset+Cake", alt: "African Sunset Theme Cake" },
  { src: "/placeholder.svg?height=250&width=250&text=African+Animal+Cake", alt: "African Animals Birthday Cake" },
  { src: "/placeholder.svg?height=250&width=250&text=African+Tribal+Cake", alt: "African Tribal Pattern Cake" },
]

const birthdayServices = [
  {
    icon: Cake,
    title: "Custom African Cakes",
    description: "Beautiful custom cakes with African themes and traditional designs",
  },
  {
    icon: Balloon,
    title: "African Decoration",
    description: "Colorful decorations with African patterns and traditional elements",
  },
  {
    icon: Music,
    title: "African Entertainment",
    description: "Traditional African music, drumming, and dance performances",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography with beautiful African-themed backdrops",
  },
  {
    icon: Gift,
    title: "Party Planning",
    description: "Complete African-themed party planning from start to finish",
  },
  {
    icon: Star,
    title: "Cultural Themes",
    description: "Authentic African themed parties with traditional cultural elements",
  },
]

export default function BirthdaysPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SimpleHeroSection
        title="AFRICAN BIRTHDAY CELEBRATIONS"
        subtitle="Make every birthday unforgettable with African traditions at Viet Gardens"
        backgroundImage="/placeholder.svg?height=800&width=1400&text=African+Birthday+Party+Celebration"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Celebrate Life's Special Moments</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether it's a child's first birthday or a milestone celebration, Viet Gardens provides the perfect
              setting for memorable African-themed birthday parties. Our beautiful venue, delicious fusion food, and
              traditional African entertainment ensure your special day is truly magical.
            </p>
          </div>
        </div>
      </section>

      {/* African Birthday Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">African Birthday Party Services</h2>
            <p className="text-xl text-gray-600">Everything you need for the perfect African celebration</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {birthdayServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* African Cake Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">African-Themed Birthday Cakes</h2>
            <p className="text-xl text-gray-600">Beautiful custom cakes inspired by African culture and traditions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {africanCakeImages.map((cake, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative aspect-square">
                  <Image
                    src={cake.src || "/placeholder.svg"}
                    alt={cake.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4">
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      {cake.alt}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Birthday Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">African Birthday Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your African-themed celebration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {birthdayPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden ${index === 1 ? "ring-2 ring-orange-500 scale-105" : ""}`}
              >
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.guests}</p>
                    <div className="text-3xl font-bold text-orange-600">{pkg.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Book Package</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Specific Celebrations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">African Celebrations for Every Age</h2>
            <p className="text-xl text-gray-600">Tailored African experiences for different age groups</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🥁</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Kids (1-12)</h3>
                <p className="text-gray-600">
                  African drumming, storytelling, traditional games, and face painting with tribal patterns
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-red-50 to-pink-50">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Teens (13-19)</h3>
                <p className="text-gray-600">African music, dance lessons, photo booths with African props</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🍷</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Adults (20-59)</h3>
                <p className="text-gray-600">Elegant African dining, traditional cocktails, live African music</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-purple-50 to-violet-50">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🎂</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Seniors (60+)</h3>
                <p className="text-gray-600">Comfortable seating, gentle African music, traditional foods</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </main>
  )
}
