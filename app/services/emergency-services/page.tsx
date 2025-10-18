import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, CheckCircle, ArrowRight, Shield, Clock, Phone, AlertTriangle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EmergencyServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                <Zap className="w-4 h-4 mr-2 inline" />
                24/7 Emergency Services
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
                Emergency Roof
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Repair Services
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Roof emergency? We're here 24/7. Our rapid response team provides immediate assistance for storm
                damage, leaks, and urgent roofing issues. Don't wait - protect your property now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 animate-pulse"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now: +233 XX XXX XXXX
                  </Button>
                </Link>
                <Link href="/get-quote">
                  <Button size="lg" variant="outline" className="border-red-300 hover:bg-red-50">
                    Request Emergency Service
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-800 font-semibold">
                  <AlertTriangle className="w-5 h-5 inline mr-2" />
                  Available 24 hours a day, 7 days a week, 365 days a year
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/emergency-services.jpg"
                alt="Emergency roofing services"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Emergency Roofing Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Fast response for all types of roofing emergencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Storm Damage Response",
                description:
                  "Immediate response to damage caused by severe weather, high winds, and tropical storms.",
                features: ["Rapid Assessment", "Temporary Protection", "Permanent Repairs", "Insurance Support"],
                urgent: true,
              },
              {
                title: "Emergency Leak Repairs",
                description: "Fast leak repair to prevent water damage and protect your property's interior.",
                features: ["Leak Identification", "Quick Patching", "Water Damage Prevention", "24/7 Service"],
                urgent: true,
              },
              {
                title: "Fallen Tree Damage",
                description: "Emergency response to roof damage caused by fallen trees or branches.",
                features: ["Safe Removal", "Structural Assessment", "Debris Clearance", "Immediate Repairs"],
                urgent: true,
              },
              {
                title: "Fire Damage Repair",
                description: "Emergency roofing repairs following fire incidents to secure your property.",
                features: ["Safety First", "Damage Assessment", "Emergency Patching", "Full Restoration"],
                urgent: false,
              },
              {
                title: "Structural Collapse",
                description: "Emergency support for partial roof collapses or severe structural damage.",
                features: ["Emergency Stabilization", "Safety Measures", "Structural Repairs", "Code Compliance"],
                urgent: true,
              },
              {
                title: "Missing Roof Sections",
                description: "Immediate replacement of missing roof sections to protect from elements.",
                features: ["Temporary Coverage", "Quick Installation", "Weather Protection", "Permanent Solution"],
                urgent: true,
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-shadow ${
                  service.urgent ? "bg-red-50" : "bg-white"
                }`}
              >
                <CardContent className="p-6 space-y-4">
                  {service.urgent && (
                    <Badge className="bg-red-500 text-white hover:bg-red-500">
                      <Clock className="w-3 h-3 mr-1 inline" />
                      Urgent
                    </Badge>
                  )}
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

      {/* What to Do in Emergency */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">What to Do in a Roofing Emergency</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Follow these steps while waiting for emergency response
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Stay Safe",
                desc: "Evacuate affected areas and ensure everyone's safety first",
                icon: Shield,
              },
              {
                step: "02",
                title: "Call Us",
                desc: "Contact FENTRICK emergency hotline immediately for rapid response",
                icon: Phone,
              },
              {
                step: "03",
                title: "Document Damage",
                desc: "Take photos and videos of damage for insurance claims if safe",
                icon: AlertTriangle,
              },
              {
                step: "04",
                title: "Minimize Damage",
                desc: "Place buckets under leaks and move valuables if possible",
                icon: Shield,
              },
            ].map((item, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto">
                    <item.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our Emergency Response Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Fast, efficient response when you need it most
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { time: "< 1 Hour", title: "Initial Contact", desc: "Call answered immediately, details gathered" },
              { time: "1-2 Hours", title: "Team Dispatch", desc: "Emergency crew mobilized to your location" },
              { time: "2-3 Hours", title: "On-Site Assessment", desc: "Damage assessment and safety check" },
              { time: "3-4 Hours", title: "Emergency Repairs", desc: "Temporary repairs to prevent further damage" },
              { time: "24-48 Hours", title: "Permanent Solution", desc: "Complete repairs scheduled and executed" },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">{item.time}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Why Choose FENTRICK Emergency Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "24/7 Availability",
                desc: "Round-the-clock emergency response team ready to help",
              },
              {
                icon: Zap,
                title: "Rapid Response",
                desc: "Quick mobilization with average 1-2 hour arrival time",
              },
              {
                icon: Shield,
                title: "Experienced Team",
                desc: "Certified professionals trained in emergency procedures",
              },
              {
                icon: CheckCircle,
                title: "Insurance Assistance",
                desc: "Help with documentation and insurance claim process",
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

      {/* Emergency CTA */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8">
            <AlertTriangle className="w-16 h-16 mx-auto animate-pulse" />
            <h2 className="text-4xl font-bold">Need Emergency Roofing Help Right Now?</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Don't wait - every minute counts in a roofing emergency. Our team is standing by 24/7 to help protect
              your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-red-50 border-2 border-white animate-pulse"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Emergency Hotline Now
                </Button>
              </Link>
              <Link href="/get-quote">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                >
                  Request Emergency Service
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <p className="text-red-100 text-sm">
              <Clock className="w-4 h-4 inline mr-2" />
              Average response time: 1-2 hours | Available 24/7/365
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
