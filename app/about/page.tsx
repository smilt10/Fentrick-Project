import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Users, Clock, Target, Eye, ArrowRight, Home, Building, Wrench, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-8">
        <div className="w-full">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">About FENTRICK</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
              Ghana's Most Trusted
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Roofing Contractor
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              At FENTRICK Roofing System, we are dedicated to providing top-quality roofing solutions for residential
              and commercial properties. During our years of experience, we have acquired a reputable genuine hallmark
              of being a reliable and reputable roofing contractor in Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* About Us - Exceptional Service */}
      <section className="py-20 bg-slate-50">
        <div className="w-full px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-slate-900">Exceptional Service</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  At FENTRICK roofing system we are dedicated to providing top-quality roofing solutions for residential
                  and commercial properties. During our years of experience, we have acquired a reputable genuine
                  hallmark of being a reliable and reputable roofing contractor in Ghana.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our team consists of skilled professionals committed to delivering exceptional workmanship, using only
                  the finest materials to ensure durability and longevity including Self lock, IBR, Eurotiles, and many
                  more premium roofing solutions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                  <div className="text-sm text-slate-600">Years of Excellence</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-sm text-slate-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=FENTRICK+Team"
                alt="FENTRICK roofing team"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Roofing Services */}
      <section className="py-20">
        <div className="w-full px-8">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-slate-900">Roofing Services</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                We offer a comprehensive range of services including roof installations, replacements, repairs and
                maintenance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  In as much as there are a lot of competitors in the market trust FENTRICK roofing system to handle
                  roofing of your newly built homes, a commercial roof inspection, or emergency repairs. Expect trained
                  expertise to handle any project with precision and efficiency.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Specialized in various roofing systems, such as asphalt shingles, metal roofing, tile roofing, and
                  flat roofs tailoring our solutions to meet your specific needs and preferences.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Home, title: "Residential", desc: "New homes & renovations" },
                  { icon: Building, title: "Commercial", desc: "Office & industrial buildings" },
                  { icon: Wrench, title: "Repairs", desc: "Emergency & maintenance" },
                  { icon: Zap, title: "Inspections", desc: "Professional assessments" },
                ].map((service, index) => (
                  <Card
                    key={index}
                    className="text-center p-6 border-0 bg-white shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="space-y-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-slate-900">{service.title}</h4>
                      <p className="text-sm text-slate-600">{service.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="w-full px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Our Vision */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Our vision is to become Ghana's most trusted and innovative roofing company setting the standard for
                    quality, reliability and customer satisfaction in the roofing industry. We aim to provide durable,
                    affordable and aesthetically pleasing roofing solutions that meet the diverse needs of homeowners,
                    businesses, and institutions across the country.
                  </p>
                  <p>
                    We envision a future where every building in Ghana is protected by a strong, weather-resistant roof
                    designed with precision and care. Through continuous innovation, investment in advanced roofing
                    technologies, and skilled craftsmanship, we seek to deliver roofing systems that stand the test of
                    time—resisting corrosion, fading and leaks even in Ghana's challenging climate.
                  </p>
                  <p>
                    Ultimately, our vision is to transform the roofing experience in Ghana—making it easier, more
                    transparent, and more dependable—so that every client has peace of mind under a roof they can trust.
                    We are building more than roofs; we are building trust, safety, and the future of shelter in Ghana.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Our Mission */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Commitment to customer satisfaction sets us apart. Provision of accurate and transparent
                    communication, detailed project estimates, and timely project completions are well executed. We
                    prioritize safety and adhere to the highest industry standards, our goal as a company is to exceed
                    your expectations by delivering superior results and ensuring a seamless experience from start to
                    finish.
                  </p>
                  <p>
                    Our goal is not only to deliver products but to build lasting relationships with our clients through
                    honesty, professionalism, and unmatched service. We strive to empower local communities by creating
                    jobs, training young artisans, and supporting sustainable building practices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values & Expertise */}
      <section className="py-20">
        <div className="w-full px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our Expertise & Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our team of certified professionals brings decades of combined experience to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Licensed & Insured", desc: "Fully certified and insured professionals" },
              { icon: Award, title: "Award Winning", desc: "Industry recognition and excellence awards" },
              { icon: Users, title: "Expert Team", desc: "Skilled craftsmen with years of experience" },
              { icon: Clock, title: "Timely Delivery", desc: "On-schedule completion guaranteed" },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center p-6 border-0 bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="space-y-4">
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="w-full px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Ready to Work with Ghana's Best?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who have trusted FENTRICK Roofing System with their most important
              investment.
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
