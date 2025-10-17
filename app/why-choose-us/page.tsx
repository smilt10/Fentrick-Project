import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Users, Clock, CheckCircle, Star, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export default function WhyChooseUsPage() {
  const advantages = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully certified professionals with comprehensive insurance coverage for your peace of mind.",
      details: ["Professional Licensing", "Full Insurance Coverage", "Bonded Contractors", "Safety Compliance"],
    },
    {
      icon: Award,
      title: "Award Winning Excellence",
      description: "Industry recognition and excellence awards for outstanding quality and customer service.",
      details: ["Industry Awards", "Customer Choice Awards", "Quality Certifications", "Excellence Recognition"],
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled craftsmen with years of experience and ongoing professional development.",
      details: ["Certified Professionals", "Ongoing Training", "Years of Experience", "Skilled Craftsmen"],
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "On-schedule completion guaranteed with efficient project management and planning.",
      details: ["Project Management", "Timeline Adherence", "Efficient Planning", "Deadline Commitment"],
    },
    {
      icon: Star,
      title: "Premium Materials",
      description: "Only the highest quality materials sourced from trusted suppliers worldwide.",
      details: ["Quality Materials", "Trusted Suppliers", "Durability Tested", "Warranty Backed"],
    },
    {
      icon: Zap,
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency response for urgent repairs and storm damage.",
      details: ["24/7 Availability", "Emergency Response", "Storm Damage", "Urgent Repairs"],
    },
  ]

  const guarantees = [
    "100% Customer Satisfaction Guarantee",
    "Comprehensive Warranty on All Work",
    "Free Initial Consultation and Assessment",
    "Transparent Pricing with No Hidden Costs",
    "Local Expertise with International Standards",
    "Eco-Friendly and Sustainable Solutions",
    "Full Project Insurance Coverage",
    "Post-Installation Support and Maintenance",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Why Choose FENTRICK</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
              The FENTRICK
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Advantage
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Discover why hundreds of customers across Ghana trust FENTRICK Roofing System for their most important
              roofing projects. Our commitment to excellence sets us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="group border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-900">{advantage.title}</h3>
                    <p className="text-slate-600">{advantage.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {advantage.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Proven Track Record</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our numbers speak for themselves. Here's what we've achieved over the years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-slate-600">Projects Completed</div>
              <div className="text-sm text-slate-500 mt-2">Across all sectors</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-slate-600">Years Experience</div>
              <div className="text-sm text-slate-500 mt-2">In the industry</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-slate-600">Satisfaction Rate</div>
              <div className="text-sm text-slate-500 mt-2">Customer approved</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-slate-600">Emergency Service</div>
              <div className="text-sm text-slate-500 mt-2">Always available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our Guarantees</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We stand behind our work with comprehensive guarantees and warranties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-start space-x-3 p-6 bg-white rounded-lg shadow-md">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-medium">{guarantee}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">FENTRICK vs Others</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how we compare to other roofing contractors in Ghana.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                  <div className="p-8 text-center">
                    <h3 className="text-lg font-semibold text-slate-600 mb-4">Features</h3>
                  </div>
                  <div className="p-8 text-center bg-red-50">
                    <h3 className="text-lg font-semibold text-red-600 mb-4">FENTRICK</h3>
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-lg font-semibold text-slate-600 mb-4">Others</h3>
                  </div>
                </div>

                {[
                  { feature: "Licensed & Insured", fentrick: "✓", others: "Sometimes" },
                  { feature: "24/7 Emergency Service", fentrick: "✓", others: "Limited" },
                  { feature: "Comprehensive Warranty", fentrick: "✓", others: "Basic" },
                  { feature: "Premium Materials", fentrick: "✓", others: "Standard" },
                  { feature: "Certified Professionals", fentrick: "✓", others: "Varies" },
                  { feature: "Transparent Pricing", fentrick: "✓", others: "Hidden Costs" },
                ].map((row, index) => (
                  <div
                    key={index}
                    className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-t border-slate-200"
                  >
                    <div className="p-4 text-center font-medium text-slate-700">{row.feature}</div>
                    <div className="p-4 text-center bg-red-50">
                      <span className="text-green-600 font-bold text-xl">{row.fentrick}</span>
                    </div>
                    <div className="p-4 text-center text-slate-500">{row.others}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Experience the FENTRICK Difference</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who chose FENTRICK for their roofing needs. Discover why we're
              Ghana's most trusted roofing contractor.
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
