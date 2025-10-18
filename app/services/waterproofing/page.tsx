import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, CheckCircle, ArrowRight, Shield, Award, Zap, Umbrella } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WaterproofingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-26 pb-16 px-4 bg-gradient-to-br from-red-50 to-orange-50 overflow-visible">
        <div className="container mx-auto">
          {/* align items to top on small screens to avoid vertical clipping; center on lg+ */}
          <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center">
            <div className="space-y-6">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                <Droplets className="w-4 h-4 mr-2 inline" />
                Waterproofing Solutions
              </Badge>
              {/* tighter line spacing for the two-line heading */}
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Advanced Roof
                <span className="inline-block -mt-1 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Waterproofing
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Protect your property from water damage with our comprehensive waterproofing solutions. From advanced
                membrane systems to specialized coatings, we ensure your roof stays dry and damage-free.
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
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50">
                    Contact Expert
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/waterproofing.jpg"
                alt="Waterproofing services"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Waterproofing Solutions */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our Waterproofing Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive waterproofing systems designed to protect your property
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Membrane Installation",
                description:
                  "High-performance waterproof membranes that create an impenetrable barrier against water intrusion.",
                features: ["Single-Ply Membranes", "Multi-Layer Systems", "Seamless Application", "Long-Term Protection"],
              },
              {
                title: "Liquid Applied Systems",
                description:
                  "Seamless liquid waterproofing that adapts to any roof shape and provides complete coverage.",
                features: ["Flexible Application", "No Seams or Joints", "UV Resistant", "Quick Curing"],
              },
              {
                title: "Elastomeric Coatings",
                description:
                  "Flexible coatings that expand and contract with temperature changes, preventing cracks.",
                features: ["Temperature Resistant", "Crack Bridging", "Energy Efficient", "Easy Maintenance"],
              },
              {
                title: "Drainage Systems",
                description:
                  "Proper drainage solutions to direct water away from vulnerable areas of your roof.",
                features: ["Gutter Systems", "Downspout Installation", "Slope Optimization", "Scupper Installation"],
              },
              {
                title: "Flashing & Sealing",
                description:
                  "Critical waterproofing of roof penetrations, edges, and vulnerable transition points.",
                features: ["Custom Flashing", "Vent Sealing", "Edge Protection", "Joint Waterproofing"],
              },
              {
                title: "Moisture Control",
                description:
                  "Advanced systems to manage and eliminate moisture buildup beneath your roofing system.",
                features: ["Vapor Barriers", "Ventilation Systems", "Moisture Detection", "Preventive Solutions"],
              },
            ].map((solution, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">{solution.title}</h3>
                  <p className="text-slate-600 text-sm">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
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

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Benefits of Professional Waterproofing</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Why investing in quality waterproofing is essential for your property
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Prevents Damage",
                desc: "Protects structure from water damage, mold, and deterioration",
              },
              {
                icon: Award,
                title: "Extends Roof Life",
                desc: "Significantly increases the lifespan of your roofing system",
              },
              {
                icon: Zap,
                title: "Energy Savings",
                desc: "Reflective coatings reduce cooling costs and energy consumption",
              },
              {
                icon: Umbrella,
                title: "Peace of Mind",
                desc: "Complete protection against Ghana's heavy rainfall and weather",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-0 bg-slate-50 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900">{benefit.title}</h4>
                  <p className="text-sm text-slate-600">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Signs You Need Waterproofing</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't wait until it's too late - identify these warning signs early
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Water stains on ceilings or walls",
              "Visible mold or mildew growth",
              "Musty odors in interior spaces",
              "Peeling paint or wallpaper",
              "Damp patches after rainfall",
              "Standing water on flat roofs",
              "Cracks in roof surface",
              "Deteriorating roof materials",
              "Increased humidity indoors",
            ].map((sign, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow">
                <Droplets className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our Waterproofing Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Systematic approach ensuring complete water protection
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Inspection", desc: "Thorough roof and moisture assessment" },
              { step: "02", title: "Analysis", desc: "Identify problem areas and causes" },
              { step: "03", title: "Solution Design", desc: "Custom waterproofing plan created" },
              { step: "04", title: "Installation", desc: "Professional application of systems" },
              { step: "05", title: "Testing", desc: "Water testing and quality verification" },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
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
            <h2 className="text-4xl font-bold">Protect Your Property from Water Damage</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Don't let water compromise your investment. Get professional waterproofing assessment and quote today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-quote">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
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
                  Contact Expert
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
