import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Award,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Home,
  Building,
  Wrench,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                  Ghana's Premier Roofing Contractor
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Premium Roofing
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                    Solutions
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  At FENTRICK Roofing System, we are dedicated to providing top-quality roofing solutions for
                  residential and commercial properties. Our years of experience have earned us a reputation as Ghana's
                  most reliable roofing contractor.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-quote">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 bg-transparent">
                    View Our Work
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">500+</div>
                  <div className="text-sm text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">15+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-3xl transform rotate-3"></div>
              <Image
                src="/images/hero-roofing.jpg"
                alt="Premium roofing installation"
                width={500}
                height={600}
                className="relative rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Our Services</Badge>
            <h2 className="text-4xl font-bold text-slate-900">Comprehensive Roofing Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From residential homes to commercial buildings, we provide complete roofing services with unmatched
              quality and craftsmanship.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Home,
                title: "Residential Roofing",
                description: "Premium roofing solutions for homes with lifetime warranties and expert installation.",
              },
              {
                icon: Building,
                title: "Commercial Roofing",
                description:
                  "Large-scale commercial projects with industrial-grade materials and professional service.",
              },
              {
                icon: Wrench,
                title: "Roof Repairs",
                description: "Quick and reliable repair services to extend your roof's lifespan and prevent damage.",
              },
              {
                icon: Zap,
                title: "Emergency Services",
                description: "24/7 emergency roofing services for urgent repairs and storm damage restoration.",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">About FENTRICK</Badge>
                <h2 className="text-4xl font-bold text-slate-900">Ghana's Most Trusted Roofing Contractor</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  During our years of experience, we have acquired a reputable genuine hallmark of being a reliable and
                  reputable roofing contractor in Ghana. Our commitment to excellence and customer satisfaction has made
                  us the preferred choice for discerning property owners.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "Licensed & Insured", desc: "Fully certified professionals" },
                  { icon: Award, title: "Award Winning", desc: "Industry recognition" },
                  { icon: Users, title: "Expert Team", desc: "Skilled craftsmen" },
                  { icon: Clock, title: "Timely Delivery", desc: "On-schedule completion" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/team-work.jpg"
                alt="FENTRICK roofing team"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                    <div className="text-sm text-slate-600">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Our Projects</Badge>
            <h2 className="text-4xl font-bold text-slate-900">Recent Completed Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our portfolio of successful roofing projects across Ghana, showcasing our expertise and attention
              to detail.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Residential Villa",
                location: "East Legon, Accra",
                image: "/images/project-1.jpg",
              },
              {
                title: "Commercial Office Complex",
                location: "Airport City, Accra",
                image: "/images/project-2.jpg",
              },
              {
                title: "Residential Estate",
                location: "Tema, Greater Accra",
                image: "/images/project-3.jpg",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.jpg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Why Choose FENTRICK</Badge>
            <h2 className="text-4xl font-bold text-slate-900">The FENTRICK Advantage</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Premium quality materials sourced from trusted suppliers",
              "Experienced and certified roofing professionals",
              "Comprehensive warranty on all installations",
              "Competitive pricing with transparent quotes",
              "24/7 emergency response services",
              "Eco-friendly and sustainable roofing solutions",
            ].map((advantage, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <p className="text-slate-700">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-500/20 text-amber-300 hover:bg-amber-500/20">Get In Touch</Badge>
                <h2 className="text-4xl font-bold">Ready to Start Your Roofing Project?</h2>
                <p className="text-xl text-slate-300">
                  Contact FENTRICK Roofing System today for a free consultation and quote. Let us protect your
                  investment with premium roofing solutions.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-slate-300">+233 XX XXX XXXX</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-slate-300">info@fentrickroofing.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Visit Us</div>
                    <div className="text-slate-300">Accra, Ghana</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-amber-400 text-white placeholder-slate-400"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-amber-400 text-white placeholder-slate-400"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-amber-400 text-white placeholder-slate-400"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-amber-400 text-white placeholder-slate-400"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-amber-400 text-white placeholder-slate-400 resize-none"
                      placeholder="Tell us about your roofing project..."
                    />
                  </div>
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
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
