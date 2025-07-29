import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WhatsAppChat from "@/components/whatsapp-chat"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Trophy, Coffee, Utensils, MapPin } from "lucide-react"

const teamBuildingActivities = [
  {
    icon: Target,
    title: "Outdoor Challenges",
    description: "Engaging outdoor activities that promote teamwork and problem-solving skills",
  },
  {
    icon: Trophy,
    title: "Team Competitions",
    description: "Fun competitive games that build camaraderie and team spirit",
  },
  {
    icon: Coffee,
    title: "Workshop Sessions",
    description: "Professional development workshops in a relaxed environment",
  },
  {
    icon: Utensils,
    title: "Team Dining",
    description: "Shared meals that foster communication and relationship building",
  },
  {
    icon: MapPin,
    title: "Nature Walks",
    description: "Guided nature walks that encourage collaboration and fresh thinking",
  },
  {
    icon: Users,
    title: "Group Activities",
    description: "Customized group activities tailored to your team's specific needs",
  },
]

const packages = [
  {
    name: "Half Day Package",
    duration: "4 hours",
    price: "KSh 3,500 per person",
    features: ["Welcome refreshments", "2 team building activities", "Lunch", "Venue use", "Basic facilitation"],
  },
  {
    name: "Full Day Package",
    duration: "8 hours",
    price: "KSh 6,500 per person",
    features: [
      "Welcome breakfast",
      "4 team building activities",
      "Lunch & dinner",
      "All-day venue use",
      "Professional facilitation",
      "Team photos",
    ],
  },
  {
    name: "Retreat Package",
    duration: "2-3 days",
    price: "KSh 12,000 per person",
    features: [
      "Accommodation",
      "All meals",
      "Multiple activities",
      "Workshop sessions",
      "Evening entertainment",
      "Professional facilitation",
      "Certificates",
    ],
  },
]

export default function TeamBuildingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        title="TEAM BUILDING & RETREATS"
        subtitle="Strengthen your team bonds in a beautiful natural setting"
        backgroundImage="/placeholder.svg?height=800&width=1400&text=Team+Building+Activities"
        showNavigation={false}
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Build Stronger Teams</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our team building programs are designed to enhance communication, boost morale, and create lasting bonds
              among team members. Set in our beautiful gardens, your team will experience activities that are both fun
              and meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Team Building Activities</h2>
            <p className="text-xl text-gray-600">Engaging activities designed to bring your team together</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamBuildingActivities.map((activity, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <activity.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Team Building Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden ${index === 1 ? "ring-2 ring-blue-500 scale-105" : ""}`}
              >
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.duration}</p>
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

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Book Package</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">Why Choose Viet Gardens for Team Building?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Beautiful Natural Setting</h3>
                    <p className="text-gray-600">
                      Our gardens provide a peaceful, inspiring environment away from office distractions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Professional Facilitation</h3>
                    <p className="text-gray-600">
                      Experienced facilitators guide your team through meaningful activities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Excellent Catering</h3>
                    <p className="text-gray-600">Delicious meals and refreshments to keep your team energized.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Customizable Programs</h3>
                    <p className="text-gray-600">Activities tailored to your team's specific goals and challenges.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600&text=Team+Building+Photo"
                alt="Team building activities"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </main>
  )
}
