"use client";

import Header from "@/components/header";
import SimpleHeroSection from "@/components/simple-hero-section";
import WhatsAppChat from "@/components/whatsapp-chat";
import Footer from "@/components/footer";
import Image from "next/image";
import React from "react";

type Service = {
  image: string;
  title: string;
  description: string;
};

const birthdayServices: Service[] = [


];

// ✅ This is your dedicated Cake Section data
const cakeGallery: Service[] = [
  {
    image: "/images/cake1.jpeg",
    title: "African Royal Cake",
    description: "Elegant multi-tier cake inspired by African royalty and tradition.",
  },
  {
    image: "/images/cake2.png",
    title: "Tribal Pattern Cake",
    description: "Beautiful cake with African tribal designs and rich colors.",
  },
  {
    image: "/images/cake3.jpg",
    title: "Safari Adventure Cake",
    description: "Perfect for kids — safari animals and jungle-themed layers.",
  },
  {
    image: "/images/cake5.jpeg",
    title: "Cultural Drum Cake",
    description: "Captures the warmth of African sunsets with smooth gradients.",
  },
  {
    image: "/images/cake6.jpeg",
    title: "Sunset Delight",
    description: "A cake shaped like a traditional African drum, full of energy and rhythm.",
    
  },
  {
    image: "/images/cake8.jpeg",
    title: "Ankara-Inspired Cake",
    description: "Bold, colorful, and full of African fabric artistry.",
  },
];

export default function BirthdaysPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <SimpleHeroSection
        subtitle="Make every birthday unforgettable with African traditions at Viet Gardens"
        backgroundImage="/images/birthday.jpg"
      />
{/* BIRTHDAY SERVICES SECTION */}
<section className="py-20 bg-gray-50 overflow-hidden">
  <div className="container mx-auto px-4 lg:flex lg:items-start lg:gap-12">
    {/* LEFT TEXT */}
    <div className="lg:w-1/2 mb-8 lg:mb-0">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
      Birthday Party Services
      </h2>
      <p className="text-xl text-blue-900 mb-6 leading-relaxed">
  Experience the beauty and rhythm of birthday celebrations at Viet Gardens Tala —
  where every event tells a story of culture, joy, and togetherness. From
  beautifully themed cakes and handcrafted decorations to lively entertainment,
  delicious traditional cuisines, and professional photography, we create moments
  that last a lifetime. Whether you’re planning a birthday, wedding, anniversary,
  or corporate gathering, our spacious gardens, warm hospitality, and vibrant
  African ambiance make every celebration unforgettable. At Viet Gardens, we don’t
  just host events — we craft experiences filled with laughter, music, color, and
  the spirit of Africa.
</p>
<a
          href="/reservations"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
        >
          Reserve Now 
        </a>



      <ul className="space-y-4 text-gray-700">
        {birthdayServices.map((s, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full" />
            <div>
              <strong className="block text-gray-800">{s.title}</strong>
              <span className="text-gray-600">{s.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT SIDE - SINGLE IMAGE */}
    <div className="lg:w-1/2 relative h-96 rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="/images/african-birthday.jpg"
        alt="African Birthday Celebration"
        fill
        className="object-cover"
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <div className="absolute left-4 bottom-4 text-white">
        <div className="text-lg font-semibold drop-shadow">
          Authentic Celebration
        </div>
      </div>
    </div>
  </div>
</section>


      {/* 🍰 CAKE GALLERY SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Our Cake Collection
          </h2>
          <p className=" text-blue-900 leading-tight mb-12 text-center">
            Explore our stunning range of African-themed cakes for birthdays and special occasions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cakeGallery.map((cake, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={cake.image}
                  alt={cake.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {cake.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{cake.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* African Birthday Cakes Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left side - Text */}
    <div>
      <h2 className="text-4xl font-bold  mb-6">
      Our Inspired Cakes
      </h2>
      <p className="text-lg text-gray-600 mb-4">
        Our cakes are more than desserts — they’re artistic expressions of African heritage.
        From intricate beadwork designs to patterns inspired by kente and Ankara fabrics,
        each cake is handmade to match your theme and celebration.
      </p>
      <p className="text-lg text-gray-600">
        Choose from traditional flavors like vanilla, chocolate, or coconut,
        all beautifully decorated with African motifs and colors that bring your culture to life.
      </p>
    </div>
    

    {/* Right side - Auto scrolling cake images */}
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll-x space-x-4">
        {[
           "/images/cc1.jpeg",
           "/images/cc2.jpg",
           "/images/cc3.jpeg",
           "/images/cc4.jpg",
           "/images/cc5.jpg",
        ].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`African cake ${index + 1}`}
            width={300}
            height={200}
            className="rounded-xl object-cover shadow-md"
          />
        ))}
      </div>
    </div>

  </div>
  <a
          href="/contact"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
        >
          Call Us 
        </a>

</section>




{/* Animation styling */}
<style jsx>{`
  @keyframes scroll-x {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll-x {
    animation: scroll-x 20s linear infinite;
    width: max-content;
  }
`}</style>


      <WhatsAppChat />
      <Footer />

      <style global jsx>{`
        @keyframes scrollX {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}
