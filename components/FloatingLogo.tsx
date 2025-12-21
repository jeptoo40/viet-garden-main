"use client"

import Image from "next/image"
import Link from "next/link"

export default function FloatingLogo() {
  return (
    <div className="fixed top-6 left-6 z-50 animate-float">
      <Link href="/">
        <Image
          src="/images/viet trace.jpg"
          alt="Viet Gardens Logo"
          width={80}
          height={80}
          priority
          className="rounded-full object-cover shadow-lg"
        />
      </Link>
    </div>
  )
}
