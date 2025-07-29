import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WelcomeSection from "@/components/welcome-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import WhatsAppChat from "@/components/whatsapp-chat"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppChat />
    </main>
  )
}
