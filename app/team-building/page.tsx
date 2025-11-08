
import Link from "next/link"

import Header from "@/components/header"
import HeroSection from "@/components/team-building-hero"
import WhatsAppChat from "@/components/whatsapp-chat"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Trophy, Coffee, Utensils, MapPin } from "lucide-react"





export default function TeamBuildingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        title="TEAM BUILDING & RETREATS"
        subtitle="Strengthen your team bonds in a beautiful natural setting"
        backgroundImage="/images/dining1.jpg"
        showNavigation={false}
      />

    {/* Introduction */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Left: Image */}
      <div className="w-full">
        <img 
          src="/images/team8.jpg"   // replace with your actual image
          alt="Team Building"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Right: Text */}
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
          Build Stronger Teams
        </h2>

        <p className="text-xl text-gray-700 leading-relaxed">
          Our team building programs are carefully crafted to enhance communication, boost morale, and foster
          collaboration among team members. Set in our serene and beautifully landscaped gardens, your team
          will participate in engaging activities that combine fun, challenge, and meaningful learning.
          From problem-solving exercises to trust-building games, each activity is designed to strengthen
          relationships, spark creativity, and encourage teamwork in a supportive environment.
          <br /><br />
          Whether you are planning a corporate retreat, a bonding session, or a team celebration, our
          professional facilitators tailor each experience to meet your team’s specific goals. Your team
          will leave energized, motivated, and more connected than ever  ready to tackle challenges together
          with renewed confidence and a sense of unity.
        </p>
      </div>

      <Link href="/contact" passHref>
    <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
    CONTACT US
    </Button>
  </Link>

    </div>
  </div>
</section>



    

     

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">Choose Viet Gardens for Get Together With Kids</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800"></h3>
                    <p className="text-xl text-blue-900 mb-6 leading-relaxed">
                      Our gardens provide a peaceful, inspiring environment away from office distractions.
                      Our gardens provide a peaceful, inspiring environment away from office distractions. 
                      With professional facilitation, experienced facilitators guide your team through meaningful activities. We offer excellent catering, including delicious meals and refreshments to keep your team energized,
                       and customizable programs with activities tailored to your team's specific goals and challenges.
                       </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/team building.jpg"
                alt="Team building activities"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </main>
  )
}
