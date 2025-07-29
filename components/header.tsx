"use client"

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
    { name: "RESERVATIONS", href: "/reservations" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT US", href: "/contact" },
  ]

  return (
    <header className="absolute top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path
                    d="M12 2C12 2 8 6 8 12C8 16 10 18 12 18C14 18 16 16 16 12C16 6 12 2 12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
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
            <Link href="/reservations">
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
