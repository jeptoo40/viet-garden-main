import Image from "next/image"

export default function MainContent() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Wine bottle image */}
          <div className="relative">
            <Image
              src="/image/Premium wine.jpg"
              alt="Premium wine bottle with fresh ingredients"
              width={400}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Content exactly as shown */}
          <div className="space-y-6 pt-8">
            {/* Blue badge */}
            <div className="inline-block">
              <span className="bg-blue-600 text-white px-4 py-2 text-sm font-medium">
                CELEBRATION OF THE UNIQUE BLEND OF CULTURES
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Welcome to Viet Garden Tala</h2>

            {/* Italic subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 italic leading-relaxed">
              A world of exquisite tastes and unforgettable moments.
            </p>

            {/* Description paragraph */}
            <p className="text-gray-600 leading-relaxed text-base">
              At Viet Gardens, we take pride in creating a warm and inviting atmosphere, where you can relish the fusion
              of Kenyan hospitality and exceptional gastronomy. Join us on a gastronomic journey that harmonizes the
              spirit of Kenya with the artistry of our chefs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
