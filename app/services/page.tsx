import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Building, Wrench, Zap, CheckCircle, ArrowRight, Paintbrush, Droplets } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Residential Roofing",
      description: "Complete roofing solutions for homes including new installations, replacements, and upgrades.",
      features: ["New Roof Installation", "Roof Replacement", "Roof Upgrades", "Residential Repairs"],
      image: "/placeholder.svg?height=300&width=400&text=Residential+Roofing",
    },
    {
      icon: Building,
      title: "Commercial Roofing",
      description: "Professional roofing services for commercial buildings, offices, and industrial facilities.",
      features: ["Commercial Installation", "Industrial Roofing", "Office Buildings", "Warehouse Roofing"],
      image: "/placeholder.svg?height=300&width=400&text=Commercial+Roofing",
    },
    {
      icon: Wrench,
      title: "Roof Repairs",
      description: "Expert repair services to fix leaks, damage, and extend your roof's lifespan.",
      features: ["Leak Repairs", "Storm Damage", "Tile Replacement", "Structural Repairs"],
      image: "/placeholder.svg?height=300&width=400&text=Roof+Repairs",
    },
    {
      icon: Zap,
      title: "Emergency Services",
      description: "24/7 emergency roofing services for urgent repairs and storm damage restoration.",
      features: ["24/7 Availability", "Storm Response", "Emergency Repairs", "Temporary Solutions"],
      image: "/placeholder.svg?height=300&width=400&text=Emergency+Services",
    },
    {
      icon: Droplets,
      title: "Waterproofing",
      description: "Advanced waterproofing solutions to protect your property from water damage.",
      features: ["Membrane Installation", "Sealant Application", "Drainage Systems", "Moisture Control"],
      image: "/placeholder.svg?height=300&width=400&text=Waterproofing",
    },
    {
      icon: Paintbrush,
      title: "Roof Maintenance",
      description: "Regular maintenance programs to keep your roof in optimal condition year-round.",
      features: ["Regular Inspections", "Preventive Maintenance", "Cleaning Services", "Performance Monitoring"],
      image: "/placeholder.svg?height=300&width=400&text=Roof+Maintenance",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Our Services</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
              Comprehensive Roofing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              From residential homes to commercial buildings, we provide complete roofing services with unmatched
              quality and craftsmanship. Every project is backed by our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/get-quote">
                    <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                      Get Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We follow a proven process to ensure every project is completed to the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Free initial consultation and site assessment" },
              { step: "02", title: "Planning", desc: "Detailed planning and material selection" },
              { step: "03", title: "Execution", desc: "Professional installation by certified experts" },
              { step: "04", title: "Completion", desc: "Final inspection and warranty activation" },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Why Choose Our Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Premium quality materials from trusted suppliers",
              "Experienced and certified roofing professionals",
              "Comprehensive warranty on all installations",
              "Competitive pricing with transparent quotes",
              "24/7 emergency response services",
              "Eco-friendly and sustainable solutions",
              "Full insurance coverage for peace of mind",
              "Local expertise with international standards",
              "Customer satisfaction guarantee",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Contact us today for a free consultation and discover why FENTRICK is Ghana's most trusted roofing
              contractor.
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
