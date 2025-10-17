import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Luxury Residential Villa",
      location: "East Legon, Accra",
      category: "Residential",
      year: "2024",
      description: "Complete roof replacement for a luxury villa featuring premium materials and modern design.",
      image: "/placeholder.svg?height=400&width=600&text=Luxury+Villa+East+Legon",
      features: ["Premium Clay Tiles", "Advanced Waterproofing", "Solar Panel Integration", "10-Year Warranty"],
    },
    {
      title: "Commercial Office Complex",
      location: "Airport City, Accra",
      category: "Commercial",
      year: "2024",
      description: "Large-scale commercial roofing project for a modern office complex with sustainable features.",
      image: "/placeholder.svg?height=400&width=600&text=Office+Complex+Airport+City",
      features: ["Metal Roofing System", "Energy Efficient Design", "Drainage Solutions", "Maintenance Program"],
    },
    {
      title: "Residential Estate Development",
      location: "Tema, Greater Accra",
      category: "Residential",
      year: "2023",
      description: "Complete roofing solution for a 50-unit residential estate with uniform design standards.",
      image: "/placeholder.svg?height=400&width=600&text=Estate+Development+Tema",
      features: ["Uniform Design", "Bulk Installation", "Quality Control", "Extended Warranty"],
    },
    {
      title: "Industrial Warehouse",
      location: "Kumasi, Ashanti Region",
      category: "Industrial",
      year: "2023",
      description: "Heavy-duty industrial roofing for a large warehouse facility with specialized requirements.",
      image: "/placeholder.svg?height=400&width=600&text=Industrial+Warehouse+Kumasi",
      features: ["Heavy-Duty Materials", "Large Span Coverage", "Ventilation Systems", "Fire Resistance"],
    },
    {
      title: "Educational Institution",
      location: "Cape Coast, Central Region",
      category: "Institutional",
      year: "2023",
      description: "Comprehensive roofing renovation for a prestigious educational institution.",
      image: "/placeholder.svg?height=400&width=600&text=School+Cape+Coast",
      features: ["Heritage Preservation", "Modern Materials", "Safety Standards", "Phased Installation"],
    },
    {
      title: "Shopping Mall Complex",
      location: "Takoradi, Western Region",
      category: "Commercial",
      year: "2022",
      description: "Complex roofing system for a major shopping mall with multiple levels and requirements.",
      image: "/placeholder.svg?height=400&width=600&text=Shopping+Mall+Takoradi",
      features: ["Multi-Level Design", "Skylight Integration", "Weather Resistance", "Maintenance Access"],
    },
  ]

  const categories = ["All", "Residential", "Commercial", "Industrial", "Institutional"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Our Projects</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
              Completed
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Projects
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Explore our portfolio of successful roofing projects across Ghana. Each project showcases our commitment
              to quality, innovation, and customer satisfaction.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">10</div>
              <div className="text-slate-600">Regions Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-slate-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                    : "border-slate-300 hover:bg-slate-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white hover:bg-red-500">{project.category}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                    <div className="flex items-center text-slate-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-slate-600 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.year}
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">{project.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-slate-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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
            <h2 className="text-4xl font-bold text-slate-900">Our Project Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every project follows our proven methodology to ensure exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Site Assessment", desc: "Comprehensive evaluation and planning" },
              { step: "02", title: "Design & Quote", desc: "Custom design and transparent pricing" },
              { step: "03", title: "Material Sourcing", desc: "Premium materials procurement" },
              { step: "04", title: "Installation", desc: "Expert installation by certified team" },
              { step: "05", title: "Quality Check", desc: "Final inspection and warranty" },
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join our portfolio of successful projects. Let's discuss how we can bring your roofing vision to life.
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
