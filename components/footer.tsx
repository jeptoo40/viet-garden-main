import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path
                    d="M12 2C12 2 8 6 8 12C8 16 10 18 12 18C14 18 16 16 16 12C16 6 12 2 12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Viet Gardens</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experience the perfect blend of Vietnamese flavors and Kenyan hospitality in a warm, inviting atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dining" className="text-gray-300 hover:text-white transition-colors">
                  Dining Options
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-gray-300 hover:text-white transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/weddings" className="text-gray-300 hover:text-white transition-colors">
                  Weddings
                </Link>
              </li>
              <li>
                <Link href="/birthdays" className="text-gray-300 hover:text-white transition-colors">
                  Birthday Parties
                </Link>
              </li>
              <li>
                <Link href="/team-building" className="text-gray-300 hover:text-white transition-colors">
                  Team Building
                </Link>
              </li>
              <li>
                <Link href="/gym-conference" className="text-gray-300 hover:text-white transition-colors">
                  Gym & Conference
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Tala, Machakos County, Kenya</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-red-500 flex-shrink-0" />
                <p className="text-gray-300">+254 700 000 000</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-red-500 flex-shrink-0" />
                <p className="text-gray-300">info@vietgardens.co.ke</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-red-500 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon - Sun: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 Viet Gardens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
