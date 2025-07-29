import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WhatsAppChat from "@/components/whatsapp-chat"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Users, Wifi, Coffee, Projector, Car } from "lucide-react"

const gymFeatures = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description: "State-of-the-art fitness equipment for all workout needs",
  },
  {
    icon: Users,
    title: "Personal Training",
    description: "Certified personal trainers available for individual sessions",
  },
  {
    icon: Coffee,
    title: "Refreshment Area",
    description: "Healthy snacks and beverages available post-workout",
  },
]

const conferenceFeatures = [
  {
    icon: Projector,
    title: "AV Equipment",
    description: "Modern projectors, screens, and sound systems",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Reliable internet connection for all your needs",
  },
  {
    icon: Car,
    title: "Parking",
    description: "Ample parking space for all attendees",
  },
]

const packages = [
  {
    name: "Gym Membership",
    type: "Monthly",
    price: "KSh 4,500",
    features: ["Full gym access", "Group classes", "Locker facilities", "Shower facilities", "Nutritional guidance"],
  },
  {
    name: "Conference Room",
    type: "Half Day",
    price: "KSh 15,000",
    features: ["4-hour room rental", "AV equipment", "WiFi access", "Coffee breaks", "Parking", "Basic setup"],
  },
  {
    name: "Full Day Conference",
    type: "Full Day",
    price: "KSh 25,000",
    features: [
      "8-hour room rental",
      "AV equipment",
      "WiFi access",
      "Lunch & coffee breaks",
      "Parking",
      "Full setup support",
    ],
  },
]

export default function GymConferencePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        title="GYM & CONFERENCE FACILITIES"
        subtitle="Modern facilities for fitness and business needs"
        backgroundImage="/placeholder.svg?height=800&width=1400&text=Gym+Conference+Facilities"
        showNavigation={false}
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Fitness & Business Solutions</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Viet Gardens offers modern gym facilities and professional conference rooms to meet your fitness and
              business needs. Whether you're looking to stay fit or host important meetings, we have the perfect space
              for you.
            </p>
          </div>
        </div>
      </section>

      {/* Gym Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Gym Facilities</h2>
            <p className="text-xl text-gray-600">Stay fit with our modern gym equipment and facilities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {gymFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Modern Fitness Center</h3>
              <p className="text-gray-600 leading-relaxed">
                Our fully equipped gym features the latest cardio and strength training equipment. Whether you're a
                beginner or an experienced athlete, our facilities cater to all fitness levels.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Cardio machines (treadmills, ellipticals, bikes)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Free weights and resistance equipment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Group fitness classes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Changing rooms and lockers</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600&text=Modern+Gym+Equipment"
                alt="Gym facilities"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conference Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Conference Facilities</h2>
            <p className="text-xl text-gray-600">Professional meeting spaces for your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {conferenceFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600&text=Conference+Room+Setup"
                alt="Conference facilities"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Professional Meeting Spaces</h3>
              <p className="text-gray-600 leading-relaxed">
                Our conference facilities are designed to accommodate various business needs, from small team meetings
                to large corporate events. Each room is equipped with modern technology and comfortable seating.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Capacity for 10-100 people</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">HD projectors and screens</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Professional sound systems</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Catering services available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Packages & Pricing</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden ${index === 1 ? "ring-2 ring-blue-500 scale-105" : ""}`}
              >
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                    POPULAR
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.type}</p>
                    <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Book Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </main>
  )
}
