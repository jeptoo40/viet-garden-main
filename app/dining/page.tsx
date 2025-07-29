import Header from "@/components/header"
import SimpleHeroSection from "@/components/simple-hero-section"
import FloatingFoodImages from "@/components/floating-food-images"
import KidsCornerSection from "@/components/kids-corner-section"
import WhatsAppChat from "@/components/whatsapp-chat"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Star, Utensils, Leaf } from "lucide-react"

const menuCategories = [
  {
    name: "Vietnamese Specialties",
    description: "Authentic Vietnamese dishes prepared with traditional recipes",
    items: [
      { name: "Pho Bo", description: "Traditional beef noodle soup with herbs", price: "KSh 850", popular: true },
      { name: "Banh Mi", description: "Vietnamese sandwich with pork and vegetables", price: "KSh 650" },
      { name: "Spring Rolls", description: "Fresh spring rolls with shrimp and herbs", price: "KSh 550" },
      { name: "Bun Cha", description: "Grilled pork with noodles and herbs", price: "KSh 950" },
    ],
  },
  {
    name: "African Fusion",
    description: "Vietnamese flavors blended with Kenyan ingredients",
    items: [
      {
        name: "Kenyan Pho",
        description: "Traditional pho with local beef and spices",
        price: "KSh 900",
        popular: true,
      },
      { name: "Ugali Spring Rolls", description: "Crispy rolls with ugali and vegetables", price: "KSh 450" },
      { name: "Nyama Choma Banh Mi", description: "Grilled meat sandwich with Vietnamese herbs", price: "KSh 750" },
      { name: "Sukuma Wiki Pho", description: "Vegetarian pho with local greens", price: "KSh 700" },
    ],
  },
  {
    name: "Grilled Specialties",
    description: "Fresh seafood and meats grilled to perfection",
    items: [
      {
        name: "Grilled Tilapia",
        description: "Fresh tilapia with Vietnamese herbs and spices",
        price: "KSh 1,200",
        popular: true,
      },
      { name: "BBQ Goat Ribs", description: "Tender goat ribs with Vietnamese marinade", price: "KSh 1,800" },
      { name: "Grilled Chicken", description: "Marinated chicken with lemongrass", price: "KSh 1,000" },
      { name: "Seafood Platter", description: "Mixed seafood with Vietnamese dipping sauce", price: "KSh 2,200" },
    ],
  },
  {
    name: "Vegetarian Options",
    description: "Fresh and healthy plant-based dishes",
    items: [
      { name: "Vegetable Pho", description: "Clear broth with fresh vegetables and tofu", price: "KSh 700" },
      { name: "Tofu Spring Rolls", description: "Fresh rolls with marinated tofu", price: "KSh 500" },
      { name: "Vegetable Curry", description: "Mixed vegetables in coconut curry", price: "KSh 650" },
      { name: "Garden Salad", description: "Fresh greens with Vietnamese dressing", price: "KSh 450" },
    ],
  },
]

const beverages = [
  { name: "Vietnamese Coffee", price: "KSh 300" },
  { name: "Fresh Coconut Water", price: "KSh 250" },
  { name: "Passion Fruit Juice", price: "KSh 200" },
  { name: "Green Tea", price: "KSh 150" },
  { name: "Local Beer", price: "KSh 300" },
  { name: "House Wine", price: "KSh 400" },
]

export default function DiningPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SimpleHeroSection
        title="DINING OPTIONS"
        subtitle="Experience the fusion of Vietnamese and Kenyan flavors"
        backgroundImage="/placeholder.svg?height=800&width=1400&text=African+Vietnamese+Fusion+Dining"
      />

      {/* Floating Food Images Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Culinary Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our menu celebrates the rich culinary traditions of Vietnam while incorporating the vibrant flavors of
              Kenya
            </p>
          </div>
          <FloatingFoodImages />
        </div>
      </section>

      {/* Dining Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <Utensils className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Fresh Ingredients</h3>
                <p className="text-gray-600">Locally sourced, fresh ingredients in every dish</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Authentic Recipes</h3>
                <p className="text-gray-600">Traditional Vietnamese recipes with African touches</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Healthy Options</h3>
                <p className="text-gray-600">Nutritious and balanced meals for health-conscious diners</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Quick Service</h3>
                <p className="text-gray-600">Efficient service without compromising on quality</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Menu</h2>
            <p className="text-xl text-gray-600">Discover our carefully curated selection of dishes</p>
          </div>

          <div className="space-y-16">
            {menuCategories.map((category, index) => (
              <div key={index} className="space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{category.name}</h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center space-x-3">
                            <h4 className="text-xl font-bold text-gray-800">{item.name}</h4>
                            {item.popular && <Badge className="bg-red-500 text-white">Popular</Badge>}
                          </div>
                          <span className="text-xl font-bold text-red-600">{item.price}</span>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kids Corner */}
      <KidsCornerSection />

      {/* Beverages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Beverages</h2>
            <p className="text-xl text-gray-600">Refresh yourself with our selection of drinks</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {beverages.map((beverage, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow">
                <span className="font-medium text-gray-800">{beverage.name}</span>
                <span className="font-bold text-red-600">{beverage.price}</span>
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
