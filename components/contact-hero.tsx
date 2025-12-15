"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactUsHero() {
  return (
    <section className="relative bg-gray-900 text-white py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Us"
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl space-y-6">
       

        <p className="text-lg text-gray-200 leading-relaxed">
          
        </p>

        <div className="flex justify-center gap-4 pt-4">
         
        </div>
      </div>
    </section>
  );
}
