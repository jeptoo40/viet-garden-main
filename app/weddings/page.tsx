import Header from "@/components/header"
import SimpleHeroSection from "@/components/simple-hero-section"
import WhatsAppChat from "@/components/whatsapp-chat"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Camera, Music, Utensils, Flower } from "lucide-react"



const africanWeddingImages = [
  {
    src:"/images/wedding5.jpg",
    alt: "Traditional  Wedding Ceremony At Tala",
  },
  { src:"/images/wedding3.jpg", alt: "Beautiful Guest Couple" },
  { src:"/images/wedd.jpeg", alt: "Happy Moments" },
  {src:"/images/wedding4.jpg", alt: "African Wedding Decorations" },
  { src:"/images/wedding6.jpg", alt: "African-themed Wedding Cake" },
  { src:"/images/wedding7.jpg", alt: "Wedding Reception Setup" },
  { src:"/images/wedding8.jpg", alt: "Traditional Wedding Feast" },
  { src: "/images/wedding9.jpg", alt: "Wedding Celebration" },
]


export default function WeddingsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SimpleHeroSection
        title="DREAM  WEDDINGS"
        subtitle="Where love stories become unforgettable memories with African elegance"
        backgroundImage= "/images/wedd1.jpg"
      />
{/* Wedding Intro with Carousel */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      
      {/* LEFT: Carousel */}
      <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-lg">
        <div className="carousel relative w-full h-full" id="wedding-carousel">
          {/* Images */}
          <div className="absolute inset-0 transition-opacity duration-700 opacity-100">
            <img
              src="/images/wedding2.jpg"
              alt="African wedding 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 transition-opacity duration-700 opacity-0">
            <img
              src="/images/wedding3.jpg"
              alt="African wedding 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 transition-opacity duration-700 opacity-0">
            <img
              src="/images/wedding3.jpg"
              alt="African wedding 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          <button className="w-3 h-3 bg-white rounded-full"></button>
          <button className="w-3 h-3 bg-gray-400 rounded-full"></button>
          <button className="w-3 h-3 bg-gray-400 rounded-full"></button>
        </div>
      </div>

      {/* RIGHT: Text */}
      <div className="space-y-6 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
          Your Perfect African Wedding Venue
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          At Viet Gardens, we celebrate the beauty of African traditions while adding our unique Vietnamese touch.
          Our beautiful venue, exceptional cuisine, and dedicated team ensure your special day reflects both
          cultures beautifully.
        </p>
        <a
  href="/contact"
  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
>
  Contact Us
</a>

      </div>
     

    </div>
  </div>
</section>


    
      {/* African Wedding Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">Our Weddings Gallery</h2>
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
