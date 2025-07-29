import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Viet Gardens - Authentic Vietnamese Cuisine in Kenya",
  description:
    "Experience the perfect blend of Vietnamese flavors and Kenyan hospitality at Viet Gardens. Perfect for weddings, events, dining, and special occasions in Tala, Machakos County.",
  keywords:
    "Vietnamese restaurant, Kenya, Viet Gardens, authentic cuisine, weddings, events, team building, dining, Tala, Machakos",
  authors: [{ name: "Viet Gardens" }],
  openGraph: {
    title: "Viet Gardens - Authentic Vietnamese Cuisine in Kenya",
    description: "Experience the perfect blend of Vietnamese flavors and Kenyan hospitality",
    url: "https://vietgardens.co.ke",
    siteName: "Viet Gardens",
    images: [
      {
        url: "/images/hero-fish.jpg",
        width: 1200,
        height: 630,
        alt: "Viet Gardens Restaurant",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viet Gardens - Authentic Vietnamese Cuisine in Kenya",
    description: "Experience the perfect blend of Vietnamese flavors and Kenyan hospitality",
    images: ["/images/hero-fish.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
