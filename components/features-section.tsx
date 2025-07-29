import { Utensils, Calendar, Users, Award, Heart, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Utensils,
    title: "Exquisite Cuisine",
    description: "Authentic Vietnamese flavors blended with Kenyan hospitality",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Calendar,
    title: "Event Hosting",
    description: "Perfect venue for weddings, birthdays, and corporate events",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Specialized packages for corporate retreats and team activities",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Award,
    title: "Premium Service",
    description: "Award-winning service that exceeds expectations",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Heart,
    title: "Memorable Moments",
    description: "Creating unforgettable experiences for every occasion",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
  },
  {
    icon: Sparkles,
    title: "Magical Ambiance",
    description: "Enchanting atmosphere that captivates all your senses",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-red-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-br from-purple-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-red-500"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full mx-4"></div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-red-500"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            Why Choose
            <span className="block bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Viet Gardens?
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of authentic cuisine, exceptional service, and memorable moments in our
            enchanting garden setting
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 overflow-hidden"
            >
              <CardContent className={`p-8 h-full ${feature.bgColor} relative`}>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${feature.color} rounded-full blur-2xl`}></div>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <feature.icon size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>

                  {/* Decorative Element */}
                  <div
                    className={`w-0 group-hover:w-12 h-1 bg-gradient-to-r ${feature.color} mt-6 transition-all duration-500 rounded-full`}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-block bg-gradient-to-r from-red-50 to-pink-50 rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Experience Excellence?</h3>
            <p className="text-gray-600 mb-8 max-w-md">
              Join thousands of satisfied customers who have made Viet Gardens their preferred destination
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Book Your Table
              </button>
              <button className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
