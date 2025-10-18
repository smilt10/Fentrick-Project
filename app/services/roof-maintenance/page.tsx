import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Paintbrush, CheckCircle, ArrowRight, Shield, Clock, Calendar, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RoofMaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center">
            <div className="space-y-6">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                <Paintbrush className="w-4 h-4 mr-2 inline" />
                Roof Maintenance
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-snug lg:leading-relaxed">
                Professional Roof
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                  Maintenance Programs
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Extend your roof's lifespan and prevent costly repairs with our comprehensive maintenance programs.
                Regular inspections and preventive care keep your roof in optimal condition year-round.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-quote">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-green-600 hover:to-green-700"
                  >
                    Start Maintenance Plan
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50">
                    Schedule Inspection
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/roof-maintenance.jpg"
                alt="Roof maintenance services"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Comprehensive Maintenance Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Complete care to keep your roof performing at its best
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Regular Inspections",
                description: "Thorough bi-annual or quarterly roof inspections to identify issues early.",
                features: ["Detailed Reports", "Photo Documentation", "Priority Recommendations", "Trend Analysis"],
              },
              {
                title: "Preventive Maintenance",
                description: "Proactive care to address minor issues before they become major problems.",
                features: ["Sealant Application", "Minor Repairs", "Component Replacement", "Surface Treatment"],
              },
              {
                title: "Cleaning Services",
                description: "Professional cleaning to remove debris, moss, algae, and other harmful buildup.",
                features: ["Debris Removal", "Moss Treatment", "Gutter Cleaning", "Surface Cleaning"],
              },
              {
                title: "Performance Monitoring",
                description: "Ongoing assessment of roof performance and condition tracking over time.",
                features: ["Condition Tracking", "Maintenance History", "Cost Analysis", "Lifespan Projection"],
              },
              {
                title: "Gutter Maintenance",
                description: "Regular gutter cleaning and maintenance to ensure proper water drainage.",
                features: ["Debris Clearing", "Downspout Check", "Slope Verification", "Repair Service"],
              },
              {
                title: "Emergency Response",
                description: "Priority emergency service for maintenance plan members.",
                features: ["Fast Response", "Priority Scheduling", "Discounted Rates", "24/7 Availability"],
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

      {/* Maintenance Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Maintenance Plans</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the plan that fits your property's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Basic Plan",
                frequency: "Annual",
                price: "Contact for Pricing",
                features: [
                  "1 annual inspection",
                  "Basic cleaning service",
                  "Minor repairs included",
                  "Written inspection report",
                  "Priority scheduling",
                  "10% discount on repairs",
                ],
                recommended: false,
              },
              {
                name: "Standard Plan",
                frequency: "Bi-Annual",
                price: "Contact for Pricing",
                features: [
                  "2 inspections per year",
                  "Professional cleaning",
                  "Preventive maintenance",
                  "Detailed photo reports",
                  "Priority emergency service",
                  "15% discount on repairs",
                  "Gutter maintenance",
                ],
                recommended: true,
              },
              {
                name: "Premium Plan",
                frequency: "Quarterly",
                price: "Contact for Pricing",
                features: [
                  "4 inspections per year",
                  "Complete cleaning service",
                  "All preventive work",
                  "Comprehensive reporting",
                  "24/7 emergency priority",
                  "20% discount on repairs",
                  "Full gutter service",
                  "Extended warranty",
                ],
                recommended: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl ${plan.recommended ? "bg-gradient-to-br from-green-50 to-emerald-50 ring-2 ring-green-500" : "bg-white"}`}
              >
                <CardContent className="p-8 space-y-6">
                  {plan.recommended && (
                    <Badge className="bg-red-500 text-white hover:bg-red-500">Most Popular</Badge>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                    <p className="text-slate-600">{plan.frequency} Maintenance</p>
                  </div>
                  <div className="text-3xl font-bold text-red-600">{plan.price}</div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/get-quote">
                    <Button
                      className={`w-full ${plan.recommended ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700" : ""}`}
                      variant={plan.recommended ? "default" : "outline"}
                    >
                      Choose Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Benefits of Regular Maintenance</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Extended Lifespan",
                desc: "Add 5-10 years to your roof's life with regular maintenance",
              },
              {
                icon: Shield,
                title: "Prevent Major Issues",
                desc: "Catch and fix small problems before they become expensive repairs",
              },
              {
                icon: Clock,
                title: "Save Money",
                desc: "Reduce long-term costs with preventive care and early detection",
              },
              {
                icon: Calendar,
                title: "Peace of Mind",
                desc: "Rest easy knowing your roof is professionally monitored",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto">
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

      {/* What We Check */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">What We Check During Inspections</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive 25-point inspection covering every critical aspect
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Roof surface condition",
              "Shingles or tiles integrity",
              "Flashing and seals",
              "Gutters and downspouts",
              "Drainage performance",
              "Ventilation systems",
              "Penetrations and vents",
              "Chimney condition",
              "Structural integrity",
              "Signs of water damage",
              "Moss and algae growth",
              "Debris accumulation",
              "Sealant condition",
              "Edge and ridge caps",
              "Valley conditions",
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Start Protecting Your Investment Today</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Don't wait for problems to appear. Enroll in our maintenance program and ensure your roof stays in
              perfect condition year-round
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-quote">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                >
                  Get Maintenance Quote
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
