"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/gallery-hero"
import WhatsAppChat from "@/components/whatsapp-chat"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const galleryCategories = [
  { name: "All", filter: "all" },
  { name: "Food", filter: "food" },
  { name: "Interior", filter: "interior" },
  { name: "Events", filter: "events" },
  { name: "Weddings", filter: "weddings" },
]

const galleryImages = [
  { id: 1, src: "/images/f2.jpg", alt: "Fries ", category: "food" },
  {
    id: 2,
    src:"/images/viet7.jpg",
    alt: "Restaurant View",
    category: "interior",
  },
  {
    id: 3,
    src: "/images/viet6.jpg",
    alt: "Wedding Setup",
    category: "weddings",
  },
  { id: 4, src: "/images/f1.jpg", alt: "Grilled Fish", category: "food" },
  {
    id: 5,
    src: "/images/b1.jpeg",
    alt: "Birthday Party",
    category: "events",
  },
  { id: 6, src: "/images/viet3.jpg", alt: "Dining Area", category: "interior" },
  { id: 7, src: "/images/f3.jpg", alt: "Spring Rolls", category: "food" },
  {
    id: 8,
    src: "/images/viet5.jpg",
    alt: "Conference Room",
    category: "interior",
  },
  { id: 9, src:"/images/t1.jpeg", alt: "Team Building", category: "events" },
  {
    id: 10,
    src: "/images/w1.jpeg",
    alt: "Wedding Ceremony",
    category: "weddings",
  },
  {
    id: 11,
    src: "/images/f4.jpg",
    alt: "Vietnamese Coffee",
    category: "food",
  },
  { id: 12, src: "/images/viet4.jpg", alt: "Garden View", category: "all" },

  { id: 15, src: "/images/viet9.jpeg", alt: "Garden View", category: "interior" },
  {
    id: 13,
    src: "/images/viet8.jpg",
    alt: "Wedding Set",
    category: "weddings",
  },



  {
    id: 14,
    src: "/images/viet9.jpg",
    alt: "scenes",
    category: "all",
  },








]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  const filteredImages =
    activeFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        title="GALLERY"
        subtitle="Explore our beautiful venue, delicious food, and memorable events"
        backgroundImage="/placeholder.svg?height=800&width=1400&text=Gallery+Hero"
        showNavigation={false}
      />

      {/* Gallery Filters */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {galleryCategories.map((category) => (
              <Button
                key={category.filter}
                onClick={() => setActiveFilter(category.filter)}
                variant={activeFilter === category.filter ? "default" : "outline"}
                className={activeFilter === category.filter ? "bg-red-600 hover:bg-red-700" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppChat />
    </main>
  )
}
