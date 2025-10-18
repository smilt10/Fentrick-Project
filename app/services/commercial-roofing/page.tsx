import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, CheckCircle, ArrowRight, Shield, Clock, Award, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CommercialRoofingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-26 pb-16 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                <Building className="w-4 h-4 mr-2 inline" />
                Commercial Roofing
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Professional Commercial
                <span className="inline-block -mt-1 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Roofing Solutions
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Protect your business investment with our comprehensive commercial roofing services. From office
                buildings to industrial warehouses, we deliver industrial-grade solutions with minimal disruption to
                your operations.
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
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/service-commercial.jpg"
                alt="Commercial roofing services"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Commercial Roofing Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized roofing solutions for businesses and industrial facilities across Ghana
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Office Buildings",
                description:
                  "Professional roofing for corporate offices, ensuring protection and aesthetic appeal for your business premises.",
                features: ["Modern Design", "Energy Efficient", "Low Maintenance", "Professional Finish"],
              },
              {
                title: "Industrial Warehouses",
                description:
                  "Heavy-duty roofing systems designed for large-span industrial facilities with specialized requirements.",
                features: ["Large Span Coverage", "Heavy-Duty Materials", "Ventilation Systems", "Fire Resistance"],
              },
              {
                title: "Shopping Centers",
                description:
                  "Complex roofing solutions for retail spaces with multiple levels and special architectural features.",
                features: ["Multi-Level Design", "Skylight Integration", "Weather Protection", "Aesthetic Appeal"],
              },
              {
                title: "Hotels & Resorts",
                description:
                  "Premium roofing solutions for hospitality industry maintaining both function and appearance.",
                features: ["Premium Materials", "Noise Reduction", "Weather Resistant", "Luxury Finish"],
              },
              {
                title: "Schools & Institutions",
                description:
                  "Durable roofing for educational and institutional buildings with safety as priority.",
                features: ["Safety Standards", "Long Lasting", "Budget Friendly", "Quick Installation"],
              },
              {
                title: "Factory Buildings",
                description: "Industrial roofing solutions for manufacturing facilities with special requirements.",
                features: ["Chemical Resistant", "Fire Safety", "Ventilation", "Durability"],
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

      {/* Commercial Roofing Systems */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Commercial Roofing Systems</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Industrial-grade materials designed for commercial applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Metal Roofing Systems",
                description:
                  "Durable metal roofing perfect for commercial buildings, offering longevity and low maintenance.",
                benefits: [
                  "50+ year lifespan",
                  "Fire resistant",
                  "Energy efficient",
                  "Weather resistant",
                  "Low maintenance",
                  "Recyclable",
                ],
              },
              {
                title: "Built-Up Roofing (BUR)",
                description:
                  "Traditional layered roofing system providing excellent waterproofing for flat commercial roofs.",
                benefits: [
                  "Superior waterproofing",
                  "Cost effective",
                  "Proven technology",
                  "Fire resistant",
                  "Long lasting",
                  "Easy repairs",
                ],
              },
              {
                title: "Single-Ply Membrane",
                description:
                  "Modern single-layer roofing membrane offering flexibility and excellent performance.",
                benefits: [
                  "Quick installation",
                  "Lightweight",
                  "Flexible",
                  "UV resistant",
                  "Chemical resistant",
                  "Energy efficient",
                ],
              },
              {
                title: "Modified Bitumen",
                description:
                  "Enhanced asphalt roofing system combining traditional reliability with modern technology.",
                benefits: [
                  "Weather resistant",
                  "Easy installation",
                  "Cost effective",
                  "Durable",
                  "Low maintenance",
                  "Proven performance",
                ],
              },
            ].map((system, index) => (
              <Card key={index} className="border-0 bg-slate-50 shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-slate-900">{system.title}</h3>
                  <p className="text-slate-600">{system.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {system.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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
            <h2 className="text-4xl font-bold text-slate-900">Why Businesses Choose FENTRICK</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Safety First",
                desc: "Comprehensive safety protocols and fully insured operations",
              },
              {
                icon: Award,
                title: "Industry Expertise",
                desc: "15+ years of commercial roofing experience across Ghana",
              },
              {
                icon: Clock,
                title: "Minimal Disruption",
                desc: "Efficient project management to minimize business downtime",
              },
              {
                icon: Users,
                title: "Dedicated Team",
                desc: "Experienced crews specializing in commercial projects",
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

      {/* Project Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Commercial Project Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Streamlined process designed to minimize disruption to your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-8">
            {[
              { step: "01", title: "Site Assessment", desc: "Comprehensive building evaluation" },
              { step: "02", title: "Proposal", desc: "Detailed project proposal and timeline" },
              { step: "03", title: "Planning", desc: "Project scheduling and coordination" },
              { step: "04", title: "Materials", desc: "Industrial-grade materials procurement" },
              { step: "05", title: "Installation", desc: "Professional installation by experts" },
              { step: "06", title: "Warranty", desc: "Extended warranty and maintenance plans" },
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
            <h2 className="text-4xl font-bold">Ready to Protect Your Business?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get a professional assessment and comprehensive quote for your commercial roofing project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-quote">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                >
                  Request Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  Schedule Consultation
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
