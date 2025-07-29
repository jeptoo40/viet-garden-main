"use client"

import { useState } from "react"
import { MessageCircle, X, Phone } from "lucide-react"

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleWhatsAppClick = () => {
    const phoneNumber = "+254700000000" // Replace with actual number
    const defaultMessage = message || "Hello! I'd like to make a reservation at Viet Gardens."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
    setMessage("")
  }

  const handleCallClick = () => {
    window.open("tel:+254700000000", "_self")
  }

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Expanded Chat Box */}
        {isOpen && (
          <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 overflow-hidden animate-in slide-in-from-bottom-2">
            {/* Header */}
            <div className="bg-green-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Viet Gardens</h3>
                  <p className="text-sm opacity-90">How can I help you?</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4 space-y-4">
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm text-gray-700">👋 Welcome to Viet Gardens! How can we assist you today?</p>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <button
                  onClick={() => setMessage("I'd like to make a reservation")}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm transition-colors"
                >
                  🍽️ Make a Reservation
                </button>
                <button
                  onClick={() => setMessage("Can I see your menu?")}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm transition-colors"
                >
                  📋 View Menu
                </button>
                <button
                  onClick={() => setMessage("I'm interested in hosting an event")}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm transition-colors"
                >
                  🎉 Event Booking
                </button>
              </div>

              {/* Message Input */}
              <div className="space-y-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full p-3 border border-gray-200 rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={3}
                />
                <div className="flex space-x-2">
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={16} />
                    <span>Send Message</span>
                  </button>
                  <button
                    onClick={handleCallClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    <Phone size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Chat Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 relative"
          aria-label="Chat on WhatsApp"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              1
            </span>
          )}
        </button>
      </div>
    </>
  )
}
