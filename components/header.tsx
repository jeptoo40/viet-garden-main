"use client"
import Image from "next/image"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "WEDDINGS", href: "/weddings" },
    { name: "TEAM BUILDING & RETREATS", href: "/team-building" },
    { name: "BIRTHDAYS", href: "/birthdays" },
    { name: "DINING OPTIONS", href: "/dining" },
    { name: "KIDS CORNER", href: "/kids-corner" },
    { name: "GYM & CONFERENCE", href: "/gym-conference" },

    { name: "GALLERY", href: "/gallery" },
    { name: "RESERVATIONS", href: "/reservations" },
  
    { name: "CONTACT US", href: "/contact" },

    
  ]

  return (
    <header className="absolute top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
  <Image
    src="/images/viet trace.jpg"   // your logo file
    alt="Viet Gardens Logo"
    width={80}
    height={80}
    priority
    className="rounded-full object-cover"
  />
</Link>



          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white text-sm font-medium hover:text-gray-300 transition-colors ${
                  pathname === item.href ? "text-red-400" : ""
                } ${item.name === "KIDS CORNER" ? "bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1 rounded-full animate-pulse" : ""}`}
              >
                {item.name === "KIDS CORNER" ? "🎈 KIDS CORNER 🎈" : item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/booking">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm font-medium">
                MAKE A BOOKING
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-white text-sm font-medium hover:text-gray-300 transition-colors px-4 ${
                    item.name === "KIDS CORNER"
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 py-2 rounded-lg animate-pulse"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name === "KIDS CORNER" ? "🎈 KIDS CORNER 🎈" : item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Link href="/reservations">
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-full">MAKE A BOOKING</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
