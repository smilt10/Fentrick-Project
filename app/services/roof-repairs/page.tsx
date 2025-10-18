import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, CheckCircle, ArrowRight, Shield, Clock, Phone, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RoofRepairsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-26 pb-16 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                <Wrench className="w-4 h-4 mr-2 inline" />
                Roof Repairs
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Expert Roof
                <span className="inline-block -mt-1 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Repair Services
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Don't let minor roof issues become major problems. Our expert repair services fix leaks, damage, and
                wear before they compromise your property. Fast, reliable, and guaranteed to last.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-quote">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                  >
                    Get Free Assessment
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/services/emergency-services">
                  <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50">
                    <Phone className="mr-2 w-5 h-5" />
                    Emergency Repairs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/roof-repairs.jpg"
                alt="Roof repair services"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Common Repair Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Common Roof Repairs We Handle</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From minor fixes to major repairs, we handle all types of roofing issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Leak Repairs",
                description: "Fast and effective leak detection and repair to prevent water damage to your property.",
                features: ["Leak Detection", "Waterproofing", "Preventive Sealing", "Warranty Coverage"],
                //icon: "💧",
              },
              {
                title: "Storm Damage",
                description: "Comprehensive repair of damage caused by storms, high winds, and severe weather.",
                features: ["Damage Assessment", "Insurance Claims", "Complete Repairs", "Reinforcement"],
                //icon: "⛈️",
              },
              {
                title: "Tile Replacement",
                description: "Expert replacement of broken, cracked, or missing roof tiles with matching materials.",
                features: ["Tile Sourcing", "Color Matching", "Professional Install", "Quality Guarantee"],
                //icon: "🏠",
              },
              {
                title: "Structural Repairs",
                description: "Repair of underlying roof structure including rafters, beams, and supports.",
                features: ["Structural Assessment", "Load Calculations", "Code Compliance", "Safety First"],
                //icon: "🔨",
              },
              {
                title: "Flashing Repairs",
                description: "Repair and replacement of roof flashing around chimneys, vents, and valleys.",
                features: ["Custom Flashing", "Waterproof Sealing", "Rust Prevention", "Long Lasting"],
                //icon: "⚡",
              },
              {
                title: "Gutter Repairs",
                description: "Repair and maintenance of gutters and drainage systems to prevent water damage.",
                features: ["Gutter Cleaning", "Downspout Repair", "Slope Adjustment", "Debris Guards"],
                //icon: "🌊",
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="text-4xl mb-2"></div> 
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

      {/* Signs You Need Repairs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Signs Your Roof Needs Repair</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't ignore these warning signs - early detection prevents costly damage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Water Leaks",
                desc: "Stains on ceiling or walls indicating water intrusion",
              },
              {
                title: "Missing Tiles",
                desc: "Broken, cracked, or missing roof tiles or shingles",
              },
              {
                title: "Sagging Roof",
                desc: "Visible sagging or drooping areas on the roof surface",
              },
              {
                title: "Granule Loss",
                desc: "Excessive granules in gutters or bare spots on roof",
              },
              {
                title: "Daylight Visible",
                desc: "Light coming through roof boards in attic space",
              },
              {
                title: "High Energy Bills",
                desc: "Sudden increase in heating or cooling costs",
              },
              {
                title: "Mold & Mildew",
                desc: "Growth of mold or mildew in attic or on walls",
              },
              {
                title: "Damaged Flashing",
                desc: "Rust, cracks, or gaps in roof flashing",
              },
            ].map((sign, index) => (
              <Card key={index} className="border-0 bg-slate-50 shadow-lg">
                <CardContent className="p-6 space-y-2">
                  <AlertCircle className="w-8 h-8 text-red-500 mb-2" />
                  <h4 className="font-semibold text-slate-900">{sign.title}</h4>
                  <p className="text-sm text-slate-600">{sign.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our Repair Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Systematic approach to ensure quality repairs that last
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Inspection", desc: "Thorough assessment of roof condition" },
              { step: "02", title: "Diagnosis", desc: "Identify root cause of issues" },
              { step: "03", title: "Quote", desc: "Detailed repair estimate provided" },
              { step: "04", title: "Repair", desc: "Expert repair work completed" },
              { step: "05", title: "Verification", desc: "Final inspection and testing" },
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

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Why Choose FENTRICK for Repairs</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Fast Response",
                desc: "Quick assessment and repair scheduling to minimize damage",
              },
              {
                icon: Shield,
                title: "Quality Guarantee",
                desc: "All repairs backed by comprehensive warranty coverage",
              },
              {
                icon: CheckCircle,
                title: "Expert Diagnosis",
                desc: "Experienced technicians identify and fix root causes",
              },
              {
                icon: Phone,
                title: "24/7 Emergency",
                desc: "Emergency repair services available around the clock",
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Don't Wait - Fix Your Roof Today</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Early repairs save money and prevent extensive damage. Get your free inspection and quote now
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-quote">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                >
                  Schedule Inspection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services/emergency-services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Emergency Service
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
