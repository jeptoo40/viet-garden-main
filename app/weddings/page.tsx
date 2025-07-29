import Header from "@/components/header"
import SimpleHeroSection from "@/components/simple-hero-section"
import WhatsAppChat from "@/components/whatsapp-chat"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Camera, Music, Utensils, Flower } from "lucide-react"

const weddingPackages = [
  {
    name: "Intimate African Wedding",
    guests: "Up to 50 guests",
    price: "KSh 150,000",
    features: [
      "Traditional African decor",
      "Ceremony setup",
      "Reception dinner",
      "African wedding cake",
      "Photography session",
    ],
  },
  {
    name: "Classic Kenyan Wedding",
    guests: "Up to 100 guests",
    price: "KSh 280,000",
    features: [
      "Full venue decoration with African themes",
      "3-course dinner with local dishes",
      "DJ services with African music",
      "Traditional wedding cake",
      "Bridal car decoration",
      "Photography & videography",
    ],
  },
  {
    name: "Grand African Celebration",
    guests: "Up to 200 guests",
    price: "KSh 450,000",
    features: [
      "Premium African-themed decoration",
      "5-course dinner with fusion menu",
      "Live African band",
      "Premium bar with local drinks",
      "Multi-tier African wedding cake",
      "Honeymoon suite",
      "Full photography & videography",
    ],
  },
]

const africanWeddingImages = [
  {
    src: "/placeholder.svg?height=300&width=300&text=African+Wedding+Ceremony",
    alt: "Traditional African Wedding Ceremony",
  },
  { src: "/placeholder.svg?height=300&width=300&text=African+Bride+Groom", alt: "Beautiful African Couple" },
  { src: "/placeholder.svg?height=300&width=300&text=African+Wedding+Dance", alt: "Traditional Wedding Dance" },
  { src: "/placeholder.svg?height=300&width=300&text=African+Wedding+Decor", alt: "African Wedding Decorations" },
  { src: "/placeholder.svg?height=300&width=300&text=African+Wedding+Cake", alt: "African-themed Wedding Cake" },
  { src: "/placeholder.svg?height=300&width=300&text=African+Wedding+Reception", alt: "Wedding Reception Setup" },
  { src: "/placeholder.svg?height=300&width=300&text=African+Wedding+Feast", alt: "Traditional Wedding Feast" },
  { src: "/placeholder.svg?height=300&width=300&text=African+Wedding+Celebration", alt: "Wedding Celebration" },
]

const weddingServices = [
  {
    icon: Heart,
    title: "Romantic African Ambiance",
    description: "Beautiful garden settings with African-inspired romantic lighting",
  },
  {
    icon: Users,
    title: "Guest Accommodation",
    description: "Comfortable seating for all your guests with traditional African touches",
  },
  { icon: Camera, title: "Photography", description: "Professional wedding photography capturing African traditions" },
  { icon: Music, title: "Entertainment", description: "DJ services and live African music options" },
  { icon: Utensils, title: "Catering", description: "Exquisite Vietnamese and African cuisine fusion" },
  {
    icon: Flower,
    title: "Decoration",
    description: "Beautiful African floral arrangements and traditional venue decoration",
  },
]

export default function WeddingsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SimpleHeroSection
        title="DREAM AFRICAN WEDDINGS"
        subtitle="Where love stories become unforgettable memories with African elegance"
        backgroundImage="/placeholder.svg?height=800&width=1400&text=African+Wedding+Venue+Garden"
      />

      {/* Wedding Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Your Perfect African Wedding Venue</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Viet Gardens, we celebrate the beauty of African traditions while adding our unique Vietnamese touch.
              Our beautiful venue, exceptional cuisine, and dedicated team ensure your special day reflects both
              cultures beautifully.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">African Wedding Services</h2>
            <p className="text-xl text-gray-600">Everything you need for your perfect African celebration</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* Wedding Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">African Wedding Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your special day</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden ${index === 1 ? "ring-2 ring-red-500 scale-105" : ""}`}
              >
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.guests}</p>
                    <div className="text-3xl font-bold text-red-600">{pkg.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Choose Package</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* African Wedding Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">African Wedding Gallery</h2>
            <p className="text-xl text-gray-600">See our beautiful African-themed wedding setups</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {africanWeddingImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </main>
  )
}
