import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/fentrick-logo.jpg"
                alt="FENTRICK Roofing System Logo"
                width={80}
                height={64}
                className="object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 filter brightness-110"
              />
              <div>
                <h3 className="text-xl font-bold">FENTRICK</h3>
                <p className="text-xs text-slate-400">Roofing System</p>
              </div>
            </div>
            <p className="text-slate-400">
              Ghana's premier roofing contractor, delivering excellence in every project.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Residential Roofing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Commercial Roofing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Roof Repairs
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-slate-400">
              <li>+233 XX XXX XXXX</li>
              <li>info@fentrickroofing.com</li>
              <li>Accra, Ghana</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 FENTRICK Roofing System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
