import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, CheckCircle, ArrowRight, Shield, Clock, Award, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ResidentialRoofingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-red-50 to-orange-50 ">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                <Home className="w-4 h-4 mr-2 inline" />
                Residential Roofing
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Premium Home
                <span className="inline-block -mt-1 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Roofing Solutions
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Transform your home with our expert residential roofing services. From new installations to complete
                replacements, we deliver quality craftsmanship that protects your family and enhances your property
                value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-quote">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                  >
                    Get Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/service-residential.jpg"
                alt="Residential roofing services"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our Residential Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive roofing solutions tailored for homeowners across Ghana
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "New Roof Installation",
                description: "Complete roof installation for new homes with premium materials and expert craftsmanship.",
                features: ["Material Selection", "Professional Installation", "10-Year Warranty", "Quality Guarantee"],
              },
              {
                title: "Roof Replacement",
                description: "Full roof replacement services to upgrade your home's protection and appearance.",
                features: ["Old Roof Removal", "New Installation", "Clean-up Service", "Extended Warranty"],
              },
              {
                title: "Roof Repairs",
                description: "Quick and reliable repair services to fix leaks and damage before they become major issues.",
                features: ["Leak Detection", "Damage Assessment", "Fast Repairs", "Preventive Solutions"],
              },
              {
                title: "Roof Inspections",
                description: "Thorough roof inspections to identify potential problems and extend your roof's lifespan.",
                features: ["Comprehensive Check", "Detailed Report", "Maintenance Plan", "Expert Advice"],
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roofing Materials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Premium Roofing Materials</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We use only the finest roofing materials to ensure durability and longevity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Self-Lock Roofing",
                description:
                  "Interlocking metal sheets providing superior weather resistance and modern aesthetics.",
                benefits: ["Weather Resistant", "Long Lasting", "Modern Look", "Easy Maintenance"],
              },
              {
                title: "IBR Roofing",
                description: "Industrial Box Rib roofing sheets ideal for residential and commercial applications.",
                benefits: ["Strong & Durable", "Cost Effective", "Versatile Design", "Quick Installation"],
              },
              {
                title: "Eurotiles",
                description: "Premium stone-coated steel tiles combining beauty with exceptional performance.",
                benefits: ["Aesthetic Appeal", "Fire Resistant", "Noise Reduction", "50+ Year Lifespan"],
              },
            ].map((material, index) => (
              <Card key={index} className="border-0 bg-slate-50 shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-slate-900">{material.title}</h3>
                  <p className="text-slate-600">{material.description}</p>
                  <ul className="space-y-2">
                    {material.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-slate-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Why Homeowners Choose FENTRICK</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Licensed & Insured",
                desc: "Fully certified professionals with comprehensive insurance coverage",
              },
              {
                icon: Award,
                title: "Quality Materials",
                desc: "Premium roofing materials from trusted suppliers worldwide",
              },
              {
                icon: Clock,
                title: "Timely Completion",
                desc: "Projects completed on schedule without compromising quality",
              },
              {
                icon: DollarSign,
                title: "Fair Pricing",
                desc: "Competitive rates with transparent quotes and no hidden costs",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our Installation Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From consultation to completion, we ensure a smooth and hassle-free experience
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Free home assessment and expert recommendations" },
              { step: "02", title: "Quote", desc: "Detailed, transparent pricing with no hidden fees" },
              { step: "03", title: "Materials", desc: "Premium materials selection based on your needs" },
              { step: "04", title: "Installation", desc: "Professional installation by certified experts" },
              { step: "05", title: "Warranty", desc: "Comprehensive warranty and ongoing support" },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Ready to Protect Your Home?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get a free consultation and quote for your residential roofing project today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-quote">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
