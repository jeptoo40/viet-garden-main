"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "@/components/header";
import FloatingFoodImages from "@/components/floating-food-images";
import WhatsAppChat from "@/components/whatsapp-chat";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Star, Utensils, Leaf } from "lucide-react";
import Image from "next/image";

// ===================
// Auto-scrolling Hero
// ===================
interface HeroProps {
  title?: string;
  subtitle?: string;
  images: string[];
}

function SimpleHeroSection({ title, subtitle, images }: HeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-2xl">
      {images.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`Hero ${idx + 1}`}
          fill
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
          quality={90}
        />
      ))}

      {/* Overlay text */}
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-6">
        {title && <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{title}</h1>}
        {subtitle && <p className="text-xl md:text-2xl text-white">{subtitle}</p>}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === current ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// =====================
// Featured dishes list
// =====================
const featuredDishes = [
  { image: "/images/food1.jpeg", title: "", description: "Dine with the best." },
  { image: "/images/food3.jpg", title: "", description: "Delicious cooked with love." },
  { image: "/images/food4.jpeg", title: "", description: "Cooked with the best." },
];

const achievements = [
  { icon: Clock, number: "10+", label: "Years Experience" },
  { icon: Star, number: "4.9", label: "Rating" },
  { icon: Utensils, number: "50+", label: "Awards Won" },
  { icon: Leaf, number: "10K+", label: "Happy Customers" },
];

// =====================
// DiningPage Component
// =====================
export default function DiningPage() {
  const [autoImage, setAutoImage] = useState(0);

  // Auto-switching featured dishes
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoImage((prev) => (prev + 1) % featuredDishes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section with auto-scrolling images */}
      <SimpleHeroSection
        title=" "
        subtitle=" "
        images={[
          "/images/dining2.jpg",
          "/images/foood1-removebg-preview.png",
          "/images/foood2-removebg-preview.png",
        ]}
      />

      {/* Floating Food Images Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Our Culinary Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our menu celebrates the rich culinary traditions while incorporating the vibrant flavors of Kenya
            </p>

            <a
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
            >
              Contact Us
            </a>
          </div>
          <FloatingFoodImages />
        </div>
      </section>

      {/* Explore Our Culinary Delights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full">
              <img
                src="/images/Fried-Chicken.jpg"
                alt="Featured Dish"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                Explore Our Culinary Delights
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our menu celebrates the rich culinary traditions while incorporating the vibrant flavors of Kenya.
                Each dish is thoughtfully prepared by our master chefs using the freshest ingredients.
                <br />
                <br />
                From delectable appetizers to mouthwatering desserts, we ensure every bite tells a story of authenticity, passion,
                and creativity. Immerse yourself in a dining experience where taste meets artistry.
              </p>
              <p className="text-lg text-gray-500">
                Whether dining with friends, family, or colleagues, our dishes are designed to delight and leave lasting memories.
              </p>

              <a
                href="/reservations"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
              >
                Reserve Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-Switching Featured Dishes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                A Feast for the Eyes and Palate
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Immerse yourself in a visual journey of our culinary creations.
                While our chefs craft each dish with care and authenticity, the presentation is equally important.
                From vibrant appetizers to exquisite desserts, our menu is designed to delight both your taste buds and your eyes.
              </p>
              <p className="text-lg text-gray-500">
                Scroll through our featured dishes to see the artistry, color, and passion behind every creation.
              </p>
            </div>

            <div className="w-full h-96 relative">
              <Image
                src={featuredDishes[autoImage].image}
                alt={`Dish ${autoImage + 1}`}
                fill
                className="object-cover rounded-2xl shadow-lg transition-all duration-700"
              />
            </div>
          </div>
        </div>

        <a
          href="/booking"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition mt-8"
        >
          Book Now
        </a>
      </section>

      <Footer />
      <WhatsAppChat />
    </main>
  );
}
