"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="w-full px-8 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/fentrick-logo.jpg"
              alt="FENTRICK Roofing System Logo"
              width={80}
              height={64}
              className="object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 filter brightness-110"
            />
            <div>
              <h1 className="text-xl font-bold text-slate-900">FENTRICK</h1>
              <p className="text-xs text-slate-600">Roofing System</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-slate-700 hover:text-amber-600 transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-slate-700 hover:text-amber-600 transition-colors">
              Projects
            </Link>
            <Link href="/why-choose-us" className="text-slate-700 hover:text-amber-600 transition-colors">
              Why Choose Us
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-amber-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-amber-600 transition-colors">
              Contact
            </Link>
            <Link href="/get-quote">
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
